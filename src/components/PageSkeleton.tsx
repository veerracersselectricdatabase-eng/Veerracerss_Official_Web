"use client";
import { motion } from "motion/react";

export function PageSkeleton() {
  return (
    <div className="fixed inset-0 z-50 bg-[#050505] flex flex-col items-center justify-center overflow-hidden">
      {/* Heavy Noise Texture matching Splash Screen */}
      <div className="absolute inset-0 z-0 pointer-events-none mix-blend-overlay" 
           style={{ 
             backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
             opacity: 0.2
           }}></div>
           
      {/* Racing animation loader */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        
        {/* Speedometer/Tachometer Revving Ring */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          <svg className="w-full h-full -rotate-[135deg]" viewBox="0 0 100 100">
             {/* Background track (270 degrees sweep) */}
             <circle 
               cx="50" cy="50" r="45" 
               fill="transparent" 
               stroke="rgba(255,255,255,0.05)" 
               strokeWidth="6" 
               strokeDasharray="212 283" 
               strokeDashoffset="0"
               strokeLinecap="round"
             />
             
             {/* Animated fill (racing red) that revs up and down */}
             <motion.circle 
               cx="50" cy="50" r="45" 
               fill="transparent" 
               stroke="#FF3E00" 
               strokeWidth="6"
               strokeLinecap="round"
               strokeDasharray="212 283"
               initial={{ strokeDashoffset: 212 }}
               animate={{ strokeDashoffset: [212, 40, 180, 10, 212] }}
               transition={{ 
                 duration: 2.5, 
                 repeat: Infinity, 
                 times: [0, 0.4, 0.6, 0.8, 1],
                 ease: "easeInOut" 
               }}
               style={{
                 filter: "drop-shadow(0 0 8px rgba(255,62,0,0.5))"
               }}
             />
             
             {/* Inner RPM ticks */}
             <g stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="1 8">
               <circle 
                 cx="50" cy="50" r="35" 
                 fill="transparent"
                 strokeDasharray="2 10" 
                 strokeDashoffset="0"
               />
             </g>
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
             <motion.div 
                className="text-2xl font-black italic text-white"
                animate={{ opacity: [0.5, 1, 0.7, 1] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "mirror" }}
             >
               <span className="font-mono text-[#FF3E00]">V</span>RE
             </motion.div>
             <span className="text-[8px] text-white/50 uppercase tracking-widest mt-1">Telemetry</span>
          </div>
        </div>

        {/* Loading text with shifting racing blocks */}
        <div className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70 flex gap-4 items-center">
          Igniting Core Systems
          <div className="flex gap-1">
            <motion.div className="w-2 h-2 bg-[#FF3E00] skew-x-[-20deg]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} />
            <motion.div className="w-2 h-2 bg-[#FF3E00] skew-x-[-20deg]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.15 }} />
            <motion.div className="w-2 h-2 bg-[#FF3E00] skew-x-[-20deg]" animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1, repeat: Infinity, delay: 0.3 }} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

