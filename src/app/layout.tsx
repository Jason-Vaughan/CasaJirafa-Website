import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://stage.casajirafapv.com'),
  title: "Casa Jirafa | Puerto Vallarta Vacation Rental",
  description: "A comfortable Mexican-style condo in walkable El Centro, Puerto Vallarta. Ideal for longer stays and remote work.",
  openGraph: {
    title: "Casa Jirafa | Puerto Vallarta",
    description: "The perfect Vallarta retreat in the heart of El Centro.",
    url: 'https://stage.casajirafapv.com',
    siteName: 'Casa Jirafa',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Jirafa | Puerto Vallarta',
    description: 'The perfect Vallarta retreat in the heart of El Centro.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col text-stone-900 bg-white">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
