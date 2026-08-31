"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { BlockedDateRange } from "@/lib/calendar";

interface BookingSectionProps {
  blockedDates: BlockedDateRange[];
}

export default function BookingSection({ blockedDates }: BookingSectionProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  // Format dates for the HTML5 date inputs (YYYY-MM-DD)
  const checkinValue = dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : "";
  const checkoutValue = dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : "";

  return (
    <section id="book" className="py-24 bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to book your stay?</h2>
          <p className="mt-4 text-lg text-stone-300">
            Check our live calendar below for availability. Select your dates on the calendar and we'll automatically fill them into your inquiry.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start">
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-start">
            <AvailabilityCalendar 
              blockedRanges={blockedDates} 
              selectedRange={dateRange}
              onSelectRange={setDateRange}
            />
          </div>
          
          <div className="w-full lg:w-5/12 bg-stone-800 p-8 rounded-2xl shadow-xl border border-stone-700/50">
            <h3 className="text-2xl font-semibold mb-6">Send an Inquiry</h3>
            <form className="flex flex-col gap-4 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-stone-300">Check-in</label>
                  <input 
                    type="date" 
                    id="checkin" 
                    name="checkin" 
                    value={checkinValue}
                    readOnly
                    className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm [color-scheme:dark]" 
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-stone-300">Check-out</label>
                  <input 
                    type="date" 
                    id="checkout" 
                    name="checkout" 
                    value={checkoutValue}
                    readOnly
                    className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm [color-scheme:dark]" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300">Message</label>
                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm" placeholder="Any special requests or questions?"></textarea>
              </div>
              <button type="button" className="mt-2 rounded-md bg-[#c54b34] px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a63f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
