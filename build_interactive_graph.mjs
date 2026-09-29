#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chronology } from "./fundamental_physics_discoveries/chronology_data.mjs";
import { buildCasePages } from "./build_case_pages.mjs";

const historyDir = path.dirname(fileURLToPath(import.meta.url));
const corpusDir = path.join(historyDir, "fundamental_physics_discoveries");
const outputPath = path.join(historyDir, "index.html");
const mainlineFiles = new Set([
  "06_fermat_principle.md",
  "07_newtonian_mechanics.md",
  "08_lagrangian_mechanics.md",
  "10_hamiltonian_mechanics.md",
  "11_thermodynamics_and_energy_conservation.md",
  "12_second_law_of_thermodynamics.md",
  "15_classical_statistical_mechanics.md",
  "13_maxwell_electromagnetic_field_theory.md",
  "17_special_relativity.md",
  "19_general_relativity.md",
  "24_quantum_mechanics.md",
  "22_quantum_statistics.md",
  "30_quantum_electrodynamics.md",
  "38_electroweak_theory.md",
  "37_quantum_chromodynamics.md",
  "40_standard_model.md",
  "23_quantum_field_theory.md",
  "31_yang_mills_gauge_theory.md",
]);
const categoryOverrides = new Map([
  ["06_fermat_principle.md", "Quantum & radiation"],
  ["08_lagrangian_mechanics.md", "Mechanics & astronomy"],
  ["10_hamiltonian_mechanics.md", "Mechanics & astronomy"],
]);
const files = fs
  .readdirSync(corpusDir)
  .filter((name) => /^\d{2}_.+\.md$/.test(name))
  .filter((name) => !name.endsWith("_trial.md"))
  .sort((left, right) => chronology[left].discovery[1] - chronology[right].discovery[1]);

buildCasePages({ historyDir, corpusDir, files });

