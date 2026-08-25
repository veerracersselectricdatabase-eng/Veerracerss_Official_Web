"use client";
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Footer } from './Footer';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { SplashScreen } from './SplashScreen';

const NAV_ITEMS = [
  { label: 'HOME', path: '/', matchValue: 'home' },
  { label: 'ABOUT', path: '/#about', matchValue: 'about' },
  { label: 'THE CAR', path: '/cars', matchValue: '/cars' },
  { label: 'ACHIEVEMENTS', path: '/achievements', matchValue: '/achievements' },
  { label: 'SPONSORS', path: '/#partners', matchValue: 'partners' },
  { label: 'CONTACT', path: '/#contact', matchValue: 'contact' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [activeHashRoute, setActiveHashRoute] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHash = () => setHash(window.location.hash);
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  useEffect(() => {
    const handleGlobalScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleGlobalScroll);
    handleGlobalScroll();
    return () => window.removeEventListener('scroll', handleGlobalScroll);
  }, []);

  useEffect(() => {
    if (pathname !== '/') return;

    const sections = Array.from(document.querySelectorAll('section[id]'));
    
    const handleScroll = () => {
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id') || "";
        }
      });
      setActiveHashRoute(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const activeNavItem = pathname === '/' 
    ? activeHashRoute || hash.replace('#', '') || 'home'
    : pathname;

  const headerClasses = isScrolled
    ? "fixed top-0 left-0 w-full px-4 md:px-12 lg:px-24 py-4 z-50 bg-[#0A0A0A] border-b border-white/5 transition-all duration-300 ease-in-out flex justify-between items-center"
    : "fixed top-0 left-0 w-full px-4 md:px-12 lg:px-24 py-6 z-50 bg-gradient-to-b from-black/90 to-transparent transition-all duration-300 ease-in-out flex justify-between items-center";

  return (
    <div className="font-sans text-on-surface selection:bg-racing-red selection:text-white min-h-screen relative dark">
      <SplashScreen />
      
      {/* TopNavBar */}
      <header className={headerClasses}>
        <nav className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-4">
              <img src="/VRE%20Logo.png" alt="VeerRacerss Logo" className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ease-in-out`} />
              <span className="text-white font-display font-bold text-lg md:text-xl tracking-[0.2em] uppercase hidden lg:block">VeerRacerss</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 relative pt-2">
            {NAV_ITEMS.map((item) => {
                const isActive = activeNavItem === item.matchValue;
                return (
                  <div key={item.path} className="relative group">
                    {item.path.startsWith('/#') ? (
                      <a href={item.path} className={`relative z-10 text-[12px] uppercase tracking-[0.1em] font-bold transition-all duration-300 font-sans ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.path} className={`relative z-10 text-[12px] uppercase tracking-[0.1em] font-bold transition-all duration-300 font-sans ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`}>
                        {item.label}
                      </Link>
                    )}
                    
                    {/* Active Underline */}
                    <div className={`absolute -bottom-2 left-0 h-[2px] bg-racing-red transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                  </div>
                );
            })}
          </div>
          <button className="md:hidden text-white ml-4 cursor-pointer" aria-label="Toggle mobile menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-3xl md:hidden flex flex-col items-center justify-center space-y-8 animate-in fade-in zoom-in-95 duration-200">
          {NAV_ITEMS.map((item) => {
             const isActive = activeNavItem === item.matchValue;
             return item.path.startsWith('/#') ? (
                <a key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-xl font-display uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive ? 'text-racing-red' : 'text-white/80 hover:text-white'}`}>
                  {item.label}
                </a>
             ) : (
                <Link key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-xl font-display uppercase tracking-[0.2em] font-bold transition-all duration-300 ${isActive ? 'text-racing-red' : 'text-white/80 hover:text-white'}`}>
                  {item.label}
                </Link>
             );
          })}
          
          <div className="h-px w-24 bg-white/10 my-4" />
          
          <Link 
            href="/admin/login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-lg font-display font-bold uppercase tracking-[0.2em] text-racing-red hover:text-white transition-colors"
          >
            Login
          </Link>
        </div>
      )}

      {/* Main Content */}
      <main className="relative z-10 font-sans bg-background">
        {children}
      </main>

      <Footer />
    </div>
  );
}
