export function Partners() {
  const SPONSORS = [
    "SPONSOR A", "SPONSOR B", "SPONSOR C", "SPONSOR D", "SPONSOR E",
    "SPONSOR F", "SPONSOR G", "SPONSOR H"
  ];

  return (
    <section className="py-24 relative z-10" id="partners">
      <div className="w-full text-center">
        <p className="font-sans text-xs text-text-muted tracking-[0.4em] mb-12 uppercase px-4 font-bold">
          Empowered by Global Leaders
        </p>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden w-full flex bg-[#090909]/80 border-y border-white/5 py-12 mask-image-fade backdrop-blur-md">
          
          {/* Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10 pointer-events-none"></div>

          <div className="flex flex-nowrap w-max animate-marquee gap-8 md:gap-16 px-8 items-center hover:[animation-play-state:paused]">
            {[...SPONSORS, ...SPONSORS].map((sponsor, idx) => (
              <div 
                key={idx} 
                className="h-24 w-56 glass-panel rounded-2xl flex items-center justify-center text-center opacity-70 hover:opacity-100 hover:border-racing-red transition-all duration-500 cursor-pointer shadow-[0_0_0_rgba(255,30,0,0)] hover:shadow-[0_0_30px_rgba(255,30,0,0.15)] hover:-translate-y-2 transform group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-[14px] font-black uppercase tracking-[0.2em] group-hover:text-racing-red transition-colors text-white/50 relative z-10 font-display">
                  {sponsor}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