function stripMarkdown(value = "") {
  return value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\\\((.*?)\\\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function metadata(text) {
  const result = {};
  for (const match of text.matchAll(/^\| ([^|]+?) \| (.+?) \|$/gm)) {
    const key = match[1].trim();
    if (["Field", "---"].includes(key)) continue;
    result[key] = stripMarkdown(match[2]);
  }
  return result;
}

function section(text, headingNames) {
  for (const heading of headingNames) {
    const marker = `## ${heading}`;
    const start = text.indexOf(marker);
    if (start < 0) continue;
    const contentStart = start + marker.length;
    const next = text.indexOf("\n## ", contentStart);
    return text.slice(contentStart, next < 0 ? text.length : next).trim();
  }
  return "";
}

function firstParagraph(sectionText) {
  return stripMarkdown(
    sectionText
      .split(/\n\s*\n/)
      .find((part) => part.trim() && !part.trim().startsWith("|") && !part.trim().startsWith("```")) || "",
  );
}

function parseTable(sectionText) {
  const rows = sectionText
    .split("\n")
    .filter((line) => line.startsWith("|"))
    .filter((line) => !/^\|[-:| ]+\|$/.test(line))
    .map((line) => line.slice(1, -1).split("|").map((cell) => stripMarkdown(cell)));
  return rows.length > 1 ? rows.slice(1) : [];
}

function parsePathways(text) {
  const lines = text.split("\n");
  const output = [];
  for (let index = 0; index < lines.length; index += 1) {
    const match = lines[index].match(/^### `((?:R|T)-[^`]+)`(?:\s+—\s+(.+))?$/);
    if (!match) continue;
    const end = lines.findIndex(
      (line, later) => later > index && (line.startsWith("### ") || line.startsWith("## ")),
    );
    const block = lines.slice(index + 1, end < 0 ? lines.length : end);
    const field = (name) =>
      stripMarkdown(
        block.find((line) => line.startsWith(`- **${name}:**`))?.replace(`- **${name}:**`, "") || "",
      );
    output.push({
      id: match[1],
      label: stripMarkdown(match[2] || match[1].replace(/^(R|T)-/, "").replaceAll("-", " ")),
      what: field("What it is"),
      period: field("Proposed/active period"),
      limitation: field("Limitation") || field("Anomalies and limitations") || field("Anomaly or limitation"),
      outcome: field("Outcome") || field("Ultimate outcome"),
    });
  }
  return output;
}

function parseAssets(text) {
  const body = section(text, ["Knowledge assets", "Knowledge assets available to Newton"]);
  const assets = new Map();
  for (const line of body.split("\n")) {
    if (!line.startsWith("- ")) continue;
    for (const match of line.matchAll(/`([^`]+)`/g)) {
      const id = match[1];
      if (!/^[A-Z][A-Z0-9-]+$/.test(id)) continue;
      const after = stripMarkdown(line.replace(/^-\s*/, "").replace(/`[^`]+`/, ""));
      assets.set(id, {
        id,
        label: after.replace(/^[:—\s]+/, "").split(/[.;]/)[0].trim() || id.replaceAll("-", " "),
        detail: after.replace(/^[:—\s]+/, ""),
      });
    }
  }
  return [...assets.values()];
}

function parsePatterns(text) {
  let body = section(text, ["Discovery patterns", "Transferable discovery patterns"]);
  if (!body) {
    const processBody = section(text, [
      "Discovery-process reconstruction: interpolation, transformation, and extrapolation",
    ]);
    const marker = "### Discovery-pattern synthesis";
    const start = processBody.indexOf(marker);
    if (start >= 0) {
      const contentStart = start + marker.length;
      const next = processBody.indexOf("\n### ", contentStart);
      body = processBody.slice(contentStart, next < 0 ? processBody.length : next).trim();
    }
  }
  const output = [];
  for (const row of parseTable(body)) {
    const id = row[0]?.match(/P-\d{2}/)?.[0];
    if (id) output.push({ id, detail: row[3] || row[2] || row.slice(1).join(" — ") });
  }
  return output;
}

function parseEdges(text) {
  const body = section(text, ["Edge list", "Explicit edge list"]);
  const block = body.match(/```text\s*([\s\S]*?)```/)?.[1] || "";
  const output = [];
  for (const line of block.split("\n")) {
    const match = line.trim().match(/^(.+?)\s+--([^-][^>]*?)-->\s+(.+)$/);
    if (!match) continue;
    output.push({
      source: match[1].trim(),
      relation: match[2].trim(),
      target: match[3].trim(),
    });
  }
  return output;
}

function categoryFor(title, domain) {
  const value = `${title} ${domain}`.toLowerCase();
  if (/cosmo|universe|inflation|gravit|relativ|spacetime/.test(value)) return "Cosmos & spacetime";
  if (/thermo|statistical|phase|superconduct|matter|fluid|atomistic|buoy|pressure/.test(value)) {
    return "Matter & emergence";
  }
  if (/nuclear|radioactiv|fission|quark|higgs|neutrino|standard model|parity/.test(value)) {
    return "Nuclear & particles";
  }
  if (/quantum|wave|electron|x-ray|light|photon|entang|de broglie/.test(value)) {
    return "Quantum & radiation";
  }
  if (/electro|field|gauge|yang|noether|symmetr/.test(value)) return "Fields & symmetry";
  return "Mechanics & astronomy";
}

function eraFor(year) {
  if (year < 1500) return "Ancient to medieval";
  if (year < 1800) return "Scientific revolution";
  if (year < 1900) return "Nineteenth century";
  if (year < 1945) return "Quantum revolution";
  if (year < 1980) return "Postwar synthesis";
  return "Contemporary physics";
}

function tokensFor(caseItem) {
  const stop = new Set([
    "and", "the", "of", "in", "theory", "physics", "quantum", "historical", "mechanics",
    "field", "discovery", "with", "from", "for", "through", "principles",
  ]);
  return new Set(
    `${caseItem.title} ${caseItem.domain}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .split(" ")
      .filter((token) => token.length > 3 && !stop.has(token)),
  );
}

const cases = files.map((file, index) => {
  const text = fs.readFileSync(path.join(corpusDir, file), "utf8");
  const meta = metadata(text);
  const title = stripMarkdown(
    text.match(/^# (.+?)(?:: (?:A )?Historical Knowledge(?:-| )Graph(?: Case Study)?)?$/m)?.[1] ||
      file.replace(/^\d+_|\.[^.]+$/g, "").replaceAll("_", " "),
  );
  const timeBody = section(text, ["Time slices", "Historical time slices"]);
  const timeRows = parseTable(timeBody);
  const timeSlices = timeRows.map((row, rowIndex) => ({
    id: row[0] || `${meta["Central node"]}-TS-${rowIndex + 1}`,
    period: row[1] || "",
    label: row[2] || `Time slice ${rowIndex + 1}`,
    detail: row.slice(2).join(" — "),
  }));
  const sourceBody = section(text, ["Sources", "Primary and authoritative web sources"]);
  const sourceCount = [...sourceBody.matchAll(/\]\((https?:\/\/[^)]+)\)/g)].length;
  const year = chronology[file].discovery[1];
  const centralNode =
    text.match(/\| Central node \| `([^`]+)`/)?.[1] ||
    `CASE-${String(index + 1).padStart(2, "0")}`;
  const centralClaim = firstParagraph(
    section(text, ["Central claim", "Central thesis and interpretation rule"]),
  );
  const category =
    categoryOverrides.get(file) || categoryFor(title, meta.Domain || meta["Primary domain"] || "");
  return {
    file: `fundamental_physics_discoveries/${file}`,
    htmlFile: `case_pages/${file.replace(/\.md$/, ".html")}`,
    id: centralNode,
    title,
    date: meta["Focal discovery date"] || chronology[file].discovery[0],
    year,
    era: eraFor(year),
    category,
    domain: meta.Domain || meta["Primary domain"] || "",
    contributors: meta["Main contributors"] || "",
    status: meta["Epistemic status"] || "",
    mainline: mainlineFiles.has(file),
    claim: centralClaim,
    pathways: parsePathways(text),
    assets: parseAssets(text),
    timeSlices,
    patterns: parsePatterns(text),
    explicitEdges: parseEdges(text),
    sourceCount,
    wordCount: text.trim().split(/\s+/).length,
  };
});

// High-value scientific dependencies are curated rather than entrusted to the
// title/domain similarity heuristic. This preserves conceptually necessary
// cross-domain links whose vocabulary differs strongly between case titles.
const curatedOverviewEdges = [
  { source: "D-FERMAT-PRINCIPLE-1662", target: "D-LAGRANGIAN-MECHANICS-1788", relation: "anticipates-stationary-action-form" },
  { source: "T-NEWTON-1687", target: "D-LAGRANGIAN-MECHANICS-1788", relation: "is-reformulated-by" },
  { source: "D-LAGRANGIAN-MECHANICS-1788", target: "D-HAMILTONIAN-MECHANICS-1834", relation: "is-transformed-into" },
  { source: "D-HAMILTONIAN-MECHANICS-1834", target: "D-CLASSICAL-STATISTICAL-MECHANICS-1859-1902", relation: "provides-phase-space-for" },
  { source: "D-HAMILTONIAN-MECHANICS-1834", target: "D-QUANTUM-MECHANICS-1925-1927", relation: "provides-formal-structure-for" },
  { source: "D-FIRST-LAW-1847-1850", target: "D-SECOND-LAW-1850-1865", relation: "constrains-energy-accounting-in" },
  { source: "D-FIRST-LAW-1847-1850", target: "D-CLASSICAL-STATISTICAL-MECHANICS-1859-1902", relation: "supplies-energy-constraint-for" },
  { source: "D-SECOND-LAW-1850-1865", target: "D-CLASSICAL-STATISTICAL-MECHANICS-1859-1902", relation: "is-microscopically-grounded-by" },
  { source: "D-MAXWELL-FIELD-1861-1865", target: "D-SPECIAL-RELATIVITY-1905", relation: "creates-covariance-problem-resolved-by" },
  { source: "D-MAXWELL-FIELD-1861-1865", target: "D-QED-1940S", relation: "is-quantized-in" },
  { source: "D-SPECIAL-RELATIVITY-1905", target: "D-GENERAL-RELATIVITY-1915", relation: "is-locally-embedded-in" },
  {
    source: "D-SPECIAL-RELATIVITY-1905",
    target: "D-QFT-FIELD-QUANTIZATION-1927",
    relation: "provides-spacetime-symmetry-for",
  },
  { source: "D-CLASSICAL-STATISTICAL-MECHANICS-1859-1902", target: "D-QUANTUM-STATISTICS-1924-1926", relation: "is-generalized-by" },
  { source: "D-QUANTUM-STATISTICS-1924-1926", target: "D-QUANTUM-MECHANICS-1925-1927", relation: "constrains-identical-particle-sectors-of" },
  { source: "D-QUANTUM-STATISTICS-1924-1926", target: "D-QFT-FIELD-QUANTIZATION-1927", relation: "supplies-occupation-number-rules-for" },
  { source: "D-QUANTUM-MECHANICS-1925-1927", target: "D-QFT-FIELD-QUANTIZATION-1927", relation: "is-extended-to-quantized-fields-by" },
  { source: "D-QFT-FIELD-QUANTIZATION-1927", target: "D-QED-1940S", relation: "is-specialized-as-electromagnetism-in" },
  { source: "D-QFT-FIELD-QUANTIZATION-1927", target: "D-YANG-MILLS-1954", relation: "hosts-nonabelian-gauge-fields-in" },
  { source: "D-QED-1940S", target: "D-ELECTROWEAK-1961-1973", relation: "is-embedded-in" },
  { source: "D-YANG-MILLS-1954", target: "D-ELECTROWEAK-1961-1973", relation: "provides-nonabelian-gauge-structure-for" },
  { source: "D-YANG-MILLS-1954", target: "D-QCD-1973", relation: "provides-nonabelian-gauge-structure-for" },
  { source: "D-ELECTROWEAK-1961-1973", target: "D-STANDARD-MODEL-1970S", relation: "constitutes-electroweak-sector-of" },
  { source: "D-QCD-1973", target: "D-STANDARD-MODEL-1970S", relation: "constitutes-strong-sector-of" },
];

const pairKey = (left, right) => [left, right].sort().join("|");
const curatedPairs = new Set(curatedOverviewEdges.map((edge) => pairKey(edge.source, edge.target)));
const overviewEdges = [];
for (let index = 1; index < cases.length; index += 1) {
  const source = cases[index - 1].id;
  const target = cases[index].id;
  if (curatedPairs.has(pairKey(source, target))) continue;
  overviewEdges.push({ source, target, relation: "chronologically-precedes", kind: "chronology" });
}

const tokenSets = cases.map(tokensFor);
const linkedPairs = new Set();
for (const edge of curatedOverviewEdges) {
  const sourceIndex = cases.findIndex((item) => item.id === edge.source);
  const targetIndex = cases.findIndex((item) => item.id === edge.target);
  if (sourceIndex < 0 || targetIndex < 0) {
    throw new Error(`Curated overview edge references an unknown case: ${edge.source} -> ${edge.target}`);
  }
  const a = Math.min(sourceIndex, targetIndex);
  const b = Math.max(sourceIndex, targetIndex);
  linkedPairs.add(`${a}:${b}`);
  overviewEdges.push({ ...edge, kind: "backbone" });
}

for (let left = 0; left < cases.length; left += 1) {
  const candidates = [];
  for (let right = 0; right < cases.length; right += 1) {
    if (left === right) continue;
    const shared = [...tokenSets[left]].filter((token) => tokenSets[right].has(token));
    const sameCategory = cases[left].category === cases[right].category;
    const yearGap = Math.abs(cases[left].year - cases[right].year);
    const score = shared.length * 3 + (sameCategory ? 1.5 : 0) - Math.min(yearGap / 120, 2);
    if (score > 1.25) candidates.push({ right, score, shared });
  }
  candidates.sort((a, b) => b.score - a.score);
  for (const candidate of candidates.slice(0, 2)) {
    const a = Math.min(left, candidate.right);
    const b = Math.max(left, candidate.right);
    const key = `${a}:${b}`;
    if (linkedPairs.has(key)) continue;
    if (cases[a].mainline && cases[b].mainline) continue;
    linkedPairs.add(key);
    overviewEdges.push({
      source: cases[a].id,
      target: cases[b].id,
      relation: candidate.shared.slice(0, 2).join(" + ") || "thematically-related",
      kind: "theme",
    });
  }
}

const graphData = {
  generatedAt: new Date().toISOString(),
  cases,
  overviewEdges,
  stats: {
    cases: cases.length,
    pathways: cases.reduce((sum, item) => sum + item.pathways.length, 0),
    assets: cases.reduce((sum, item) => sum + item.assets.length, 0),
    timeSlices: cases.reduce((sum, item) => sum + item.timeSlices.length, 0),
    explicitEdges: cases.reduce((sum, item) => sum + item.explicitEdges.length, 0),
    sources: cases.reduce((sum, item) => sum + item.sourceCount, 0),
  },
};

const safeData = JSON.stringify(graphData).replaceAll("</script", "<\\/script");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PhyCoC · Fundamental Physics Discovery Graph</title>
<style>
:root {
  color-scheme: light;
  --bg: #f8fafc;
  --panel: rgba(255,255,255,.92);
  --panel-solid: #ffffff;
  --text: #18212f;
  --muted: #64748b;
  --border: #d9e0e8;
  --line: #aab5c2;
  --grid: #d8dee8;
  --accent: #5b3fbb;
  --accent-soft: #eeeaff;
  --shadow: 0 12px 36px rgba(31, 41, 55, .12);
  --mechanics: #df7a20;
  --fields: #118a75;
  --quantum: #386acb;
  --matter: #9b4bb4;
  --particle: #d4475a;
  --cosmos: #1689a4;
  --pathway: #e26b42;
  --asset: #178b68;
  --timeslice: #7c55c5;
  --concept: #5e6b7a;
  --pattern: #e0a01d;
  --mainline-outline: #111827;
}
@media (prefers-color-scheme: dark) {
  :root {
    color-scheme: dark;
    --bg: #11151c;
    --panel: rgba(24,30,40,.94);
    --panel-solid: #181e28;
    --text: #e8edf5;
    --muted: #a2adbd;
    --border: #36404e;
    --line: #596576;
    --grid: #2b3440;
    --accent: #a78bfa;
    --accent-soft: #2c2445;
    --shadow: 0 14px 40px rgba(0,0,0,.35);
    --mechanics: #f29a4a;
    --fields: #34c6a5;
    --quantum: #70a0ff;
    --matter: #c47ada;
    --particle: #f06b7d;
    --cosmos: #43b5ca;
    --pathway: #f58a64;
    --asset: #45ba8e;
    --timeslice: #a989ec;
    --concept: #9aa6b5;
    --pattern: #f1c14a;
    --mainline-outline: #05070a;
  }
}
* { box-sizing: border-box; }
html, body { width: 100%; height: 100%; margin: 0; overflow: hidden; }
body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
}
button, input, select { font: inherit; color: inherit; }
button, select, input {
  border: 1px solid var(--border);
  background: var(--panel-solid);
  border-radius: 10px;
}
button { cursor: pointer; padding: 9px 12px; }
button:hover { background: var(--accent-soft); }
button.active { background: var(--accent-soft); border-color: var(--accent); color: var(--accent); }
button:focus-visible, input:focus-visible, select:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--accent), transparent 68%);
  outline-offset: 1px;
}
.app { width: 100%; height: 100%; position: relative; }
.topbar {
  position: absolute; z-index: 5; inset: 0 0 auto 0; min-height: 66px;
  display: flex; align-items: center; gap: 10px; flex-wrap: wrap;
  padding: 10px 14px;
  background: linear-gradient(to bottom, var(--panel-solid), color-mix(in srgb, var(--panel-solid), transparent 12%));
  border-bottom: 1px solid var(--border);
}
.brand { min-width: 260px; margin-right: auto; }
.brand h1 { font-size: 17px; line-height: 1.2; margin: 0 0 3px; font-weight: 650; }
.brand p { font-size: 12px; color: var(--muted); margin: 0; }
.controls { display: flex; gap: 8px; align-items: center; flex-wrap: wrap; }
.search { width: min(280px, 34vw); padding: 9px 11px; }
select { padding: 9px 30px 9px 10px; }
.icon-button { min-width: 40px; padding: 9px; }
.toggle { display: inline-flex; align-items: center; gap: 7px; padding: 7px 10px; white-space: nowrap; }
.toggle input { accent-color: var(--accent); }
.stage { position: absolute; inset: 66px 0 0; overflow: hidden; }
#graph { width: 100%; height: 100%; display: block; touch-action: none; }
.legend, .hint, .details {
  position: absolute; z-index: 4; background: var(--panel);
  border: 1px solid var(--border); box-shadow: var(--shadow); backdrop-filter: blur(12px);
}
.legend { left: 14px; bottom: 14px; border-radius: 14px; padding: 11px 13px; max-width: min(620px, calc(100% - 28px)); }
.legend-title { color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 7px; }
.legend-items { display: flex; flex-wrap: wrap; gap: 8px 14px; font-size: 12px; }
.legend-item { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
.swatch { width: 10px; height: 10px; border-radius: 50%; background: var(--c); }
.swatch.mainline { width: 15px; height: 15px; background: transparent; border: 3px solid var(--mainline-outline); }
.hint { left: 14px; top: 14px; border-radius: 10px; padding: 7px 10px; font-size: 12px; color: var(--muted); }
.details {
  right: 14px; top: 14px; width: min(370px, calc(100% - 28px)); max-height: calc(100% - 28px);
  border-radius: 16px; overflow: auto; padding: 16px;
  transform: translateX(calc(100% + 30px)); transition: transform .2s ease;
}
.details.open { transform: translateX(0); }
.details-close { float: right; padding: 5px 8px; margin-left: 8px; }
.eyebrow { color: var(--muted); font-size: 11px; text-transform: uppercase; letter-spacing: .08em; margin-bottom: 7px; }
.details h2 { font-size: 19px; line-height: 1.25; margin: 0 0 8px; }
.meta { color: var(--muted); font-size: 12px; margin-bottom: 12px; }
.details p { font-size: 13px; line-height: 1.55; margin: 10px 0; }
.detail-section { border-top: 1px solid var(--border); padding-top: 11px; margin-top: 11px; }
.detail-section h3 { font-size: 12px; margin: 0 0 7px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); }
.chips { display: flex; flex-wrap: wrap; gap: 6px; }
.chip { border: 1px solid var(--border); border-radius: 999px; padding: 4px 7px; font-size: 11px; }
.source-actions { display: grid; gap: 3px; margin-top: 7px; }
.source-link { display: inline-block; text-decoration: none; color: var(--accent); font-size: 13px; padding: 3px 0; }
.empty { color: var(--muted); }
.stats { font-variant-numeric: tabular-nums; }
.mobile-details-button { display: none; }
@media (max-width: 920px) {
  .topbar { align-items: flex-start; }
  .brand { min-width: 100%; }
  .stage { top: 112px; }
  .controls { width: 100%; }
  .search { flex: 1; width: 120px; }
  .legend { max-width: calc(100% - 28px); }
}
@media (max-width: 620px) {
  .topbar { padding: 8px; gap: 6px; }
  .brand { display: none; }
  .stage { top: 152px; }
  .controls { gap: 6px; }
  .search { min-width: calc(100% - 96px); }
  select { max-width: calc(50% - 4px); flex: 1; }
  .toggle span { display: none; }
  .legend { display: none; }
  .details { right: 8px; top: 8px; max-height: calc(100% - 16px); }
}
</style>
</head>
<body>
<main class="app" aria-label="Interactive fundamental physics discovery knowledge graph">
  <header class="topbar">
    <div class="brand">
      <h1>PhyCoC · Fundamental Physics Discovery Graph</h1>
      <p><span class="stats" id="summaryStats"></span> · click a discovery to reveal its local knowledge graph</p>
    </div>
    <div class="controls" aria-label="Graph controls">
      <input class="search" id="searchInput" type="search" placeholder="Search discoveries, pathways, assets…" aria-label="Search graph">
      <select id="categoryFilter" aria-label="Filter by category"><option value="">All domains</option></select>
      <select id="eraFilter" aria-label="Filter by era"><option value="">All eras</option></select>
      <label class="toggle"><input id="edgeLabels" type="checkbox"><span>Edge labels</span></label>
      <button id="timelineButton" type="button" aria-pressed="false" title="Arrange discovery nodes chronologically">Timeline</button>
      <button id="resetButton" type="button">Reset</button>
      <button class="icon-button" id="fullscreenButton" type="button" aria-label="Toggle fullscreen" title="Toggle fullscreen">⛶</button>
    </div>
  </header>
  <section class="stage" id="stage">
    <canvas id="graph" aria-label="Interactive node-link graph"></canvas>
    <div class="hint" id="hint">Drag nodes · drag background to pan · wheel/pinch to zoom</div>
    <aside class="details" id="details" aria-live="polite"></aside>
    <div class="legend" id="legend">
      <div class="legend-title">Discovery domains</div>
      <div class="legend-items" id="legendItems"></div>
      <div class="legend-title" style="margin-top:9px">Expanded-case node meanings</div>
      <div class="legend-items" id="localLegendItems"></div>
    </div>
  </section>
