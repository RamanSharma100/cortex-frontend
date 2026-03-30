# Cortex Notion — 4 Month High-Velocity Roadmap (AI-first)

Last updated: 2026-03-30

## Overview

This document is a compact, high-velocity 4-month roadmap focused on shipping an AI-first GUI MVP, a robust multi-agent foundation, multi-MCP adapters (Stitch, Figma, Notion), and initial multi-model support. This shorter plan prioritizes practical, testable deliveries that demonstrate value quickly.

## Assumptions

- Start date: April 2026 (immediately after this file is added). Adjust dates if you want a different start month.
- Core codebase: TypeScript/Node project (existing repo).
- Team: small core team (1–3 engineers) with occasional designer/reviewer support.
- Priority: ship a usable GUI MVP and a stable multi-agent / multi-MCP foundation.

## High-level goals (4 months)

1. Ship an AI-first GUI MVP that supports create -> run -> view flows with LLM integrations and live streaming output.
2. Implement a production-ready multi-agent runtime with an adapter-based multi-MCP surface (Notion, Figma, Stitch).
3. Provide multi-model support for at least two LLM providers with a provider abstraction and local fallbacks.
4. Produce developer-facing artifacts: packaged library, docs, and example integrations to make adoption easy.

## Roadmap at a glance (4 months)

- Month 1 (Apr 2026): Design, auth, and GUI skeleton + AI provider abstraction.
- Month 2 (May 2026): GUI MVP (create/run/view), basic agent runtime, and 1 MCP adapter (Notion).
- Month 3 (Jun 2026): Multi-agent runtime polish, 2nd MCP adapter (Figma or Stitch), multi-model wiring.
- Month 4 (Jul 2026): Streaming UI updates, tests, packaging, docs, and publish prep.

## Quarter-by-quarter breakdown

Month 1 — Design & Core Foundations (Apr 2026)

- Week 1
  - Finalize acceptance criteria for the 4-month sprint and core AI flows (create -> run -> view).
  - Designer: produce Figma wireframes for the main flows (Agent list, Agent editor, Run console).
  - Engineering: create GUI skeleton (routes/pages) and wire basic auth using `auth/login.ts` and session handling.
  - Create the AI provider abstraction iface (for LLMs) in `src/utils/` with a simple mock provider.

- Week 2–4
  - Implement minimal API endpoints required by the UI: list agents, create agent, trigger run, fetch run results.
  - Add a simple local run executor for early testing (no LLM calls yet) so UI flows can be exercised.
  - Designer & engineer handoff: component tokens, color, spacing, and a short dev spec.

Month 2 — GUI MVP & First Agent Runtime (May 2026)

- Week 5–6
  - Implement the GUI flows: Agent list, Agent editor, a Run console with input and results area.
  - Integrate the UI with API endpoints implemented in Month 1.
  - Start wiring the AI provider abstraction to a real LLM provider (feature-flagged); run a smoke test.

- Week 7–8
  - Implement a basic agent runtime: agent registry, simple lifecycle (start, stop, logs), and persistence for runs.
  - Implement the first MCP adapter for Notion (auth flow, simple read/write contract).
  - Create unit tests for agent lifecycle and adapter boundaries.

Month 3 — Multi-Agent Polishing & Second MCP (Jun 2026)

- Week 9–10
  - Harden the multi-agent runtime: concurrency control, error handling, retries, and metrics.
  - Add a second MCP adapter (Figma or Stitch) and wire a sample flow that stitches data between systems.

- Week 11–12
  - Implement multi-model wiring: add a second LLM provider and the provider selection UI.
  - Add streaming support in the run UI for partial outputs and progress updates.
  - Add integration tests covering agent -> MCP -> model end-to-end paths.

Month 4 — Finalize, Package, Publish (Jul 2026)

- Week 13–14
  - Run full e2e tests and performance smoke-tests. Fix critical bugs.
  - Polish UX and small accessibility fixes from initial testing and reviewer feedback.

