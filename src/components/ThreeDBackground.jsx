
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Stars } from '@react-three/drei';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

// Animated particle component
const Particle = ({ position, size, speed, color }) => {
  const ref = useRef();
  const [offset] = useState(Math.random() * 10000);
  
  useFrame((state) => {
    if (ref.current) {
      // More dynamic movement
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + offset) * 0.8;
      ref.current.position.x = position[0] + Math.cos(state.clock.elapsedTime * speed * 0.5 + offset) * 0.3;
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.z = state.clock.elapsedTime * 0.3;
      
      // Pulsating size for more dynamic feel
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.2);
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial 
        color={color} 
        emissive={color} 
        emissiveIntensity={0.8} 
        transparent
        opacity={0.8}
      />
    </mesh>
  );
};

// Scene with multiple particles
const Scene = () => {
  const { theme } = useTheme();
  const particles = useRef([]);
  const [colors, setColors] = useState({
    primary: '#3498db',
    secondary: '#2d3e50',
  });
  
  useEffect(() => {
    setColors({
      primary: theme === 'dark' ? '#4db5ff' : '#3498db',
      secondary: theme === 'dark' ? '#1a2a3a' : '#2d3e50',
    });
    
    // Generate more particles with better distribution
    if (particles.current.length === 0) {
      for (let i = 0; i < 80; i++) {
        const x = (Math.random() - 0.5) * 25;
        const y = (Math.random() - 0.5) * 15;
        const z = (Math.random() - 0.5) * 10 - 5;
        const size = Math.random() * 0.3 + 0.08; // Larger particles
        const speed = Math.random() * 0.8 + 0.5;  // Faster movement
        particles.current.push({ position: [x, y, z], size, speed });
      }
    }
  }, [theme]);

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color={colors.primary} />
      <fog attach="fog" args={[theme === 'dark' ? '#121212' : '#f5f7fa', 15, 30]} />
      
      {/* Add stars in dark mode */}
      {theme === 'dark' && <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade />}
      
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      {particles.current.map((particle, i) => (
        <Particle 
          key={i} 
          position={particle.position}
          size={particle.size} 
          speed={particle.speed} 
          color={i % 4 === 0 ? colors.primary : i % 3 === 0 ? '#e74c3c' : colors.secondary}
        />
      ))}
    </>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
