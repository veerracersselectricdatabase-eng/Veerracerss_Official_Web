"use client";

import { motion } from "motion/react";
import Link from "next/link";

const SPONSORS = [
  "BOSCH", "DANA", "DENSO", "EDAG", 
  "Bibus", "motorsport.com", "SKF", "vector"
];

export function Partners() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-[#0A0A0A] relative z-10 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col items-center">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight">
              OUR PARTNERS
            </h2>
          </motion.div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {SPONSORS.map((sponsor, idx) => (
            <motion.div
              key={sponsor}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="h-20 flex items-center justify-center group cursor-pointer grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-500"
            >
              {/* Fallback to text if we don't have the actual SVG logos, but stylized to look like logos */}
              <span className="font-display font-bold text-2xl md:text-3xl text-white tracking-wider">
                {sponsor}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link 
            href="/contact" 
            className="bg-transparent border border-white text-white px-10 py-4 font-sans font-bold text-[12px] uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-colors duration-300 rounded-none"
          >
            BECOME A PARTNER
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
