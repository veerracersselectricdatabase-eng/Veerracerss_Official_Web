"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";

const rankingData = [
  { year: '2020', supra: 45, imperial: 28, ev: 30, women: 10 },
  { year: '2021', supra: 32, imperial: 18, ev: 45, women: 15 },
  { year: '2022', supra: 19, imperial: 12, ev: 65, women: 22 },
  { year: '2023', supra: 12, imperial: 7,  ev: 78, women: 28 },
  { year: '2024', supra: 6,  imperial: 3,  ev: 88, women: 35 },
  { year: '2025', supra: 2,  imperial: 1,  ev: 96, women: 40 },
];

export function About() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 md:py-32 px-4 md:px-16 max-w-7xl mx-auto relative z-10" id="about">
      <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="space-y-8 glass-panel p-8 md:p-12 rounded-3xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="inline-block w-8 h-1 bg-racing-red"></span>
            <span className="text-racing-red text-[10px] uppercase tracking-[0.3em] font-bold">
              Our Legacy
            </span>
          </div>
          <h2 className="text-[40px] md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase font-display">
            Fuelled by <span className="font-hero uppercase text-white tracking-wider drop-shadow-[0_0_10px_rgba(255,30,0,0.5)]" style={{ WebkitTextStroke: '1px white' }}>Ambition</span>, <br/>
            Driven by Precision.
          </h2>
          <p className="font-sans text-[16px] text-text-muted font-light leading-relaxed">
            Team Veerracerss is not just a student racing team; we are a collective of engineers, designers, and visionaries from VSSUT pushing the limits of automotive technology. We represent our university at Supra SAE and Formula Imperial, crafting high-performance formula vehicles that blend radical aerodynamics with sustainable engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/about" className="bg-racing-red text-black px-8 py-4 text-[10px] font-bold hover:bg-white transition-all uppercase tracking-widest cursor-pointer text-center clip-path-slant group">
              <span className="group-hover:-translate-x-1 inline-block transition-transform">Read Our Story</span>
            </Link>
            <Link href="/cars" className="border border-white/20 text-white px-8 py-4 text-[10px] font-bold hover:bg-white/10 transition-all uppercase tracking-widest cursor-pointer text-center clip-path-slant">
              Explore Our Cars
            </Link>
          </div>
        </div>
        
        <div className="relative mt-12 md:mt-0 flex flex-col justify-center gap-6">
          <div className="aspect-[4/5] glass-panel p-2 rounded-3xl relative overflow-hidden group">
            <img 
              className="w-full h-full object-cover rounded-2xl mix-blend-luminosity opacity-80 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
              alt="Group of diverse young student engineers huddled around a formula car" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl9cwwxKrwpQAzlo95bBhvimUTAqo35f4O40MFvKusyhQe4NqVWbd9vQwz67JiXBY5WY2f6ttTgtCKcAgtSO-yVjVQuQlQ5-GcitAcjWLwO7ScRKuFKxe8sTXcBBsLoh4-VdgBFN7nTCIK9NDTJ86sU4W3pkY6HtJomyu7l0lPxCPebIqWK6pcIovcvCcNCDswqa_kt751xd3JO3znXAAd7T71VZiBQSrlsZGZ9T5okNBWBnNiLNj61Wow3DWff9dT5KJMV0ZHnhc" 
            />
            <div className="absolute top-6 right-6 z-10 glass-pill px-4 py-2">
              <p className="text-[10px] font-mono uppercase tracking-widest text-racing-red">VSSUT Racing</p>
            </div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-16">
        <div className="mb-12 flex flex-col items-center text-center">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 font-display">Competitive Progression</h3>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-text-muted">Supra & Formula Imperial Performance (2020-2025)</p>
        </div>
        <div className="h-[400px] w-full glass-panel rounded-3xl p-6 relative group">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={rankingData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
              <XAxis dataKey="year" stroke="#444" tick={{ fill: '#888', fontSize: 10 }} tickLine={false} axisLine={false} />
              
              <YAxis yAxisId="rank" stroke="#444" reversed={true} domain={[1, 50]} tick={{ fill: '#888', fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(val) => `P${val}`} />
              <YAxis yAxisId="score" orientation="right" stroke="#444" domain={[0, 100]} tick={{ fill: '#888', fontSize: 10 }} tickLine={false} axisLine={false} tickFormatter={(val) => `${val}%`} />
              
              <Tooltip 
                contentStyle={{ backgroundColor: 'rgba(17,17,17,0.9)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                labelStyle={{ color: '#888', fontSize: '10px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.1em' }}
              />
              <Legend wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', paddingTop: '20px' }} />
              
              <Line yAxisId="rank" type="monotone" name="Supra Rank" dataKey="supra" stroke="#FF1E00" strokeWidth={3} dot={{ fill: '#111', stroke: '#FF1E00', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#FF1E00', stroke: '#111' }} />
              <Line yAxisId="rank" type="monotone" name="Formula Imperial Rank" dataKey="imperial" stroke="#00E5FF" strokeWidth={3} dot={{ fill: '#111', stroke: '#00E5FF', strokeWidth: 2, r: 4 }} activeDot={{ r: 6, fill: '#00E5FF', stroke: '#111' }} />
              <Line yAxisId="score" type="monotone" name="EV Score" dataKey="ev" stroke="#FFFFFF" strokeWidth={2} strokeDasharray="5 5" dot={false} activeDot={{ r: 4, fill: '#FFF', stroke: '#111' }} />
              <Line yAxisId="score" type="monotone" name="Diversity Score" dataKey="women" stroke="#888888" strokeWidth={2} strokeDasharray="3 3" dot={false} activeDot={{ r: 4, fill: '#888', stroke: '#111' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center mt-12">
          <Link href="/achievements" className="glass-pill px-8 py-4 text-[12px] font-bold text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-[0.2em] cursor-pointer inline-flex items-center gap-4 group">
            <span>View All Achievements</span>
            <div className="text-racing-red group-hover:text-black transition-colors duration-300 transform group-hover:translate-x-1">→</div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}
