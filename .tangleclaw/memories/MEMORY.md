# Session Memory

This file persists context across AI sessions. Update it with key decisions, progress, and open questions.

## Boot Pointer (Open Queue Priorities)
1. **Email Service Integration**: Hook up the "Send Inquiry" form submission in `BookingSection.tsx` to an email provider (like Resend or SendGrid) to deliver booking requests.
2. **Review Pricing Design & Add Real Rates**: Placeholder pricing cards exist on the staging site. Still waiting for real rates or design tweaks. The user explicitly stated: "not ready for merch and rates yet, keep them on stage please."

## Last Session: 2026-09-06
**Summary**: Rolled out the full i18n translation system (English, Spanish, French) across the main site and synced it with the Guidebook app. Migrated the gallery component into the localized routing structure to fix a production 400 error. Replaced Next.js `<Link>` components with standard `<a>` tags for external rewrites, and added architectural Vitest regression tests to prevent orphaned feature flags and double headers. Synchronized TangleClaw system policy rules.
**Next Steps**: Wire up the "Send Inquiry" form submission to an email API.

## Core Directives
- **Environment:** The user is working on a remote machine (`cursatory`) via Tangleclaw. When providing URLs to web servers running on this machine, ALWAYS use the Tailscale Magic DNS name (`cursatory.tail123678.ts.net`) instead of `localhost` or `127.0.0.1` so the user can connect remotely.
