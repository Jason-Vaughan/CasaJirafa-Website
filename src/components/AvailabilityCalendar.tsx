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
    <div className="bg-stone-800 p-4 rounded-xl inline-block shadow-lg mx-auto overflow-x-auto w-full max-w-full custom-calendar-wrapper">
      <DayPicker
        mode="range"
        numberOfMonths={2}
        disabled={disabledDates}
        selected={selectedRange}
        onSelect={onSelectRange}
        showOutsideDays
        fixedWeeks
        modifiers={{
          booked: disabledDates
        }}
        modifiersClassNames={{
          booked: 'casa-booked-day'
        }}
      />
    </div>
  );
}
