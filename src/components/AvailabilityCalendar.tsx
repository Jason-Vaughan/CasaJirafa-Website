"use client";

import { DayPicker, DateRange, DayProps, useDayRender } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { BlockedDateRange } from "@/lib/calendar";
import { useRef } from "react";

interface CalendarProps {
  blockedRanges: BlockedDateRange[];
  selectedRange?: DateRange;
  onSelectRange?: (range: DateRange | undefined) => void;
}

function CustomDay(props: DayProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { buttonProps, activeModifiers } = useDayRender(
    props.date,
    props.displayMonth,
    buttonRef
  );
  
  const isBooked = activeModifiers.disabled;
  const isOutside = activeModifiers.outside;

  if (isOutside) {
    return <div className="w-10 h-10 flex items-center justify-center opacity-20">{props.date.getDate()}</div>;
  }

  return (
    <div className="relative group w-10 h-10 p-0 m-0 cursor-pointer flex items-center justify-center">
      <button 
        {...buttonProps} 
        ref={buttonRef}
        className={`w-full h-full flex items-center justify-center transition-colors ${
          activeModifiers.selected ? 'bg-white text-stone-900 font-bold border-2 border-white' : 'hover:bg-stone-700'
        } ${isBooked ? 'opacity-60 cursor-not-allowed text-stone-400' : 'text-white'}`}
        disabled={isBooked}
      >
        {props.date.getDate()}
        
        {/* Red X for booked days */}
        {isBooked && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[70%] h-[2px] bg-[#c54b34] -rotate-45" />
          </div>
        )}
      </button>

      {/* Tooltip Overlay (Captures hover independently of the button) */}
      <div className="absolute inset-0 z-10" title={isBooked ? "Not Available" : "Available"} />
    </div>
  );
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
      <DayPicker
        mode="range"
        numberOfMonths={2}
        disabled={disabledDates}
        selected={selectedRange}
        onSelect={onSelectRange}
        showOutsideDays
        fixedWeeks
        components={{
          Day: CustomDay
        }}
      />
    </div>
  );
}
