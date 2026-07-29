#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chronology } from "./chronology_data.mjs";

const corpusDir = path.dirname(fileURLToPath(import.meta.url));
const newtonFile = "08_newtonian_mechanics.md";
const files = fs
  .readdirSync(corpusDir)
  .filter((name) => /^\d{2}_.+\.md$/.test(name))
  .filter((name) => !name.endsWith("_trial.md"))
  .sort();
const canonicalFiles = files.filter((name) => name !== newtonFile);

// These are the nodes tagged as the interactive graph's Core theoretical backbone.
// The additional checks guard against future edits collapsing a generative case into
// a list of final formulas with no reproducible inference chain.
const coreBackboneFiles = [
  "08_newtonian_mechanics.md",
  "11_thermodynamics_and_energy_conservation.md",
  "12_classical_statistical_mechanics.md",
  "13_maxwell_electromagnetic_field_theory.md",
  "19_special_relativity.md",
  "24_general_relativity.md",
  "26_quantum_mechanics.md",
  "27_quantum_statistics.md",
  "32_quantum_electrodynamics.md",
  "38_electroweak_theory.md",
  "39_quantum_chromodynamics.md",
  "40_standard_model.md",
  "47_quantum_field_theory.md",
  "50_yang_mills_gauge_theory.md",
  "55_fermat_principle.md",
  "56_lagrangian_mechanics.md",
  "57_hamiltonian_mechanics.md",
  "58_second_law_of_thermodynamics.md",
];

const requiredHeadings = [
  "Graph metadata",
  "Central claim",
  "Historical problem",
  "Time slices",
  "Knowledge assets",
  "Alternative, incomplete, or superseded pathways",
  "Discovery-process reconstruction: interpolation, transformation, and extrapolation",
  "Discovery node and consolidated formalism",
  "Historically novel predictions and deductions",
  "Validation and explanatory gains",
  "Limitations and retained status",
  "Extended historical investigation",
  "AI-oriented inference notes",
  "Additional quantitative and epistemic notes",
  "Edge list",
  "Sources",
];

const errors = [];
const graphIds = new Map();
const centralNodes = new Map();
let pathwayCount = 0;
let sourceCount = 0;

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function checkMathBlocks(file, text) {
  const blocks = text.split("$$");
  for (let index = 1; index < blocks.length; index += 2) {
    const math = blocks[index];
    const structural = math.replaceAll("\\{", "").replaceAll("\\}", "");
    let depth = 0;
    for (const character of structural) {
      if (character === "{") depth += 1;
      if (character === "}") depth -= 1;
      if (depth < 0) break;
    }
    if (depth !== 0) {
      fail(file, `unbalanced LaTeX braces in display-math block ${(index + 1) / 2}`);
    }
    const begins = [...math.matchAll(/\\begin\{([^}]+)\}/g)].map((match) => match[1]);
    const ends = [...math.matchAll(/\\end\{([^}]+)\}/g)].map((match) => match[1]);
    if (begins.join("\u0000") !== ends.join("\u0000")) {
      fail(file, `unmatched LaTeX environment in display-math block ${(index + 1) / 2}`);
    }
  }
}

