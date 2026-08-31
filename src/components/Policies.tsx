import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/i18n/dictionaries";
export default async function Policies() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {dict.policies.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {dict.policies.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Facts */}
          <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-semibold text-stone-900 mb-6 border-b border-stone-100 pb-4">{dict.policies.atAGlance.title}</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.checkin.label}</span>
                {dict.policies.atAGlance.checkin.value}
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.checkout.label}</span>
                {dict.policies.atAGlance.checkout.value}
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.guests.label}</span>
                {dict.policies.atAGlance.guests.value}
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.pets.label}</span>
                {dict.policies.atAGlance.pets.value}
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.events.label}</span>
                {dict.policies.atAGlance.events.value}
              </li>
              <li className="flex items-start text-stone-700">
                <span className="font-semibold w-24 text-stone-900 shrink-0">{dict.policies.atAGlance.smoking.label}</span>
                {dict.policies.atAGlance.smoking.value}
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">{dict.policies.atAGlance.quiet.label}</span>
                {dict.policies.atAGlance.quiet.value}
              </li>
            </ul>
          </div>

          {/* Detailed Rules */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-semibold text-stone-900 mb-6 border-b border-stone-100 pb-4">{dict.policies.additional.title}</h3>
            <ul className="space-y-4 text-stone-700 list-disc pl-5">
              <li>
                <strong className="text-stone-900">{dict.policies.additional.rooftop.label}</strong> {dict.policies.additional.rooftop.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.neighborhood.label}</strong> {dict.policies.additional.neighborhood.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.manager.label}</strong> {dict.policies.additional.manager.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.cleaning.label}</strong> {dict.policies.additional.cleaning.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.grill.label}</strong> {dict.policies.additional.grill.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.maintenance.label}</strong> {dict.policies.additional.maintenance.value}
              </li>
              <li>
                <strong className="text-stone-900">{dict.policies.additional.checkout.label}</strong> {dict.policies.additional.checkout.value}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
