"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

const leaders = [
  {
    name: "Satyabrata Sahoo",
    role: "Captain",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=500&h=600&fit=crop", // placeholder
    instagram: "https://www.instagram.com/bulls_buki_?igsh=MWVmZTJ5Y3QxcjdnYw==",
    linkedin: "https://www.linkedin.com/in/satyabrata-sahoo-8a9852236"
  },
  {
    name: "Abhishek Sabat",
    role: "Vice-Captain",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop", // placeholder
    instagram: "#",
    linkedin: "#"
  },
  {
    name: "Bishnu Prasad Sahu",
    role: "Technical Head / PR Official",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop", // placeholder
    instagram: "https://www.instagram.com/bishnusahu_24?igsh=aDhlNzRicjN5dDdh",
    linkedin: "https://www.linkedin.com/in/bishnu393/"
  }
];

export function TeamLeaders() {
  return (
    <section className="py-24 px-4 md:px-16 max-w-7xl mx-auto relative z-10" id="team">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display">Our Leading Team</h2>
        <div className="w-24 h-1 bg-racing-red mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {leaders.map((leader, index) => (
          <motion.div 
            key={leader.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="group relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden"
          >
            <div className="aspect-[4/5] overflow-hidden relative border-b border-white/10">
              <div className="absolute inset-0 bg-electric-green/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-multiply pointer-events-none"></div>
              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500" />
            </div>
            
            <div className="p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-electric-green -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"></div>
              
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-1 font-display text-white">{leader.name}</h3>
              <p className="text-electric-green font-mono text-xs uppercase tracking-widest mb-6">{leader.role}</p>
              
              <div className="flex gap-4">
                <a href={leader.instagram} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-electric-green transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-electric-green transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Link href="/members" className="bg-racing-red text-black px-10 py-5 text-[12px] font-bold hover:bg-electric-green hover:text-black transition-all duration-300 uppercase tracking-widest cursor-pointer text-center group inline-flex items-center gap-4 rounded-xl">
           <span>View Full Team</span>
           <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
        </Link>
      </div>
    </section>
  );
}
