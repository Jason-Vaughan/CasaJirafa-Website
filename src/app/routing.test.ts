import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';

describe('Internationalization Routing Constraints', () => {
  it('should not have any page.tsx files outside of the [locale] directory', () => {
    const appDir = path.join(__dirname);
    const files = fs.readdirSync(appDir, { withFileTypes: true });
    
    // We expect layout.tsx and maybe error.tsx/not-found.tsx in the root.
    // But page.tsx should NOT be in the root of src/app!
    const pageFiles = files.filter(f => f.isFile() && f.name === 'page.tsx');
    expect(pageFiles).toHaveLength(0);
    
    // Check that there are no subdirectories containing page.tsx outside of [locale] and actions
    const directories = files.filter(f => f.isDirectory() && !f.name.startsWith('_') && f.name !== '[locale]' && f.name !== 'actions');
    
    for (const dir of directories) {
      const dirPath = path.join(appDir, dir.name);
      const subFiles = fs.readdirSync(dirPath);
      // We shouldn't have a page.tsx in an unlocalized route!
      expect(subFiles).not.toContain('page.tsx');
    }
  });
});
