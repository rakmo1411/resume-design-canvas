
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <nav className="container flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold text-portfolio-primary">
          Omkar<span className="text-portfolio-accent">.dev</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#about" className="nav-link">About</a>
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#experience" className="nav-link">Experience</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        
        {/* Mobile Navigation Toggle */}
        <button onClick={toggleMenu} className="md:hidden text-portfolio-primary">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
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
