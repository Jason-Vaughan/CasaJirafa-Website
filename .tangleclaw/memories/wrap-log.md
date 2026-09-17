## Last Session: 2026-09-16 (Stage Build)
**Summary**: Resolved a critical production issue where the external Guidebook link was broken. Swapped Next.js `<Link>` components in the navigation for standard `<a>` tags to stop client-side routing crashes, and updated the `proxy.ts` middleware to properly intercept `/guidebook` and natively redirect it to the localized path (e.g., `/guidebook/en`) before handing off to the external Vercel rewrite.
**Next Steps**: Wait for the user to provide real rates or design tweaks for the Pricing cards.

## Last Session: 2026-09-06
**Summary**: Rolled out the full i18n translation system (English, Spanish, French) across the main site and synced it with the Guidebook app. Migrated the gallery component into the localized routing structure to fix a production 400 error. Replaced Next.js `<Link>` components with standard `<a>` tags for external rewrites, and added architectural Vitest regression tests to prevent orphaned feature flags and double headers. Synchronized TangleClaw system policy rules.
**Next Steps**: Wire up the "Send Inquiry" form submission to an email API.

## Last Session: 2026-08-30
**Summary**: Built the core UI for the Casa Jirafa website including Hero, Features, Location, and Host sections. Implemented a custom Airbnb `calendar.ts` parser that fetches live block dates and syncs them directly into a modified `react-day-picker` interactive calendar component inside the booking form. Resolved massive SSR timezone bugs and CSS selector constraints, generated strict 1200x630 OpenGraph link previews, and introduced a Vitest regression testing suite.
**Next Steps**: Wire up the "Send Inquiry" form submission to an email API.
