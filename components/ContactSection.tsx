"use client";
import { Card } from './ui/Card'
import { Input } from './ui/Input'
import { Select } from './ui/Select'
import { Button } from './ui/Button'
import { motion } from 'framer-motion'

export function ContactSection() {
  return (
    <section className="w-full flex flex-col items-center px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-xl w-full"
      >
        <Card glass className="p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-center">Contact / Book a Service</h2>
          <form className="flex flex-col gap-4 mt-4" autoComplete="off">
            <Input required name="name" placeholder="Your Name" />
            <Input required name="email" type="email" placeholder="Your Email" />
            <Select glass name="service" required defaultValue="">
              <option value="" disabled>Select Service Type</option>
              <option value="hourly">Hourly Car Rental (with Driver)</option>
              <option value="daily">Daily Car Rental (with Driver)</option>
              <option value="certified-driver">Certified Driver for My Car</option>
              <option value="business">Business/Outstation Rental</option>
            </Select>
            <Input name="message" placeholder="Additional Message (optional)" />
            <Button glass type="submit" className="mt-2">Submit</Button>
<div className="mt-4 text-center text-sm text-slate-400">
  Or call us: <a href="tel:8961524584" className="text-accent font-bold underline hover:text-accent/80">8961524584</a>
</div>
          </form>
        </Card>
      </motion.div>
    </section>
  )
}
