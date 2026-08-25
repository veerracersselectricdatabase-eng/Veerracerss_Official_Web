"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const NEWS_ITEMS = [
  {
    date: "16 APR 2025",
    title: "CAR REVEAL 2025",
    desc: "One mas veline Noxil nenrober 2025 car sle enteriasa amerd crtemir, the pruct tiwe war fo...",
    image: "https://images.unsplash.com/photo-1532981504936-39f80164cda7?q=80&w=2069&auto=format&fit=crop"
  },
  {
    date: "12 MAY 2025",
    title: "TESTING COMPLETED",
    desc: "Vastling compolite rendire is osat viit ting the onteosr purfilis, in se ty crexut aie teet wee bie...",
    image: "https://images.unsplash.com/photo-1541447237128-f4cac6138fbe?q=80&w=2004&auto=format&fit=crop"
  },
  {
    date: "18 FEB 2025",
    title: "THANK YOU PARTNERS!",
    desc: "Thank you cartners to a vetine poct blging he whar ar and colve of loge out. Treating dization...",
    image: "https://images.unsplash.com/photo-1517409277051-576206689859?q=80&w=2069&auto=format&fit=crop"
  }
];

export function News() {
  return (
    <section className="py-24 md:py-32 bg-[#111111] relative z-10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-racing-red font-sans font-bold tracking-[0.2em] uppercase text-[11px] mb-4 block">LATEST NEWS</span>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase text-white tracking-tight">
              STAY UP TO SPEED
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEWS_ITEMS.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black mb-6 border border-white/5 group-hover:border-racing-red/50 transition-colors duration-500">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                />
                <div className="absolute top-0 right-0 bg-racing-red px-4 py-2">
                  <span className="text-white font-sans font-bold text-[10px] tracking-widest">{item.date}</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-xl text-white uppercase tracking-wide mb-3 group-hover:text-racing-red transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="font-sans text-sm text-white/50 leading-relaxed font-light mb-6 flex-grow">
                {item.desc}
              </p>
              
              <div className="flex items-center gap-2 text-racing-red font-sans font-bold text-[11px] tracking-[0.15em] uppercase">
                READ MORE 
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" strokeWidth={2} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
