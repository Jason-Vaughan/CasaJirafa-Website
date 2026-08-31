"use client";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { BlockedDateRange } from "@/lib/calendar";

interface CalendarProps {
  blockedRanges: BlockedDateRange[];
}

export default function AvailabilityCalendar({ blockedRanges }: CalendarProps) {
  // Convert our {start, end} ranges to the {from, to} format react-day-picker expects
  const disabledDates = blockedRanges.map((range) => ({
    from: new Date(range.start),
    to: new Date(range.end.getTime() - 24 * 60 * 60 * 1000), // Subtract 1 day because checkout day is bookable
  }));

  // Also disable past dates
  disabledDates.push({
    from: new Date(1970, 0, 1),
    to: new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
  });

  return (
    <div className="bg-stone-800 p-4 rounded-xl inline-block shadow-lg mx-auto overflow-x-auto w-full max-w-full">
      <style>{`
        .rdp {
          --rdp-cell-size: 40px;
          --rdp-accent-color: #ffffff;
          --rdp-background-color: #44403c;
          --rdp-accent-color-dark: #f5f5f4;
          --rdp-background-color-dark: #57534e;
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-selected: 2px solid var(--rdp-accent-color);
          margin: 0;
          color: white;
        }
        
        .rdp-day {
          position: relative;
        }

        /* Tooltip styles */
        .rdp-day:not(.rdp-day_outside):hover::after {
          content: 'Available';
          position: absolute;
          bottom: 110%;
          left: 50%;
          transform: translateX(-50%);
          background: #1c1917;
          color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 50;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }
        
        .rdp-day_disabled:not(.rdp-day_outside):hover::after {
          content: 'Not Available';
          background: #7f1d1d;
        }

        /* X marks for disabled days */
        .rdp-day_disabled {
          color: #a8a29e !important;
          opacity: 1 !important;
          background-image: 
            linear-gradient(to top right, transparent calc(50% - 1px), #c54b34 calc(50% - 1px), #c54b34 calc(50% + 1px), transparent calc(50% + 1px)),
            linear-gradient(to bottom right, transparent calc(50% - 1px), #c54b34 calc(50% - 1px), #c54b34 calc(50% + 1px), transparent calc(50% + 1px)) !important;
        }
        
        /* Clean up outside days so they don't look weird */
        .rdp-day_outside {
          background-image: none !important;
          opacity: 0.3 !important;
        }

        @media (max-width: 768px) {
          .rdp-months {
            flex-direction: column;
          }
        }
      `}</style>
      <DayPicker
        mode="multiple"
        numberOfMonths={2}
        disabled={disabledDates}
        showOutsideDays
        fixedWeeks
      />
    </div>
  );
}
