"use client";
import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";

const EVENTS = [
  {
    id: 1,
    name: "Formula Bharat 2026",
    date: "Jan 22 - Jan 27, 2026",
    location: "Kari Motor Speedway, Coimbatore",
    status: "Upcoming",
    discipline: "EV Category",
  },
  {
    id: 2,
    name: "Formula Student Germany",
    date: "Aug 11 - Aug 17, 2026",
    location: "Hockenheimring, Germany",
    status: "Qualifying",
    discipline: "EV Category",
  },
  {
    id: 3,
    name: "Supra SAEINDIA",
    date: "Jul 05 - Jul 10, 2026",
    location: "Buddh International Circuit, Greater Noida",
    status: "Confirmed",
    discipline: "Combustion",
  }
];

export function Schedule() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden border-t border-white/5" id="schedule">
      <div className="px-4 md:px-16 max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="mb-12 md:mb-16"
        >
          <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-black tracking-tighter uppercase mb-4">
             RACE <span className="text-transparent" style={{ WebkitTextStroke: '1px #F5F5F5' }}>CALENDAR</span>
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] font-light text-white/50 mt-4">
            UPCOMING COMPETITIONS & EVENTS
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {EVENTS.map((event, index) => (
            <motion.div 
               key={event.id}
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
               className="group border border-white/10 bg-[#111] hover:border-[#FF3E00]/50 transition-all duration-300 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-transparent group-hover:bg-[#FF3E00] transition-colors"></div>
              
              <div className="flex flex-col gap-3 z-10 w-full md:w-1/3">
                <div className="text-[10px] text-[#FF3E00] font-bold uppercase tracking-widest">{event.discipline}</div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{event.name}</h3>
              </div>

              <div className="flex flex-col gap-4 z-10 w-full md:w-1/3 text-white/70">
                <div className="flex items-center gap-3">
                  <Calendar className="w-4 h-4 text-white/30" />
                  <span className="text-sm font-light tracking-wide">{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white/30" />
                  <span className="text-sm font-light tracking-wide">{event.location}</span>
                </div>
              </div>

              <div className="flex items-center justify-start md:justify-end gap-3 z-10 w-full md:w-1/3">
                <div className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest border ${event.status === 'Upcoming' ? 'border-[#FF3E00] text-[#FF3E00] bg-[#FF3E00]/10' : 'border-white/20 text-white/50 bg-white/5'}`}>
                  {event.status}
                </div>
              </div>

              {/* Decorative background number */}
              <div className="absolute right-4 -top-8 text-[120px] font-black text-white/[0.02] group-hover:text-[#FF3E00]/[0.05] transition-colors pointer-events-none select-none">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

