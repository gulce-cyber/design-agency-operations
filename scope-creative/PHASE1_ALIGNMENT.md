# Scope Creative — Phase 1 alignment review

The existing polished Scope Creative design has been retained. This revision follows the seven requested corrections and the prior RapidDev Phase 1 proposal-review context, including historical workload analysis and forward capacity recommendations.

| Requested correction | Implemented result |
|---|---|
| Include historical Clockify analysis | Always-visible Team section with category/client/project and period filters, normalized typical effort, observed ranges, source records, excluded-record warnings, weekly working hours, future allocations, and basic assignment guidance. No optional or outside-scope label remains. |
| Keep Projects subordinate to intake and Asana | Lightweight reference table with approved briefs, source links where available, task/subtask previews, proposed assignees, assignment rules, and simulated creation/retry. Removed board/grid/list switching, project progress management, task-completion controls, and existing-project deadline/template editing. |
| Correct founder identity | Savannah Copeland and SC initials throughout the application, activity, new requests, profile, walkthrough, and migrated browser records. Existing data is preserved. |
| Preserve billing with manual handoff | Recorded-time corrections, monthly preparation, editable drafts, rates/rounding/grouping, totals, and CSV remain. Export is explicitly for the existing invoicing process; metadata says manual handoff and not sent. No automatic Zoho sync, delivery, or payments. |
| Add the established RapidDev walkthrough | Official retained RapidDev logo/mark assets, navy launcher, red actions, white contextual panel, design notes, and four interactive workflow stops. |
| Separate identities | Scope’s visual system remains in the client app. RapidDev presentation uses isolated `rd-` styles and tokens; the walkthrough suspends for client forms. |
| Avoid future-phase features | Four workflows plus supporting configuration. No CRM, financial reporting, advanced project management, autonomous staffing, or other future-phase module is added. Integrations and automated actions are labeled simulated. |

## Demo sequence

1. Start in Overview and open **Explore this page**. Use **Keep exploring** to visit the other three workflows, or navigate through the app while the contextual panel stays open.
2. In Inbox, generate and edit an OLIO brief, save a clarification draft if desired, simulate the client response, approve the brief, and create a sample Asana reference. Review task suggestions without changing Asana task completion or production status.
3. In Team, compare historical effort and quality warnings, change period/grouping, inspect source records, select an upcoming week, and review capacity guidance. Working-hour changes feed the available-hours totals.
4. In Billing, correct unmatched records, generate drafts from recorded time, edit invoice details, mark ready, and export the CSV for manual transfer. Proposed Asana work is kept out of billing.

## Verification and limits

Workflow/model checks cover navigation, intake and simulated creation, read-only Asana references, assignment suggestions and retry, historical normalization and filters, weekly totals, source-time matching, rounding/grouping and regeneration, invoice edits and manual CSV export, founder-data migration, and four-stop walkthrough navigation/suspension. Production compilation passes.

The standalone preview embeds the build assets and presentation logos. Browser visual QA remains unverified due to the desktop URL security policy. Deployed to Vercel production: [Scope Creative](https://scope-creative-os.vercel.app). Deployment status is READY; the live HTML and JavaScript match the tested build. Integrations remain simulated.

## Header scope correction

Global workspace search, its dialog, and the Command/Ctrl+K handler have been removed. The header retains the current page, the Phase 1 demo indicator, scoped notifications, and Savannah Copeland’s profile. Intake/project filters, historical effort filters, and invoice period selection remain available in their respective workflows.
