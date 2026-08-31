import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-semibold tracking-tight text-stone-900">
            Casa Jirafa
          </Link>
          <span className="ml-3 text-[10px] font-mono text-stone-500 bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
            v1.0.0 ({process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA?.substring(0, 7) || 'dev'})
          </span>
        </div>
        <nav className="hidden space-x-8 md:flex">
          <Link href="/#condo" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            The Condo
          </Link>
          <Link href="/#location" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Location
          </Link>
          <Link href="/guidebook" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">
            Guidebook
          </Link>
        </nav>
        <div className="flex items-center">
          <Link
            href="/#book"
            className="rounded-full bg-stone-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 transition-all"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
