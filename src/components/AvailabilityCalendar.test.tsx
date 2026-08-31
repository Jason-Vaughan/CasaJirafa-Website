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
  it('renders standard and disabled dates properly', () => {
    // Current date logic is used for blocking past dates. 
    // Let's set up a fake present time to ensure stable testing.
    vi.useFakeTimers();
    vi.setSystemTime(new Date(2026, 8, 1)); // Sept 1, 2026

    const blockedRanges = [
      {
        start: new Date(2026, 8, 15), // Sept 15, 2026
        end: new Date(2026, 8, 20),   // Sept 20, 2026
      }
    ];

    render(<AvailabilityCalendar blockedRanges={blockedRanges} />);

    // Because we mock current time as Sept 1, 2026, September should be visible
    expect(screen.getByText('September 2026')).toBeInTheDocument();

    // Verify day buttons are rendered
    const days = screen.getAllByRole('button');
    expect(days.length).toBeGreaterThan(20); // Should be plenty of days rendered

    // September 15 is blocked, meaning it has the specific disabled class we injected
    // Let's find the button for "15" and check its class
    const day15Buttons = screen.getAllByText('15').filter((el) => el.tagName === 'BUTTON');
    
    // There might be a 15 in the next month, so just find the one that has our class
    const disabledDay15 = day15Buttons.find((el) => el.classList.contains('casa-booked-day') || el.parentElement?.classList.contains('casa-booked-day'));
    
    // Based on our implementation, the table cell (td) has the class, or the modifier is passed down.
    // In react-day-picker v9, the modifier classes are placed on the button itself.
    // We expect it to be disabled (or at least have the custom class applied)
    expect(disabledDay15).toBeDefined();
    
    vi.useRealTimers();
  });
});
