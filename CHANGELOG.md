# Changelog

All notable changes to CasaJirafa-Website are documented in this file.

## [Unreleased]

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
