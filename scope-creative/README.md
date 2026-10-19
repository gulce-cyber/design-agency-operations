# Scope Creative — RapidDev Phase 1 demonstration

An interactive React frontend for Savannah Copeland’s four Phase 1 workflows. The polished Scope Creative interface is retained. The RapidDev navy/red walkthrough is a separate presentation layer using the previously established logo assets and styling.

## Open or develop

Open the included `Scope-Creative-Preview.html` directly in a browser. The standalone preview embeds its JavaScript, application CSS, and RapidDev logo assets. Fonts use Google Fonts with system fallbacks.

For development, use Node.js 22+ and pnpm 11:

```sh
pnpm install
pnpm dev
pnpm test
pnpm build
```

## The four workflows

1. **Founder daily priorities — Overview.** Actionable requests, upcoming Asana deadlines, capacity conflicts, and invoice drafts link directly to their workflows. Creative project artwork and the existing Scope visual identity are preserved.
2. **Gmail → Creative brief → Asana — Inbox and Projects.** Review sample emails and extracted deliverables, edit and approve briefs, save clarification drafts, simulate client replies, and simulate Asana project/task creation. Templates, rule-based suggestions, default assignees, duplicate handling, and creation retries are retained. Projects is now a lightweight reference list: approved brief, source email where associated, task/subtask preview, proposed assignments, and Asana reference. Boards, progress management, task-completion controls, and editing an existing project’s deadline or template have been removed. Production lifecycle management stays in Asana.
3. **Historical effort → Team capacity — Team.** Historical Clockify effort is included in the main experience. Group July–September sample records by deliverable, client, or project; select a month; inspect typical effort, observed ranges, source records, and quality warnings. Typical effort is median recorded hours per deliverable, normalized by quantity. Mixed deliverables and small samples are explicitly qualified. Weekly available hours, current booked hours, upcoming allocations, overload warnings, and basic role/capacity recommendations are shown together. This supports a human decision rather than advanced forecasting.
4. **Recorded time → Invoice draft → Manual handoff — Billing.** Separate sample Clockify time records feed draft preparation; planned Asana allocations do not become billable time. Correct source associations and hours, configure client rates/rounding/grouping, generate drafts, edit line items and invoice details, review totals, and export CSV for manual transfer into the existing invoicing process. Source edits flag drafts for regeneration. Regeneration preserves matched time, notes, and payment terms. Export includes draft status, manual-handoff metadata, and a not-sent delivery status.

Settings supports the same four workflows: rates, availability, intake templates, assignment rules, integration states, processing retry, and basic AI safeguards.

## RapidDev walkthrough

Use the floating **Explore this page** launcher. Four workflow stops explain the purpose, functionality, and design rationale. Next/previous controls and direct workflow navigation work against the app’s navigation. Projects stays within the intake stop; Settings is explained in the relevant supporting context. The panel can be closed, updates when the page changes, and suspends while a Scope dialog or mobile navigation is open.

RapidDev’s `rd-` CSS namespace, navy/red tokens, official presentation assets, and distinct sans-serif hierarchy stay within the walkthrough. Scope’s application shell, colors, typography, and branding remain separate.

## Prototype boundaries

- AI, Gmail, Asana, Clockify, integration sync, source records, automated processing, and task creation use simulated data. No live integration is connected and no external system is changed.
- CSV export is a manual handoff. There is no automatic Zoho synchronization, invoice delivery, or payment processing.
- No CRM, financial reporting, independent project management, advanced forecasting, or future-phase module is introduced.
- The prototype uses a fixed October 2026 demonstration snapshot and illustrative historical records. UI dates are sample data, not a live feed.
- Browser edits persist under `scope-studio-v1` in localStorage. Existing founder-name records migrate to Savannah Copeland without resetting other edits. Clearing that key resets the demo.
- This is a frontend presentation, not the production implementation or secure-access backend.

## Files and verification

- `src/main.jsx`: Scope screens and shared workflow interactions.
- `src/capacity.js` and `src/billing.js`: separate historical/planning and recorded-time models.
- `src/components/`: Team capacity, included historical analysis, and the RapidDev walkthrough.
- `src/styles/`: the retained Scope identity and isolated presentation styles.
- `PHASE1_ALIGNMENT.md`: correction review and presentation boundaries.
- `scripts/test.mjs`: component and model checks covering all four workflows and exception paths.

Production compilation and workflow checks pass. Browser automation is unavailable because of the desktop app’s URL security policy, so screenshot-based visual QA remains unverified. Deployed to Vercel production: [Scope Creative](https://scope-creative-os.vercel.app). Deployment status is READY; the live HTML and JavaScript match the tested build. Integrations remain simulated.
