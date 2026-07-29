import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const historyDir = path.dirname(fileURLToPath(import.meta.url));
const corpusDir = path.join(historyDir, "fundamental_physics_discoveries");
const write = process.argv.includes("--write");

const files = fs
  .readdirSync(corpusDir)
  .filter((name) => /^\d{2}_.+\.md$/.test(name))
  .filter((name) => !name.endsWith("_trial.md"))
  .filter((name) => name !== "19_special_relativity.md")
  .sort();

function parseSections(source) {
  const matches = [...source.matchAll(/^## (.+)$/gm)];
  if (!matches.length) throw new Error("No level-two sections found");
  const preamble = source.slice(0, matches[0].index).trimEnd();
  const sections = [];
  for (let index = 0; index < matches.length; index += 1) {
    const start = matches[index].index;
    const end = index + 1 < matches.length ? matches[index + 1].index : source.length;
    sections.push({
      heading: matches[index][1].trim(),
      body: source.slice(start + matches[index][0].length, end).trim(),
    });
  }
  return { preamble, sections };
}

function take(sections, tests, required = true) {
  const index = sections.findIndex(({ heading }) =>
    tests.some((test) => (typeof test === "string" ? heading === test : test.test(heading))),
  );
  if (index < 0) {
    if (required) throw new Error(`Missing section matching ${tests.join(" or ")}`);
    return null;
  }
  return sections.splice(index, 1)[0];
}

function field(metadata, label) {
  const row = metadata.body
    .split("\n")
    .find((line) => new RegExp(`^\\|\\s*${label}\\s*\\|`, "i").test(line));
  if (!row) return "Not separately encoded";
  return row.split("|").slice(2, -1).join("|").trim();
}

function firstParagraph(markdown) {
  return markdown.split(/\n\s*\n/).find((part) => part.trim())?.replace(/\s+/g, " ").trim() ?? "";
}

function tableRows(markdown) {
  const lines = markdown.split("\n").filter((line) => /^\s*\|/.test(line));
  if (lines.length < 3) return [];
  return lines
    .filter((line) => !/^\s*\|(?:\s*:?-+:?\s*\|)+\s*$/.test(line))
    .map((line) => line.trim().slice(1, -1).split("|").map((cell) => cell.trim()));
}

function parsePatterns(patternSection) {
  const rows = tableRows(patternSection.body);
  if (rows.length < 2) return new Map();
  const header = rows[0].map((cell) => cell.toLowerCase());
  let valueIndex = header.findIndex((cell) => cell.includes("instantiation"));
  if (valueIndex < 0) valueIndex = Math.min(1, rows[0].length - 1);
  const patterns = new Map();
  for (const row of rows.slice(1)) {
    const id = row[0]?.match(/P-0[1-6]/)?.[0];
    if (id) patterns.set(id, row[valueIndex] || row.slice(1).join(" — "));
  }
  return patterns;
}

function pathwayRecords(alternatives) {
  const matches = [...alternatives.body.matchAll(/^###\s+`?((?:R|T)-[A-Z0-9-]+)`?(?:\s+—\s+([^\n]+))?$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : alternatives.body.length;
    const block = alternatives.body.slice(start, end);
    const get = (...labels) => {
      for (const label of labels) {
        const found = block.match(new RegExp(`^- \\*\\*${label}:\\*\\*\\s*(.+)$`, "mi"));
        if (found) return found[1].trim();
      }
      return "See the full pathway record above.";
    };
    return {
      id: match[1],
      label: match[2]?.trim() || match[1],
      what: get("What it is"),
      limitation: get("Limitation", "Anomalies and limitations"),
    };
  });
}

function escapeCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n+/g, " ").trim();
}

function sentence(value) {
  const text = String(value).trim();
  return /[.!?]$/.test(text) ? text : `${text}.`;
}

