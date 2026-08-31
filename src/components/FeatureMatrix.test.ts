import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

function findFiles(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      findFiles(filePath, fileList);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

describe('FeatureMatrix Safety', () => {
  it('should not contain orphaned feature flags (flags in FeatureMatrix that are not used anywhere else)', () => {
    const matrixPath = path.join(process.cwd(), 'src/components/FeatureMatrix.tsx');
    if (!fs.existsSync(matrixPath)) return;
    
    const matrixContent = fs.readFileSync(matrixPath, 'utf8');
    
    // Extract all cookie flags defined in FeatureMatrix (e.g. ff_merch)
    const flagsIter = matrixContent.matchAll(/ff_[a-zA-Z0-9_]+/g);
    const flags = new Set(Array.from(flagsIter).map(m => m[0]));
    
    if (flags.size === 0) return;

    // Scan all other files to see if the flag is actually used
    const allFiles = findFiles(path.join(process.cwd(), 'src'));
    const usedFlags = new Set<string>();

    for (const filePath of allFiles) {
      if (filePath === matrixPath) continue;
      const content = fs.readFileSync(filePath, 'utf8');
      for (const flag of flags) {
        if (content.includes(flag)) {
          usedFlags.add(flag);
        }
      }
    }

    // If a flag is in FeatureMatrix but not used in any other file, it's an orphaned flag
    // (meaning the feature was likely shipped and the flag should be cleaned up!)
    for (const flag of flags) {
      expect(usedFlags.has(flag), `Feature flag '${flag}' is in FeatureMatrix but is not used in any other component. If you shipped this feature, please remove the flag from FeatureMatrix.tsx!`).toBe(true);
    }
  });
});
