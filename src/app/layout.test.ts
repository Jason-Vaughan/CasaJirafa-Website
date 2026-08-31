import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('Layout Metadata Safety', () => {
  it('should use dynamic VERCEL_ENV check for metadataBase to prevent OpenGraph regressions on preview environments', () => {
    const layoutPath = path.join(process.cwd(), 'src/app/[locale]/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');

    // Ensure they don't hardcode metadataBase to a static prod URL
    // which breaks preview environment OpenGraph images.
    expect(layoutContent).toContain('process.env.VERCEL_ENV === \'production\'');
    expect(layoutContent).toMatch(/metadataBase: new URL\(baseUrl\)/);
  });
});
