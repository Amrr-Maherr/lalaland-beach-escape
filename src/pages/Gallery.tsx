
import { useState } from "react";
import GalleryMasonry, { galleryCategories, galleryData } from "@/components/GalleryMasonry";
import GalleryLightbox from "@/components/GalleryLightbox";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const quote = "Let your eyes travel before your feet do.";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<{ type: "image" | "video"; src: string; caption?: string } | null>(null);
  const [music, setMusic] = useState(false);

  // Filtered gallery items
  const displayedItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-lala-sand/70 dark:bg-[#29241c] transition-colors duration-300">
      {/* Hero/quote area */}
      <section className="container mx-auto px-4 pb-2 pt-16 text-center">
        <h1 className="handwritten text-5xl md:text-7xl mb-2 text-lala-blue dark:text-lala-orange transition-all">
          Lala Land Gallery
        </h1>
        <div className="max-w-2xl mx-auto mb-4 text-xl md:text-2xl text-lala-blue/80 dark:text-lala-sand">
          “{quote}”
        </div>
        <div className="flex items-center justify-center gap-3 mt-4 mb-6">
          {galleryCategories.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "ghost"}
              className={`capitalize px-4 rounded-full font-semibold transition 
                ${activeCategory === cat.value ? "bg-lala-blue text-white dark:bg-lala-orange dark:text-white shadow-lg" : "hover:bg-lala-blue/10 dark:hover:bg-lala-orange/20"}`}
              onClick={() => setActiveCategory(cat.value)}
            >
              {cat.icon}
              {cat.label}
            </Button>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 mt-3">
          <Button
            variant={music ? "default" : "outline"}
            className="rounded-full text-lala-blue dark:text-lala-orange hover:bg-lala-orange hover:text-white transition"
            onClick={() => setMusic((p) => !p)}
            size="sm"
            aria-pressed={music}
          >
            <Play className="inline-block h-4 w-4 mr-1" />
            {music ? "Pause Ambience" : "Play Ambience"}
          </Button>
          {/* Placeholder, actual audio will be added later */}
        </div>
      </section>

      {/* Image & video grid */}
      <section className="container mx-auto px-2 pb-24 fade-in">
        <GalleryMasonry items={displayedItems} onItemClick={setLightbox} />
      </section>

      {/* Lightbox Popup */}
      {lightbox && (
        <GalleryLightbox
          type={lightbox.type}
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* Optional: Ambient music audio element */}
      <audio
        src="/ambient-camp.mp3"
        autoPlay={music}
        loop
        muted={!music}
        style={{ display: "none" }}
        data-testid="ambient-audio"
      />
    </div>
  );
};

export default Gallery;

