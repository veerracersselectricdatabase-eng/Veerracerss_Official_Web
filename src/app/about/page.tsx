"use client";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Zap, Orbit, Shield, Target, X, Plus, Star } from "lucide-react";
import React, { useRef, useState } from "react";
import { Footer } from "../../components/Footer";
import { Partners } from "../../components/Partners";


const TIMELINE_MOMENTS = [
  {
    year: "2025",
    title: "Midnight Shakedown",
    category: "Track Testing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Final aero validations and powertrain tuning under the cover of darkness. Pushing the custom inverters to their thermal limits."
  },
  {
    year: "2025",
    title: "Aero Validation",
    category: "Wind Tunnel",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Evaluating the undertray modifications and sidepod performance against CFD models before final assembly."
  },
  {
    year: "2024",
    title: "Formula Bharat",
    category: "Endurance",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Podium finish in the EV category. The culmination of 12 months of relentless engineering, resulting in our most efficient battery package."
  },
  {
    year: "2024",
    title: "Endurance Test",
    category: "Track Testing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "A grueling 22km run simulating the competition's harshest conditions. The new cooling vents proved highly effective."
  },
  {
    year: "2024",
    title: "Driver Training",
    category: "Preparation",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Drivers getting comfortable with the new steering wheel interface and regenerative braking maps."
  },
  {
    year: "2023",
    title: "Chassis Assembly",
    category: "Design Phase",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "The moment our lightest monocoque to date was finally bonded and cured, shaving 15 kilos off the previous iteration."
  },
  {
    year: "2023",
    title: "Suspension Fab",
    category: "Manufacturing",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Welding the custom A-arms in-house to strict tolerances."
  },
  {
    year: "2022",
    title: "First Rollout",
    category: "Milestone",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc",
    description: "Our bold transition to electric powertrains hit the tarmac for the very first time. A new era for VeerRacerss."
  }
];

