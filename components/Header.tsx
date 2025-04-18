"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-b from-slate-950/90 to-slate-900/70 shadow-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-3">
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-accent drop-shadow-md">
            DriveMitra
          </Link>
          <span className="text-xs md:text-sm text-slate-300 italic font-medium md:ml-2">
            formerly known as 'Sumitra Pramanik Car Hire and Driver Center'
          </span>
        </div>
        <nav className="mt-2 md:mt-0 flex gap-4 text-slate-200 text-sm font-semibold">
          <Link href="/">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
