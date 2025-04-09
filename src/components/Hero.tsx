
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-portfolio-secondary to-white dark:from-portfolio-dark dark:to-portfolio-primary">
      <div className="container">
        <div className="flex flex-col items-start space-y-6 max-w-2xl animate-fade-in">
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
      </div>
    </section>
  );
};

export default Hero;
