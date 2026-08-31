# Session Memory

This file persists context across AI sessions. Update it with key decisions, progress, and open questions.

## Boot Pointer (Open Queue Priorities)
1. **Email Service Integration**: Hook up the "Send Inquiry" form submission in `BookingSection.tsx` to an email provider (like Resend or SendGrid) to deliver booking requests.
2. **Review Analytics/Monitoring**: Set up basic telemetry or analytics for the landing page.
3. **Gallery Enhancements**: Add a full-page photo gallery modal or routing for the property.

## Last Session: 2026-08-30
**Summary**: Built the core UI for the Casa Jirafa website including Hero, Features, Location, and Host sections. Implemented a custom Airbnb `calendar.ts` parser that fetches live block dates and syncs them directly into a modified `react-day-picker` interactive calendar component inside the booking form. Resolved massive SSR timezone bugs and CSS selector constraints, generated strict 1200x630 OpenGraph link previews, and introduced a Vitest regression testing suite.
**Next Steps**: Wire up the "Send Inquiry" form submission to an email API.

## Core Directives
- **Environment:** The user is working on a remote machine (`cursatory`) via Tangleclaw. When providing URLs to web servers running on this machine, ALWAYS use the Tailscale Magic DNS name (`cursatory.tail123678.ts.net`) instead of `localhost` or `127.0.0.1` so the user can connect remotely.
