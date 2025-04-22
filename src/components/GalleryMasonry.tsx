
import { Image, GalleryHorizontal, Utensils, GalleryVertical, Play } from "lucide-react";
import { useRef, useEffect } from "react";

export const galleryCategories = [
  { label: "All", value: "all", icon: <GalleryHorizontal className="w-4 h-4" /> },
  { label: "Rooms & Stays", value: "rooms", icon: <GalleryVertical className="w-4 h-4" /> },
  { label: "Food & Dining", value: "food", icon: <Utensils className="w-4 h-4" /> },
  { label: "Nature & Surroundings", value: "nature", icon: <Image className="w-4 h-4" /> },
  { label: "Activities", value: "activities", icon: <Play className="w-4 h-4" /> },
];

// Sample gallery data (replace with real content/photos as desired)
export const galleryData = [
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21", // Ocean/beach
    category: "nature",
    caption: "Waves on the Red Sea beach at dawn"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    category: "nature",
    caption: "Golden sand and tranquil skies"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    category: "rooms",
    caption: "Relaxing in comfort with a laptop retreat"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "nature",
    caption: "Palm trees by the water’s edge"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151",
    category: "nature",
    caption: "Desert sand under Sinai’s sun"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    category: "nature",
    caption: "Orange flowers – wild by the dunes"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1469041797191-50ace28483c3",
    category: "activities",
    caption: "Camels on a midday stroll"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    category: "activities",
    caption: "Evening gatherings with friends"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "rooms",
    caption: "Cozy hut by the beach"
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    category: "activities",
    caption: "Campfire night at Lala Land"
  },
  {
    type: "video",
    src: "https://www.w3schools.com/html/movie.mp4",
    category: "rooms",
    caption: "Tour of our cozy beach huts"
  },
  {
    type: "image",
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    category: "food",
    caption: "Breakfast by the sea"
  },
];

type GalleryItem = typeof galleryData[number];

interface MasonryProps {
  items: GalleryItem[];
  onItemClick: (item: { type: "image" | "video"; src: string; caption?: string }) => void;
}

const GalleryMasonry = ({ items, onItemClick }: MasonryProps) => {
  const masonryRef = useRef<HTMLDivElement>(null);

  // Fade-in animation as user scrolls (simple Intersection Observer)
  useEffect(() => {
    const grid = masonryRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((el, idx) => {
      el.style.transitionDelay = `${idx * 66}ms`;
      el.classList.add("opacity-0", "translate-y-8", "transition-all", "duration-700");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div
      ref={masonryRef}
      className="
        columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4
        space-y-4
        bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] bg-repeat pb-6
        rounded-xl shadow-inner
        "
      aria-label="Photo Gallery"
    >
      {items.map((item, i) => (
        <div
          key={item.src + i}
          tabIndex={0}
          className="
            group mb-4 w-full rounded-2xl shadow-lg hover:shadow-2xl bg-white/80 dark:bg-[#1d1910]/80 
            ring-1 ring-lala-blue/10 dark:ring-lala-orange/10
            cursor-pointer overflow-hidden border border-white/60 dark:border-lala-blue/30
            hover:scale-[1.012] active:scale-95 transition-transform backdrop-blur
            relative aspect-[4/5] flex flex-col
          "
          onClick={() => onItemClick(item)}
          onKeyDown={(e) => (e.key === "Enter" ? onItemClick(item) : undefined)}
        >
          {item.type === "image" ? (
            <img
              src={item.src}
              alt={item.caption || ""}
              loading="lazy"
              className="w-full h-full object-cover object-center block group-hover:scale-105 transition-transform duration-700"
              draggable={false}
            />
          ) : (
            <div className="relative w-full h-full bg-black flex items-center justify-center">
              <video
                src={item.src}
                muted
                playsInline
                preload="metadata"
                poster="/placeholder.svg"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                onMouseOver={e => (e.currentTarget.muted = true, e.currentTarget.play())}
                onMouseOut={e => e.currentTarget.pause()}
                style={{ borderRadius: 16 }}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/10 transition">
                <Play className="text-white/70 drop-shadow-lg h-14 w-14 opacity-80 pointer-events-none" />
              </div>
            </div>
          )}

          {/* Caption */}
          <div
            className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-slate-900/70 via-white/0 to-transparent
              text-white dark:text-lala-sand text-lg handwritten 
              opacity-0 group-hover:opacity-90 transition-all pointer-events-none"
          >
            {item.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GalleryMasonry;
