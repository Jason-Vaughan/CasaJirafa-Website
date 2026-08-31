import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function findLayouts(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findLayouts(filePath, fileList);
    } else if (file === 'layout.tsx') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

describe('Layout Architecture Safety', () => {
  it('should use dynamic VERCEL_ENV check for metadataBase to prevent OpenGraph regressions on preview environments', () => {
    const layoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
    const layoutContent = fs.readFileSync(layoutPath, 'utf8');

    // Ensure they don't hardcode metadataBase to a static prod URL
    // which breaks preview environment OpenGraph images.
    expect(layoutContent).toContain('process.env.VERCEL_ENV === \'production\'');
    expect(layoutContent).toMatch(/metadataBase: new URL\(baseUrl\)/);
  });

  it('should not have duplicate layout.tsx files rendering Navbar or HTML tags to prevent double-header bugs', () => {
    const appDir = path.join(process.cwd(), 'src/app');
    const layoutFiles = findLayouts(appDir);
    
    // There must be a root layout
    const rootLayoutPath = path.join(process.cwd(), 'src/app/layout.tsx');
    expect(fs.existsSync(rootLayoutPath)).toBe(true);

    for (const layoutPath of layoutFiles) {
      if (layoutPath === rootLayoutPath) continue; // Skip the root layout

      const content = fs.readFileSync(layoutPath, 'utf8');

      // Nested layouts should never contain <html> or <body> tags
      expect(content).not.toMatch(/<html/i);
      expect(content).not.toMatch(/<body/i);

      // Nested layouts should not import or render the Navbar, to prevent double headers
      expect(content).not.toMatch(/import Navbar/i);
      expect(content).not.toMatch(/<Navbar/i);
    }
  });
});
