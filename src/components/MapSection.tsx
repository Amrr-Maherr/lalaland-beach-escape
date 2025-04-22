
import { Map, Compass } from 'lucide-react';

const MapSection = () => {
  return (
    <section id="map" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">Find Your Way to Paradise</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Directions to Lala Land Beach Camp in Nuweiba, Egypt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden h-96">
            {/* Replace with actual map implementation */}
            <div className="relative h-full w-full">
              {/* This is a placeholder for the actual map */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.84433817295!2d34.59958155496137!3d29.049050147318244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15337874b452f253%3A0x79daa4085c5be0b1!2sNuweiba%2C%20South%20Sinai%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1674593320996!5m2!1sen!2sus"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lala Land Beach Camp Map"
                className="absolute inset-0"
              ></iframe>
              
              {/* Map Overlay */}
              <div className="absolute top-4 left-4 p-3 bg-white/90 backdrop-blur-sm rounded-lg shadow-md">
                <div className="flex items-center">
                  <Map className="text-lala-blue h-5 w-5 mr-2" />
                  <span className="font-medium">Lala Land Beach Camp</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">Nuweiba, Egypt</div>
              </div>
            </div>
          </div>

          {/* Directions */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-5">
              <Compass className="text-lala-orange h-6 w-6 mr-3" />
              <h3 className="text-2xl font-semibold">How to Reach Us</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">From Sharm El Sheikh International Airport:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Airport to Nuweiba is approximately 1.5 hours by car (180 km)</li>
                  <li>Pre-arrange a pickup with us (recommended)</li>
                  <li>Or take a taxi to Nuweiba town and we'll pick you up</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">From Cairo:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Take a bus from Cairo to Nuweiba (approximately 6-7 hours)</li>
                  <li>Multiple bus companies operate this route with daily departures</li>
                  <li>Contact us with your arrival time and we'll arrange pickup from Nuweiba bus station</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-2">From Taba Border (Israel/Jordan):</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Approximately 70 km south of Taba (1-hour drive)</li>
                  <li>Shared taxis are available from the border</li>
                </ul>
              </div>
              
              <div className="mt-6 p-4 bg-lala-sand/30 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>Exact Location:</strong> Our beach camp is located 15 km south of Nuweiba town, 
                  in the area known as Nuweiba Village. Look for the wooden "Lala Land" sign with colorful flags.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
