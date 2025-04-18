"use client";
import { Card } from './ui/Card'
import { LucideShieldCheck, LucideClock, LucideUsers, LucideStar } from 'lucide-react'
import { motion } from 'framer-motion'

const FEATURES = [
  { icon: LucideShieldCheck, title: 'Certified & Trusted', desc: 'All drivers are background-checked and certified for your safety.' },
  { icon: LucideClock, title: 'Flexible Booking', desc: 'Choose hourly or daily rentals, or hire a driver for your own car.' },
  { icon: LucideStar, title: 'Premium Experience', desc: 'Modern cars, professional drivers, and a seamless booking process.' },
  { icon: LucideUsers, title: 'Trusted by Owners', desc: 'Car owners trust us to provide certified drivers for their vehicles.' }
]

export function WhyChooseUsSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-5xl w-full"
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <Card key={title} neumorph className="flex items-center gap-4 p-6">
              <Icon size={36} className="text-accent shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-1">{title}</h3>
                <p className="text-slate-200 text-sm">{desc}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
