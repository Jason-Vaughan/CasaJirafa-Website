import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/i18n/dictionaries";
import Image from "next/image";

export default async function GuidebookCTA() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

  return (
    <section className="relative py-24 bg-[#c54b34] text-white overflow-hidden">
      {/* Clever Guidebook Logo Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 opacity-10 pointer-events-none mix-blend-overlay">
        <Image src="/casa-jirafa-logo.png" alt="" width={800} height={800} className="w-[800px] h-auto lg:w-[1200px]" priority />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {dict.guidebookCTA.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#f9dcc4]">
              {dict.guidebookCTA.p1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#f9dcc4]">
              {dict.guidebookCTA.p2}
            </p>
            <div className="mt-10">
              {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
              <a
                href="/guidebook"
                className="inline-block rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#c54b34] shadow-sm hover:bg-stone-100 transition-all"
              >{dict.guidebookCTA.button}</a>
            </div>
          </div>
          
          <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* A nice lifestyle/PV shot. Falling back to the exterior drone shot if needed, but a food or PV street shot is ideal. */}
            <Image 
              src="/images/CasaJirafaPhotos/exterior-drone.png" 
              alt="Puerto Vallarta Guidebook" 
              fill 
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
