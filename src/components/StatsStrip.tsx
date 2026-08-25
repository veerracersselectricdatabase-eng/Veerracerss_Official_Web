"use client";

import { motion } from "motion/react";
import { Car, Calendar, Users, Trophy, Medal } from "lucide-react";

const STATS = [
  { icon: Car, label: "CAR", value: "AETHER" },
  { icon: Calendar, label: "EST.", value: "2018" },
  { icon: Users, label: "TEAM MEMBERS", value: "55+" },
  { icon: Trophy, label: "COMPETITIONS", value: "4+" },
  { icon: Medal, label: "PODIUMS", value: "P3" },
];

export function StatsStrip() {
  return (
    <section className="w-full bg-[#1A1A1A] border-y border-white/5 py-12 relative z-20 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x divide-white/5">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center space-y-4 group cursor-default"
              >
                <div className="relative">
                  <Icon className="w-8 h-8 text-racing-red group-hover:scale-110 transition-transform duration-500 ease-out" strokeWidth={1.5} />
                  <div className="absolute inset-0 bg-racing-red opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="text-[11px] text-white/50 font-bold tracking-[0.2em] uppercase font-sans">{stat.label}</span>
                  <span className="text-xl md:text-3xl text-white font-display font-black tracking-wider uppercase drop-shadow-md">{stat.value}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
