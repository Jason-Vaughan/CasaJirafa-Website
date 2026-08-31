<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Deployment & Feature Flag Contract
**CRITICAL RULE:** The `main` branch (Production) is strictly **LOCKED**. 
1. **Always build on `stage`**: ALL new features, experiments, or layout changes MUST be built and pushed to the `stage` branch first.
2. **Wire to the Feature Matrix**: Any new visual feature or section MUST be wired into the `<FeatureMatrix />` modal (`src/components/FeatureMatrix.tsx`) using a cookie-based feature flag. This allows the user to toggle the feature on/off in the staging environment.
3. **Never touch Production unless explicitly commanded**: You are NEVER to push, merge, or cherry-pick code to `main` unless the user explicitly commands you to "ship [Feature Name] to prod".
