
import React, { Suspense } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ThreeDBackground from './ThreeDBackground';
import HeroCube from './HeroCube';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16 bg-gradient-to-b from-portfolio-secondary/80 to-white/80 dark:from-portfolio-dark/90 dark:to-portfolio-primary/90 overflow-hidden">
      <ThreeDBackground />
      
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col items-start space-y-6 max-w-2xl animate-fade-in md:w-1/2">
            <h1 className="text-portfolio-primary dark:text-white">
              Hi, I'm <span className="text-portfolio-accent hover:scale-105 inline-block transition-transform duration-300">Omkar Bandopant Vasekar</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-portfolio-primary/80 dark:text-white/80">
              Computer Engineering Student & ML Developer
            </h2>
            <p className="text-lg text-portfolio-primary/70 dark:text-white/70">
              Passionate about building AI-driven solutions and web applications that solve real-world problems.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href="#projects" 
                className="btn-primary px-6 py-3 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="btn-outline px-6 py-3 hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 dark:text-white dark:border-white dark:hover:bg-white/10"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full flex justify-center pt-16">
              <a 
                href="#about" 
                className="text-portfolio-accent animate-bounce hover:animate-none hover:scale-110 transition-transform"
              >
                <ArrowDownCircle size={36} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 h-[400px] mt-10 md:mt-0 bg-white/5 backdrop-blur-sm rounded-2xl shadow-xl dark:bg-black/10">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D Model...</div>}>
              <Canvas shadows>
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <HeroCube position={[0, 0, 0]} />
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
              </Canvas>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