function demote(markdown, levels = 1) {
  return markdown.replace(/^(#{3,6})\s/gm, (match, hashes) => `${"#".repeat(Math.min(6, hashes.length + levels))} `);
}

function assetIds(assets) {
  return [...new Set([...assets.body.matchAll(/`(A-[A-Z0-9-]+)`/g)].map((match) => match[1]))];
}

function historicalProblem(time, alternatives, metadata) {
  const rows = tableRows(time.body);
  const header = rows[0]?.map((cell) => cell.toLowerCase()) ?? [];
  let problemIndex = header.findIndex((cell) => /problem|tension|state|question|framework/.test(cell));
  if (problemIndex < 0) problemIndex = Math.min(2, Math.max(0, (rows[0]?.length ?? 2) - 2));
  const pressures = rows
    .slice(1, 3)
    .map((row) => row[problemIndex])
    .filter(Boolean);
  const pathwayIds = pathwayRecords(alternatives).map(({ id }) => `\`${id}\``);
  const date = field(metadata, "Focal discovery date");
  const domain = field(metadata, "Domain") !== "Not separately encoded"
    ? field(metadata, "Domain")
    : field(metadata, "Primary domain");
  const pressureText = pressures.length
    ? pressures.join("; ")
    : "the inherited observations and theories did not yet form one generative account";
  const rivals = pathwayIds.length ? pathwayIds.join(", ") : "the predecessor pathways recorded below";
  return `Before the focal discovery (${date}), the case confronted a linked set of pressures: ${pressureText}. The pathways ${rivals} were historically reasonable attempts to organize parts of the problem, but they did not jointly satisfy the empirical, mathematical, and explanatory constraints represented by the time slices and knowledge assets. The discovery task in ${domain} was to construct a more generative account without importing later validation evidence into the original inference.`;
}

function equationDigest(discoveryBody) {
  const blocks = [...discoveryBody.matchAll(/\$\$[\s\S]*?\$\$/g)].map((match) => match[0]);
  const chosen = [];
  let length = 0;
  for (const block of blocks) {
    if (chosen.length >= 3 || length + block.length > 2400) break;
    chosen.push(block);
    length += block.length;
  }
  if (!chosen.length) {
    return "No single equation is treated as sufficient to encode this discovery; its canonical content is stated in the node table and the reasoning record above.";
  }
  return `Key formal relations, consolidated from the derivation above:\n\n${chosen.join("\n\n")}`;
}

function placeholderPredictions(title) {
  return `This case does not currently contain a separately provenance-labeled record of a historically novel prediction or deduction. That absence is explicit: validation observations must not automatically be reclassified as predictions made before the discovery. A future record should identify the prediction date, derivation provenance, independence from construction data, observable discriminator, and eventual outcome.\n\n- **Machine-readable status:** \`PREDICTION-RECORD-NOT-SEPARATELY-ENCODED\`.\n- **Case:** ${title.replace(/^#\s*/, "")}.`;
}

function fallbackNotes() {
  return "No separate supplemental note block was present before this schema migration. Case-specific equations, provenance cautions, approximation domains, and historical qualifications remain in the discovery-process reconstruction, extended investigation, and limitations sections.";
}

function migrateFile(file) {
  const fullPath = path.join(corpusDir, file);
  const source = fs.readFileSync(fullPath, "utf8");
  if (source.includes("## Discovery-process reconstruction: interpolation, transformation, and extrapolation")) {
    return {
      file,
      skipped: true,
      pathways: [...source.matchAll(/^### `(?:R|T)-[^`]+`/gm)].length,
      patterns: [...source.matchAll(/^\| `P-0[1-6]` \|/gm)].length >= 6 ? 6 : 0,
      equations: [...source.matchAll(/\$\$/g)].length / 2,
      predictions: !source.includes("`PREDICTION-RECORD-NOT-SEPARATELY-ENCODED`"),
      extras: 0,
    };
  }
  const { preamble, sections } = parseSections(source);

  const metadata = take(sections, ["Graph metadata"]);
  const central = take(sections, ["Central claim", "Central thesis and interpretation rule"]);
  const time = take(sections, ["Time slices", "Historical time slices"]);
  const alternatives = take(sections, ["Alternative, incomplete, or superseded pathways", "Superseded and failed pathways"]);
  const assets = take(sections, ["Knowledge assets", "Knowledge assets available to Newton"]);
  const discovery = take(sections, [
    /^Discovery node/,
    /^Discovery inference/,
    /^Core data and inference$/,
    /^`T-NEWTON-1687`/,
  ]);
  const predictions = take(sections, ["Historically novel predictions and deductions"], false);
  const validation = take(sections, ["Validation and explanatory gains"]);
  const limitations = take(sections, ["Limitations and retained status", "Later scope limitations and retained approximation status"]);
  const patternsSection = take(sections, ["Discovery patterns", "Transferable discovery patterns"]);
  const edges = take(sections, ["Edge list", "Explicit edge list"]);
  const extended = take(sections, ["Extended historical investigation"], false);
  const aiNotes = take(sections, ["AI-oriented inference notes"], false);
  const sources = take(sections, ["Sources", "Primary and authoritative web sources"]);

  const patterns = parsePatterns(patternsSection);
  const p = (id) => patterns.get(id) || "Pattern not separately instantiated in the pre-migration table.";
  const paths = pathwayRecords(alternatives);
  const pathTable = paths.length
    ? [
        "| Pathway | What the inherited search retained | Why it remained insufficient |",
        "|---|---|---|",
        ...paths.map(({ id, what, limitation }) => `| \`${id}\` | ${escapeCell(what)} | ${escapeCell(limitation)} |`),
      ].join("\n")
    : "The detailed predecessor records above define the inherited search space; no additional pathway row is introduced here.";
  const inputs = assetIds(assets);
  const inputText = inputs.length ? inputs.map((id) => `\`${id}\``).join(", ") : "the asset nodes listed above";
  const centralNode = field(metadata, "Central node");
  const focalDate = field(metadata, "Focal discovery date");
  const domain = field(metadata, "Domain") !== "Not separately encoded"
    ? field(metadata, "Domain")
    : field(metadata, "Primary domain");
  const status = field(metadata, "Epistemic status");
  const claim = central.body.replace(/\n+/g, " ").replace(/\s+/g, " ").trim();

  const process = [
    "This section reconstructs the case as a sequence of discovery operations. **Interpolation** extends or repairs inherited models while leaving their main assumptions intact. **Transformation** changes the representation, ontology, mechanism, or question. **Extrapolation** applies the transformed structure beyond the observations used to construct it. Pattern labels are attached only after the case evidence that supports them.",
    "### Starting ingredients",
    `The admissible pre-discovery input nodes are ${inputText}. Their definitions and historical provenance are recorded in **Knowledge assets** above. They are inputs to the reconstruction, not consequences of the focal discovery; later confirmation must not be silently back-projected into this starting set.`,
    "### What interpolation could and could not achieve",
    pathTable,
    `**Pattern demonstrated — \`P-03\` (reframe the inherited question):** ${sentence(p("P-03"))} The comparison becomes a discovery operation only when the limitation is used to change the question or representation, rather than merely to add another adjustable repair.`,
    "### Transformative move",
    demote(discovery.body),
    "**Patterns demonstrated:**",
    `- \`P-02\` — **Make the new structure generative:** ${p("P-02")}`,
    `- \`P-03\` — **Reframe the inherited problem:** ${p("P-03")}`,
    `- \`P-04\` — **Permit a new representation, ontology, or mechanism:** ${p("P-04")}`,
    "### Extrapolative generalization",
    `The transformative move became a broader physical discovery when it was asserted beyond the immediate construction problem across the stated domain (${domain}). The case-specific unification was: ${sentence(p("P-01"))} This extrapolation is logically stronger than fitting the original inputs; its consequences must be separated from the later observations used to validate them.`,
    "**Patterns demonstrated:**",
    `- \`P-01\` — **Unify previously separated domains or phenomena:** ${p("P-01")}`,
    `- \`P-02\` — **Generate consequences rather than merely redescribe inputs:** ${p("P-02")}`,
    "### Retention, predictions, and discriminating tests",
    `The reconstruction preserves rather than erases successful predecessor content: ${sentence(p("P-05"))} Its quantitative or otherwise discriminating test strategy is: ${sentence(p("P-06"))} The dedicated prediction and validation sections below keep proposed consequences distinct from the evidence later used to assess them.`,
    "**Patterns demonstrated:**",
    `- \`P-05\` — **Recover valid predecessor structure or limiting behavior:** ${p("P-05")}`,
    `- \`P-06\` — **Prioritize discriminating tests:** ${p("P-06")}`,
    "### Discovery-pattern synthesis",
    "This table is the compact output of the reconstruction above. It records where each transferable operation occurs; it is not an independent replacement for the historical reasoning.",
    [
      "| Pattern | Process stage | Case-specific instantiation |",
      "|---|---|---|",
      `| \`P-01\` | Extrapolative generalization | ${escapeCell(p("P-01"))} |`,
      `| \`P-02\` | Transformative move and generative deduction | ${escapeCell(p("P-02"))} |`,
      `| \`P-03\` | Diagnosis of interpolation failure and reframing | ${escapeCell(p("P-03"))} |`,
      `| \`P-04\` | Transformative representation, ontology, or mechanism | ${escapeCell(p("P-04"))} |`,
      `| \`P-05\` | Retention and limiting recovery | ${escapeCell(p("P-05"))} |`,
      `| \`P-06\` | Prediction, discrimination, and validation network | ${escapeCell(p("P-06"))} |`,
    ].join("\n"),
  ].join("\n\n");

  const node = [
    "This node serializes the result of the preceding reconstruction. It is a compact theory record, not a second historical derivation.",
    [
      "| Field | Canonical content |",
      "|---|---|",
      `| Node | ${escapeCell(centralNode)} |`,
      `| Focal date | ${escapeCell(focalDate)} |`,
      `| Central claim | ${escapeCell(claim)} |`,
      `| Domain | ${escapeCell(domain)} |`,
      `| Epistemic status | ${escapeCell(status)} |`,
      `| Generative role | ${escapeCell(p("P-02"))} |`,
      `| Retained structure | ${escapeCell(p("P-05"))} |`,
    ].join("\n"),
    equationDigest(discovery.body),
    "The complete derivation, inferential provenance, and interpretation of these relations remain in **Transformative move** above.",
  ].join("\n\n");

  const extras = sections.map(({ heading, body }) => `### ${heading}\n\n${demote(body)}`).join("\n\n");
  const title = preamble.split("\n")[0] || `# ${file}`;
  const output = [
    preamble,
    `## Graph metadata\n\n${metadata.body}`,
    `## Central claim\n\n${central.body}`,
    `## Historical problem\n\n${historicalProblem(time, alternatives, metadata)}`,
    `## Time slices\n\n${time.body}`,
    `## Knowledge assets\n\n${assets.body}`,
    `## Alternative, incomplete, or superseded pathways\n\n${alternatives.body}`,
    `## Discovery-process reconstruction: interpolation, transformation, and extrapolation\n\n${process}`,
    `## Discovery node and consolidated formalism\n\n${node}`,
    `## Historically novel predictions and deductions\n\n${predictions?.body || placeholderPredictions(title)}`,
    `## Validation and explanatory gains\n\n${validation.body}`,
    `## Limitations and retained status\n\n${limitations.body}`,
    `## Extended historical investigation\n\n${extended?.body || "The detailed historical content for this case is carried by the time slices, pathway records, discovery-process reconstruction, validation record, and limitations above. No separate extended-investigation block existed before this schema migration."}`,
    `## AI-oriented inference notes\n\n${aiNotes?.body || "- Keep pre-discovery inputs separate from later validation evidence.\n- Distinguish historical-original reasoning from modern pedagogical reconstruction.\n- Preserve domain restrictions and predecessor limits when transferring the discovery pattern."}`,
    `## Additional quantitative and epistemic notes\n\n${extras || fallbackNotes()}`,
    `## Edge list\n\n${edges.body}`,
    `## Sources\n\n${sources.body}`,
  ].join("\n\n") + "\n";

  if (write) fs.writeFileSync(fullPath, output);
  return {
    file,
    pathways: paths.length,
    patterns: patterns.size,
    equations: [...discovery.body.matchAll(/\$\$/g)].length / 2,
    predictions: Boolean(predictions),
    extras: sections.length,
  };
}

const results = files.map((file) => migrateFile(file));
const incomplete = results.filter((result) => result.patterns !== 6 || result.pathways === 0);
console.log(`${write ? "Processed" : "Checked"} ${results.length} canonical cases; ${results.filter((result) => result.skipped).length} already used the target schema.`);
console.log(`Cases with existing prediction sections: ${results.filter((result) => result.predictions).length}.`);
console.log(`Cases requiring pathway/pattern review: ${incomplete.length}.`);
for (const result of incomplete) console.log(JSON.stringify(result));
