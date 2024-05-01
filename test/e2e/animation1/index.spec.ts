import { test, expect } from '@playwright/test';

import { getEntriesAndErrors } from '../../util/entries';

const PAGELOAD_DELAY = 200;
const ANIMATION_DELAY = 3000;

test.describe('TTVC', () => {
  test('an animation delay', async ({ page }) => {
    await page.goto(`/test/animation1?delay=${PAGELOAD_DELAY}`, {
      waitUntil: 'networkidle',
    });

    const { entries } = await getEntriesAndErrors(page);

    expect(entries.length).toBe(1);
    expect(entries[0].duration).toBeLessThanOrEqual(ANIMATION_DELAY + PAGELOAD_DELAY);
  });
});
