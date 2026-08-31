import React from 'react';

export default function Pricing() {
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Pricing & Rates
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Book direct to save on platform fees. Rates vary based on the season and length of your stay.
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
                    High Season <br />
                    <span className="text-xs text-stone-400">Nov – May</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    $Inquire<span className="text-stone-400 text-xs font-normal">/night</span>
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    Low Season <br />
                    <span className="text-xs text-stone-400">Jun – Oct</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    $Inquire<span className="text-stone-400 text-xs font-normal">/night</span>
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    Holiday / Peak <br />
                    <span className="text-xs text-stone-400">Dec 20 - Jan 5</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    $Inquire<span className="text-stone-400 text-xs font-normal">/night</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Discounts & Offers Card */}
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#c54b34]/10 text-[#c54b34] px-4 py-1 text-xs font-semibold rounded-bl-lg">
              Save More
            </div>
            <h3 className="text-xl font-semibold text-stone-900">Discounts & Offers</h3>
            <table className="mt-6 w-full text-sm">
              <tbody>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    Weekly Stay <br />
                    <span className="text-xs text-stone-400">7+ nights</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    Inquire for discount
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    Monthly Stay <br />
                    <span className="text-xs text-stone-400">28+ nights</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    Inquire for discount
                  </td>
                </tr>
                <tr className="border-t border-stone-100">
                  <td className="py-4 text-stone-600">
                    Last Minute <br />
                    <span className="text-xs text-stone-400">Within 7 days</span>
                  </td>
                  <td className="py-4 text-right font-medium text-stone-900">
                    Inquire for discount
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
