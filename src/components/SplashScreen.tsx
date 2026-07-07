"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
        >
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center relative z-10"
          >
            <motion.img 
              src="/VRE%20Logo.png" 
              alt="VeerRacerss Logo" 
              className="h-28 md:h-40 w-auto object-contain mb-8 drop-shadow-[0_0_20px_rgba(255,30,0,0.6)]" 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <motion.h2
              initial={{ opacity: 0, letterSpacing: "0em" }}
              animate={{ opacity: 1, letterSpacing: "0.3em" }}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
              className="font-display text-white/80 text-sm md:text-lg uppercase mb-12 font-semibold"
            >
              Loading the <span className="text-racing-red drop-shadow-[0_0_10px_#FF1E00]">Future</span>
            </motion.h2>
            
            <div className="flex flex-col items-center">
              {/* Spinner */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 border-2 border-white/10 border-t-racing-red rounded-full mb-6"
              />
              
              {/* Progress Bar */}
              <motion.div 
                className="w-64 h-1 bg-white/5 rounded-full overflow-hidden relative"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: "16rem" }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <motion.div 
                  className="absolute left-0 top-0 h-full bg-racing-red shadow-[0_0_15px_#FF1E00]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, delay: 1, ease: "circInOut" }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
