"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-[100dvh] min-h-[800px] w-full flex items-center overflow-hidden bg-[#050505]"
    >
      {/* Background Texture & Grid */}
      <div className="absolute inset-0 telemetry-grid opacity-20 pointer-events-none z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/80 to-[#050505] z-0"></div>
      
      {/* Slanted Red Accent Element mimicking Audi Hungaria ART */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 w-full md:w-[60%] h-full bg-[#111111] z-0 border-r-4 border-racing-red shadow-[20px_0_50px_rgba(210,39,48,0.1)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 75% 100%, 0% 100%)" }}
      ></motion.div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center pt-24 md:pt-0">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start z-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-[2px] bg-racing-red"></span>
            <span className="text-white font-display font-bold tracking-[0.3em] uppercase text-xs md:text-sm">VeerRacerss Electric</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-[85px] leading-[1.05] tracking-tight uppercase text-white drop-shadow-2xl">
              ENGINEERED <br /> TO COMPETE. <br />
              <span className="text-racing-red">BUILT TO WIN.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="font-sans text-white/70 text-sm md:text-base lg:text-lg mt-8 max-w-md font-light leading-relaxed border-l-2 border-white/20 pl-4"
          >
            VeerRacerss Electric, pushing boundaries in Formula Student. 
            Innovate with intention, Design with precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
          >
            <Link href="/cars" className="bg-racing-red text-white px-10 py-4 font-sans font-bold text-[13px] uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] transition-all duration-300 text-center rounded-none clip-path-slant relative overflow-hidden group">
              <span className="relative z-10">DISCOVER THE CAR</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></div>
            </Link>
            <Link href="/members" className="bg-transparent border border-white/30 text-white px-10 py-4 font-sans font-bold text-[13px] uppercase tracking-[0.2em] hover:border-white hover:bg-white/5 transition-all duration-300 text-center rounded-none clip-path-slant">
              MEET THE TEAM
            </Link>
          </motion.div>
        </div>

        {/* Right Side: 3D Car Image/Placeholder */}
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-[60%] absolute right-0 top-1/2 -translate-y-1/2 md:mt-0 z-10 pointer-events-none hidden md:block"
        >
          {/* Use the provided media image as the car placeholder to look exactly like the high-res render vibe */}
          <img 
            src="https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop" 
            alt="Formula Student Car" 
            className="w-full h-auto object-cover opacity-90 drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] [mask-image:linear-gradient(to_left,white_40%,transparent_100%)]"
          />
        </motion.div>
        
      </div>
    </section>
  );
}
