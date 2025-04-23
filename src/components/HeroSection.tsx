
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image - Fullscreen beach/sunset image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/public/WhatsApp Image 2025-04-23 at 23.19.21_8bf2e5b0.jpg"
          alt="Lala Land Beach at Sunset"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center text-center pt-16">
        <h1 className="text-shadow-lg text-5xl md:text-7xl text-white mb-4 handwritten">
          Welcome to Lala Land
        </h1>
        <p className="text-shadow text-xl md:text-2xl text-white mb-8 max-w-2xl fade-in">
          Your escape by the Red Sea
        </p>
        
        <div className="mt-8 fade-in animate-delay-200">
          <Button
            className="bg-lala-orange text-white hover:bg-lala-orangeLight text-lg px-8 py-6 rounded-full hover-float"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore the Camp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center fade-in animate-delay-500">
        <div 
          className="text-white flex flex-col items-center animate-bounce cursor-pointer" 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-sm mb-1">Scroll Down</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