const CARS = [
  {
    name: "VRE-05 'Spectre'",
    year: "2025",
    features: ["AWD Torque Vectoring", "Custom Inverters", "Carbon Monocoque"],
    stats: { speed: "115 km/h", accel: "2.1s 0-100", weight: "210kg" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc", // Placeholder
    description: "The pinnacle of our engineering evolution. Spectre features a redesigned aero package delivering 30% more downforce, coupled with our first fully custom-developed motor controllers."
  },
  {
    name: "VRE-04 'Valkyrie'",
    year: "2024",
    features: ["Steel Spaceframe", "RWD Dual Motor", "Active Aero"],
    stats: { speed: "105 km/h", accel: "2.4s 0-100", weight: "245kg" },
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc", // Placeholder
    description: "Valkyrie marked our transition to custom battery management systems and active aerodynamic elements, laying the groundwork for our future success in the EV category."
  }
];

function Card3D({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xPct = x / rect.width - 0.5;
    const yPct = y / rect.height - 0.5;
    ref.current.style.transform = `perspective(1000px) rotateY(${xPct * 10}deg) rotateX(${-yPct * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handlePointerLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <div 
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`transition-transform duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function DetailedAboutPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const [selectedImage, setSelectedImage] = useState<null | typeof TIMELINE_MOMENTS[0]>(null);
  const YEARS = Array.from(new Set(TIMELINE_MOMENTS.map(m => m.year)));
  const [activeYear, setActiveYear] = useState(YEARS[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const currentMoments = TIMELINE_MOMENTS.filter(m => m.year === activeYear);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-racing-red selection:text-white pt-24 overflow-x-hidden">
      
      <main className="relative pb-16">
        {/* Header Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <motion.div 
            className="text-center z-10 px-4"
            style={{ opacity, y }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter italic text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50"
            >
              The Formula
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="text-[#FF3E00] font-mono text-sm md:text-base tracking-[0.3em] uppercase mt-4"
            >
              Inside Team VeerRacerss
            </motion.p>
          </motion.div>
        </section>

        {/* Philosophy Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-16 py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                More than <br/><span className="text-[#FF3E00]">Engineers</span>
              </h2>
              <div className="space-y-6 text-white/60 font-light text-lg leading-relaxed">
                <p>
                  Team VeerRacerss is a high-performance collective forged at the intersection of ambition and precision. We don't just build cars; we engineer platforms for innovation to test the boundaries of electric mobility.
                </p>
                <p>
                  Every component is a testament to student-led design. From topology optimization to advanced powertrain control algorithms, we take theoretical challenges and turn them into visceral, track-dominating reality.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-l border-[#FF3E00] pl-6">
                  <div className="text-4xl font-black text-white">40+</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#FF3E00] mt-2">Team Members</div>
                </div>
                <div className="border-l border-[#FF3E00] pl-6">
                  <div className="text-4xl font-black text-white">03</div>
                  <div className="text-[10px] uppercase tracking-widest text-[#FF3E00] mt-2">National Podiums</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_60s_linear_infinite] border-dashed"></div>
              <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
              
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="bg-[#111] border border-white/10 p-8 w-full h-full relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[#FF3E00]/5 scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-out"></div>
                  <Target className="w-12 h-12 text-[#FF3E00] mb-8" />
                  <h3 className="text-2xl font-bold uppercase tracking-wider mb-4">Our Mission</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    To pioneer robust electric racing solutions that accelerate the transition to sustainable high-performance vehicles, while forging the next generation of top-tier engineering talent.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Coverflow Moments Carousel */}
        <section className="relative min-h-[900px] w-full py-24 overflow-hidden flex flex-col items-center">
          
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight z-10"
          >
            Pinnacle Moments
          </motion.h2>

          {/* Top Tabs */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex border border-white/30 rounded-full bg-white/5 overflow-hidden mb-16 relative w-[90%] max-w-xl mx-auto backdrop-blur-md z-10 p-1"
          >
            {YEARS.map((year, i) => (
              <button 
                key={year}
                onClick={() => {
                  setActiveYear(year);
                  setActiveIndex(0);
                }}
                className={`flex-1 py-3 text-sm font-bold transition-all duration-300 relative z-10 rounded-full ${activeYear === year ? 'text-black delay-150' : 'text-white/60 hover:text-white'}`}
              >
                {year}
              </button>
            ))}
            {/* Animated Tab Background */}
            <motion.div 
               className="absolute top-1 bottom-1 bg-white rounded-full z-0 pointer-events-none"
               initial={false}
               animate={{ 
                 left: `calc(${(YEARS.indexOf(activeYear) / YEARS.length) * 100}% + 4px)`, 
                 width: `calc(${100 / YEARS.length}% - 8px)` 
               }}
               transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </motion.div>

          {/* Carousel */}
          <div className="relative w-full max-w-[1200px] mx-auto h-[650px] flex flex-col items-center justify-center perspective-[1200px] z-10">
             <div className="relative w-full h-[520px] flex items-center justify-center pointer-events-none">
               {currentMoments.map((m, i) => {
                  const offset = i - activeIndex;
                  const absOffset = Math.abs(offset);
                  const isActive = offset === 0;
                  
                  // We'll push cards out horizontally and slightly back in Z via scale.
                  const x = offset * 260; // horizontal spacing pixels
                  const scale = isActive ? 1 : 0.85;
                  const opacity = absOffset > 1 ? 0 : isActive ? 1 : 0.5;
                  const zIndex = 10 - absOffset;
                  const blur = isActive ? "blur(0px)" : "blur(3px)";

                  return (
                    <motion.div
                      key={m.title}
                      drag={isActive ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.2}
                      onDragEnd={(e, { offset, velocity }) => {
                        const swipePower = Math.abs(offset.x) * velocity.x;
                        if (swipePower < -10000 || offset.x < -50) {
                          if (activeIndex < currentMoments.length - 1) setActiveIndex(activeIndex + 1);
                        } else if (swipePower > 10000 || offset.x > 50) {
                          if (activeIndex > 0) setActiveIndex(activeIndex - 1);
                        }
                      }}
                      initial={false}
                      animate={{ x, scale, opacity }}
                      transition={{ type: "spring", stiffness: 350, damping: 35 }}
                      style={{ zIndex, filter: blur }}
                      className={`absolute w-[280px] sm:w-[320px] md:w-[360px] h-[480px] md:h-[520px] rounded-[2rem] overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.8)] border pointer-events-auto ${isActive ? 'border-white/20' : 'border-white/5'}`}
                      onClick={() => {
                        if (isActive) setSelectedImage(m);
                        else setActiveIndex(i);
                      }}
                    >
                       <img src={m.image} alt={m.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                       {/* Gradient Overlay for legibility */}
                       <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/90 pointer-events-none"></div>
                       
                       {/* Content Top */}
                       <div className="absolute top-6 left-6 right-6 pointer-events-none">
                         <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-1 drop-shadow-md">{m.title}</h3>
                         <p className="text-white/80 text-sm drop-shadow-md font-medium">{m.category}</p>
                       </div>
                    </motion.div>
                  );
               })}
             </div>
             
             {/* Arrows */}
             <div className="flex gap-4 mt-8 pointer-events-auto">
                <button 
                  onClick={() => setActiveIndex(Math.max(0, activeIndex - 1))}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all bg-black/50 backdrop-blur ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/40'}`}
                  disabled={activeIndex === 0}
                >
                  <ArrowLeft className="w-5 h-5 text-white" />
                </button>
                <button 
                  onClick={() => setActiveIndex(Math.min(currentMoments.length - 1, activeIndex + 1))}
                  className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all bg-black/50 backdrop-blur ${activeIndex === currentMoments.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10 hover:border-white/40'}`}
                  disabled={activeIndex === currentMoments.length - 1}
                >
                  <ArrowLeft className="w-5 h-5 text-white rotate-180" />
                </button>
             </div>
          </div>

          {/* Blurred Background Image from Active Item */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <AnimatePresence>
              <motion.img 
                key={currentMoments[activeIndex]?.title || activeIndex}
                src={currentMoments[activeIndex]?.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full object-cover filter blur-[100px] transform scale-110"
              />
            </AnimatePresence>
            {/* Dark gradient overlay over the blurred image */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]"></div>
          </div>
        </section>
        <Partners />
      </main>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 cursor-zoom-out backdrop-blur-md"
          >
            <motion.div
              layoutId={selectedImage.title}
              className="relative max-w-7xl w-full max-h-[90vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.8)] bg-[#111]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                loading="lazy"
                className="w-full h-[60vh] md:h-[75vh] object-contain"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 bg-black/50 hover:bg-[#FF3E00] text-white p-3 rounded-full backdrop-blur-md transition-colors border border-white/20"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-6 md:p-12">
                <div className="flex gap-4 items-center mb-3">
                  <span className="text-[#FF3E00] font-mono text-xl">{selectedImage.year}</span>
                  <span className="h-px w-8 bg-white/30"></span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full border border-white/5">{selectedImage.category}</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4 text-white drop-shadow-lg">{selectedImage.title}</h3>
                <p className="text-white/80 max-w-2xl text-sm md:text-base leading-relaxed drop-shadow-md">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}