for (const file of canonicalFiles) {
  const fullPath = path.join(corpusDir, file);
  const text = fs.readFileSync(fullPath, "utf8");
  const lines = text.split("\n");

  if (!/^# .+Historical Knowledge Graph$/m.test(text)) {
    fail(file, "title must end with “Historical Knowledge Graph”");
  }

  for (const heading of requiredHeadings) {
    const count = lines.filter((line) => line === `## ${heading}`).length;
    if (count !== 1) {
      fail(file, `expected one “## ${heading}” heading, found ${count}`);
    }
  }

  const graphId = text.match(/\| Graph ID \| `([^`]+)` \|/)?.[1];
  const centralNode = text.match(/\| Central node \| `([^`]+)` \|/)?.[1];
  if (!graphId) {
    fail(file, "missing Graph ID metadata");
  } else if (graphIds.has(graphId)) {
    fail(file, `duplicate Graph ID ${graphId} also used by ${graphIds.get(graphId)}`);
  } else {
    graphIds.set(graphId, file);
  }
  if (!centralNode) {
    fail(file, "missing Central node metadata");
  } else if (centralNodes.has(centralNode)) {
    fail(
      file,
      `duplicate Central node ${centralNode} also used by ${centralNodes.get(centralNode)}`,
    );
  } else {
    centralNodes.set(centralNode, file);
  }

  for (const field of ["Main contributors", "Domain", "Epistemic status"]) {
    if (!new RegExp(`\\| ${field} \\|`).test(text)) {
      fail(file, `missing ${field} metadata`);
    }
  }

  const chronologyRecord = chronology[file];
  if (!chronologyRecord) {
    fail(file, "missing chronology-data record");
  } else {
    const focalDate = text.match(/\| Focal discovery date \| ([^|]+) \|/)?.[1]?.trim();
    if (focalDate !== chronologyRecord.discovery[0]) {
      fail(file, "focal discovery date does not match chronology data");
    }
  }

  for (const pattern of ["P-01", "P-02", "P-03", "P-04", "P-05", "P-06"]) {
    if (!text.includes(`\`${pattern}\``)) {
      fail(file, `missing discovery-pattern label ${pattern}`);
    }
  }

  const pathwayIndexes = [];
  lines.forEach((line, index) => {
    if (/^### `R-[^`]+`$/.test(line)) pathwayIndexes.push(index);
  });
  pathwayCount += pathwayIndexes.length;
  for (const index of pathwayIndexes) {
    const id = lines[index].match(/^### `([^`]+)`$/)?.[1];
    const firstContent = lines.slice(index + 1).find((line) => line.trim() !== "");
    if (!firstContent?.startsWith("- **What it is:**")) {
      fail(file, `pathway at line ${index + 1} does not begin with “What it is”`);
    }
    const recordEnd =
      lines.findIndex((line, later) => later > index && line.startsWith("### ")) || lines.length;
    const recordLines = lines.slice(index + 1, recordEnd < 0 ? lines.length : recordEnd);
    const dateLine = recordLines.find((line) => line.startsWith("- **Proposed/active period:**"));
    const expected = chronologyRecord?.pathways?.[id];
    if (!expected) {
      fail(file, `pathway ${id} is absent from chronology data`);
    } else {
      if (dateLine !== `- **Proposed/active period:** ${expected[0]}.`) {
        fail(file, `pathway ${id} date does not match chronology data`);
      }
      if (!(expected[1] < chronologyRecord.discovery[1])) {
        fail(
          file,
          `pathway ${id} chronology key ${expected[1]} does not predate discovery key ${chronologyRecord.discovery[1]}`,
        );
      }
    }
  }
  if (chronologyRecord) {
    const ids = new Set(
      pathwayIndexes.map((index) => lines[index].match(/^### `([^`]+)`$/)?.[1]),
    );
    for (const id of Object.keys(chronologyRecord.pathways)) {
      if (!ids.has(id)) fail(file, `chronology data references absent pathway ${id}`);
    }
  }

  const ledgerStart = lines.indexOf("### Pathway comparison ledger");
  if (ledgerStart < 0) {
    fail(file, "missing pathway comparison ledger");
  } else {
    const chronologyNote =
      `**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above ` +
      `that originated before the focal discovery (${chronologyRecord?.discovery?.[0]}). ` +
      `The proposed/active period is stored in each pathway record.`;
    if (!lines.slice(ledgerStart + 1, ledgerStart + 5).includes(chronologyNote)) {
      fail(file, "pathway ledger lacks the canonical chronology rule");
    }
    let ledgerEnd = lines.length;
    for (let index = ledgerStart + 1; index < lines.length; index += 1) {
      if (lines[index].startsWith("## ")) {
        ledgerEnd = index;
        break;
      }
    }
    const ledgerLines = lines.slice(ledgerStart + 1, ledgerEnd);
    const tableLines = ledgerLines.filter((line) => line.startsWith("|"));
    const dataRows = tableLines.filter((line) => !/^\|[-:| ]+\|$/.test(line)).slice(1);
    const discoveryRows = dataRows.filter((line) =>
      line.includes("**Discovery/current:"),
    );
    if (discoveryRows.length !== 1) {
      fail(file, `ledger must contain exactly one discovery row, found ${discoveryRows.length}`);
    }
    if (dataRows.length - discoveryRows.length !== pathwayIndexes.length) {
      fail(
        file,
        `ledger has ${dataRows.length - discoveryRows.length} non-discovery rows but ${pathwayIndexes.length} R-* records`,
      );
    }
    if (
      lines
        .slice(0, ledgerStart)
        .some((line) => line.includes("**Discovery/current:"))
    ) {
      fail(file, "discovery/current row appears outside the ledger");
    }
  }

  const dollarBlockCount = lines.filter((line) => line.trim() === "$$").length;
  const fenceCount = lines.filter((line) => line.startsWith("```")).length;
  if (dollarBlockCount % 2 !== 0) fail(file, "unbalanced display-math delimiters");
  if (fenceCount % 2 !== 0) fail(file, "unbalanced fenced-code delimiters");
  checkMathBlocks(file, text);

  const edgeStart = lines.indexOf("## Edge list");
  const edgeEnd =
    edgeStart < 0
      ? -1
      : lines.findIndex((line, index) => index > edgeStart && line.startsWith("## "));
  const edgeSlice = lines.slice(edgeStart + 1, edgeEnd < 0 ? lines.length : edgeEnd);
  const edgeFenceStart = edgeSlice.findIndex((line) => line === "```text");
  const edgeFenceEnd =
    edgeFenceStart < 0
      ? -1
      : edgeSlice.findIndex(
          (line, index) => index > edgeFenceStart && line === "```",
        );
  if (edgeFenceStart < 0 || edgeFenceEnd < 0) {
    fail(file, "edge list must contain one fenced text block");
  } else {
    const edges = edgeSlice
      .slice(edgeFenceStart + 1, edgeFenceEnd)
      .filter((line) => line.trim() !== "");
    if (edges.length < 5) fail(file, `edge list has only ${edges.length} edges`);
    for (const edge of edges) {
      if (!/^\S.* --[^>]+--> \S.*$/.test(edge)) {
        fail(file, `malformed edge: ${edge}`);
      }
    }
    if (centralNode && !edges.some((edge) => edge.includes(centralNode))) {
      fail(file, `central node ${centralNode} is absent from edge list`);
    }
  }

  const sourceStart = lines.indexOf("## Sources");
  const sourceLines = lines.slice(sourceStart + 1).filter((line) => line.startsWith("- "));
  const urls = sourceLines
    .map((line) => line.match(/\]\((https?:\/\/[^)]+)\)/)?.[1])
    .filter(Boolean);
  sourceCount += urls.length;
  if (urls.length < 3) fail(file, `only ${urls.length} linked sources`);
  if (new Set(urls).size !== urls.length) fail(file, "duplicate source URL");

  lines.forEach((line, index) => {
    if (/[ \t]+$/.test(line)) fail(file, `trailing whitespace at line ${index + 1}`);
    if (line.includes("\t")) fail(file, `tab character at line ${index + 1}`);
  });
}

const readme = fs.readFileSync(path.join(corpusDir, "README.md"), "utf8");
const orderedListStart = readme.indexOf("## Ordered discovery files");
const orderedListEnd = readme.indexOf("## Shared document schema");
const orderedListText = readme.slice(orderedListStart, orderedListEnd);
const readmeCaseLinks = [
  ...orderedListText.matchAll(/\]\((\d{2}_[^)]+\.md)\)/g),
].map((match) => match[1]);
for (const linkedFile of readmeCaseLinks) {
  if (!fs.existsSync(path.join(corpusDir, linkedFile))) {
    fail("README.md", `broken local link ${linkedFile}`);
  }
}
if (readmeCaseLinks.length !== files.length) {
  fail(
    "README.md",
    `ordered list links ${readmeCaseLinks.length} cases but corpus contains ${files.length}`,
  );
}
if (new Set(readmeCaseLinks).size !== readmeCaseLinks.length) {
  fail("README.md", "ordered discovery list contains a duplicate case link");
}
const chronologicalFiles = [...files].sort(
  (left, right) => chronology[left].discovery[1] - chronology[right].discovery[1],
);
if (readmeCaseLinks.join("\u0000") !== chronologicalFiles.join("\u0000")) {
  fail("README.md", "ordered discovery list does not follow sortable focal chronology");
}

