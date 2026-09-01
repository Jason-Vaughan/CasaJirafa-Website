import Image from "next/image";
import { photos } from "@/lib/photos";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function GalleryPage({ params: { locale } }: { params: { locale: string } }) {
  const dict = await getDictionary(locale as Locale);
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-stone-900 sm:text-6xl">{dict.gallery.fullGalleryTitle}</h2>
          <p className="mt-6 text-lg leading-8 text-stone-600">
            {dict.gallery.fullGalleryDesc}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {photos.map((photo, idx) => (
            <li key={idx} className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <Image
                src={photo}
                alt={`Casa Jirafa photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
