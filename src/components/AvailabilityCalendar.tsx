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
        .rdp-day_disabled {
          text-decoration: line-through;
          color: #78716c;
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
