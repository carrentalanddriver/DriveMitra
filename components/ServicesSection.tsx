"use client";
import Link from 'next/link';
import { Card } from './ui/Card'
import { LucideCar, LucideClock, LucideUsers, LucideBriefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const SERVICES = [
  { icon: LucideCar, title: 'Hourly Car Rental', desc: 'Rent a car with a driver for as little as one hour. Perfect for city commutes and errands.' },
  { icon: LucideClock, title: 'Daily Car Rental', desc: 'Book a car and driver for a full day. Ideal for business, events, or outstation trips.' },
  { icon: LucideUsers, title: 'Certified Driver for Your Car', desc: 'Have your own car? Hire a certified, background-checked driver for any occasion.' },
  { icon: LucideBriefcase, title: 'Business & Outstation Rentals', desc: 'Premium cars and drivers for corporate, airport, or outstation needs.' }
]

export function ServicesSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

{[0,1,2,3].map(i => {
  const { icon: Icon, title, desc } = SERVICES[i];
  // Map index to route
  const routes = [
    '/service-hourly-car-rental',
    '/service-daily-car-rental',
    '/service-certified-driver',
    '/service-business-outstation',
  ];
  return (
    <Link key={title} href={routes[i]} className="hover:no-underline focus:no-underline">
      <Card glass className="flex flex-col md:flex-row items-center gap-4 p-6 transition-transform hover:scale-[1.03] active:scale-95 cursor-pointer">
        <img
          src={`/service${i+1}.jpg`}
          alt={title + ' image'}
          className="w-full md:w-32 h-32 object-cover rounded-xl shadow-glass mb-2 md:mb-0"
          style={{ flexShrink: 0 }}
        />
        <Icon size={36} className="text-accent shrink-0 md:ml-4" />
        <div className="md:ml-4 w-full">
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-slate-200 text-sm">{desc}</p>
        </div>
      </Card>
    </Link>
  );
})}
        </div>
      </motion.div>
    </section>
  )
}
