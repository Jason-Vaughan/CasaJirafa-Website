import Image from "next/image";
import Link from "next/link";

export default function MerchSection() {
  return (
    <section id="merch" className="py-24 bg-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Take Casa Jirafa Home
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Love the vibe? Grab some exclusive Casa Jirafa merchandise to remember your stay in Puerto Vallarta.
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

        </div>
      </div>
    </section>
  );
}
