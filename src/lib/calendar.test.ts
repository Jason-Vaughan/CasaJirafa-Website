import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getBlockedDates } from './calendar';

const mockIcalData = `
BEGIN:VCALENDAR
PRODID;X-RICAL-TZSOURCE=TZINFO:-//Airbnb Inc//Hosting Calendar 0.8.8//EN
CALSCALE:GREGORIAN
VERSION:2.0
BEGIN:VEVENT
DTEND;VALUE=DATE:20260905
DTSTART;VALUE=DATE:20260901
UID:14dfa8b0cf200f6b@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
BEGIN:VEVENT
DTEND;VALUE=DATE:20261015
DTSTART;VALUE=DATE:20261010
UID:14dfa8b0cf200f6c@airbnb.com
SUMMARY:Airbnb (Not available)
END:VEVENT
END:VCALENDAR
`;

describe('getBlockedDates', () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    global.fetch = vi.fn();
  });

  it('successfully fetches and parses ical data into BlockedDateRange array', async () => {
    vi.mocked(fetch).mockResolvedValue({
      text: () => Promise.resolve(mockIcalData)
    } as Response);

    const dates = await getBlockedDates();

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(dates).toHaveLength(2);

    // Verify first event (Sept 1 to Sept 5, 2026)
    expect(dates[0].start.getFullYear()).toBe(2026);
    expect(dates[0].start.getMonth()).toBe(8); // 0-indexed, so September is 8
    expect(dates[0].start.getDate()).toBe(1);
    
    expect(dates[0].end.getFullYear()).toBe(2026);
    expect(dates[0].end.getMonth()).toBe(8);
    expect(dates[0].end.getDate()).toBe(5);
  });

  it('returns empty array on fetch failure', async () => {
    vi.mocked(fetch).mockRejectedValue(new Error('Network error'));
    
    const dates = await getBlockedDates();
    
    expect(dates).toEqual([]);
  });
});
