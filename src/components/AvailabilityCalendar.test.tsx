import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AvailabilityCalendar from './AvailabilityCalendar';

// Mock matchMedia which is required by react-day-picker
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

describe('AvailabilityCalendar', () => {
  it('renders standard and disabled dates properly over a long range', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2027, 0, 1)); // Jan 1, 2027

    const blockedRanges = [
      {
        start: new Date(2027, 0, 26), // Jan 26
        end: new Date(2027, 1, 2),    // Feb 2
      },
      {
        start: new Date(2027, 1, 2),  // Feb 2
        end: new Date(2027, 2, 9),    // Mar 9
      }
    ];

    render(<AvailabilityCalendar blockedRanges={blockedRanges} />);

    // Jan 28 should be blocked (middle of first range)
    const day28 = screen.getAllByText('28').find(el => el.tagName === 'BUTTON');
    expect(day28).toBeDefined();
    expect(day28!.classList.contains('casa-booked-day') || day28!.parentElement?.classList.contains('casa-booked-day')).toBe(true);

    // Feb 15 should be blocked (middle of second range)
    const day15s = screen.getAllByText('15').filter(el => el.tagName === 'BUTTON' && !el.classList.contains('rdp-day_outside'));
    
    // There are two '15's (Jan 15 and Feb 15). Feb 15 should be blocked.
    const isFeb15Blocked = day15s.some(el => el.classList.contains('casa-booked-day') || el.parentElement?.classList.contains('casa-booked-day'));
    expect(isFeb15Blocked).toBe(true);
    
    vi.useRealTimers();
  });
});
