"use client";

import { DayPicker, DateRange } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { BlockedDateRange } from "@/lib/calendar";

interface CalendarProps {
  blockedRanges: BlockedDateRange[];
  selectedRange?: DateRange;
  onSelectRange?: (range: DateRange | undefined) => void;
}

export default function AvailabilityCalendar({ blockedRanges, selectedRange, onSelectRange }: CalendarProps) {
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

        /* Available Tooltip */
        .rdp-day:not(.rdp-day_disabled):not(.rdp-day_outside):hover::after {
          content: 'Available';
          position: absolute;
          bottom: 100%;
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
        
        /* Not Available Tooltip */
        .rdp-day_disabled:not(.rdp-day_outside):hover::after {
          content: 'Not Available';
          position: absolute;
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: #7f1d1d;
          color: #fff;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          white-space: nowrap;
          pointer-events: none;
          z-index: 50;
          box-shadow: 0 4px 6px rgba(0,0,0,0.3);
        }

        /* X marks for disabled days (using pseudo-element instead of background) */
        .rdp-day_disabled {
          color: #a8a29e !important;
          opacity: 1 !important;
        }
        
        .rdp-day_disabled:not(.rdp-day_outside)::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 15%;
          width: 70%;
          height: 2px;
          background-color: #c54b34;
          transform: translateY(-50%) rotate(-45deg);
          pointer-events: none;
        }

        /* Clean up outside days */
        .rdp-day_outside {
          opacity: 0.2 !important;
        }
        .rdp-day_outside::before {
          display: none !important;
        }

        @media (max-width: 768px) {
          .rdp-months {
            flex-direction: column;
          }
        }
      `}</style>
      <DayPicker
        mode="range"
        numberOfMonths={2}
        disabled={disabledDates}
        selected={selectedRange}
        onSelect={onSelectRange}
        showOutsideDays
        fixedWeeks
      />
    </div>
  );
}
