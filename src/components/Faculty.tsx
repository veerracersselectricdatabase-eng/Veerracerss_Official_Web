"use client";
import { motion } from "motion/react";

const facultyMembers = [
  {
    name: "Mr. Debasish Tripathy",
    role: "Faculty Advisor | Present",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop", // placeholder
    link: "https://www.vssut.ac.in/faculty-profile.php?furl=debasish-tripathy"
  },
  {
    name: "Prof.(Dr.) P.Nanda",
    role: "Sr. Faculty Advisor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop", // placeholder
    link: "#"
  },
  {
    name: "Mr. Prabir Kumar Jena",
    role: "Faculty Advisor | 20XX-2023",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop", // placeholder
    link: "https://www.vssut.ac.in/faculty-profile.php?furl=prabir-kumar-jena"
  }
];

export function Faculty() {
  return (
    <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto relative z-10 border-t border-white/10" id="faculty">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display">Faculty Advisors</h2>
        <div className="w-24 h-1 bg-racing-red mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {facultyMembers.map((faculty, index) => (
          <motion.div 
            key={faculty.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0d0d0d] border border-white/10 p-4 relative group rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-electric-green/0 group-hover:bg-electric-green/5 transition-colors duration-300 pointer-events-none"></div>
            
            <div className="aspect-square bg-white/5 mb-6 overflow-hidden border border-white/5 rounded-xl">
              <img src={faculty.image} alt={faculty.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <div className="px-2">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-2 font-display text-white">{faculty.name}</h3>
              <p className="text-electric-green font-mono text-xs uppercase tracking-widest mb-6">{faculty.role}</p>
              
              <a href={faculty.link} target="_blank" rel="noopener noreferrer" className="inline-block border border-white/20 text-white/80 hover:text-black hover:border-electric-green hover:bg-electric-green px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-xl">
                Know More
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
