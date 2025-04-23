import { Sun, TreePalm, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-lala-blue text-white">
      {/* Wave Top Decoration */}
      <div className="waves waves-footer">
        <div className="wave wave-1"></div>
        <div className="wave wave-2"></div>
        <div className="wave wave-3"></div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Sun className="h-8 w-8 text-lala-sand mr-2" />
              <span className="handwritten text-2xl font-semibold text-white">Lala Land</span>
            </div>
            <p className="text-white/80 mb-6">
              Your beach escape in Nuweiba, where the mountains meet the Red Sea.
            </p>
            <div className="flex space-x-3">
              {/* Facebook Icon */}
              <a href="https://www.facebook.com" className="bg-white/10 rounded-full p-2.5 hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0 5.528-4.472 10-10 10S2 17.528 2 12 6.472 2 12 2s10 4.472 10 10zM12 18c3.315 0 6-2.685 6-6s-2.685-6-6-6-6 2.685-6 6 2.685 6 6 6zm0-10c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4z"></path>
                </svg>
              </a>
              {/* Instagram Icon */}
              <a href="https://www.instagram.com" className="bg-white/10 rounded-full p-2.5 hover:bg-white/20 transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.2 0 3.593.01 4.858.07 1.105.06 1.948.234 2.598.484a5.1 5.1 0 011.864 1.864c.25.65.424 1.493.484 2.598.06 1.265.07 1.658.07 4.858s-.01 3.593-.07 4.858c-.06 1.105-.234 1.948-.484 2.598a5.1 5.1 0 01-1.864 1.864c-.65.25-1.493.424-2.598.484-1.265.06-1.658.07-4.858.07s-3.593-.01-4.858-.07c-1.105-.06-1.948-.234-2.598-.484a5.1 5.1 0 01-1.864-1.864c-.25-.65-.424-1.493-.484-2.598-.06-1.265-.07-1.658-.07-4.858s.01-3.593.07-4.858c.06-1.105.234-1.948.484-2.598a5.1 5.1 0 011.864-1.864c.65-.25 1.493-.424 2.598-.484 1.265-.06 1.658-.07 4.858-.07zm0 1.838c-3.07 0-3.409.01-4.607.07-1.01.05-1.595.213-1.973.38a3.5 3.5 0 00-1.314 1.314c-.167.378-.33.963-.38 1.973-.06 1.198-.07 1.537-.07 4.607s.01 3.409.07 4.607c.05 1.01.213 1.595.38 1.973a3.5 3.5 0 001.314 1.314c.378.167.963.33 1.973.38 1.198.06 1.537.07 4.607.07s3.409-.01 4.607-.07c1.01-.05 1.595-.213 1.973-.38a3.5 3.5 0 001.314-1.314c.167-.378.33-.963.38-1.973.06-1.198.07-1.537.07-4.607s-.01-3.409-.07-4.607c-.05-1.01-.213-1.595-.38-1.973a3.5 3.5 0 00-1.314-1.314c-.378-.167-.963-.33-1.973-.38-1.198-.06-1.537-.07-4.607-.07zM12 6.855a5.145 5.145 0 100 10.29 5.145 5.145 0 000-10.29zm0 1.836a3.308 3.308 0 110 6.616 3.308 3.308 0 010-6.616z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#gallery" className="text-white/80 hover:text-white transition-colors">Gallery</a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors">Pricing</a>
              <a href="#experiences" className="text-white/80 hover:text-white transition-colors">Experiences</a>
              <a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          {/* Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Useful Info</h3>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-white/80 hover:text-white transition-colors">Getting Here</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">What to Bring</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Camp Guidelines</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Cancellation Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">Terms of Service</a>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-white/80">
              <p>Nuweiba Village, South Sinai, Egypt</p>
              <p>info@lalalandcamp.com</p>
              <p>+20 123 456 7890</p>
            </div>
            
            <Button 
              onClick={scrollToTop}
              className="mt-6 bg-white/10 hover:bg-white/20 text-white rounded-full p-3"
              size="icon"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Lala Land Beach Camp. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <TreePalm className="h-4 w-4 text-lala-sand mr-1" />
            <span>Made with love for the Red Sea</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
