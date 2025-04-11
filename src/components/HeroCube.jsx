
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useTheme } from '../contexts/ThemeContext';
import * as THREE from 'three';

const HeroCube = ({ position = [0, 0, 0], size = 1.5 }) => {
  const ref = useRef();
  const { theme } = useTheme();
  
  // Create points for a more interesting geometry
  const edges = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      // More dramatic floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.4;
      // Faster rotation for better visibility
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.015;
    }
    
    if (edges.current) {
      edges.current.rotation.x = ref.current.rotation.x;
      edges.current.rotation.y = ref.current.rotation.y;
      edges.current.position.y = ref.current.position.y;
    }
  });

  // Use a more vibrant color scheme with stronger emission
  const primaryColor = theme === 'dark' ? '#4db5ff' : '#3498db';
  const edgeColor = theme === 'dark' ? '#ffffff' : '#1a2a3a';
  
  return (
    <>
      <mesh ref={ref} position={position} castShadow receiveShadow>
        <boxGeometry args={[size, size, size]} />
        <meshStandardMaterial 
          color={primaryColor}
          metalness={0.9}
          roughness={0.1}
          emissive={primaryColor}
          emissiveIntensity={0.6}
        />
      </mesh>
      
      {/* Add wireframe for better visibility */}
      <lineSegments ref={edges} position={position}>
        <edgesGeometry attach="geometry">
          <boxGeometry args={[size + 0.05, size + 0.05, size + 0.05]} />
        </edgesGeometry>
        <lineBasicMaterial attach="material" color={edgeColor} linewidth={2} />
      </lineSegments>
    </>
  );
};

export default HeroCube;
