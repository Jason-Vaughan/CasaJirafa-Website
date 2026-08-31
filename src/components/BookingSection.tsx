"use client";

import { useState } from "react";
import { DateRange } from "react-day-picker";
import { format } from "date-fns";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import { BlockedDateRange } from "@/lib/calendar";
import { sendInquiryAction } from "@/app/actions/sendInquiry";

interface BookingSectionProps {
  blockedDates: BlockedDateRange[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dict: any;
}

export default function BookingSection({ blockedDates, dict }: BookingSectionProps) {
  const [dateRange, setDateRange] = useState<DateRange | undefined>();
  const [isPending, setIsPending] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Format dates for the HTML5 date inputs (YYYY-MM-DD)
  const checkinValue = dateRange?.from ? format(dateRange.from, "yyyy-MM-dd") : "";
  const checkoutValue = dateRange?.to ? format(dateRange.to, "yyyy-MM-dd") : "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!checkinValue || !checkoutValue) {
      alert(dict.messages.noDates);
      return;
    }

    setIsPending(true);
    setStatusMsg("");

    const formData = new FormData(e.currentTarget);
    // ensure checkin/checkout get included since they are readOnly but we need them in formData
    formData.set("checkin", checkinValue);
    formData.set("checkout", checkoutValue);
    
    try {
      const result = await sendInquiryAction(formData);

      if (result.success) {
        setStatusMsg(dict.messages.success);
        (e.target as HTMLFormElement).reset();
        setDateRange(undefined);
      } else {
        setStatusMsg(dict.messages.error + result.error);
      }
    } catch {
      setStatusMsg(dict.messages.unexpected);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <section id="book" className="py-24 bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{dict.title}</h2>
          <p className="mt-4 text-lg text-stone-300">
            {dict.subtitle}
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
          
          <div className="w-full lg:w-5/12 bg-stone-800 p-8 rounded-2xl shadow-lg border border-stone-700">
            <h3 className="text-2xl font-bold mb-6">{dict.formTitle}</h3>
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-300">{dict.labels.name}</label>
                  <input type="text" id="name" name="name" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 bg-stone-900 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-[#c54b34] sm:text-sm sm:leading-6" disabled={isPending} />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-300">{dict.labels.email}</label>
                  <input type="email" id="email" name="email" required className="mt-2 block w-full rounded-md border-0 py-2 px-3 bg-stone-900 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-[#c54b34] sm:text-sm sm:leading-6" disabled={isPending} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-stone-300">{dict.labels.checkin}</label>
                  <input 
                    type="date" 
                    id="checkin" 
                    name="checkin"
                    value={checkinValue}
                    readOnly
                    className="mt-2 block w-full rounded-md border-0 py-2 px-3 bg-stone-900 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-[#c54b34] sm:text-sm sm:leading-6 opacity-70 cursor-not-allowed" 
                  />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-stone-300">{dict.labels.checkout}</label>
                  <input 
                    type="date" 
                    id="checkout" 
                    name="checkout"
                    value={checkoutValue}
                    readOnly
                    className="mt-2 block w-full rounded-md border-0 py-2 px-3 bg-stone-900 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-[#c54b34] sm:text-sm sm:leading-6 opacity-70 cursor-not-allowed" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-300">{dict.labels.message}</label>
                <textarea id="message" name="message" rows={4} className="mt-2 block w-full rounded-md border-0 py-2 px-3 bg-stone-900 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-[#c54b34] sm:text-sm sm:leading-6" placeholder={dict.placeholders.message} disabled={isPending}></textarea>
              </div>
              
              {statusMsg && (
                <div className={`p-3 rounded-md text-sm ${statusMsg.includes('Thanks') ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'}`}>
                  {statusMsg}
                </div>
              )}
              
              <button type="submit" disabled={isPending} className="mt-2 rounded-md bg-[#c54b34] px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#a63f2b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {isPending ? dict.button.sending : dict.button.idle}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
