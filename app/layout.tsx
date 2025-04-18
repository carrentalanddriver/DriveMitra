import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

export const metadata: Metadata = {
  title: 'DriveMitra - Car Rentals & Certified Drivers',
  description: 'Book a car with a professional driver (hourly or daily) or hire a certified driver for your own car. Flexible, safe, and premium car rental and driver services.',
  keywords: [
    'DriveMitra',
    'Car Rental',
    'Car with Driver',
    'Certified Driver',
    'Hourly Car Rental',
    'Daily Car Rental',
    'Business Travel',
    'Outstation Car Rental',
    'Premium',
    'Mobile First',
    'SEO'
  ],
  openGraph: {
    title: 'DriveMitra - Premium Car Services',
    description: 'Book premium car services with DriveMitra. Modern, minimalist, glassmorphic UI.',
    url: 'https://drivemitra.vercel.app',
    siteName: 'DriveMitra',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DriveMitra Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DriveMitra - Premium Car Services',
    description: 'Book premium car services with DriveMitra. Modern, minimalist, glassmorphic UI.',
    images: ['/og-image.png'],
  },
}

const inter = Inter({ subsets: ['latin'] })

import Header from '../components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`bg-gradient-to-br from-slate-900 to-slate-800 min-h-screen ${inter.className}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
