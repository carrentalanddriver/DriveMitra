import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.style.background = entry.target.dataset.bg || "#000";
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="text-white font-sans">
      <section
        className="min-h-screen flex flex-col justify-center items-center text-center px-4"
        data-bg="#000000"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">DriveMitra</h1>
        <p className="text-lg md:text-2xl mb-6">
          Reliable Car Rentals & Certified Drivers
        </p>
        <div className="flex gap-4">
          <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">Book Now</button>
          <button className="border border-white text-white px-4 py-2 rounded">Call: 8961524584</button>
        </div>
      </section>

      <section className="min-h-screen px-6 py-12 md:py-20" data-bg="#111">
        <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Hourly Car Rental", desc: "Car + driver for short trips." },
            { title: "Full-Day Car Hire", desc: "Perfect for full-day travel needs." },
            { title: "Certified Driver", desc: "Hire a driver for your own car." },
          ].map((service, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen px-6 py-12 md:py-20" data-bg="#1c1c1c">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
          Why Choose DriveMitra?
        </h2>
        <ul className="max-w-2xl mx-auto space-y-4 text-gray-300">
          <li>✅ Certified & polite drivers</li>
          <li>✅ Transparent pricing</li>
          <li>✅ Pan-West Bengal availability</li>
          <li>✅ Easy phone booking</li>
        </ul>
      </section>

      <section className="min-h-screen px-6 py-12 md:py-20" data-bg="#262626">
        <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-center">
          Service Area
        </h2>
        <p className="text-center text-gray-300 max-w-xl mx-auto">
          Available across all locations in West Bengal. Book a ride anywhere,
          anytime with DriveMitra.
        </p>
      </section>

      <section className="min-h-[50vh] flex flex-col items-center justify-center bg-black px-6 py-12">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4">Contact Us</h2>
        <p className="text-white text-lg mb-2">📞 8961524584</p>
        <p className="text-gray-400 text-sm">Email & booking form coming soon.</p>
      </section>

      <footer className="bg-black text-center py-6 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2025 DriveMitra. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
