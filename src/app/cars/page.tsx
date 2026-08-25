"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Zap, Orbit, Shield, Target } from "lucide-react";
import React, { useRef } from "react";
import { Partners } from "../../components/Partners";


const CARS = [
  {
    name: "AETHER",
    year: "2025",
    features: ["10 KW PMSM Motor", "72V High Energy Density Battery", "Formula Imperial P3 (EV)", "First EV in Odisha"],
    stats: { speed: "115 km/h", accel: "3.1s 0-100", weight: "240kg", power: "10kW" },
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop", // Placeholder
    description: "AETHER is the latest innovation of VeerRacerss Electric for the season 2024-25. It is the first EV made by any engineering college in Odisha. The event Formula Imperial was held at Buddh International Circuit where we secured P3 overall in the EV category."
  },
  {
    name: "ZEUS 1.0",
    year: "2023",
    features: ["Custom Battery Management", "Aerodynamic Package", "RWD Dynamics"],
    stats: { speed: "105 km/h", accel: "4.2s 0-100", weight: "260kg", power: "8kW" },
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop", // Placeholder
    description: "ZEUS 1.0 marked our early transitions and iterative design process in the EV domain, setting benchmarks for our future electrical powertrain designs and establishing a reliable platform."
  },
  {
    name: "VENTUS 5.0",
    year: "2022",
    features: ["Steel Spaceframe", "Reliable Powertrain", "Optimized Suspension"],
    stats: { speed: "95 km/h", accel: "4.8s 0-100", weight: "275kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop", // Placeholder
    description: "Part of the legendary Ventus combustion lineage. Built with a focus on extreme endurance and mechanical grip, establishing the core engineering principles that carry over to our electric vehicles today."
  },
  {
    name: "VENTUS 4.0",
    year: "2020",
    features: ["Lightweight Chassis", "Custom Intake", "Endurance Tuned"],
    stats: { speed: "90 km/h", accel: "5.1s 0-100", weight: "280kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1503376713915-d450849615a1?q=80&w=2070&auto=format&fit=crop", // Placeholder
    description: "A relentless track machine designed to withstand the toughest endurance events. Ventus 4.0 pushed our combustion engine tuning to the absolute limit."
  },
  {
    name: "VENTUS 16.3",
    year: "2019",
    features: ["Ergonomic Cockpit", "Robust Drivetrain", "Tuned Exhaust"],
    stats: { speed: "85 km/h", accel: "5.5s 0-100", weight: "290kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop", // Placeholder
    description: "An evolutionary step in the Ventus series, refining the driver interface and focusing on manufacturing precision to improve overall lap times."
  },
  {
    name: "VENTUS 15.2",
    year: "2018",
    features: ["Foundation Chassis", "Student Fabricated", "Reliable Performance"],
    stats: { speed: "80 km/h", accel: "6.0s 0-100", weight: "300kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1502877338535-34cb0aa4dc52?q=80&w=2070&auto=format&fit=crop", // Placeholder
    description: "The early foundations of Team VeerRacerss. Ventus 15.2 was the proving ground for our structural engineering and team coordination, sparking the legacy that continues today."
  }
];

function InteractiveCarCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_rgba(225,6,0,1)] ${className}`}>
      {children}
    </div>
  );
}

export default function CarsPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="min-h-screen pt-24">
      
      <main className="relative pb-16">
        {/* Header Hero Section */}
        <section className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 telemetry-grid opacity-20 pointer-events-none"></div>
          
          <motion.div 
            className="text-center z-10 px-4 flex flex-col items-center"
            style={{ opacity, y }}
          >
            <motion.h1 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter text-white relative pr-8 pb-4"
              style={{ textShadow: '8px 8px 0px rgba(225, 6, 0, 1)' }}
            >
              The Fleet
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-racing-red font-mono text-sm md:text-base tracking-[0.4em] uppercase mt-4 bg-[#0d0d0d] px-6 py-2 border border-white/20 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
            >
              [ EVOLUTION OF PURE SPEED ]
            </motion.p>
          </motion.div>
        </section>

        {/* Cars Timeline Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-16 relative">
            
            {/* Timeline line connecting cars */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden xl:block"></div>

            <div className="flex flex-col gap-40">
              {CARS.map((car, index) => (
                <motion.div 
                  key={car.name}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                  className={`flex flex-col ${index % 2 !== 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'} gap-16 items-center relative z-10`}
                >
                  <div className="w-full xl:w-7/12">
                    <InteractiveCarCard>
                      <div className="aspect-[16/10] bg-[#0d0d0d] border border-white/20 p-2 relative overflow-hidden group cursor-pointer">
                         <div className="absolute inset-0 bg-racing-red/20 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10 pointer-events-none"></div>
                         
                         <img 
                           src={car.image} 
                           alt={car.name} 
                           className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] filter grayscale contrast-125 group-hover:grayscale-0"
                         />
                         
                         <div className="absolute top-8 left-8 z-20 flex gap-4 items-center bg-[#0d0d0d]/80 px-4 py-2 border border-white/10 backdrop-blur-md">
                            <span className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter text-white">
                              {car.name}
                            </span>
                            <span className="px-3 py-1 text-[10px] font-mono tracking-[0.2em] uppercase text-racing-red border border-racing-red font-bold">
                              {car.year} Spec
                            </span>
                         </div>
                      </div>
                    </InteractiveCarCard>
                  </div>
                  
                  <div className="w-full xl:w-5/12 flex flex-col gap-8">
                    <div className="relative bg-[#0d0d0d] border border-white/10 p-8">
                      <p className="text-white/80 text-sm md:text-base leading-relaxed font-mono relative z-10 border-l-4 border-racing-red pl-6">
                        {car.description}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6 relative z-10 bg-[#0d0d0d] border border-white/10 p-8">
                       <div className="flex flex-col gap-1 border-b border-white/10 pb-4 group">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold">Top Speed</p>
                          <p className="text-2xl font-black font-mono text-white group-hover:text-racing-red transition-colors">{car.stats.speed}</p>
                       </div>
                       <div className="flex flex-col gap-1 border-b border-white/10 pb-4 group">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold">Acceleration</p>
                          <p className="text-2xl font-black font-mono text-white group-hover:text-racing-red transition-colors">{car.stats.accel}</p>
                       </div>
                       <div className="flex flex-col gap-1 border-b border-white/10 pb-4 group">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold">Weight</p>
                          <p className="text-2xl font-black font-mono text-white group-hover:text-racing-red transition-colors">{car.stats.weight}</p>
                       </div>
                       <div className="flex flex-col gap-1 border-b border-white/10 pb-4 group">
                          <p className="text-[10px] text-white/40 uppercase tracking-widest font-mono font-bold">Peak Power</p>
                          <p className="text-2xl font-black font-mono text-white group-hover:text-racing-red transition-colors">{car.stats.power}</p>
                       </div>
                    </div>

                    <div className="bg-[#0d0d0d] border border-white/10 p-8 relative overflow-hidden">
                      <div className="absolute inset-0 telemetry-grid opacity-10 pointer-events-none"></div>
                      <h4 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-racing-red mb-6 font-display relative z-10">
                        <Orbit className="w-4 h-4" /> Technical Highlights
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                        {car.features.map(f => (
                          <li key={f} className="flex items-start gap-3 text-sm text-white/80 font-mono">
                            <Zap className="w-4 h-4 text-racing-red shrink-0 mt-[2px]" />
                            <span className="font-light">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <Partners />
      </main>
    </div>
  );
}
