# Session Memory

This file persists context across AI sessions. Update it with key decisions, progress, and open questions.

## Boot Pointer (Open Queue Priorities)
1. **Review Pricing Design & Add Real Rates**: Placeholder pricing cards exist on the staging site. Still waiting for real rates or design tweaks. The user explicitly stated: "not ready for merch and rates yet, keep them on stage please."

## Last Session: 2026-09-16
**Summary**: Resolved a critical production issue where the external Guidebook link was broken. Swapped Next.js `<Link>` components in the navigation for standard `<a>` tags to stop client-side routing crashes, and updated the `proxy.ts` middleware to properly intercept `/guidebook` and natively redirect it to the localized path (e.g., `/guidebook/en`) before handing off to the external Vercel rewrite.
**Next Steps**: Wait for the user to provide real rates or design tweaks for the Pricing cards.

## Core Directives
- **Environment:** The user is working on a remote machine (`cursatory`) via Tangleclaw. When providing URLs to web servers running on this machine, ALWAYS use the Tailscale Magic DNS name (`cursatory.tail123678.ts.net`) instead of `localhost` or `127.0.0.1` so the user can connect remotely.
