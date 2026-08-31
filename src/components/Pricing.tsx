import React from 'react';
import { cookies } from "next/headers";
import { getDictionary, Locale } from "@/i18n/dictionaries";

export default async function Pricing() {
  const cookieStore = await cookies();
  const locale = (cookieStore.get('NEXT_LOCALE')?.value as Locale) || 'en';
  const dict = await getDictionary(locale);

  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {dict.pricing.title}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {dict.pricing.subtitle}
          </p>
        </div>

        <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
          {/* Base Rates Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-stone-900">Base Rates</h3>
            <table className="mt-6 w-full text-sm">
              <tbody>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.highSeason.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.highSeason.months}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.highSeason.price}<span className="text-stone-400 text-xs font-normal">{dict.pricing.highSeason.unit}</span>
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.lowSeason.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.lowSeason.months}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.lowSeason.price}<span className="text-stone-400 text-xs font-normal">{dict.pricing.lowSeason.unit}</span>
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.holiday.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.holiday.months}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.holiday.price}<span className="text-stone-400 text-xs font-normal">{dict.pricing.holiday.unit}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Discounts & Offers Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c54b34]/10 text-[#c54b34] px-4 py-1 text-xs font-semibold rounded-bl-lg">
              {dict.pricing.discounts.saveMore}
            </div>
            <h3 className="text-xl font-semibold text-stone-900">{dict.pricing.discounts.title}</h3>
            <table className="mt-6 w-full text-sm">
              <tbody>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.discounts.weekly.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.discounts.weekly.desc}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.discounts.weekly.value}
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.discounts.monthly.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.discounts.monthly.desc}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.discounts.monthly.value}
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    {dict.pricing.discounts.lastMinute.title} <br />
                    <span className="text-xs text-stone-400">{dict.pricing.discounts.lastMinute.desc}</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    {dict.pricing.discounts.lastMinute.value}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
