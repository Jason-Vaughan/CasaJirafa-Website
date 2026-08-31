import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-stone-900">Casa Jirafa</h3>
            <p className="mt-2 text-sm text-stone-600">
              Your comfortable Mexican-style condo in the heart of El Centro, Puerto Vallarta.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900">Plan your stay</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#condo" className="text-stone-600 hover:text-stone-900 transition-colors">
                  The Condo
                </Link>
              </li>
              <li>
                <Link href="/guidebook" className="text-stone-600 hover:text-stone-900 transition-colors">
                  Puerto Vallarta Guidebook
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-stone-900">Book</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/#book" className="font-medium text-stone-900 hover:underline">
                  Check Availability & Book
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
          <p>
            &copy; {new Date().getFullYear()} Casa Jirafa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
