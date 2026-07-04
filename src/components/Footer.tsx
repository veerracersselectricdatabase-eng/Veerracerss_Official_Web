import { Instagram, Linkedin, Youtube, Facebook, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-20 pb-8 px-4 md:px-16 z-10 relative overflow-hidden">
      {/* Big Background Logo Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-[45%] -translate-y-[40%] w-full text-center pointer-events-none opacity-[0.02]">
        <h2 className="text-[18vw] font-hero tracking-tightest uppercase whitespace-nowrap">
          VEERRACERSS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10 mb-16">
        <div className="flex flex-col gap-8 max-w-lg">
          <a href="/" className="self-start">
            <img src="/VRE%20Logo.png" alt="VeerRacerss Logo" className="h-24 md:h-32 lg:h-40 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,30,0,0.3)]" />
          </a>
          <p className="text-white/80 text-base md:text-lg font-sans font-medium leading-relaxed">
            Pushing the boundaries of electric mobility through student-led innovation and high-performance engineering.
          </p>
        </div>

        <div className="flex gap-16 md:gap-24 flex-wrap">
          <div className="flex flex-col gap-5">
            <h4 className="text-racing-red font-display text-2xl md:text-3xl font-bold uppercase tracking-widest mb-2 drop-shadow-md">Explore</h4>
            <a href="/#about" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">Legacy & Evolution</a>
            <a href="/members" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">Squad/Members</a>
            <a href="/cars" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">Our Cars</a>
            <a href="/achievements" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">Achievements</a>
            <a href="/#schedule" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">Race Schedule</a>
            <a href="/#timeline" className="text-white/80 hover:text-white transition-colors text-base md:text-lg font-sans font-medium">The Journey</a>
          </div>
          
          <div className="flex flex-col">
            <div className="inline-block mb-6">
              <h4 className="text-racing-red font-display text-2xl md:text-3xl font-bold uppercase tracking-widest mb-2 drop-shadow-md">Connect</h4>
              <div className="w-16 h-[2px] bg-[#FF3E00]"></div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" title="Visit our LinkedIn" className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/20 text-white/90 hover:bg-[#FF3E00] hover:text-white hover:border-[#FF3E00] hover:shadow-[0_0_20px_rgba(255,62,0,0.5)] transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="Visit our Instagram" className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/20 text-white/90 hover:bg-[#FF3E00] hover:text-white hover:border-[#FF3E00] hover:shadow-[0_0_20px_rgba(255,62,0,0.5)] transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" title="Visit our Facebook" className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/20 text-white/90 hover:bg-[#FF3E00] hover:text-white hover:border-[#FF3E00] hover:shadow-[0_0_20px_rgba(255,62,0,0.5)] transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" title="Visit our YouTube" className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/20 text-white/90 hover:bg-[#FF3E00] hover:text-white hover:border-[#FF3E00] hover:shadow-[0_0_20px_rgba(255,62,0,0.5)] transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6 text-white/90 group">
                <Mail className="w-6 h-6 text-[#FF3E00] group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-sans font-medium hover:text-white transition-colors cursor-pointer">tech@veerracerss.org</span>
              </div>
              <div className="flex items-center gap-6 text-white/90 group">
                <Phone className="w-6 h-6 text-[#FF3E00] group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-sans font-medium hover:text-white transition-colors cursor-pointer">+91 9967624731</span>
              </div>
              <div className="flex items-center gap-6 text-white/90 group">
                <MapPin className="w-6 h-6 text-[#FF3E00] group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-sans font-medium hover:text-white transition-colors cursor-pointer">Coimbatore, 641014, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full h-[1px] bg-white/20 mb-8 relative z-10"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 w-full">
        <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 text-center md:text-left">
          Engineered for Velocity © 2026 Team Veerracerss. All rights reserved.
        </p>
        
        <div className="flex gap-8">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-white/60 text-center">
            Coimbatore, India
          </p>
        </div>
      </div>
    </footer>
  );
}
