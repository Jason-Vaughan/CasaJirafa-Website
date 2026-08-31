import Image from "next/image";
import Link from "next/link";
import { getBlockedDates } from "@/lib/calendar";
import { cookies } from "next/headers";
import BookingSection from "@/components/BookingSection";
import Testimonials from "@/components/Testimonials";
import Policies from "@/components/Policies";
import Pricing from "@/components/Pricing";
import GuidebookCTA from "@/components/GuidebookCTA";
import MerchSection from "@/components/MerchSection";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function Home() {
  const blockedDates = await getBlockedDates();
  
  // Read feature flags
  const cookieStore = await cookies();
  const merchFlag = cookieStore.get('ff_merch')?.value;
  // Default to true on staging, true on prod unless explicitly disabled (though we wouldn't ship it to prod if we didn't want it)
  const showMerch = merchFlag !== '0';

  const ratesFlag = cookieStore.get('ff_rates')?.value;
  const showRates = ratesFlag !== '0';

  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

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
            {dict.hero.title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-medium drop-shadow-md">
            {dict.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#book"
              className="rounded-full bg-stone-100 text-stone-900 px-8 py-3.5 text-base font-semibold shadow-sm hover:bg-white transition-all"
            >
              {dict.hero.bookDirect}
            </a>
            <a
              href="#book"
              className="rounded-full bg-[#c54b34] text-white px-8 py-3.5 text-base font-semibold shadow-sm hover:bg-[#a63f2b] transition-all border border-[#a63f2b]"
            >
              {dict.hero.checkAvailability}
            </a>
            <a
              href="#condo"
              className="rounded-full border border-white/80 bg-black/20 backdrop-blur-sm px-8 py-3.5 text-base font-semibold text-white hover:bg-black/40 transition-all"
            >
              {dict.hero.exploreCondo}
            </a>
          </div>
        </div>
      </section>

      {/* Property Highlights */}
      <section id="condo" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              {dict.condoIntro.title}
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              {dict.condoIntro.description}
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
                {dict.location.title}
              </h2>
              <p className="mt-4 text-lg text-stone-600">
                {dict.location.description}
              </p>
              <div className="mt-6 rounded-lg bg-stone-100 p-6 border border-stone-200">
                <h4 className="font-semibold text-stone-900 flex items-center gap-2">
                  <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {dict.location.mobilityTitle}
                </h4>
                <p className="mt-2 text-stone-600 text-sm">
                  {dict.location.mobilityDesc}
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

      {/* Merch Store */}
      {showMerch && <MerchSection />}

      {/* Guidebook CTA */}
      <GuidebookCTA />

      {/* Guest Reviews */}
      <Testimonials />

      {/* Pricing */}
      {showRates && <Pricing />}

      {/* House Rules */}
      <Policies />

      {/* Booking / Contact */}
      <BookingSection blockedDates={blockedDates} />
    </div>
  );
}
