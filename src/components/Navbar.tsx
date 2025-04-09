
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from './ui/button';
import { HoverCard, HoverCardTrigger, HoverCardContent } from './ui/hover-card';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-md py-2 dark:bg-portfolio-dark dark:shadow-gray-800/30' 
        : 'bg-transparent py-4'
    }`}>
      <nav className="container flex items-center justify-between">
        <a 
          href="#hero" 
          className="text-xl font-bold text-portfolio-primary dark:text-white transition-transform hover:scale-105 duration-300"
        >
          Omkar<span className="text-portfolio-accent">.</span>dev
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6 mr-4">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="flex items-center space-x-2">
            <HoverCard>
              <HoverCardTrigger asChild>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={toggleTheme} 
                  className="rounded-full hover:bg-portfolio-accent/10 transition-all duration-300"
                  aria-label="Toggle theme"
                >
                  {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <span>Switch to {theme === 'light' ? 'dark' : 'light'} mode</span>
              </HoverCardContent>
            </HoverCard>

            <HoverCard>
              <HoverCardTrigger asChild>
                <a 
                  href="/resume.pdf" 
                  download 
                  className="flex items-center justify-center gap-1 px-3 py-2 rounded-full border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-colors duration-300"
                >
                  <Download size={16} />
                  <span className="hidden sm:inline">Resume</span>
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-auto">
                <span>Download my resume</span>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <a 
            href="/resume.pdf"
            download
            className="p-2 rounded-full border border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white transition-colors duration-300"
            aria-label="Download Resume"
          >
            <Download size={18} />
          </a>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={toggleTheme} 
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </Button>
          <button onClick={toggleMenu} className="text-portfolio-primary dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-dark shadow-lg">
          <div className="container py-4 flex flex-col space-y-4">
            <a href="#about" className="nav-link" onClick={toggleMenu}>About</a>
            <a href="#projects" className="nav-link" onClick={toggleMenu}>Projects</a>
            <a href="#experience" className="nav-link" onClick={toggleMenu}>Experience</a>
            <a href="#contact" className="nav-link" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
