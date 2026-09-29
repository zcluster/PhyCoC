#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const moduleDir = path.dirname(fileURLToPath(import.meta.url));

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/<[^>]+>/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "") || "section";
}

function splitTableRow(line) {
  return line.trim().replace(/^\||\|$/g, "").split(/(?<!\\)\|/).map((cell) => cell.trim());
}

function renderInline(source = "") {
  const tokens = [];
  const stash = (html) => {
    const key = `\uE000${tokens.length}\uE001`;
    tokens.push(html);
    return key;
  };

  let value = source
    .replace(/`([^`\n]+)`/g, (_, code) => stash(`<code>${escapeHtml(code)}</code>`))
    .replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => stash(`\\(${escapeHtml(math)}\\)`))
    .replace(/(?<!\$)\$([^$\n]+)\$(?!\$)/g, (_, math) => stash(`\\(${escapeHtml(math)}\\)`));

  value = escapeHtml(value);
  value = value.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const decoded = href.replaceAll("&amp;", "&").trim();
    const safeHref = /^(?:https?:\/\/|\.\.?\/|#)/i.test(decoded) ? decoded : "#";
    const external = /^https?:\/\//i.test(safeHref) ? ' target="_blank" rel="noopener noreferrer"' : "";
    return `<a href="${escapeHtml(safeHref)}"${external}>${label}</a>`;
  });
  value = value
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/__([^_]+)__/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, "<em>$1</em>");

  tokens.forEach((html, index) => {
    value = value.replace(`\uE000${index}\uE001`, html);
  });
  return value;
}

function renderMarkdown(markdown) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const html = [];
  const toc = [];
  const usedIds = new Map();
  const headingId = (label) => {
    const base = slugify(label);
    const count = usedIds.get(base) || 0;
    usedIds.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  };
  const isSpecial = (line, next = "") =>
    !line.trim() || /^#{1,6}\s/.test(line) || /^```/.test(line.trim()) || line.trim() === "$$" ||
    /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line) || /^>\s?/.test(line) || /^---+$/.test(line.trim()) ||
    (line.trim().startsWith("|") && /^\|?\s*:?-+/.test(next.trim()));

  for (let index = 0; index < lines.length;) {
    const line = lines[index];
    const trimmed = line.trim();
    if (!trimmed) { index += 1; continue; }

    if (trimmed === "$$") {
      const math = [];
      index += 1;
      while (index < lines.length && lines[index].trim() !== "$$") math.push(lines[index++]);
      if (index < lines.length) index += 1;
      html.push(`<div class="math-display">\\[${escapeHtml(math.join("\n"))}\\]</div>`);
      continue;
    }

    if (/^```/.test(trimmed)) {
      const language = trimmed.slice(3).trim();
      const code = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) code.push(lines[index++]);
      if (index < lines.length) index += 1;
      html.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ""}>${escapeHtml(code.join("\n"))}</code></pre>`);
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const level = heading[1].length;
      const label = heading[2].replace(/`/g, "");
      const id = headingId(label);
      if (level >= 2) toc.push({ level, label: renderInline(label), id });
      html.push(`<h${level} id="${id}">${renderInline(heading[2])}<a class="anchor" href="#${id}" aria-label="Link to this section">#</a></h${level}>`);
      index += 1;
      continue;
    }

    if (trimmed.startsWith("|") && /^\|?\s*:?-+/.test((lines[index + 1] || "").trim())) {
      const headers = splitTableRow(line);
      index += 2;
      const rows = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) rows.push(splitTableRow(lines[index++]));
      html.push(`<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${renderInline(cell)}</th>`).join("")}</tr></thead><tbody>${rows.map((row) => `<tr>${row.map((cell) => `<td>${renderInline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }

    const unordered = line.match(/^[-*]\s+(.+)$/);
    const ordered = line.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const tag = ordered ? "ol" : "ul";
      const items = [];
      const pattern = ordered ? /^\d+\.\s+(.+)$/ : /^[-*]\s+(.+)$/;
      while (index < lines.length) {
        const match = lines[index].match(pattern);
        if (!match) break;
        items.push(`<li>${renderInline(match[1])}</li>`);
        index += 1;
      }
      html.push(`<${tag}>${items.join("")}</${tag}>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      const quote = [];
      while (index < lines.length && /^>\s?/.test(lines[index])) quote.push(lines[index++].replace(/^>\s?/, ""));
      html.push(`<blockquote>${renderInline(quote.join(" "))}</blockquote>`);
      continue;
    }

    if (/^---+$/.test(trimmed)) {
      html.push("<hr>");
      index += 1;
      continue;
    }

    const paragraph = [trimmed];
    index += 1;
    while (index < lines.length && !isSpecial(lines[index], lines[index + 1] || "")) paragraph.push(lines[index++].trim());
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
  }

  return { body: html.join("\n"), toc };
}

function pageTemplate({ title, sourceFile, body, toc }) {
  const tocHtml = toc.map((item) => `<a class="toc-l${item.level}" href="#${item.id}">${item.label}</a>`).join("\n");
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light dark">
<title>${escapeHtml(title)} · PhyCoC</title>
<script>window.MathJax={tex:{inlineMath:[["\\\\(","\\\\)"],["$","$"]],displayMath:[["\\\\[","\\\\]"],["$$","$$"]],processEscapes:true},svg:{fontCache:"global"},options:{skipHtmlTags:["script","noscript","style","textarea","pre","code"]}};</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>
:root{color-scheme:light;--bg:#f5f7fb;--paper:#fff;--text:#202938;--muted:#657286;--line:#dce2ea;--accent:#4f46a5;--soft:#f0efff;--code:#f4f6f8;--shadow:0 18px 55px rgba(31,41,55,.09)}
@media(prefers-color-scheme:dark){:root{color-scheme:dark;--bg:#10141b;--paper:#191f29;--text:#e9edf5;--muted:#aab4c3;--line:#354050;--accent:#b4a4ff;--soft:#2a2744;--code:#111720;--shadow:0 18px 55px rgba(0,0,0,.35)}}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--text);font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.72}.top{position:sticky;top:0;z-index:5;background:color-mix(in srgb,var(--paper),transparent 7%);border-bottom:1px solid var(--line);backdrop-filter:blur(14px)}.top-inner{max-width:1280px;margin:auto;padding:11px 22px;display:flex;align-items:center;gap:12px}.top a,.top button{border:1px solid var(--line);border-radius:9px;background:var(--paper);color:var(--text);text-decoration:none;padding:7px 10px;font:inherit;font-size:13px;cursor:pointer}.top .source{margin-left:auto;color:var(--accent)}.layout{max-width:1280px;margin:0 auto;display:grid;grid-template-columns:250px minmax(0,820px);gap:42px;padding:34px 22px 80px;justify-content:center}.toc{position:sticky;top:72px;align-self:start;max-height:calc(100vh - 90px);overflow:auto;border-right:1px solid var(--line);padding-right:22px}.toc-title{font-size:12px;text-transform:uppercase;letter-spacing:.09em;color:var(--muted);margin:0 0 10px}.toc a{display:block;color:var(--muted);text-decoration:none;font-size:13px;line-height:1.35;padding:5px 8px;border-radius:7px}.toc a:hover{color:var(--accent);background:var(--soft)}.toc-l3{padding-left:20px!important}.toc-l4{padding-left:32px!important}.toc-l5{padding-left:44px!important}.toc-l6{padding-left:56px!important}.paper{background:var(--paper);border:1px solid var(--line);border-radius:18px;box-shadow:var(--shadow);padding:clamp(24px,5vw,62px);min-width:0}.paper h1{font-size:clamp(29px,5vw,46px);line-height:1.12;letter-spacing:-.035em;margin:0 0 34px}.paper h2{font-size:27px;line-height:1.25;margin:54px 0 19px;padding-top:8px;border-top:1px solid var(--line)}.paper h3{font-size:20px;line-height:1.35;margin:35px 0 12px}.paper h4{font-size:16px;margin:27px 0 9px}.paper h5{font-size:15px;margin:24px 0 8px}.paper h6{font-size:14px;margin:21px 0 7px}.anchor{opacity:0;margin-left:8px;color:var(--muted);font-weight:400;text-decoration:none}.paper h2:hover .anchor,.paper h3:hover .anchor,.paper h4:hover .anchor,.paper h5:hover .anchor,.paper h6:hover .anchor{opacity:1}.paper p{margin:13px 0}.paper a{color:var(--accent);text-underline-offset:2px}.paper ul,.paper ol{padding-left:25px}.paper li{margin:6px 0}.paper code{font-family:"SFMono-Regular",Consolas,monospace;font-size:.9em;background:var(--code);border:1px solid var(--line);border-radius:5px;padding:1px 5px}.paper pre{background:var(--code);border:1px solid var(--line);border-radius:11px;padding:16px;overflow:auto;line-height:1.5}.paper pre code{border:0;padding:0}.table-wrap{overflow:auto;margin:22px 0;border:1px solid var(--line);border-radius:11px}table{border-collapse:collapse;width:100%;font-size:14px}th,td{text-align:left;vertical-align:top;padding:10px 12px;border-bottom:1px solid var(--line);border-right:1px solid var(--line)}th{background:var(--soft);font-weight:650}tr:last-child td{border-bottom:0}th:last-child,td:last-child{border-right:0}.math-display{overflow-x:auto;overflow-y:hidden;margin:24px 0;padding:13px 8px;text-align:center}.MathJax{outline:0}blockquote{margin:20px 0;padding:4px 18px;border-left:4px solid var(--accent);background:var(--soft);color:var(--muted)}hr{border:0;border-top:1px solid var(--line);margin:34px 0}.footer{color:var(--muted);font-size:12px;margin-top:48px;padding-top:18px;border-top:1px solid var(--line)}.skip{position:absolute;left:-9999px}.skip:focus{left:10px;top:10px;z-index:20;background:var(--paper);padding:8px}
@media(max-width:900px){.layout{display:block;padding-top:20px}.toc{position:static;max-height:none;border:1px solid var(--line);border-radius:12px;padding:14px;margin-bottom:18px;columns:2}.toc-title{column-span:all}.paper{padding:26px 20px}.paper h2{font-size:23px}.top-inner{padding:9px 12px}}@media(max-width:560px){.toc{columns:1}.top .source{font-size:0}.top .source:after{content:"Markdown";font-size:13px}.paper{border-radius:12px}.layout{padding-left:10px;padding-right:10px}}
@media print{.top,.toc{display:none}.layout{display:block;padding:0}.paper{border:0;box-shadow:none;padding:0}.anchor{display:none}}
</style>
</head>
<body>
<a class="skip" href="#article">Skip to article</a>
<header class="top"><div class="top-inner"><a href="../index.html">← Knowledge graph</a><button type="button" onclick="window.print()">Print / PDF</button><a class="source" href="../fundamental_physics_discoveries/${encodeURI(sourceFile)}">Open source Markdown ↗</a></div></header>
<main class="layout"><nav class="toc" aria-label="Table of contents"><div class="toc-title">On this page</div>${tocHtml}</nav><article class="paper" id="article">${body}<footer class="footer">Reader-friendly rendering of <code>${escapeHtml(sourceFile)}</code>. The Markdown source remains the canonical corpus record.</footer></article></main>
</body>
</html>`;
}

export function buildCasePages({ historyDir = moduleDir, corpusDir = path.join(moduleDir, "fundamental_physics_discoveries"), files } = {}) {
  const sourceFiles = files || fs
    .readdirSync(corpusDir)
    .filter((name) => /^\d{2}_.+\.md$/.test(name))
    .filter((name) => !name.endsWith("_trial.md"))
    .sort();
  const outputDir = path.join(historyDir, "case_pages");
  fs.mkdirSync(outputDir, { recursive: true });
  const expected = new Set();
  for (const file of sourceFiles) {
    const markdown = fs.readFileSync(path.join(corpusDir, file), "utf8");
    const rendered = renderMarkdown(markdown);
    const title = markdown.match(/^#\s+(.+)$/m)?.[1]?.replace(/[*`]/g, "") || file;
    const htmlName = file.replace(/\.md$/, ".html");
    expected.add(htmlName);
    fs.writeFileSync(path.join(outputDir, htmlName), pageTemplate({ title, sourceFile: file, ...rendered }));
  }
  for (const existing of fs.readdirSync(outputDir)) {
    if (
      existing.endsWith(".html") &&
      !existing.endsWith("_trial.html") &&
      !expected.has(existing)
    ) {
      fs.unlinkSync(path.join(outputDir, existing));
    }
  }
  return { outputDir, count: sourceFiles.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = buildCasePages();
  console.log(`Wrote ${result.count} reader HTML pages to ${result.outputDir}`);
}
