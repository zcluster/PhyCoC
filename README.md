# PhyHist

PhyHist is an interactive, document-grounded knowledge graph of fundamental physics discoveries. The corpus is designed to preserve historical pathways, knowledge assets, conceptual transformations, evidence, equations, validation, limitations, and transferable discovery patterns for discovery-AI research.

## Repository structure

- [`index.html`](index.html): standalone interactive knowledge graph and Vercel entry page
- [`build_interactive_graph.mjs`](build_interactive_graph.mjs): generates `index.html` from the Markdown corpus
- [`fundamental_physics_discoveries/`](fundamental_physics_discoveries/): historical case studies, chronology data, validation tools, and corpus documentation

## Rebuild and validate

```bash
node build_interactive_graph.mjs
node fundamental_physics_discoveries/validate_corpus.mjs
```

The generated site has no runtime package or external JavaScript dependency. Vercel can deploy the repository as a static site with the repository root as the project root and no build command.