- Week 15–16
  - Prepare the library packaging (public API, typings), create sample integration docs and a short tutorial.
  - Add CI step to publish to npm on tag and draft the release notes.
  - Final review and prepare a release candidate; plan post-release sprint for bug fixes.

## Frontend-specific roadmap (GUI + Figma + Stitch & MCP)

Frontend objective: ship a productive, polished GUI so non-CLI users can adopt Cortex Notion quickly.

Tech and stack (suggestion / assumption)

- Framework: React + Vite / Next.js (Pick whatever the repo prefers). Keep TypeScript.
- State: React Query (or SWR) for server state, small local state via Zustand or Context.
- Styling: Design tokens in Figma; CSS-in-JS or Tailwind depending on team preference.
- Tests: Jest + React Testing Library; e2e with Playwright.

Core screens and components

- Agent list (create/edit/delete, filter/search)
- Agent editor (blocks/steps, model selection, MCP bindings)
- Run console (input, live output streaming, logs)
- Settings & Integrations (MCP keys, model provider configuration)

UX flow priorities (MVP -> v1)

- MVP: list + run + basic editor + results display
- v1: streaming output, templates, import/export agents, scheduled runs
- v1.1: collaboration (share, comments), improved templates marketplace

Figma & Stitch plan

- Week 1–2 (Q2): Figma wireframes for all MVP flows.
- Week 3–4 (Q2): Stitch prototype (or equivalent) for 2 critical flows: "create-and-run" and "connect-MCP".
- Deliverables: Figma link, component library, interaction spec, exportable assets for dev.

Integration notes (MCP & Stitch)

- Represent MCP adapters as connectable endpoints in the UI. Provide clear error and auth flows.
- Stitch-first: prototype Stitch wireframes mapping how MCPs stitch data between systems and the agent run.

## Milestones & success metrics

- GUI MVP (by end of Q2): criteria: create/run agent end-to-end in < 10 steps; UAT by 2 reviewers.
- Multi-agent infra (by end of Q3): criteria: run 10 concurrent agents reliably; run history persisted and queryable.
- Multi-model support (by end of Q4): criteria: 2 providers selectable; basic streaming output in UI.
- npm library publish (by end of Q1 2027): criteria: well-documented package, 1 example app, CI publish pipeline.

## Risks and mitigations

- Risk: LLM provider rate limits/price spikes. Mitigation: provider abstraction, fallbacks, rate limiting.
- Risk: Over-scoped frontend. Mitigation: strict MVP scope, measure progress by E2E flow completion.
- Risk: Adapter complexity for many MCPs. Mitigation: define a clear adapter interface and tests; ship 2-3 high-value adapters first.

## Dependencies

- Design: Figma resources and designer availability.
- Access: API keys for model providers, Notion, Figma, Stitch (MCP) during dev and testing.
- CI: permission to create publish pipeline and npm organization or package.

Resourcing & rough effort estimates (small team)

- Design + prototyping: 2–4 weeks.
- GUI MVP implementation: 6–10 weeks.
- Multi-agent + adapters: 8–12 weeks.
- Multi-model and production hardening: 8–12 weeks.
- Packaging & publish: 4–6 weeks.

## Recommended immediate next steps (first 30 days)

1. Approve this roadmap and confirm priority scope for the GUI MVP.
2. Designer: start Figma wireframes for the core flows (share a link). Put "Figma MCP" and Stitch flows first.
3. Create issues from the MVP UI flows and the multi-agent scaffolding.
4. Implement a minimal API endpoint used by the UI to create/list agents and a simple read-only run executor.

## Appendix: deliverables checklist

- [x] ROADMAP.md (this file)
- [ ] Figma designs and Stitch prototypes for the two core flows
- [ ] GUI skeleton + Agent list + Agent editor + Run view
- [ ] Multi-agent architecture doc + adapters for 2 MCPs
- [ ] LLM provider abstraction + 2 providers
- [ ] CI/CD for npm publishing + package documentation
