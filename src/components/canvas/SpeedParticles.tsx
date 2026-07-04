"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const count = 4000;
  
  const [positions, speeds] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const spd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Spread them widely
      pos[i * 3] = (Math.random() - 0.5) * 30; // x
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15; // y
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30; // z
      
      // Aerodynamic speed variation
      spd[i] = Math.random() * 0.3 + 0.1;
    }
    return [pos, spd];
  }, [count]);

  useFrame((state) => {
    if (!ref.current) return;
    const pos = ref.current.geometry.attributes.position.array as Float32Array;
    
    for (let i = 0; i < count; i++) {
      // Simulate aerodynamic wind tunnel effect moving towards the camera (+Z)
      pos[i * 3 + 2] += speeds[i];
      
      // Slight inward pull for aero effect
      pos[i * 3] -= pos[i * 3] * 0.001; 
      pos[i * 3 + 1] -= pos[i * 3 + 1] * 0.001;

      // Reset when they pass the camera
      if (pos[i * 3 + 2] > 15) {
        pos[i * 3 + 2] = -15; // Reset to back
        pos[i * 3] = (Math.random() - 0.5) * 30;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      }
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
    
    // Slow camera-like drift
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
    ref.current.rotation.y = Math.cos(state.clock.elapsedTime * 0.15) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#FF1E00"
        size={0.04}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </Points>
  );
}

export default function SpeedParticles() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]}>
        <ParticleField />
      </Canvas>
    </div>
  );
}
