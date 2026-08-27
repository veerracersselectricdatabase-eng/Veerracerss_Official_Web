"use client";

import { motion } from "motion/react";
import { Battery, Zap, ShieldCheck } from "lucide-react";

const SPECS = [
  {
    icon: Zap,
    title: "10 KW PMSM Motor",
    description: "High torque and acceleration for immediate track response and peak efficiency.",
  },
  {
    icon: Battery,
    title: "72V Battery Pack",
    description: "High energy density custom-built pack engineered for maximum endurance.",
  },
  {
    icon: ShieldCheck,
    title: "Endurance Tested",
    description: "Passed tech inspection, driver egress, and dynamic endurance with flying colors.",
  }
];

export function Cars() {
  return (
    <section id="cars" className="py-24 md:py-32 bg-[#111111] relative z-10 overflow-hidden">
      {/* Background Elements to fill empty space */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-display font-black text-white/[0.02] uppercase pointer-events-none whitespace-nowrap z-0">
        AETHER
      </div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-racing-red/10 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-16 relative z-10">
        
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-racing-red font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-4 block">The Machine</span>
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase text-white tracking-tight">
              AETHER 2024-25
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {SPECS.map((spec, idx) => {
            const Icon = spec.icon;
            return (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-[#0A0A0A] border border-white/5 p-8 md:p-10 group hover:border-racing-red/50 transition-colors duration-500 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-700">
                  <Icon className="w-32 h-32 text-white" />
                </div>
                
                <Icon className="w-8 h-8 text-racing-red mb-8" strokeWidth={1.5} />
                <h3 className="font-display font-bold text-xl md:text-2xl text-white uppercase tracking-wide mb-4 relative z-10">
                  {spec.title}
                </h3>
                <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed relative z-10 font-light">
                  {spec.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
