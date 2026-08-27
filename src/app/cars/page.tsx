"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { Zap, Orbit } from "lucide-react";
import React, { useRef } from "react";
import { Partners } from "../../components/Partners";

const CARS = [
  {
    name: "AETHER",
    year: "2025",
    features: ["10 KW PMSM Motor", "72V High Energy Density Battery", "Formula Imperial P3 (EV)", "First EV in Odisha"],
    stats: { speed: "115 km/h", accel: "3.1s 0-100", weight: "240kg", power: "10kW" },
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop",
    description: "AETHER is the latest innovation of VeerRacerss Electric for the season 2024-25. It is the first EV made by any engineering college in Odisha. The event Formula Imperial was held at Buddh International Circuit where we secured P3 overall in the EV category."
  },
  {
    name: "ZEUS 1.0",
    year: "2023",
    features: ["Custom Battery Management", "Aerodynamic Package", "RWD Dynamics"],
    stats: { speed: "105 km/h", accel: "4.2s 0-100", weight: "260kg", power: "8kW" },
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?q=80&w=1974&auto=format&fit=crop",
    description: "ZEUS 1.0 marked our early transitions and iterative design process in the EV domain, setting benchmarks for our future electrical powertrain designs and establishing a reliable platform."
  },
  {
    name: "VENTUS 5.0",
    year: "2022",
    features: ["Steel Spaceframe", "Reliable Powertrain", "Optimized Suspension"],
    stats: { speed: "95 km/h", accel: "4.8s 0-100", weight: "275kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2000&auto=format&fit=crop",
    description: "Part of the legendary Ventus combustion lineage. Built with a focus on extreme endurance and mechanical grip, establishing the core engineering principles that carry over to our electric vehicles today."
  },
  {
    name: "VENTUS 4.0",
    year: "2020",
    features: ["Lightweight Chassis", "Custom Intake", "Endurance Tuned"],
    stats: { speed: "90 km/h", accel: "5.1s 0-100", weight: "280kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1503376713915-d450849615a1?q=80&w=2070&auto=format&fit=crop",
    description: "A relentless track machine designed to withstand the toughest endurance events. Ventus 4.0 pushed our combustion engine tuning to the absolute limit."
  },
  {
    name: "VENTUS 16.3",
    year: "2019",
    features: ["Ergonomic Cockpit", "Robust Drivetrain", "Tuned Exhaust"],
    stats: { speed: "85 km/h", accel: "5.5s 0-100", weight: "290kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    description: "An evolutionary step in the Ventus series, refining the driver interface and focusing on manufacturing precision to improve overall lap times."
  },
  {
    name: "VENTUS 15.2",
    year: "2018",
    features: ["Foundation Chassis", "Student Fabricated", "Reliable Performance"],
    stats: { speed: "80 km/h", accel: "6.0s 0-100", weight: "300kg", power: "CV" },
    image: "https://images.unsplash.com/photo-1502877338535-34cb0aa4dc52?q=80&w=2070&auto=format&fit=crop",
    description: "The early foundations of Team VeerRacerss. Ventus 15.2 was the proving ground for our structural engineering and team coordination, sparking the legacy that continues today."
  }
];

export default function CarsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div className="min-h-screen pt-24 bg-[#050505]">
      
      <main className="relative pb-0">
        
        {/* Header Hero Section */}
        <section ref={containerRef} className="relative h-[40vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-[#0A0A0A] border-b border-white/5">
          {/* Background Elements */}
          <div className="absolute inset-0 telemetry-grid opacity-[0.03] pointer-events-none"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-display font-black text-white/[0.02] uppercase pointer-events-none whitespace-nowrap z-0">
            FLEET
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-racing-red/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

          <motion.div 
            className="text-center z-10 px-4 flex flex-col items-center"
            style={{ opacity, y }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="font-display text-6xl md:text-8xl lg:text-[120px] font-black uppercase tracking-tight text-white relative"
            >
              THE FLEET
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-racing-red font-sans font-bold text-sm md:text-base tracking-[0.3em] uppercase mt-4"
            >
              EVOLUTION OF PURE SPEED
            </motion.p>
          </motion.div>
        </section>

        {/* Cars Timeline Section */}
        <section className="py-24 relative overflow-hidden bg-[#111111]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 z-0"></div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-16 relative z-10">
            <div className="flex flex-col gap-32">
              {CARS.map((car, index) => (
                <motion.div 
                  key={car.name}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", damping: 25, stiffness: 80 }}
                  className={`flex flex-col ${index % 2 !== 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'} gap-12 xl:gap-20 items-center relative z-10 group`}
                >
                  
                  {/* Left/Right Image Container */}
                  <div className="w-full xl:w-7/12 relative aspect-[16/10] overflow-hidden bg-[#0A0A0A] border border-white/5 group-hover:border-racing-red/30 transition-colors duration-500 rounded-sm">
                    <img 
                      src={car.image} 
                      alt={car.name} 
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out"
                    />
                    
                    {/* Top Left Badge */}
                    <div className="absolute top-0 left-0 bg-racing-red px-6 py-3 flex gap-4 items-center">
                      <span className="text-xl md:text-3xl font-display font-black uppercase tracking-tight text-white leading-none">
                        {car.name}
                      </span>
                    </div>
                    {/* Year Badge */}
                    <div className="absolute top-0 right-0 bg-[#0A0A0A] border-b border-l border-white/10 px-4 py-2">
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-white/50 font-bold">
                        {car.year} SPEC
                      </span>
                    </div>
                  </div>
                  
                  {/* Stats and Description */}
                  <div className="w-full xl:w-5/12 flex flex-col">
                    <p className="text-white/70 text-base leading-relaxed font-sans font-light mb-12 border-l-2 border-racing-red pl-6">
                      {car.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-x-8 gap-y-10 mb-12">
                       <div className="flex flex-col gap-2">
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Top Speed</p>
                          <p className="text-2xl font-black font-display tracking-wide text-white group-hover:text-racing-red transition-colors duration-300">{car.stats.speed}</p>
                       </div>
                       <div className="flex flex-col gap-2">
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Acceleration</p>
                          <p className="text-2xl font-black font-display tracking-wide text-white group-hover:text-racing-red transition-colors duration-300">{car.stats.accel}</p>
                       </div>
                       <div className="flex flex-col gap-2">
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Weight</p>
                          <p className="text-2xl font-black font-display tracking-wide text-white group-hover:text-racing-red transition-colors duration-300">{car.stats.weight}</p>
                       </div>
                       <div className="flex flex-col gap-2">
                          <p className="text-[10px] text-white/40 uppercase tracking-[0.15em] font-sans font-bold">Peak Power</p>
                          <p className="text-2xl font-black font-display tracking-wide text-white group-hover:text-racing-red transition-colors duration-300">{car.stats.power}</p>
                       </div>
                    </div>

                    <div className="bg-[#1A1A1A]/40 backdrop-blur-sm border border-white/5 p-8 relative overflow-hidden rounded-sm">
                      <h4 className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-racing-red mb-6 font-sans">
                        <Orbit className="w-4 h-4" /> Technical Highlights
                      </h4>
                      <ul className="flex flex-col gap-4 relative z-10">
                        {car.features.map(f => (
                          <li key={f} className="flex items-start gap-3 text-sm text-white/70 font-sans font-light">
                            <Zap className="w-4 h-4 text-racing-red shrink-0" />
                            <span>{f}</span>
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