</main>
<script id="graph-data" type="application/json">${safeData}</script>
<script>
(() => {
  "use strict";
  const data = JSON.parse(document.getElementById("graph-data").textContent);
  const canvas = document.getElementById("graph");
  const ctx = canvas.getContext("2d");
  const stage = document.getElementById("stage");
  const details = document.getElementById("details");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const eraFilter = document.getElementById("eraFilter");
  const edgeLabelsInput = document.getElementById("edgeLabels");
  const timelineButton = document.getElementById("timelineButton");
  const resetButton = document.getElementById("resetButton");
  const fullscreenButton = document.getElementById("fullscreenButton");
  const summaryStats = document.getElementById("summaryStats");
  const legendItems = document.getElementById("legendItems");
  const localLegendItems = document.getElementById("localLegendItems");
  const css = getComputedStyle(document.documentElement);
  const colorMap = {
    "Mechanics & astronomy": "--mechanics",
    "Fields & symmetry": "--fields",
    "Quantum & radiation": "--quantum",
    "Matter & emergence": "--matter",
    "Nuclear & particles": "--particle",
    "Cosmos & spacetime": "--cosmos",
    pathway: "--pathway",
    asset: "--asset",
    timeslice: "--timeslice",
    concept: "--concept",
    pattern: "--pattern",
  };
  const color = (key) => css.getPropertyValue(colorMap[key] || "--concept").trim();
  const categories = [...new Set(data.cases.map((item) => item.category))];
  const eras = [...new Set(data.cases.map((item) => item.era))];
  categoryFilter.add(new Option("Core theoretical backbone", "__mainline__"));
  for (const value of categories) categoryFilter.add(new Option(value, value));
  for (const value of eras) eraFilter.add(new Option(value, value));
  legendItems.innerHTML = categories
    .map((value) => '<span class="legend-item"><span class="swatch" style="--c:' + color(value) + '"></span>' + value + '</span>')
    .join("") +
    '<span class="legend-item"><span class="swatch mainline"></span>Core theoretical backbone (larger node)</span>';
  localLegendItems.innerHTML = [
    ["pathway", "Earlier, incomplete, or superseded pathway"],
    ["timeslice", "Historical time slice"],
    ["asset", "Knowledge asset"],
    ["concept", "Concept or evidence"],
    ["pattern", "Discovery pattern (P-01–P-06)"],
  ].map(([key, label]) =>
    '<span class="legend-item"><span class="swatch" style="--c:' + color(key) + '"></span>' + label + '</span>'
  ).join("");
  summaryStats.textContent =
    data.stats.cases + " cases · " + data.stats.pathways + " pathways · " +
    data.stats.explicitEdges + " explicit relations";

  let width = 0;
  let height = 0;
  let dpr = 1;
  let transform = { x: 0, y: 0, k: 1 };
  let nodes = [];
  let edges = [];
  let visibleNodes = [];
  let visibleEdges = [];
  let selected = null;
  let expandedCaseId = null;
  let chronologicalLayout = false;
  let hovered = null;
  let dragNode = null;
  let panning = false;
  let lastPointer = null;
  let moved = false;
  let simulationHeat = 1;
  let animationFrame = 0;
  const nodeById = new Map();
  const caseById = new Map(data.cases.map((item) => [item.id, item]));
  const seedPosition = new Map();

  function hash(value) {
    let result = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
      result ^= value.charCodeAt(i);
      result = Math.imul(result, 16777619);
    }
    return result >>> 0;
  }

  function initialCaseNode(item, index) {
    const t = data.cases.length <= 1 ? 0 : index / (data.cases.length - 1);
    const angle = t * Math.PI * 5.4 - Math.PI / 2;
    const radius = 110 + t * Math.min(width, height) * 0.48;
    const jitter = ((hash(item.id) % 1000) / 1000 - 0.5) * 42;
    return {
      id: item.id, label: item.title, type: "case", category: item.category,
      caseId: item.id, detail: item.claim, mainline: item.mainline,
      radius: (item.mainline ? 15 : 9) + Math.min(item.explicitEdges.length, 12) * .28,
      x: Math.cos(angle) * radius + jitter,
      y: Math.sin(angle) * radius + jitter,
      vx: 0, vy: 0, year: item.year,
    };
  }

  function rebuildGraph(preserve = true) {
    const previous = new Map(nodes.map((node) => [node.id, node]));
    nodes = data.cases.map((item, index) => {
      const base = initialCaseNode(item, index);
      const old = previous.get(base.id) || seedPosition.get(base.id);
      if (preserve && old) Object.assign(base, { x: old.x, y: old.y, vx: old.vx || 0, vy: old.vy || 0 });
      return base;
    });
    edges = data.overviewEdges.map((edge) => ({ ...edge }));

    const focusCase = expandedCaseId ? caseById.get(expandedCaseId) : null;
    if (focusCase) {
      const center = nodes.find((node) => node.id === focusCase.id);
      const localNodes = [];
      for (const item of focusCase.pathways) {
        localNodes.push({
          id: focusCase.id + "::" + item.id, rawId: item.id, label: item.label, type: "pathway",
          caseId: focusCase.id, detail: item.what, meta: item.period, radius: 6.5,
        });
      }
      for (const item of focusCase.assets) {
        localNodes.push({
          id: focusCase.id + "::" + item.id, rawId: item.id, label: item.label, type: "asset",
          caseId: focusCase.id, detail: item.detail, radius: 6,
        });
      }
      for (const item of focusCase.timeSlices) {
        localNodes.push({
          id: focusCase.id + "::" + item.id, rawId: item.id, label: item.label, type: "timeslice",
          caseId: focusCase.id, detail: item.detail, meta: item.period, radius: 6,
        });
      }
      for (const item of focusCase.patterns) {
        localNodes.push({
          id: focusCase.id + "::" + item.id, rawId: item.id, label: item.id, type: "pattern",
          caseId: focusCase.id, detail: item.detail, radius: 5.5,
        });
      }
      const knownRaw = new Set([focusCase.id, ...localNodes.map((node) => node.rawId)]);
      for (const edge of focusCase.explicitEdges) {
        for (const rawId of [edge.source, edge.target]) {
          if (knownRaw.has(rawId)) continue;
          knownRaw.add(rawId);
          localNodes.push({
            id: focusCase.id + "::" + rawId, rawId, label: rawId.replaceAll("-", " "),
            type: "concept", caseId: focusCase.id, detail: "Concept or evidence node from the explicit edge list.",
            radius: 5.5,
          });
        }
      }
      localNodes.forEach((node, index) => {
        const old = previous.get(node.id);
        const angle = index / Math.max(localNodes.length, 1) * Math.PI * 2;
        const ring = 88 + (index % 3) * 30;
        Object.assign(node, old ? { x: old.x, y: old.y, vx: old.vx || 0, vy: old.vy || 0 } : {
          x: center.x + Math.cos(angle) * ring,
          y: center.y + Math.sin(angle) * ring,
          vx: 0, vy: 0,
        });
        nodes.push(node);
      });
      for (const item of focusCase.pathways) {
        edges.push({ source: focusCase.id + "::" + item.id, target: focusCase.id, relation: "superseded-or-bounded-by", kind: "local" });
      }
      for (const item of focusCase.assets) {
        edges.push({ source: focusCase.id + "::" + item.id, target: focusCase.id, relation: "contributes-to", kind: "local" });
      }
      focusCase.timeSlices.forEach((item, index) => {
        const target = index + 1 < focusCase.timeSlices.length
          ? focusCase.id + "::" + focusCase.timeSlices[index + 1].id
          : focusCase.id;
        edges.push({ source: focusCase.id + "::" + item.id, target, relation: "precedes", kind: "local" });
      });
      for (const item of focusCase.patterns) {
        edges.push({ source: focusCase.id, target: focusCase.id + "::" + item.id, relation: "instantiates", kind: "local" });
      }
      for (const item of focusCase.explicitEdges) {
        const source = item.source === focusCase.id ? focusCase.id : focusCase.id + "::" + item.source;
        const target = item.target === focusCase.id ? focusCase.id : focusCase.id + "::" + item.target;
        edges.push({ source, target, relation: item.relation, kind: "explicit" });
      }

      // Explicit edge lists may contain internally meaningful concept-to-concept
      // components that never mention the discovery node. Preserve those relations,
      // then add one semantic anchor per disconnected component so every local node
      // has a path back to the case it belongs to.
      const localIds = new Set([focusCase.id, ...localNodes.map((node) => node.id)]);
      const adjacency = new Map([...localIds].map((id) => [id, new Set()]));
      for (const edge of edges) {
        if (!localIds.has(edge.source) || !localIds.has(edge.target)) continue;
        adjacency.get(edge.source).add(edge.target);
        adjacency.get(edge.target).add(edge.source);
      }
      const componentFrom = (start, allowed = localIds) => {
        const found = new Set();
        const queue = [start];
        while (queue.length) {
          const current = queue.shift();
          if (found.has(current) || !allowed.has(current)) continue;
          found.add(current);
          for (const neighbor of adjacency.get(current) || []) queue.push(neighbor);
        }
        return found;
      };
      const connectedToCase = componentFrom(focusCase.id);
      for (const node of localNodes) {
        if (connectedToCase.has(node.id)) continue;
        const component = componentFrom(node.id);
        edges.push({ source: node.id, target: focusCase.id, relation: "belongs-to-case", kind: "local" });
        for (const id of component) connectedToCase.add(id);
      }
    }
    nodeById.clear();
    for (const node of nodes) nodeById.set(node.id, node);
    applyFilters();
    simulationHeat = 1;
  }

  function applyFilters() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;
    const era = eraFilter.value;
    const matchingCases = new Set(
      data.cases
        .filter((item) =>
          !category ||
          (category === "__mainline__" ? item.mainline : item.category === category)
        )
        .filter((item) => !era || item.era === era)
        .filter((item) => {
          if (!query) return true;
          const haystack = [
            item.title, item.date, item.domain, item.contributors, item.claim,
            ...item.pathways.flatMap((value) => [value.label, value.what]),
            ...item.assets.flatMap((value) => [value.label, value.detail]),
          ].join(" ").toLowerCase();
          return haystack.includes(query);
        })
        .map((item) => item.id),
    );
    visibleNodes = nodes.filter((node) => {
      if (node.type === "case") return matchingCases.has(node.id);
      return matchingCases.has(node.caseId);
    });
    const visibleIds = new Set(visibleNodes.map((node) => node.id));
    visibleEdges = edges.filter((edge) => visibleIds.has(edge.source) && visibleIds.has(edge.target));
    summaryStats.textContent =
      matchingCases.size + " of " + data.stats.cases + " cases · " +
      data.stats.pathways + " pathways · " + data.stats.explicitEdges + " explicit relations";
    simulationHeat = Math.max(simulationHeat, .45);
    if (chronologicalLayout) arrangeChronologically(false);
  }

  function arrangeChronologically(shouldFit = true) {
    const caseNodes = visibleNodes
      .filter((node) => node.type === "case")
      .sort((left, right) => left.year - right.year || left.label.localeCompare(right.label));
    if (!caseNodes.length) return;
    const columns = Math.max(3, Math.min(6, Math.floor((width - 70) / 190)));
    const xGap = 190;
    const yGap = 78;
    const rows = Math.ceil(caseNodes.length / columns);
    const gridWidth = (columns - 1) * xGap;
    const gridHeight = (rows - 1) * yGap;
    caseNodes.forEach((node, index) => {
      const row = Math.floor(index / columns);
      const positionInRow = index % columns;
      const column = row % 2 === 0 ? positionInRow : columns - 1 - positionInRow;
      node.x = column * xGap - gridWidth / 2;
      node.y = row * yGap - gridHeight / 2;
      node.vx = 0;
      node.vy = 0;
    });
    simulationHeat = 0;
    if (shouldFit) setTimeout(fitVisible, 20);
  }

  function updateTimelineButton() {
    timelineButton.classList.toggle("active", chronologicalLayout);
    timelineButton.setAttribute("aria-pressed", String(chronologicalLayout));
    timelineButton.textContent = chronologicalLayout ? "Force layout" : "Timeline";
  }

  function resize() {
    const rect = stage.getBoundingClientRect();
    width = Math.max(320, rect.width);
    height = Math.max(240, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!transform.x && !transform.y) transform = { x: width / 2, y: height / 2, k: .72 };
    simulationHeat = Math.max(simulationHeat, .3);
  }

  function screenToWorld(x, y) {
    return { x: (x - transform.x) / transform.k, y: (y - transform.y) / transform.k };
  }

  function worldToScreen(x, y) {
    return { x: x * transform.k + transform.x, y: y * transform.k + transform.y };
  }

  function simulate() {
    if (chronologicalLayout) return;
    if (simulationHeat < .002 || visibleNodes.length === 0) return;
    const alpha = simulationHeat;
    const nodeSet = new Set(visibleNodes.map((node) => node.id));
    for (const edge of visibleEdges) {
      const source = nodeById.get(edge.source);
      const target = nodeById.get(edge.target);
      if (!source || !target || !nodeSet.has(source.id) || !nodeSet.has(target.id)) continue;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const distance = Math.hypot(dx, dy) || 1;
      const desired = edge.kind === "chronology" ? 72 : edge.kind === "theme" ? 135 : edge.kind === "backbone" ? 110 : 82;
      const strength = edge.kind === "chronology" ? .007 : edge.kind === "theme" ? .0035 : edge.kind === "backbone" ? .008 : .012;
      const force = (distance - desired) * strength * alpha;
      source.vx += dx / distance * force;
      source.vy += dy / distance * force;
      target.vx -= dx / distance * force;
      target.vy -= dy / distance * force;
    }
    for (let i = 0; i < visibleNodes.length; i += 1) {
      const a = visibleNodes[i];
      for (let j = i + 1; j < visibleNodes.length; j += 1) {
        const b = visibleNodes[j];
        let dx = b.x - a.x;
        let dy = b.y - a.y;
        let distance2 = dx * dx + dy * dy;
        if (distance2 < .01) {
          dx = ((hash(a.id + b.id) % 100) / 100 - .5) * .1;
          dy = .1;
          distance2 = dx * dx + dy * dy;
        }
        const distance = Math.sqrt(distance2);
        const minDistance = (a.radius + b.radius) * 3.1 + (a.type === "case" && b.type === "case" ? 42 : 13);
        if (distance < minDistance) {
          const force = (minDistance - distance) / minDistance * .16 * alpha;
          a.vx -= dx / distance * force;
          a.vy -= dy / distance * force;
          b.vx += dx / distance * force;
          b.vy += dy / distance * force;
        } else if (distance < 280) {
          const repulsion = 14 / distance2 * alpha;
          a.vx -= dx * repulsion;
          a.vy -= dy * repulsion;
          b.vx += dx * repulsion;
          b.vy += dy * repulsion;
        }
      }
    }
    for (const node of visibleNodes) {
      if (node === dragNode) continue;
      const gravity = node.type === "case" ? .0003 : .002;
      node.vx += -node.x * gravity * alpha;
      node.vy += -node.y * gravity * alpha;
      node.vx *= .84;
      node.vy *= .84;
      node.x += node.vx;
      node.y += node.vy;
    }
    simulationHeat *= .982;
  }

  function roundedLabel(text, max = 25) {
    return text.length > max ? text.slice(0, max - 1) + "…" : text;
  }

  function drawGrid() {
    ctx.fillStyle = css.getPropertyValue("--bg").trim();
    ctx.fillRect(0, 0, width, height);
    const spacing = 44 * transform.k;
    if (spacing < 14) return;
    const gridColor = css.getPropertyValue("--grid").trim();
    ctx.fillStyle = gridColor;
    const startX = ((transform.x % spacing) + spacing) % spacing;
    const startY = ((transform.y % spacing) + spacing) % spacing;
    for (let x = startX; x < width; x += spacing) {
      for (let y = startY; y < height; y += spacing) {
        ctx.beginPath();
        ctx.arc(x, y, Math.max(1, transform.k * 1.45), 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function drawArrow(source, target, edge) {
    const a = worldToScreen(source.x, source.y);
    const b = worldToScreen(target.x, target.y);
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const distance = Math.hypot(dx, dy) || 1;
    const ux = dx / distance;
    const uy = dy / distance;
    const start = { x: a.x + ux * source.radius * transform.k, y: a.y + uy * source.radius * transform.k };
    const end = { x: b.x - ux * (target.radius * transform.k + 4), y: b.y - uy * (target.radius * transform.k + 4) };
    const isLocal = edge.kind === "local" || edge.kind === "explicit";
    const backgroundEdge = Boolean(expandedCaseId) && !isLocal;
    const edgeOpacity = isLocal ? .72 : edge.kind === "backbone" ? .58 : edge.kind === "chronology" ? .38 : .2;
    ctx.strokeStyle = css.getPropertyValue("--line").trim();
    ctx.globalAlpha = backgroundEdge ? edgeOpacity * .2 : edgeOpacity;
    ctx.lineWidth = isLocal ? 1.3 : edge.kind === "backbone" ? 1.5 : 1;
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    if (isLocal || edge.kind === "chronology" || edge.kind === "backbone") {
      ctx.beginPath();
      ctx.moveTo(end.x, end.y);
      ctx.lineTo(end.x - ux * 7 - uy * 3.5, end.y - uy * 7 + ux * 3.5);
      ctx.lineTo(end.x - ux * 7 + uy * 3.5, end.y - uy * 7 - ux * 3.5);
      ctx.closePath();
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    }
    if (edgeLabelsInput.checked && transform.k > .45 && !backgroundEdge) {
      const label = roundedLabel(edge.relation.replaceAll("-", " "), 28);
      const mx = (start.x + end.x) / 2;
      const my = (start.y + end.y) / 2;
      ctx.font = "10px ui-sans-serif, system-ui";
      const measured = ctx.measureText(label).width;
      ctx.globalAlpha = .88;
      ctx.fillStyle = css.getPropertyValue("--panel-solid").trim();
      ctx.fillRect(mx - measured / 2 - 3, my - 7, measured + 6, 14);
      ctx.fillStyle = css.getPropertyValue("--muted").trim();
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(label, mx, my);
    }
    ctx.globalAlpha = 1;
  }

  function drawNode(node) {
    const point = worldToScreen(node.x, node.y);
    const radius = Math.max(3.2, node.radius * transform.k);
    const selectedNode = selected && selected.id === node.id;
    const highlighted = hovered && hovered.id === node.id;
    const backgroundCase = Boolean(expandedCaseId) && node.type === "case" && node.id !== expandedCaseId;
    const baseAlpha = backgroundCase ? (highlighted ? .55 : .18) : 1;
    const nodeColor = node.type === "case" ? color(node.category) : color(node.type);
    if (selectedNode || highlighted) {
      ctx.globalAlpha = (selectedNode ? .23 : .14) * baseAlpha;
      ctx.fillStyle = nodeColor;
      ctx.beginPath();
      ctx.arc(point.x, point.y, radius + 8, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = baseAlpha;
    ctx.fillStyle = nodeColor;
    ctx.beginPath();
    ctx.arc(point.x, point.y, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = node.mainline
      ? css.getPropertyValue("--mainline-outline").trim()
      : css.getPropertyValue("--panel-solid").trim();
    ctx.lineWidth = node.mainline ? 3.4 : 2;
    ctx.stroke();
    const showLabel =
      (node.type === "case" && (width > 620 || transform.k > .58)) ||
      transform.k > .72 ||
      selectedNode ||
      highlighted;
    if (showLabel) {
      const label = roundedLabel(node.label, node.type === "case" ? 28 : 22);
      ctx.font = (node.type === "case" ? (node.mainline ? "700 " : "600 ") : "500 ") +
        Math.max(10, Math.min(node.mainline ? 14 : 13, (node.mainline ? 12.5 : 11.5) * transform.k)) +
        "px ui-sans-serif, system-ui";
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillStyle = css.getPropertyValue("--text").trim();
      ctx.globalAlpha = (node.type === "case" ? .96 : .82) * baseAlpha;
      ctx.fillText(label, point.x + radius + 5, point.y);
      if (chronologicalLayout && node.type === "case") {
        ctx.font = "10px ui-sans-serif, system-ui";
        ctx.fillStyle = css.getPropertyValue("--muted").trim();
        ctx.globalAlpha = .9 * baseAlpha;
        ctx.fillText(String(Math.floor(node.year)), point.x + radius + 5, point.y + 14);
      }
      ctx.globalAlpha = 1;
    }
    ctx.globalAlpha = 1;
  }

  function draw() {
    drawGrid();
    for (const edge of visibleEdges) {
      const source = nodeById.get(edge.source);
      const target = nodeById.get(edge.target);
      if (source && target) drawArrow(source, target, edge);
    }
    for (const node of visibleNodes) drawNode(node);
  }

  function frame() {
    simulate();
    draw();
    animationFrame = requestAnimationFrame(frame);
  }

  function nodeAt(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    const point = screenToWorld(clientX - rect.left, clientY - rect.top);
    let best = null;
    let bestDistance = Infinity;
    for (const node of visibleNodes) {
      const distance = Math.hypot(node.x - point.x, node.y - point.y);
      const hit = node.radius + 8 / transform.k;
      if (distance < hit && distance < bestDistance) {
        best = node;
        bestDistance = distance;
      }
    }
    return best;
  }

  function showDetails(node) {
    if (!node) {
      details.classList.remove("open");
      return;
    }
    const owner = caseById.get(node.caseId);
    if (node.type === "case") {
      details.innerHTML =
        '<button class="details-close" type="button" aria-label="Close details">×</button>' +
        '<div class="eyebrow">' + owner.category + ' · ' + owner.era +
          (owner.mainline ? ' · Core theoretical backbone' : '') + '</div>' +
        '<h2>' + escapeHtml(owner.title) + '</h2>' +
        '<div class="meta">' + escapeHtml(owner.date) + '</div>' +
        '<p>' + escapeHtml(owner.claim || "No central claim extracted.") + '</p>' +
        '<div class="detail-section"><h3>Domain</h3><p>' + escapeHtml(owner.domain || "Not specified") + '</p></div>' +
        (owner.contributors ? '<div class="detail-section"><h3>Contributors</h3><p>' + escapeHtml(owner.contributors) + '</p></div>' : '') +
        '<div class="detail-section"><h3>Case structure</h3><div class="chips">' +
          '<span class="chip">' + owner.pathways.length + ' pathways</span>' +
          '<span class="chip">' + owner.assets.length + ' assets</span>' +
          '<span class="chip">' + owner.timeSlices.length + ' time slices</span>' +
          '<span class="chip">' + owner.explicitEdges.length + ' explicit edges</span>' +
          '<span class="chip">' + owner.sourceCount + ' sources</span>' +
        '</div></div>' +
        (owner.status ? '<div class="detail-section"><h3>Epistemic status</h3><p>' + escapeHtml(owner.status) + '</p></div>' : '') +
        '<div class="source-actions">' +
          '<a class="source-link" href="' + encodeURI(owner.file) + '" target="_blank" rel="noopener">Open source Markdown ↗</a>' +
          '<a class="source-link" href="' + encodeURI(owner.htmlFile) + '" target="_blank" rel="noopener">Open source HTML ↗</a>' +
        '</div>';
    } else {
      const typeLabel = node.type === "timeslice" ? "Time slice" : node.type[0].toUpperCase() + node.type.slice(1);
      details.innerHTML =
        '<button class="details-close" type="button" aria-label="Close details">×</button>' +
        '<div class="eyebrow">' + typeLabel + ' · ' + escapeHtml(owner.title) + '</div>' +
        '<h2>' + escapeHtml(node.label) + '</h2>' +
        (node.meta ? '<div class="meta">' + escapeHtml(node.meta) + '</div>' : '') +
        '<p>' + escapeHtml(node.detail || "No additional description extracted.") + '</p>' +
        '<div class="source-actions">' +
          '<a class="source-link" href="' + encodeURI(owner.file) + '" target="_blank" rel="noopener">Open source Markdown ↗</a>' +
          '<a class="source-link" href="' + encodeURI(owner.htmlFile) + '" target="_blank" rel="noopener">Open source HTML ↗</a>' +
        '</div>';
    }
    details.querySelector(".details-close").addEventListener("click", () => {
      details.classList.remove("open");
      selected = null;
    });
    details.classList.add("open");
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function fitVisible() {
    if (!visibleNodes.length) return;
    const minX = Math.min(...visibleNodes.map((node) => node.x - node.radius));
    const maxX = Math.max(...visibleNodes.map((node) => node.x + node.radius));
    const minY = Math.min(...visibleNodes.map((node) => node.y - node.radius));
    const maxY = Math.max(...visibleNodes.map((node) => node.y + node.radius));
    const graphWidth = Math.max(120, maxX - minX);
    const graphHeight = Math.max(120, maxY - minY);
    const sideAllowance = width > 850 ? 220 : 30;
    const scale = Math.min((width - sideAllowance - 50) / graphWidth, (height - 80) / graphHeight, 1.25);
    transform.k = Math.max(.24, scale);
    transform.x = (width - sideAllowance) / 2 - ((minX + maxX) / 2) * transform.k;
    transform.y = height / 2 - ((minY + maxY) / 2) * transform.k;
  }

  canvas.addEventListener("pointerdown", (event) => {
    canvas.setPointerCapture(event.pointerId);
    const hit = nodeAt(event.clientX, event.clientY);
    dragNode = hit;
    panning = !hit;
    lastPointer = { x: event.clientX, y: event.clientY };
    moved = false;
    if (hit) simulationHeat = Math.max(simulationHeat, .35);
  });
  canvas.addEventListener("pointermove", (event) => {
    hovered = nodeAt(event.clientX, event.clientY);
    canvas.style.cursor = dragNode ? "grabbing" : hovered ? "pointer" : panning ? "grabbing" : "grab";
    if (!lastPointer) return;
    const dx = event.clientX - lastPointer.x;
    const dy = event.clientY - lastPointer.y;
    if (Math.abs(dx) + Math.abs(dy) > 2) moved = true;
    if (dragNode) {
      dragNode.x += dx / transform.k;
      dragNode.y += dy / transform.k;
      dragNode.vx = 0;
      dragNode.vy = 0;
    } else if (panning) {
      transform.x += dx;
      transform.y += dy;
    }
    lastPointer = { x: event.clientX, y: event.clientY };
  });
  canvas.addEventListener("pointerup", (event) => {
    const hit = nodeAt(event.clientX, event.clientY);
    if (!moved && hit) {
      selected = hit;
      if (hit.type === "case") {
        if (chronologicalLayout) {
          chronologicalLayout = false;
          updateTimelineButton();
        }
        expandedCaseId = expandedCaseId === hit.id ? null : hit.id;
        rebuildGraph(true);
        selected = nodeById.get(hit.id);
      }
      showDetails(selected);
    } else if (!moved && !hit) {
      selected = null;
      expandedCaseId = null;
      rebuildGraph(true);
      showDetails(null);
    }
    dragNode = null;
    panning = false;
    lastPointer = null;
  });
  canvas.addEventListener("pointercancel", () => {
    dragNode = null;
    panning = false;
    lastPointer = null;
  });
  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    const rect = canvas.getBoundingClientRect();
    const sx = event.clientX - rect.left;
    const sy = event.clientY - rect.top;
    const before = screenToWorld(sx, sy);
    const factor = Math.exp(-event.deltaY * .0012);
    transform.k = Math.max(.18, Math.min(3.2, transform.k * factor));
    transform.x = sx - before.x * transform.k;
    transform.y = sy - before.y * transform.k;
  }, { passive: false });

  let searchTimer = 0;
  searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      applyFilters();
      fitVisible();
    }, 100);
  });
  categoryFilter.addEventListener("change", () => { applyFilters(); fitVisible(); });
  eraFilter.addEventListener("change", () => { applyFilters(); fitVisible(); });
  timelineButton.addEventListener("click", () => {
    chronologicalLayout = !chronologicalLayout;
    expandedCaseId = null;
    selected = null;
    showDetails(null);
    rebuildGraph(true);
    updateTimelineButton();
    if (chronologicalLayout) arrangeChronologically(true);
    else {
      simulationHeat = 1;
      setTimeout(fitVisible, 650);
    }
  });
  resetButton.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "";
    eraFilter.value = "";
    edgeLabelsInput.checked = false;
    expandedCaseId = null;
    chronologicalLayout = false;
    updateTimelineButton();
    selected = null;
    showDetails(null);
    rebuildGraph(false);
    setTimeout(fitVisible, 40);
  });
  fullscreenButton.addEventListener("click", async () => {
    if (!document.fullscreenElement) await document.documentElement.requestFullscreen?.();
    else await document.exitFullscreen?.();
  });
  let resizeTimer = 0;
  window.addEventListener("resize", () => {
    resize();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (chronologicalLayout) arrangeChronologically(false);
      fitVisible();
    }, 120);
  });

  resize();
  updateTimelineButton();
  rebuildGraph(false);
  setTimeout(fitVisible, 80);
  setTimeout(fitVisible, 900);
  setTimeout(fitVisible, 2200);
  cancelAnimationFrame(animationFrame);
  frame();
})();
</script>
</body>
</html>
`;

fs.writeFileSync(outputPath, html);
console.log(`Wrote ${outputPath}`);
console.log(
  `Embedded ${graphData.stats.cases} cases, ${graphData.stats.pathways} pathways, ` +
  `${graphData.stats.assets} assets, ${graphData.stats.timeSlices} time slices, ` +
  `${graphData.stats.explicitEdges} explicit edges, and ${graphData.stats.sources} sources.`,
);
