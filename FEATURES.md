# Feature Index

<!--
Maintained automatically: the wrap-step handler appends
stubs when PRs touch new files. Fill in descriptions before
next wrap.

Format: - **Name** — short description. `file.js` plus stable anchors:
`file.js#symbolName` for a function/const, or a literal route string
for server routes. NO :line pointers — nothing re-verifies them, so
they rot.
-->

## UI / Web
- **Homepage Layout** — Hero section, property highlights, and photo gallery. `src/app/page.tsx#Home`
- **Global Navigation** — Sticky header with navigation and booking CTAs. `src/components/Navbar.tsx#Navbar`
- **Global Footer** — Footer with site links and copyright. `src/components/Footer.tsx#Footer`
- **Localized Homepage Layout** — Localized homepage layout. `src/app/[locale]/page.tsx`
- **Localized Photo Gallery** — Localized photo gallery. `src/app/[locale]/gallery/page.tsx`
- **Root Layout** — Root layout with i18n support. `src/app/layout.tsx`
- **Favicon Generator** — Dynamic favicon generator. `src/app/icon.tsx`
- **Layout Tests** — Tests for the root layout component. `src/app/layout.test.ts`
- **OpenGraph Tests** — OpenGraph image generation tests. `src/app/opengraph.test.ts`
- **Routing Tests** — Next.js routing architecture tests. `src/app/routing.test.ts`
- **Availability Calendar Tests** — Tests for the AvailabilityCalendar UI. `src/components/AvailabilityCalendar.test.tsx`
- **Booking Section Tests** — Tests for the BookingSection component. `src/components/BookingSection.test.tsx`
- **Booking Section** — Form and availability wrapper for bookings. `src/components/BookingSection.tsx`
- **Feature Matrix Tests** — Tests for the FeatureMatrix feature flags. `src/components/FeatureMatrix.test.ts`
- **Feature Matrix** — Dev-only feature flag toggler modal. `src/components/FeatureMatrix.tsx`
- **Guidebook CTA** — Guidebook call-to-action section. `src/components/GuidebookCTA.tsx`
- **Language Switcher** — i18n locale switcher component. `src/components/LanguageSwitcher.tsx`
- **Merch Section** — Merchandise promotion section. `src/components/MerchSection.tsx`
- **Mobile Navigation** — Mobile navigation menu overlay. `src/components/MobileNav.tsx`
- **Policies** — House rules and booking policies. `src/components/Policies.tsx`
- **Pricing** — Pricing and seasonal rates display. `src/components/Pricing.tsx`
- **Testimonials** — Guest reviews section. `src/components/Testimonials.tsx`
- **Version Tag** — Staging branch version display. `src/components/VersionTag.tsx`
- **Dictionaries Tests** — Tests for i18n dictionary loading. `src/i18n/dictionaries.test.ts`
- **English Dictionary** — English translation strings. `src/i18n/en.json`
- **Spanish Dictionary** — Spanish translation strings. `src/i18n/es.json`
- **French Dictionary** — French translation strings. `src/i18n/fr.json`

## Server / API
- **Robots Generator** — Next.js robots.txt generator. `src/app/robots.ts`
- **Sitemap Generator** — Next.js sitemap generator. `src/app/sitemap.ts`
- **Send Inquiry Action** — Server action for sending booking inquiries via email. `src/app/actions/sendInquiry.ts`
- **Locale Proxy** — Next.js proxy for detecting locales and rewriting paths. `src/proxy.ts`
- **i18n Dictionaries Loader** — Loads language dictionaries dynamically. `src/i18n/dictionaries.ts`

## Governance / Engines
- **Agent Rules** — TangleClaw agent configuration and rules. `AGENTS.md`
- **Project Map** — High-level architecture map. `PROJECT-MAP.md`
- **Project Context** — System prompt context and directives. `PROJECT_CONTEXT.md`

## CLI / Tooling
- **Next Config** — Next.js configuration, redirects, and rewrites. `next.config.ts`
- **Package Lock** — NPM dependency lockfile. `package-lock.json`
- **Package Manifest** — NPM manifest and scripts. `package.json`
- **Vitest Config** — Vitest testing configuration. `vitest.config.ts`
- **Server Only Mocks** — Vitest mock for server-only imports. `src/__mocks__/server-only.ts`
