"use client";
import { motion } from "motion/react";
import { useRef } from "react";

const MILESTONES = [
  { year: "2018", title: "Inception", description: "Team Veerracerss was officially founded with a vision to build high-performance formula student cars." },
  { year: "2019", title: "First Combustion", description: "Unveiled our first combustion engine prototype, setting the foundation for future innovations." },
  { year: "2021", title: "National Debut", description: "Top 10 finish in our debut at the Formula Bharat national championship." },
  { year: "2023", title: "Electric Transition", description: "Embraced the future of mobility by transitioning to a fully electric powertrain." },
  { year: "2024", title: "Aero Dominance", description: "Introduced advanced CFD-optimized carbon composite aerodynamics for precision cornering." },
  { year: "2025", title: "The VR-24", description: "Achieved record acceleration and track times with our lightest monocoque chassis to date." },
  { year: "2026", title: "Global Expansion", description: "Setting sights on international formula student competitions across Europe and beyond." },
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="timeline" ref={containerRef}>
      {/* 3D Perspective Wrapper */}
      <div className="px-4 md:px-16 max-w-7xl mx-auto mb-16 text-center" style={{ perspective: '1000px' }}>
        <motion.div
          initial={{ opacity: 0, rotateX: 20, y: 50 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-black tracking-tighter uppercase mb-4">
             THE <span className="text-transparent" style={{ WebkitTextStroke: '1px #F5F5F5' }}>JOURNEY</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-white/50 mt-4">
            MILESTONES & EVOLUTION
          </p>
        </motion.div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4" style={{ perspective: '2000px' }}>
        {/* Central Vertical Line (Desktop) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF3E00]/30 to-transparent -translate-x-1/2 z-0"></div>

        {MILESTONES.map((milestone, index) => {
          const isEven = index % 2 === 0;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 100, rotateX: 30, rotateY: isEven ? -15 : 15, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`relative flex flex-col md:flex-row w-full my-8 md:my-16 justify-center md:justify-between items-center`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Mobile Line */}
              <div className="md:hidden absolute left-[15px] top-0 bottom-[-48px] w-[2px] bg-white/10 z-0"></div>

              {/* Dot */}
              <div className="absolute left-[15px] md:left-1/2 -ml-[16px] md:-ml-0 md:-translate-x-1/2 w-8 h-8 rounded-full border-2 border-white/20 bg-[#111] z-20 flex items-center justify-center transform transition-transform duration-500 hover:scale-150 hover:bg-[#FF3E00] hover:border-[#FF3E00] cursor-pointer group">
                <div className="w-2 h-2 bg-white rounded-full group-hover:bg-[#111] transition-colors"></div>
              </div>

              {/* Connecting Line from center to card (Desktop) */}
              <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[calc(50%-40px)] h-[1px] bg-gradient-to-r ${isEven ? 'left-auto right-[50%] from-transparent to-[#FF3E00]/50' : 'left-[50%] right-auto from-[#FF3E00]/50 to-transparent'} z-0`}></div>

              {/* Flex Reordering for Desktop Alternating Layout */}
              {isEven ? (
                <>
                  <div className="w-full md:w-[45%] flex pl-16 md:pl-0 z-10 md:justify-end">
                    <MilestoneCard milestone={milestone} index={index} align="right" />
                  </div>
                  <div className="hidden md:block w-[45%]"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-[45%]"></div>
                  <div className="w-full md:w-[45%] flex pl-16 md:pl-0 z-10 justify-start">
                    <MilestoneCard milestone={milestone} index={index} align="left" />
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function MilestoneCard({ milestone, index, align }: { milestone: any, index: number, align: "left" | "right" }) {
  return (
    <div className={`bg-gradient-to-br from-[#1A1A1A] to-[#0A0A0A] border border-white/10 p-6 md:p-8 w-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,62,0,0.15)] hover:border-[#FF3E00]/50 group relative overflow-hidden ${align === "right" ? "md:text-right" : "md:text-left"}`}>
      
      {/* Background glow effect on hover */}
      <div className={`absolute top-0 ${align === "right" ? "right-0" : "left-0"} w-32 h-32 bg-[#FF3E00]/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}></div>

      <div className="text-[#FF3E00] text-[12px] font-bold uppercase tracking-widest mb-3 relative z-10">
        {milestone.year}
      </div>
      <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-tighter group-hover:text-[#FF3E00] transition-colors relative z-10">
        {milestone.title}
      </h3>
      <p className="text-white/50 text-xs md:text-sm font-light leading-relaxed relative z-10 relative z-10">
        {milestone.description}
      </p>
      
      {/* Decorative Number background */}
      <div className={`absolute -bottom-4 ${align === "right" ? "-left-4" : "-right-4"} text-[80px] md:text-[120px] leading-none font-black tracking-tighter text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none select-none z-0`}>
        {(index + 1).toString().padStart(2, '0')}
      </div>
    </div>
  );
}

