
import { MapPin, TreePalm } from "lucide-react";
import LalaLandMap from "./LalaLandMap";
import { Button } from "@/components/ui/button";

const MapSection = () => {
  return (
    <section id="map" className="py-20 bg-lala-sand/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="handwritten text-4xl text-lala-blue mb-3">
            Find Your Way to Paradise
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Directions to Lala Land Beach Camp in Nuweiba, Egypt
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Interactive map + description */}
          <div>
            <LalaLandMap />
            <div className="flex items-center gap-3 mt-4">
              <TreePalm className="text-lala-orange w-6 h-6 shrink-0" />
              <div>
                <div className="font-semibold text-base text-lala-blue dark:text-lala-orange">
                  Lala Land is located here, your peaceful escape by the Red Sea.
                </div>
                <div className="text-xs text-gray-500 dark:text-lala-sand mt-1">
                  Just 15km south of Nuweiba Town, South Sinai, Egypt.
                </div>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a 
                href="https://maps.app.goo.gl/KRjs54ZjzCuPnf6h7" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Open in Google Maps
                </Button>
              </a>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=29.0173,34.6627" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm" className="bg-lala-orange text-white hover:bg-lala-orangeLight flex items-center gap-2">
                  Get Directions
                </Button>
              </a>
            </div>
          </div>
          {/* Directions (text) */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-5">
              <TreePalm className="text-lala-orange h-6 w-6 mr-3" />
              <h3 className="text-2xl font-semibold">How to Reach Us</h3>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  From Sharm El Sheikh International Airport:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Airport to Nuweiba is approximately 1.5 hours by car (180 km)
                  </li>
                  <li>Pre-arrange a pickup with us (recommended)</li>
                  <li>
                    Or take a taxi to Nuweiba town and we'll pick you up
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  From Cairo:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Take a bus from Cairo to Nuweiba (approximately 6-7 hours)
                  </li>
                  <li>
                    Multiple bus companies operate this route with daily
                    departures
                  </li>
                  <li>
                    Contact us with your arrival time and we'll arrange pickup
                    from Nuweiba bus station
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">
                  From Taba Border (Israel/Jordan):
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>
                    Approximately 70 km south of Taba (1-hour drive)
                  </li>
                  <li>Shared taxis are available from the border</li>
                </ul>
              </div>
              <div className="mt-6 p-4 bg-lala-sand/30 rounded-lg">
                <p className="text-center text-gray-700">
                  <strong>Exact Location:</strong> Our beach camp is located 15
                  km south of Nuweiba town, in the area known as Nuweiba Village.
                  Look for the wooden "Lala Land" sign with colorful flags.
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
