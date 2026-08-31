export default function Policies() {
  return (
    <section className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            House Rules &amp; Policies
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Everything you need to know to ensure a smooth and comfortable stay for you and our neighbors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Quick Facts */}
          <div className="lg:col-span-1 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-semibold text-stone-900 mb-6 border-b border-stone-100 pb-4">At a Glance</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Check-in:</span>
                3:00 PM (Flexible)
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Check-out:</span>
                Before 11:00 AM
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Guests:</span>
                4 Maximum
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Pets:</span>
                Not allowed
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Events:</span>
                Not allowed
              </li>
              <li className="flex items-start text-stone-700">
                <span className="font-semibold w-24 text-stone-900 shrink-0">Smoking:</span>
                No smoking, vaping, or e-cigs
              </li>
              <li className="flex items-center text-stone-700">
                <span className="font-semibold w-24 text-stone-900">Quiet Hours:</span>
                10:00 PM - 8:00 AM
              </li>
            </ul>
          </div>

          {/* Detailed Rules */}
          <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
            <h3 className="text-xl font-semibold text-stone-900 mb-6 border-b border-stone-100 pb-4">Additional Information</h3>
            <ul className="space-y-4 text-stone-700 list-disc pl-5">
              <li>
                <strong className="text-stone-900">Rooftop &amp; Pool:</strong> Rooftop access is available until 9:00 PM (no use after 9 PM). Please, no jumping or diving in the pool.
              </li>
              <li>
                <strong className="text-stone-900">Neighborhood:</strong> Please respect our neighbors — this is a small, boutique residential building. No commercial photography or filming allowed.
              </li>
              <li>
                <strong className="text-stone-900">Onsite Manager:</strong> Our manager, Lupe, will assist with keys and basic information during your stay.
              </li>
              <li>
                <strong className="text-stone-900">Cleaning:</strong> Weekly cleaning service is provided. If you&apos;d like to adjust the schedule, please coordinate in advance. Gratuities are appreciated.
              </li>
              <li>
                <strong className="text-stone-900">Grill:</strong> The gas grill behind the kitchen is available for guest use. The Smokey Joe charcoal grill must not be used on the property.
              </li>
              <li>
                <strong className="text-stone-900">Maintenance:</strong> Please report any damage or issues promptly so we can address them quickly.
              </li>
              <li>
                <strong className="text-stone-900">Checkout:</strong> Please place all trash in the garbage can located in the garage before checkout.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