if (files.length !== 58) {
  fail("corpus", `expected 58 case files, found ${files.length}`);
}

const historyDir = path.dirname(corpusDir);
const casePagesDir = path.join(historyDir, "case_pages");
const casePageFiles = fs.existsSync(casePagesDir)
  ? fs
      .readdirSync(casePagesDir)
      .filter((name) => /^\d{2}_.+\.html$/.test(name))
      .filter((name) => !name.endsWith("_trial.html"))
      .sort()
  : [];
if (casePageFiles.length !== files.length) {
  fail("case_pages", `expected ${files.length} reader HTML pages, found ${casePageFiles.length}`);
}
const graphHtmlPath = path.join(historyDir, "index.html");
const graphHtml = fs.existsSync(graphHtmlPath) ? fs.readFileSync(graphHtmlPath, "utf8") : "";
for (const file of files) {
  const htmlFile = file.replace(/\.md$/, ".html");
  const fullPath = path.join(casePagesDir, htmlFile);
  if (!fs.existsSync(fullPath)) {
    fail("case_pages", `missing reader page ${htmlFile}`);
    continue;
  }
  const page = fs.readFileSync(fullPath, "utf8");
  if (!page.includes("mathjax@3.2.2/es5/tex-svg.js")) {
    fail(htmlFile, "missing pinned MathJax renderer");
  }
  if (!page.includes(`../fundamental_physics_discoveries/${file}`)) {
    fail(htmlFile, `missing backlink to canonical Markdown ${file}`);
  }
  if (!page.includes('href="../index.html"')) {
    fail(htmlFile, "missing backlink to knowledge graph");
  }
  const sourceTitle = fs.readFileSync(path.join(corpusDir, file), "utf8").match(/^#\s+(.+)$/m)?.[1];
  if (sourceTitle && !page.includes(escapeForHtmlCheck(sourceTitle))) {
    fail(htmlFile, "reader page does not contain its source title");
  }
  if (!graphHtml.includes(`\"htmlFile\":\"case_pages/${htmlFile}\"`)) {
    fail("index.html", `graph data lacks reader-page link for ${htmlFile}`);
  }
}

const graphDataText = graphHtml.match(
  /<script id="graph-data" type="application\/json">([\s\S]*?)<\/script>/,
)?.[1];
if (!graphDataText) {
  fail("index.html", "missing embedded graph data");
} else {
  try {
    const graphData = JSON.parse(graphDataText);
    const mainlineIds = new Set(
      graphData.cases.filter((item) => item.mainline).map((item) => item.id),
    );
    const backboneEdges = graphData.overviewEdges.filter((edge) => edge.kind === "backbone");
    if (backboneEdges.length !== 23) {
      fail("index.html", `expected 23 curated backbone edges, found ${backboneEdges.length}`);
    }

    const explicitEdgeKeys = new Set(
      graphData.cases.flatMap((item) =>
        item.explicitEdges.map(
          (edge) => `${edge.source}|${edge.relation}|${edge.target}`,
        ),
      ),
    );
    for (const edge of backboneEdges) {
      const key = `${edge.source}|${edge.relation}|${edge.target}`;
      if (!mainlineIds.has(edge.source) || !mainlineIds.has(edge.target)) {
        fail("index.html", `backbone edge does not join two mainline cases: ${key}`);
      }
      if (!explicitEdgeKeys.has(key)) {
        fail("index.html", `backbone edge is absent from Markdown edge lists: ${key}`);
      }
    }

    const mainlineThemeEdges = graphData.overviewEdges.filter(
      (edge) =>
        edge.kind === "theme" &&
        mainlineIds.has(edge.source) &&
        mainlineIds.has(edge.target),
    );
    if (mainlineThemeEdges.length > 0) {
      fail(
        "index.html",
        `${mainlineThemeEdges.length} automatic theme edge(s) still join two mainline cases`,
      );
    }

    const seenMainlinePairs = new Set();
    for (const edge of graphData.overviewEdges) {
      if (!mainlineIds.has(edge.source) || !mainlineIds.has(edge.target)) continue;
      const pair = [edge.source, edge.target].sort().join("|");
      if (seenMainlinePairs.has(pair)) {
        fail("index.html", `duplicate mainline overview-edge pair: ${pair}`);
      }
      seenMainlinePairs.add(pair);
    }
  } catch (error) {
    fail("index.html", `cannot parse embedded graph data: ${error.message}`);
  }
}

if (!graphHtml.includes('edge.kind === "backbone" ? 1.5')) {
  fail("index.html", "backbone edges lack the canonical 1.5-pixel line width");
}
if (!graphHtml.includes('edge.kind === "backbone" ? .58')) {
  fail("index.html", "backbone edges lack the canonical opacity");
}
if (!graphHtml.includes('edge.kind === "chronology" || edge.kind === "backbone"')) {
  fail("index.html", "backbone edges lack arrowheads");
}

function escapeForHtmlCheck(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

const newtonPath = path.join(corpusDir, newtonFile);
const newton = fs.readFileSync(newtonPath, "utf8");
const newtonLines = newton.split("\n");
const newtonGraphId = newton.match(/\| Graph ID \| `([^`]+)` \|/)?.[1];
const newtonCentralNode = newton.match(/\| Central node \| `([^`]+)`/)?.[1];
if (!newtonGraphId) {
  fail(newtonFile, "missing Graph ID metadata");
} else if (graphIds.has(newtonGraphId)) {
  fail(newtonFile, `duplicate Graph ID ${newtonGraphId}`);
} else {
  graphIds.set(newtonGraphId, newtonFile);
}
if (!newtonCentralNode) {
  fail(newtonFile, "missing Central node metadata");
} else if (centralNodes.has(newtonCentralNode)) {
  fail(newtonFile, `duplicate Central node ${newtonCentralNode}`);
} else {
  centralNodes.set(newtonCentralNode, newtonFile);
}
const newtonChronology = chronology[newtonFile];
const newtonFocalDate = newton.match(/\| Focal discovery date \| ([^|]+) \|/)?.[1]?.trim();
if (newtonFocalDate !== newtonChronology?.discovery?.[0]) {
  fail(newtonFile, "focal discovery date does not match chronology data");
}
for (const heading of [
  "Graph metadata",
  "Central claim",
  "Historical problem",
  "Time slices",
  "Knowledge assets",
  "Alternative, incomplete, or superseded pathways",
  "Discovery-process reconstruction: interpolation, transformation, and extrapolation",
  "Discovery node and consolidated formalism",
  "Historically novel predictions and deductions",
  "Validation and explanatory gains",
  "Limitations and retained status",
  "Extended historical investigation",
  "AI-oriented inference notes",
  "Additional quantitative and epistemic notes",
  "Edge list",
  "Sources",
]) {
  const count = newtonLines.filter((line) => line === `## ${heading}`).length;
  if (count !== 1) {
    fail(newtonFile, `expected one “## ${heading}” heading, found ${count}`);
  }
}
const newtonPathwayIndexes = [];
newtonLines.forEach((line, index) => {
  if (/^### `T-(?:ARISTOTELIAN-MOTION|IMPETUS|CARTESIAN-VORTICES)`/.test(line)) {
    newtonPathwayIndexes.push(index);
  }
});
for (const index of newtonPathwayIndexes) {
  const firstContent = newtonLines.slice(index + 1).find((line) => line.trim() !== "");
  if (!firstContent?.startsWith("- **What it is:**")) {
    fail(
      newtonFile,
      `pathway at line ${index + 1} does not begin with “What it is”`,
    );
  }
  const nextHeading = newtonLines.findIndex(
    (line, later) => later > index && line.startsWith("### "),
  );
  const recordLines = newtonLines.slice(index + 1, nextHeading < 0 ? newtonLines.length : nextHeading);
  const id = newtonLines[index].match(/^### `([^`]+)`/)?.[1];
  const expected = newtonChronology?.pathways?.[id];
  const dateLine = recordLines.find((line) => line.startsWith("- **Proposed/active period:**"));
  if (!expected) {
    fail(newtonFile, `pathway ${id} is absent from chronology data`);
  } else if (dateLine !== `- **Proposed/active period:** ${expected[0]}.`) {
    fail(
      newtonFile,
      `pathway ${id} date does not match chronology data`,
    );
  } else if (!(expected[1] < newtonChronology.discovery[1])) {
    fail(newtonFile, `pathway ${id} does not predate the focal discovery`);
  }
}
const newtonLedger = newtonLines.indexOf("### Pathway comparison ledger");
if (newtonLedger < 0) {
  fail(newtonFile, "missing pathway comparison ledger");
} else {
  const ledgerRows = newtonLines
    .slice(newtonLedger + 1)
    .filter((line) => line.startsWith("|"))
    .filter((line) => !/^\|[-:| ]+\|$/.test(line))
    .slice(1, 5);
  if (ledgerRows.length !== 4) {
    fail(newtonFile, `expected four pathway-ledger rows, found ${ledgerRows.length}`);
  }
  if (ledgerRows.filter((line) => line.includes("**Discovery/current:")).length !== 1) {
    fail(newtonFile, "ledger must contain exactly one discovery/current row");
  }
}
if (newtonLines.filter((line) => line.trim() === "$$").length % 2 !== 0) {
  fail(newtonFile, "unbalanced display-math delimiters");
}
if (newtonLines.filter((line) => line.startsWith("```")).length % 2 !== 0) {
  fail(newtonFile, "unbalanced fenced-code delimiters");
}
checkMathBlocks(newtonFile, newton);
const newtonSourceStart = newtonLines.indexOf("## Sources");
const newtonSourceUrls = newtonLines
  .slice(newtonSourceStart + 1)
  .filter((line) => line.startsWith("- "))
  .map((line) => line.match(/\]\((https?:\/\/[^)]+)\)/)?.[1])
  .filter(Boolean);
sourceCount += newtonSourceUrls.length;
if (newtonSourceUrls.length < 3) {
  fail(newtonFile, `only ${newtonSourceUrls.length} linked sources`);
}
if (new Set(newtonSourceUrls).size !== newtonSourceUrls.length) {
  fail(newtonFile, "duplicate source URL");
}
newtonLines.forEach((line, index) => {
  if (/[ \t]+$/.test(line)) {
    fail(newtonFile, `trailing whitespace at line ${index + 1}`);
  }
  if (line.includes("\t")) {
    fail(newtonFile, `tab character at line ${index + 1}`);
  }
});

for (const file of coreBackboneFiles) {
  const text = fs.readFileSync(path.join(corpusDir, file), "utf8");
  const lines = text.split("\n");
  const wordCount = text.trim().split(/\s+/).length;
  const displayMathBlocks = (text.match(/^\$\$$/gm) ?? []).length / 2;
  const hasInferenceAudit =
    text.includes("| Logical role | Content |") ||
    text.includes("### 11. Assumption-versus-conclusion ledger") ||
    text.includes("### From inverse-square gravity to Keplerian motion");
  if (wordCount < 1800) {
    fail(file, `core-backbone case has only ${wordCount} words; derivation floor is 1800`);
  }
  if (displayMathBlocks < 8) {
    fail(file, `core-backbone case has only ${displayMathBlocks} display-math blocks`);
  }
  if (!hasInferenceAudit) {
    fail(file, "core-backbone case lacks an explicit assumption/inference-role audit");
  }

  const predictionHeadingCount = lines.filter(
    (line) => line === "## Historically novel predictions and deductions",
  ).length;
  if (predictionHeadingCount !== 1) {
    fail(
      file,
      `expected one historically-novel-predictions heading, found ${predictionHeadingCount}`,
    );
  }
  const predictionRecords = [...text.matchAll(/^### `NP-[^`]+`/gm)];
  if (predictionRecords.length < 1) {
    fail(file, "historically-novel-predictions section has no NP-* record");
  }
  const allowedPredictionClasses = new Set([
    "NOVEL-CONTEMPORANEOUS-PREDICTION",
    "EARLY-DERIVED-PREDICTION",
    "LATER-THEORETICAL-CONSEQUENCE",
    "RETRODICTION-OR-EXPLANATION",
    "NO-CLEAN-CONTEMPORANEOUS-PREDICTION",
    "NOVEL-THEORETICAL-CONSTRAINT",
  ]);
  for (const record of predictionRecords) {
    const start = record.index ?? 0;
    const next = text.indexOf("\n### `NP-", start + record[0].length);
    const recordText = text.slice(start, next < 0 ? text.length : next);
    const classLine = recordText.match(/^- \*\*Classification:\*\* (.+)\.$/m)?.[1];
    if (!classLine) {
      fail(file, `${record[0]} lacks a canonical Classification field`);
      continue;
    }
    const classes = [...classLine.matchAll(/`([^`]+)`/g)].map((match) => match[1]);
    if (classes.length < 1 || classes.some((value) => !allowedPredictionClasses.has(value))) {
      fail(file, `${record[0]} uses an unknown prediction classification`);
    }
  }
}

if (errors.length > 0) {
  console.error(`Corpus validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Corpus validation passed: ${files.length} numbered cases including Newtonian mechanics, ` +
    `${pathwayCount} R-* pathways plus 3 Newtonian predecessor pathways, ` +
    `${graphIds.size} unique graph IDs, ${centralNodes.size} unique central nodes, ` +
    `${sourceCount} linked sources.`,
);
