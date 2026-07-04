"use client";
import { Wind, Hexagon, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export function Cars() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-24" id="cars">
      <div className="px-4 md:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-black tracking-tighter uppercase mb-4">
            <span className="text-transparent" style={{ WebkitTextStroke: '1px #F5F5F5' }}>VRE-05</span> <br/> SPECTRE
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-[#FF3E00] mb-4">
            CURRENT DEVELOPMENT PLATFORM (2025 SPEC)
          </p>
          <a href="/cars" className="inline-block bg-[#111] border border-white/20 text-white px-6 py-2 text-[10px] font-bold hover:bg-[#FF3E00] hover:border-[#FF3E00] transition-colors uppercase tracking-widest cursor-pointer">
            Explore All Cars
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Aero Card */}
          <div className="bg-[#111] p-8 border border-white/5 hover:border-white/20 transition-transform duration-300">
            <Wind className="text-racing-red w-8 h-8 mb-6" strokeWidth={1} />
            <h3 className="font-bold text-xl text-white mb-4 uppercase tracking-wider">Aerodynamics</h3>
            <p className="text-white/50 mb-6 text-xs font-light leading-relaxed">
              Optimized carbon fiber wing package generating over 1.5kN of downforce at 100km/h for maximum cornering stability.
            </p>
            <ul className="space-y-4 text-white/70 text-[10px] uppercase tracking-widest">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> CFD Optimized</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> Carbon Composite</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> DRS Integrated</li>
            </ul>
          </div>
          {/* Chassis Card */}
          <div className="bg-[#111] p-8 border border-white/5 hover:border-white/20 transition-transform duration-300">
            <Hexagon className="text-inverse-primary w-8 h-8 mb-6" strokeWidth={1} />
            <h3 className="font-bold text-xl text-white mb-4 uppercase tracking-wider">Monocoque</h3>
            <p className="text-white/50 mb-6 text-xs font-light leading-relaxed">
              Ultralight honeycomb structure providing extreme torsional rigidity while maintaining a weight of only 25kg.
            </p>
            <ul className="space-y-4 text-white/70 text-[10px] uppercase tracking-widest">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-inverse-primary" /> FEA Validated</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-inverse-primary" /> Impact Attenuator</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-inverse-primary" /> High Rigidity</li>
            </ul>
          </div>
          {/* Powertrain Card */}
          <div className="bg-[#111] p-8 border border-white/5 hover:border-white/20 transition-transform duration-300">
            <Zap className="text-racing-red w-8 h-8 mb-6" strokeWidth={1} />
            <h3 className="font-bold text-xl text-white mb-4 uppercase tracking-wider">Powertrain</h3>
            <p className="text-white/50 mb-6 text-xs font-light leading-relaxed">
              Dual-motor electric drive system with intelligent torque vectoring and regenerative braking efficiency.
            </p>
            <ul className="space-y-4 text-white/70 text-[10px] uppercase tracking-widest">
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> 600V Architecture</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> Torque Vectoring</li>
              <li className="flex items-center gap-3"><CheckCircle2 className="w-3 h-3 text-racing-red" /> Liquid Cooled</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

