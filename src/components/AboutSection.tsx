
import { Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-lala-sand/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image Column */}
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl image-zoom">
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027" 
                alt="Mountain view near Lala Land" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="handwritten text-lala-orange text-xl">Est. 2018</div>
            </div>
          </div>

          {/* Text Column */}
          <div className="w-full md:w-1/2">
            <h2 className="handwritten text-4xl text-lala-blue mb-3">Our Story</h2>
            <h3 className="text-2xl font-light mb-6">Where Desert Meets the Sea</h3>
            
            <div className="space-y-4 text-lg">
              <p>
                Lala Land was born from a dream to create a sanctuary where travelers could disconnect from the digital world and reconnect with nature's simple beauty.
              </p>
              <p>
                Nestled between the majestic Sinai mountains and the crystal-clear waters of the Red Sea, our camp embraces the principles of sustainable living and authentic experiences.
              </p>
              <p>
                Our philosophy is simple: eco-friendly practices, digital detox opportunities, and genuine connections with nature and fellow travelers.
              </p>
            </div>

            <div className="mt-8 flex items-center">
              <Heart className="text-lala-orange mr-2 h-6 w-6" />
              <span className="handwritten text-xl">Created with love by the Lala family</span>
            </div>

            {/* Team Photos */}
            <div className="mt-8 flex -space-x-4">
              <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 h-14 rounded-full border-2 border-white overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-14 h-14 bg-lala-blue rounded-full border-2 border-white flex items-center justify-center text-white">
                +3
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
