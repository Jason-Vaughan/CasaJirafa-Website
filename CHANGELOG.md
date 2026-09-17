# Changelog

All notable changes to CasaJirafa-Website are documented in this file.

## [Unreleased]

## [0.2.2] - 2026-09-16

### Fixed
- Replaced Next.js `<Link>` components with standard `<a>` tags in Navbar components to prevent client-side routing errors for `/guidebook`.
- Updated `src/proxy.ts` to detect `/guidebook` routes and natively redirect to the correct localized path (e.g. `/guidebook/en`), fixing 404 errors when navigating to the external Guidebook Vercel app.

## [0.2.1] - 2026-09-06

### Fixed
- Relocated gallery page inside `[locale]` dynamic route to fix a 400 error in production.
- Updated sitemap generation to output localized URLs (`/en/*`, `/es/*`, `/fr/*`) to prevent SEO regressions.
- Replaced Next.js `<Link>` components with standard `<a>` tags for `/guidebook` external rewrites to fix CI build failures.

### Internal
- Synchronized TangleClaw global rules in `AGENTS.md` to reflect shared plan URLs and merge strategy policy updates.

## [0.2.0] - 2026-08-30

### Added
- Created `vitest` test suite with `react-testing-library` and added tests for iCal parsing, calendar UI rendering, and OpenGraph requirements.
- Implemented `calendar.ts` to fetch and parse live Airbnb ICS data into blocked date ranges.
- Built interactive `AvailabilityCalendar` UI with `react-day-picker` and wired it up to `BookingSection` form.
- Added 1200x630 compressed `opengraph-image.jpg` and `twitter-image.jpg` for strict iMessage/social link previews.

### Fixed
- Resolved Next.js SSR timezone bugs that shifted parsed Airbnb dates when passing them from the server to the client.
- Fixed `react-day-picker` CSS constraints by properly targeting disabled form buttons with `text-decoration` and pointer events.
- Replaced Next.js `<Link>` with native `<a>` tags for intra-page anchor links to fix smooth scrolling.
