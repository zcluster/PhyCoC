#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chronology } from "./chronology_data.mjs";

const corpusDir = path.dirname(fileURLToPath(import.meta.url));

for (const [file, record] of Object.entries(chronology)) {
  const fullPath = path.join(corpusDir, file);
  let text = fs.readFileSync(fullPath, "utf8");

  if (!text.includes("| Focal discovery date |")) {
    text = text.replace(
      /(\| Central node \|[^\n]+\n)/,
      `$1| Focal discovery date | ${record.discovery[0]} |\n`,
    );
  }

  for (const [id, [label]] of Object.entries(record.pathways)) {
    const heading = `### \`${id}\``;
    const start = text.indexOf(heading);
    if (start < 0) throw new Error(`${file}: missing ${id}`);
    const nextHeading = text.indexOf("\n### ", start + heading.length);
    const end = nextHeading < 0 ? text.length : nextHeading;
    const block = text.slice(start, end);
    if (!block.includes("- **Proposed/active period:**")) {
      const updated = block.replace(
        /(- \*\*What it is:\*\*[^\n]+\n)/,
        `$1- **Proposed/active period:** ${label}.\n`,
      );
      if (updated === block) throw new Error(`${file}: cannot annotate ${id}`);
      text = text.slice(0, start) + updated + text.slice(end);
    }
  }

  const ledgerHeading = "### Pathway comparison ledger";
  const chronologyNote =
    `**Chronology rule:** Every non-discovery row corresponds to a pathway detailed above ` +
    `that originated before the focal discovery (${record.discovery[0]}). ` +
    `The proposed/active period is stored in each pathway record.`;
  if (!text.includes(`${ledgerHeading}\n\n**Chronology rule:**`)) {
    text = text.replace(ledgerHeading, `${ledgerHeading}\n\n${chronologyNote}`);
  }

  fs.writeFileSync(fullPath, text);
}

console.log(`Applied chronology annotations to ${Object.keys(chronology).length} cases.`);
