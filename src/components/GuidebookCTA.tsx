import Link from "next/link";
import Image from "next/image";

export default function GuidebookCTA() {
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
              Unlock Our Insider Guide to PV
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#f9dcc4]">
              We&apos;ve spent years exploring Puerto Vallarta to curate the ultimate digital guidebook for our guests. From the best hidden taco stands and romantic oceanfront dinners, to day-trip adventures and local art galleries—we share all our personal favorites so you can experience PV like a local.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#f9dcc4]">
              It&apos;s updated daily and completely free for you to explore before you even book!
            </p>
            <div className="mt-10">
              <Link
                href="/guidebook"
                className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-[#c54b34] shadow-sm hover:bg-stone-100 transition-all"
              >
                Explore the Guidebook
              </Link>
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
