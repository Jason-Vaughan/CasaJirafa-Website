# Session Memory

This file persists context across AI sessions. Update it with key decisions, progress, and open questions.

## Boot Pointer (Open Queue Priorities)
1. **Review Pricing Design & Add Real Rates**: Placeholder pricing cards exist on the staging site. Still waiting for real rates or design tweaks. The user explicitly stated: "not ready for merch and rates yet, keep them on stage please."

## Last Session: 2026-09-16 (Prod Deploy)
**Summary**: Shipped the Guidebook external link fix to production (`main`) upon the operator's explicit command. Carefully cherry-picked the fix (`src/proxy.ts` and `<a>` tag changes) to avoid accidentally shipping the incomplete Merch and Pricing features currently on `stage`. Verified the GitHub Actions CI pipeline turned green for the production deployment.
**Next Steps**: Wait for the user to provide real rates or design tweaks for the Pricing cards.

## Core Directives
- **Environment:** The user is working on a remote machine (`cursatory`) via Tangleclaw. When providing URLs to web servers running on this machine, ALWAYS use the Tailscale Magic DNS name (`cursatory.tail123678.ts.net`) instead of `localhost` or `127.0.0.1` so the user can connect remotely.
