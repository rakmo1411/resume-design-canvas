
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { useTheme } from '../contexts/ThemeContext';

// Animated particle component
const Particle = ({ position, size, speed, color }) => {
  const ref = useRef();
  const [offset] = useState(Math.random() * 10000);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed + offset) * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.2;
      ref.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
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
      primary: theme === 'dark' ? '#3498db' : '#3498db',
      secondary: theme === 'dark' ? '#1a2a3a' : '#2d3e50',
    });
    
    // Generate particles
    if (particles.current.length === 0) {
      for (let i = 0; i < 50; i++) {
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 10;
        const z = (Math.random() - 0.5) * 10 - 5;
        const size = Math.random() * 0.2 + 0.05;
        const speed = Math.random() * 0.5 + 0.5;
        particles.current.push({ position: [x, y, z], size, speed });
      }
    }
  }, [theme]);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <fog attach="fog" args={[theme === 'dark' ? '#121212' : '#f5f7fa', 10, 25]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      {particles.current.map((particle, i) => (
        <Particle 
          key={i} 
          position={particle.position}
          size={particle.size} 
          speed={particle.speed} 
          color={i % 3 === 0 ? colors.primary : colors.secondary}
        />
      ))}
    </>
  );
};

const ThreeDBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ThreeDBackground;
