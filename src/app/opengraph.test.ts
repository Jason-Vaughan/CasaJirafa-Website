import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

describe('OpenGraph & SEO Configuration', () => {

  it('opengraph-image.jpg exists and is strictly under 300KB for iMessage compatibility', () => {
    const ogImagePath = path.join(__dirname, 'opengraph-image.jpg');
    
    // 1. Assert the file exists
    expect(fs.existsSync(ogImagePath)).toBe(true);

    // 2. Assert the file size is small enough for Apple's strict link preview limits
    const stats = fs.statSync(ogImagePath);
    const sizeInKB = stats.size / 1024;
    expect(sizeInKB).toBeLessThan(300); // 300KB limit

    // 3. Strict hash check to ensure the photo is the correct rooftop photo
    const fileBuffer = fs.readFileSync(ogImagePath);
    const hashSum = crypto.createHash('sha256');
    hashSum.update(fileBuffer);
    const hex = hashSum.digest('hex');
    expect(hex).toBe('46df12621d631edd870e54ea772b4ee8cd36ed0f1c0f15e6e7e883b9f60b3df3');
  });

  it('twitter-image.jpg exists and is strictly under 300KB', () => {
    const twitterImagePath = path.join(__dirname, 'twitter-image.jpg');
    
    expect(fs.existsSync(twitterImagePath)).toBe(true);

    const stats = fs.statSync(twitterImagePath);
    const sizeInKB = stats.size / 1024;
    expect(sizeInKB).toBeLessThan(300);
  });
});
