
import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
  { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '/gallery', isRoute: true },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Experiences', href: '#events' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#hero" className="flex items-center gap-2">
          <Sun className="h-7 w-7 text-lala-orange" />
          <span className={`handwritten text-2xl font-semibold ${
            isScrolled ? 'text-lala-blue' : 'text-white text-shadow'
          }`}>
            Lala Land
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) =>
            item.isRoute ? (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isScrolled ? 'text-foreground hover:text-lala-blue' : 'text-white text-shadow hover:text-lala-sand'
                } transition-colors duration-300`}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? 'text-foreground hover:text-lala-blue' : 'text-white text-shadow hover:text-lala-sand'
                } transition-colors duration-300`}
              >
                {item.name}
              </a>
            )
          )}
          <Button className="bg-lala-orange text-white hover:bg-lala-orangeLight">
            Book Now
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-lala-blue"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-md py-4 px-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-foreground hover:text-lala-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-lala-blue transition-colors"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              )
            )}
            <Button className="bg-lala-orange text-white hover:bg-lala-orangeLight w-full">
              Book Now
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
