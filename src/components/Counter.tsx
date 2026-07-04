"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "motion/react";

export function Counter({
  value,
  decimals = 0,
  suffix = "",
}: {
  value: number;
  decimals?: number;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          if (ref.current) {
            ref.current.textContent = val.toFixed(decimals) + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, decimals, suffix]);

  return <span ref={ref}>0{decimals > 0 ? '.0' : ''}{suffix}</span>;
}

