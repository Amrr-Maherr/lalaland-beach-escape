
import { useRef, useEffect } from "react";

// Declare global Google Maps types
declare global {
  interface Window {
    google: any;
    initMap: () => void;
    lalaLandGoogleMapLoaded?: boolean;
  }
}

// Palm-tree SVG data URI for custom marker
const markerIcon =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" width="38" height="38"><circle cx="18" cy="18" r="18" fill="#F97316"/><text x="18" y="25" text-anchor="middle" font-size="23" font-family="sans-serif">🌴</text></svg>`
  );

type LalaLandMapProps = {
  lat?: number;
  lng?: number;
};

const LALA_LAND_LAT = 29.0173;
const LALA_LAND_LNG = 34.6627;

// Use a public API key
const GOOGLE_MAPS_API = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA7edrZZ76mqU1NgZtB3vQU-fOAk-KPQzM&callback=initMap&libraries=marker&v=weekly";

export default function LalaLandMap({
  lat = LALA_LAND_LAT,
  lng = LALA_LAND_LNG,
}: LalaLandMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effect
  useEffect(() => {
    const elem = mapRef.current;
    if (!elem) return;
    const handleScroll = () => {
      const rect = elem.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const scroll = Math.min(1, Math.max(0, 1 - rect.top / window.innerHeight));
        elem.style.transform = `translateY(${scroll * 25}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // SSR safety check
    if (typeof window === 'undefined') return;
    
    // If script already loaded, don't add again
    if (window.lalaLandGoogleMapLoaded) {
      window.dispatchEvent(new Event("initMap"));
      return;
    }
    
    // Set once loaded flag
    window.lalaLandGoogleMapLoaded = true;
    
    // Setup initialization function on window
    window.initMap = () => {};

    const script = document.createElement("script");
    script.src = GOOGLE_MAPS_API;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Avoid duplicate loading
      if (!window.google || !window.google.maps) return;
      // Render the map
      renderMap();
    };
    
    document.body.appendChild(script);
    
    return () => {
      // Try to clean up for hot reloads
      script.remove();
    };
  }, []);

  function renderMap() {
    if (!window.google || !mapRef.current) return;
    
    try {
      // Create map
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat, lng },
        zoom: 14,
        mapId: "lalaland_map",
        clickableIcons: false,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: "cooperative",
        // Only set styles if no mapId is used to avoid warning
        // styles: [...]
      });

      // Add custom marker
      new window.google.maps.Marker({
        position: { lat, lng },
        map,
        title: "Lala Land Beach Camp",
        icon: {
          url: markerIcon,
          scaledSize: new window.google.maps.Size(42, 42),
          anchor: new window.google.maps.Point(21, 38),
        },
        optimized: true,
      });
    } catch (error) {
      console.error("Error rendering map:", error);
    }
  }

  // Listen for when the script globally signals it's ready
  useEffect(() => {
    function onInit() {
      setTimeout(() => renderMap(), 250);
    }
    window.addEventListener("initMap", onInit);
    return () => window.removeEventListener("initMap", onInit);
  }, []);

  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl bg-gradient-to-br from-lala-sand/60 to-white dark:from-[#23211c] dark:to-[#18182a] flex">
      <div
        ref={mapRef}
        id="lala-land-map"
        className="w-full h-[340px] sm:h-[420px] md:h-[440px] transition-transform duration-700 will-change-transform"
        style={{
          minHeight: "240px",
          outline: "2px solid #E8D0B0",
          borderRadius: "1.25rem",
        }}
      ></div>
      {/* Map overlay: open and directions buttons */}
      <div className="absolute z-10 top-3 right-4 flex gap-2 flex-col sm:flex-row">
        <a
          href="https://maps.app.goo.gl/KRjs54ZjzCuPnf6h7"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-white/90 hover:bg-lala-blue/90 text-lala-blue hover:text-white shadow transition text-xs font-medium backdrop-blur handwriten"
        >
          Open in Google Maps
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=29.0173,34.6627"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 rounded-lg bg-lala-orange/80 hover:bg-lala-orange text-white shadow transition text-xs font-medium"
        >
          Get Directions
        </a>
      </div>
    </div>
  );
}
