import Image from "next/image";
import Link from "next/link";
import { getBlockedDates } from "@/lib/calendar";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";

export default async function Home() {
  const blockedDates = await getBlockedDates();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px]">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/CasaJirafaPhotos/Exterior-Rooftop-View1.png"
            alt="View from Casa Jirafa"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-md">
            Casa Jirafa
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium drop-shadow-md">
            The Perfect Vallarta Retreat
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="#book"
              className="rounded-full bg-stone-100 text-stone-900 px-8 py-3.5 text-base font-semibold shadow-sm hover:bg-white transition-all"
            >
              Book Direct & Save
            </Link>
            <Link
              href="#condo"
              className="rounded-full border border-white/80 bg-black/20 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-black/40 transition-all"
            >
              Explore the Condo
            </Link>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section id="condo" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Comfortable Mexican-Style Living
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              Ideal for longer stays and remote work, Casa Jirafa offers more comfort and value than a typical small 1BR condo. Spread out and feel at home in walkable El Centro.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-900">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Spacious Layout</h3>
              <p className="mt-2 text-stone-600">2 bedrooms, 2 full baths, full kitchen, in-unit laundry, and covered, free parking.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-900">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 11.414 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Remote Work Ready</h3>
              <p className="mt-2 text-stone-600">Fast 80/80 Mbps Wi-Fi with optional Ethernet. A/C in both bedrooms.</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-stone-100 text-stone-900">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-stone-900">Resort Amenities</h3>
              <p className="mt-2 text-stone-600">Heated pool during winter months. Roku TVs in living room and master.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Basic Gallery Stub */}
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 text-center mb-16">
            A Glimpse Inside
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/Living-Room2.png" alt="Living Room" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/kitchen-1.png" alt="Kitchen" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/Master-Bedroom-1.png" alt="Master Bedroom" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/dining-room-table-1.png" alt="Dining Room" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/Bedroom-2-1.png" alt="Second Bedroom" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image src="/images/CasaJirafaPhotos/Pool-Heated-1.png" alt="Heated Pool" fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="/gallery" className="inline-block rounded-full bg-stone-200 px-6 py-3 text-sm font-semibold text-stone-900 hover:bg-stone-300 transition-colors">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="location" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-stone-900">
                The Heart of El Centro
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                Casa Jirafa is located just a few blocks from the famous Puerto Vallarta Malecón. 
                Step outside to find world-class dining, art galleries, and the vibrant local culture 
                right at your doorstep.
              </p>
              <div className="mt-6 rounded-lg bg-stone-100 p-6 border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Note on Mobility
                </h4>
                <p className="mt-2 text-stone-600 text-sm">
                  The walk to the Malecón includes a steep stairway on the final stretch. While it provides our spectacular views, it is something to consider if mobility is a concern.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/images/CasaJirafaPhotos/exterior-drone.png" alt="Drone view of the location" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Meet Your Hosts */}
      <section className="py-24 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Meet Your Hosts
            </h2>
            <p className="mt-8 text-lg text-stone-600 leading-relaxed">
              Jason is a professional multimedia engineer and musician. Rosie is a professional makeup artist and beauty consultant. We enjoy travel, good food, great music, fun people, diving, and hiking.
            </p>
            <p className="mt-4 text-lg text-stone-600 leading-relaxed">
              While we work in San Francisco, we love Puerto Vallarta and come here as much as possible. We are happy to share our experience and inside knowledge of the area to make the most of your visit!
            </p>
            <div className="mt-8">
              <span className="inline-flex items-center rounded-full bg-stone-100 px-3 py-1 text-sm font-medium text-stone-800 ring-1 ring-inset ring-stone-500/20">
                13 Years of Hosting Experience
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section id="book" className="py-24 bg-stone-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to book your stay?</h2>
            <p className="mt-4 text-lg text-stone-300">
              Check our live calendar below for availability. Send us a message with your dates and we'll get back to you with our best direct-booking rates.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 justify-between items-start">
            <div className="w-full lg:w-7/12 flex justify-center lg:justify-start">
              <AvailabilityCalendar blockedRanges={blockedDates} />
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
                    <input type="date" id="checkin" name="checkin" className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm [color-scheme:dark]" />
                  </div>
                  <div>
                    <label htmlFor="checkout" className="block text-sm font-medium text-stone-300">Check-out</label>
                    <input type="date" id="checkout" name="checkout" className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm [color-scheme:dark]" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-300">Message</label>
                  <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-0 bg-stone-900/50 py-2.5 px-3 text-white shadow-sm ring-1 ring-inset ring-stone-700 focus:ring-2 focus:ring-inset focus:ring-stone-400 sm:text-sm" placeholder="Any special requests or questions?"></textarea>
                </div>
                <button type="button" className="mt-2 rounded-md bg-white px-3.5 py-3 text-sm font-semibold text-stone-900 shadow-sm hover:bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
