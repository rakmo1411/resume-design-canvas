
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or service
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="bg-portfolio-primary text-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 after:bg-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-white/80 mb-6 max-w-md">
              Feel free to reach out if you're looking to collaborate, have any questions, 
              or just want to connect. I'm always open to discussing new projects and opportunities.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Email</p>
                  <a href="mailto:vasekaromkar@gmail.com" className="text-white hover:text-portfolio-accent transition-colors">
                    vasekaromkar@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <Phone className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Phone</p>
                  <a href="tel:+919080245495" className="text-white hover:text-portfolio-accent transition-colors">
                    +91 9080245495
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 p-3 rounded-full">
                  <MapPin className="text-portfolio-accent" size={20} />
                </div>
                <div>
                  <p className="text-sm text-white/60">Location</p>
                  <p className="text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 p-6 rounded-lg backdrop-blur-sm">
              <div className="mb-4">
                <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-portfolio-accent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-portfolio-accent resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-portfolio-accent hover:bg-portfolio-accent/80 text-white py-3 px-6 rounded flex items-center justify-center transition-colors"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
