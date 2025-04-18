"use client";
import { LucideCar } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full flex flex-col items-center py-8 mt-8 border-t border-slate-800 bg-slate-900/60 glass-bg">
      <div className="flex items-center gap-2 mb-2">
        <LucideCar size={20} className="text-accent" />
        <span className="font-semibold tracking-wide">DriveMitra</span>
      </div>
      <p className="text-xs text-slate-400 mb-1 italic">Formerly known as Sumitra Pramanik car hire service and driver center</p>
      <p className="text-xs text-slate-400 mb-1">Contact: <a href="tel:8961524584" className="text-accent font-bold underline hover:text-accent/80">8961524584</a></p>
      <p className="text-xs text-slate-400">&copy; {new Date().getFullYear()} DriveMitra. All rights reserved.</p>
    </footer>
  )
}
