import Image from "next/image";
import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function MerchSection() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

  return (
    <section id="merch" className="py-24 bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {dict.merch.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {dict.merch.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Merch Item 1 */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md">
            <div className="relative aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-8">
              {/* Clever placeholder using the logo for a shirt */}
              <Image src="/casa-jirafa-logo.png" alt="Classic Logo Tee" width={200} height={200} className="w-48 h-48 object-contain transition-transform duration-300 group-hover:scale-110" />
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="text-lg font-semibold text-stone-900">Classic Logo Tee</h3>
              <p className="mt-1 text-sm text-stone-500">100% Organic Cotton</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold text-[#c54b34]">$25</span>
                <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Merch Item 2 */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md">
            <div className="relative aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-8">
              {/* Clever placeholder using the logo for a mug */}
              <div className="relative">
                <div className="w-32 h-40 bg-white rounded-xl shadow-inner border-2 border-stone-100 flex items-center justify-center">
                   <Image src="/casa-jirafa-logo.png" alt="Coffee Mug" width={80} height={80} className="w-20 h-20 object-contain opacity-80" />
                </div>
                {/* Mug Handle */}
                <div className="absolute top-8 -right-6 w-8 h-20 border-4 border-white rounded-r-2xl shadow-sm"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="text-lg font-semibold text-stone-900">Morning Coffee Mug</h3>
              <p className="mt-1 text-sm text-stone-500">Ceramic • 11oz</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold text-[#c54b34]">$15</span>
                <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Merch Item 3 */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md">
            <div className="relative aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-8">
              {/* Placeholder for Tote Bag */}
              <div className="w-40 h-40 bg-[#f9dcc4] rounded-sm shadow-inner flex flex-col items-center justify-center relative">
                 <div className="absolute -top-12 flex space-x-12">
                   <div className="w-2 h-16 bg-stone-300 rounded-t-full border border-stone-400 transform -rotate-12"></div>
                   <div className="w-2 h-16 bg-stone-300 rounded-t-full border border-stone-400 transform rotate-12"></div>
                 </div>
                 <Image src="/casa-jirafa-logo.png" alt="Beach Tote" width={100} height={100} className="w-24 h-24 object-contain" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="text-lg font-semibold text-stone-900">Vallarta Beach Tote</h3>
              <p className="mt-1 text-sm text-stone-500">Heavyweight Canvas</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold text-[#c54b34]">$30</span>
                <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Merch Item 4 */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md">
            <div className="relative aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-8 gap-4">
              {/* Slippers Placeholder */}
              <div className="w-16 h-32 bg-white rounded-t-[3rem] rounded-b-[2rem] shadow-sm ring-1 ring-stone-200 flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-10 w-full h-12 bg-[#c54b34]/10 border-t border-b border-[#c54b34]/20 flex items-center justify-center">
                  <span className="text-[#c54b34] text-xs font-bold">CJ</span>
                </div>
              </div>
              <div className="w-16 h-32 bg-white rounded-t-[3rem] rounded-b-[2rem] shadow-sm ring-1 ring-stone-200 flex items-center justify-center relative overflow-hidden transform translate-y-4">
                <div className="absolute top-10 w-full h-12 bg-[#c54b34]/10 border-t border-b border-[#c54b34]/20 flex items-center justify-center">
                  <span className="text-[#c54b34] text-xs font-bold">CJ</span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="text-lg font-semibold text-stone-900">Casa Slippers</h3>
              <p className="mt-1 text-sm text-stone-500">Plush Comfort</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold text-[#c54b34]">$20</span>
                <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

          {/* Merch Item 5 */}
          <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-stone-200 transition-all hover:shadow-md">
            <div className="relative aspect-square bg-stone-50 overflow-hidden flex items-center justify-center p-8">
              {/* Towel Placeholder */}
              <div className="w-48 h-32 bg-white shadow-md border-b-4 border-r-4 border-stone-200 rounded-sm relative overflow-hidden flex flex-col justify-between">
                 {/* Stripes */}
                 <div className="w-full h-4 bg-[#c54b34]"></div>
                 <div className="flex-1 flex items-center justify-center">
                    <Image src="/casa-jirafa-logo.png" alt="Logo" width={80} height={80} className="w-16 h-16 object-contain opacity-60" />
                 </div>
                 <div className="w-full h-4 bg-[#c54b34]"></div>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6 text-center">
              <h3 className="text-lg font-semibold text-stone-900">Luxury Beach Towel</h3>
              <p className="mt-1 text-sm text-stone-500">Oversized • 100% Cotton</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="text-lg font-bold text-[#c54b34]">$35</span>
                <button className="rounded-full bg-stone-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
                  Coming Soon
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
