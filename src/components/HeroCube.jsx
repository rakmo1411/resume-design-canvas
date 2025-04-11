
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../contexts/ThemeContext';

const HeroCube = ({ position = [0, 0, 0], size = 1.5 }) => {
  const ref = useRef();
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (ref.current) {
      // Gentle floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      // Slow rotation
      ref.current.rotation.x += 0.005;
      ref.current.rotation.y += 0.01;
    }
  });

  const primaryColor = theme === 'dark' ? '#3498db' : '#3498db';
  
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial 
        color={primaryColor}
        metalness={0.8}
        roughness={0.2}
        emissive={primaryColor}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

export default HeroCube;
