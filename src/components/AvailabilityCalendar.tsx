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
  const disabledDates = (date: Date) => {
    // Normalize the checked date to midnight
    const checkDate = new Date(date);
    checkDate.setHours(0, 0, 0, 0);
    const checkTime = checkDate.getTime();

    // Disable past dates
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (checkTime < today.getTime()) return true;

    // Check against all blocked ranges
    return blockedRanges.some((range) => {
      const from = new Date(range.start);
      from.setHours(0, 0, 0, 0);
      
      const to = new Date(range.end);
      to.setDate(to.getDate() - 1); // Checkout day is bookable
      to.setHours(0, 0, 0, 0);

      return checkTime >= from.getTime() && checkTime <= to.getTime();
    });
  };

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
