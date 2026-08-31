# Cross-Session Learnings — CasaJirafa-Website

## 2026-08-30 — Next.js SSR Date Boundary Shifting
When passing `Date` objects from a UTC-based Server Component to a Client Component, Next.js natively serializes the UTC timestamp. If the server instantiates a Date at midnight UTC (e.g. `new Date(2027, 0, 1)`), the client browser will shift it into local time (e.g., `Dec 31, 2026, 4:00 PM PST`), completely breaking day-based calendar components like `react-day-picker`. Fix: Instatiate server dates at Noon UTC (`Date.UTC(..., 12, 0, 0)`), then re-normalize to local midnight in the client.

## 2026-08-30 — Strict iMessage OpenGraph Limits
iMessage link previews are extremely unforgiving. An OpenGraph image must be strictly a 1.91:1 aspect ratio (e.g., exactly `1200x630`) and should be a compressed JPEG under ~300KB. A `1200x900` image or a 1MB PNG will often be silently rejected by Apple's cache servers, resulting in no preview bubble.

## 2026-08-30 — react-day-picker v9 DateRange Matching
`react-day-picker` v9 exposes a `DateRange` matcher interface (`{from: Date, to: Date}`), but passing an array of `DateRange` objects into the `disabled` or `modifiers` prop can behave inconsistently across multiple rendered months. A foolproof anti-pattern-avoiding approach is to bypass its internal interval matching by passing a raw `(date: Date) => boolean` evaluation function.
