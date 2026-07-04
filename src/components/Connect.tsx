"use client";
export function Connect() {
  return (
    <section className="py-16 md:py-32 px-4 md:px-16 max-w-7xl mx-auto text-center relative z-10" id="connect">
      <div className="glass-panel rounded-3xl py-16 md:py-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-racing-red opacity-10 blur-[120px] pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan opacity-10 blur-[120px] pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
        
        <h2 className="text-[50px] md:text-[80px] leading-[0.85] font-black tracking-tighter uppercase mb-6 z-10 font-display">
          JOIN <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>THE</span> <br/>
          VANGUARD
        </h2>
        <p className="text-text-muted font-sans max-w-2xl mx-auto mb-16 z-10 text-lg">
          Whether you're a potential partner, a future team member, or a racing enthusiast, we'd love to hear from you. Let's engineer the future of racing together.
        </p>
        
        <form className="max-w-xl w-full mx-auto space-y-8 z-10 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative racing-border">
              <input 
                required
                className="bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-transparent transition-all py-4 text-white placeholder:text-white/30 text-[10px] tracking-widest uppercase w-full font-mono" 
                placeholder="Full Name" 
                type="text"
              />
            </div>
            <div className="relative racing-border">
              <input 
                required
                className="bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-transparent transition-all py-4 text-white placeholder:text-white/30 text-[10px] tracking-widest uppercase w-full font-mono" 
                placeholder="Email Address" 
                type="email"
              />
            </div>
          </div>
          <div className="relative racing-border mt-8">
            <textarea 
              required
              className="w-full bg-transparent border-0 border-b border-white/20 focus:outline-none focus:ring-0 focus:border-transparent transition-all py-4 text-white placeholder:text-white/30 text-[10px] tracking-widest uppercase resize-y font-mono" 
              placeholder="Your Message" 
              rows={4}
            ></textarea>
          </div>
          <button 
            type="submit"
            className="w-full bg-racing-red text-black text-[12px] font-bold py-6 mt-12 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 uppercase tracking-[0.3em] cursor-pointer rounded-xl font-display relative overflow-hidden group/btn"
          >
            <span className="relative z-10">Send Signal</span>
            <div className="absolute inset-0 bg-white transform translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
          </button>
        </form>
      </div>
    </section>
  );
}
