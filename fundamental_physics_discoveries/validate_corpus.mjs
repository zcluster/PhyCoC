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
  .sort();
const canonicalFiles = files.filter((name) => name !== newtonFile);

const requiredHeadings = [
  "Graph metadata",
  "Central claim",
  "Time slices",
  "Alternative, incomplete, or superseded pathways",
  "Knowledge assets",
  "Validation and explanatory gains",
  "Limitations and retained status",
  "Discovery patterns",
  "Edge list",
  "Extended historical investigation",
  "AI-oriented inference notes",
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

if (files.length !== 54) {
  fail("corpus", `expected 54 case files, found ${files.length}`);
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
  "Historical time slices",
  "Superseded and failed pathways",
  "Knowledge assets available to Newton",
  "Validation and explanatory gains",
  "Later scope limitations and retained approximation status",
  "Transferable discovery patterns",
  "Explicit edge list",
  "Primary and authoritative web sources",
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
const newtonSourceStart = newtonLines.indexOf("## Primary and authoritative web sources");
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
