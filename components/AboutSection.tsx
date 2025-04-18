"use client";
import { Card } from './ui/Card'
import { motion } from 'framer-motion'

export function AboutSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl w-full"
      >
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/about.jpg"
            alt="DriveMitra car rental and driver team"
            className="w-full md:w-1/2 max-h-72 object-cover rounded-2xl shadow-glass mb-4 md:mb-0"
          />
          <Card glass className="p-8 w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">About DriveMitra</h2>
<p className="text-accent text-sm mb-2 italic">Formerly known as Sumitra Pramanik car hire service and driver center</p>
            <p className="text-base md:text-lg text-slate-200 mb-2">
              DriveMitra is your trusted platform for seamless, premium car rentals with professional drivers. Whether you need a car and driver for a few hours, a day, or require a certified driver for your own car, we deliver flexibility, safety, and comfort.
            </p>
            <p className="text-base md:text-lg text-slate-200">
              Our mission is to make urban and outstation travel easy, transparent, and premium—whether you rent from us or need a certified driver for your own vehicle.
            </p>
          <div className="mt-4">
  <span className="font-semibold text-slate-100">Contact: </span>
  <a href="tel:8961524584" className="text-accent font-bold underline hover:text-accent/80">8961524584</a>
</div>
</Card>
        </div>
      </motion.div>
    </section>
  )
}
