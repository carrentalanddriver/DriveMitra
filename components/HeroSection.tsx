"use client";
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Card } from './ui/Card'
import { LucideCar } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center pt-16 pb-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl text-center"
      >
        <div className="relative w-full flex flex-col items-center">
          <img
            src="/hero.jpg"
            alt="Car rental with driver – DriveMitra platform"
            className="w-full max-h-96 object-cover rounded-3xl shadow-glass mb-[-4rem] opacity-80"
            style={{ zIndex: 0 }}
          />
          <Card glass className="mb-6 p-8 relative z-10 mt-[-4rem]">
            <div className="flex flex-col items-center">
              <LucideCar size={48} className="text-accent mb-2" />
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3" style={{letterSpacing: '-.03em'}}>DriveMitra</h1>
              <p className="text-lg md:text-xl font-medium mb-6 text-slate-200">
                Rent a car with a professional driver – hourly or daily. Or, get a certified driver for your own car. Flexible. Safe. Premium.
              </p>
              <Button glass className="mt-2 px-8 py-3 text-lg font-semibold shadow-glass">Book a Car or Driver</Button>
            </div>
          </Card>
        </div>
      </motion.div>
    </section>
  )
}
