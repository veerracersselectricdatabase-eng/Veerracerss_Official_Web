"use client";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ArrowLeft, Linkedin, Instagram } from "lucide-react";
import React, { useRef } from "react";
import { Footer } from "../../components/Footer";
import { Partners } from "../../components/Partners";


import { useEffect, useState } from "react";
import { createClient } from "@/src/lib/supabase/client";

const DOMAIN_DESCRIPTIONS: Record<string, string> = {
  "Leadership": "Guiding the vision and execution of Team VeerRacerss.",
  "Powertrain & Drivetrain": "Designing the high-voltage heart and sheer power delivery.",
  "Chassis": "Engineering the lightweight structural foundation.",
  "Suspension": "Maximizing mechanical grip and vehicle dynamics.",
  "Brakes": "Engineering precision deceleration and control.",
};

function MemberCard({ member }: { member: any }) {
  return (
    <div className="group relative w-full border border-white/20 bg-[#0d0d0d] p-6 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[8px_8px_0px_rgba(225,6,0,1)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
      <div className="absolute inset-0 telemetry-grid opacity-10 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Snappy Mechanical Accent */}
        <div className="absolute top-0 right-0 bottom-0 w-8 bg-racing-red translate-x-[200%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"></div>

        <div className="w-32 h-32 overflow-hidden border-2 border-white/20 group-hover:border-racing-red transition-colors duration-300 relative bg-black">
          <img 
            src={member.image_url} 
            alt={member.name} 
            className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-300"
          />
        </div>

        <div className="text-center z-20 bg-[#0d0d0d] px-4 py-2 border border-white/10 mt-2 group-hover:border-racing-red transition-colors">
          <h3 className="text-xl font-bold uppercase tracking-wider text-white">{member.name}</h3>
          <p className="text-[10px] text-racing-red uppercase tracking-widest mt-1 font-mono font-bold">{member.role}</p>
        </div>

        {/* Social Links (Revealed on Hover) */}
        <div className="flex gap-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] mt-2 z-20">
          <a href={member.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#111] hover:bg-racing-red border border-white/20 hover:border-racing-red flex items-center justify-center text-white/70 hover:text-white transition-all">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href={member.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#111] hover:bg-racing-red border border-white/20 hover:border-racing-red flex items-center justify-center text-white/70 hover:text-white transition-all">
             <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function MembersPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  
  const [domains, setDomains] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      const supabase = createClient();
      const { data } = await supabase.from('members').select('*').order('created_at', { ascending: true });
      
      if (data && data.length > 0) {
        const grouped = data.reduce((acc, member) => {
          if (!acc[member.department]) acc[member.department] = [];
          acc[member.department].push(member);
          return acc;
        }, {} as Record<string, any[]>);

        const formattedDomains = Object.keys(DOMAIN_DESCRIPTIONS).map(dept => ({
          name: dept,
          description: DOMAIN_DESCRIPTIONS[dept],
          members: grouped[dept] || []
        })).filter(d => d.members.length > 0);

        setDomains(formattedDomains);
      }
      setLoading(false);
    };
    fetchMembers();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-racing-red selection:text-white pb-0 pt-24 overflow-x-hidden">
      
      <main className="relative block">
        {/* Header Hero Section */}
        <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
          {/* Telemetry texture */}
          <div className="absolute inset-0 telemetry-grid opacity-20 pointer-events-none"></div>

          <motion.div 
            className="text-center z-10 px-4 flex flex-col items-center"
            style={{ opacity, y }}
          >
            <motion.h1 
              initial={{ opacity: 0, clipPath: 'inset(100% 0 0 0)' }}
              animate={{ opacity: 1, clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white pr-8 pb-4 relative"
              style={{ textShadow: '6px 6px 0px rgba(225, 6, 0, 1)' }}
            >
              The Crew
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-racing-red font-mono text-sm md:text-base tracking-[0.3em] uppercase mt-6 border border-white/20 px-6 py-2 bg-[#0d0d0d] inline-block shadow-[4px_4px_0px_rgba(255,255,255,0.1)]"
            >
              [ MINDS BEHIND THE MACHINES ]
            </motion.p>
          </motion.div>
        </section>

        {/* Domains Section */}
        <section className="max-w-7xl mx-auto px-4 md:px-16 py-12 relative z-10 flex flex-col gap-32 mb-24 min-h-[50vh]">
          {loading ? (
            <div className="flex justify-center items-center py-32 opacity-50">
               <div className="animate-pulse flex items-center gap-4 text-racing-red font-mono tracking-widest uppercase">
                 Fetching Active Roster...
               </div>
            </div>
          ) : domains.length === 0 ? (
            <div className="text-center text-white/50 py-32 font-mono uppercase tracking-widest">
               No members currently assigned to the team.
            </div>
          ) : domains.map((domain, index) => (
            <div key={domain.name} className="flex flex-col gap-12">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="border-b border-white/10 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4"
              >
                <div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white">
                    {domain.name}
                  </h2>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-racing-red md:text-right max-w-sm font-mono font-bold">
                  {domain.description}
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {domain.members.map((member, mIndex) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: mIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <MemberCard member={member} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>
        <Partners />
      </main>
    </div>
  );
}



