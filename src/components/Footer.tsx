
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">
              Omkar<span className="text-portfolio-accent">.dev</span>
            </h3>
            <p className="text-white/60 mt-2">Computer Engineering Student & ML Developer</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:vasekaromkar@gmail.com" 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} Omkar Bandopant Vasekar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
