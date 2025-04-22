
import { X, Play } from "lucide-react";
import { useEffect, useRef } from "react";

type Props = {
  type: "image" | "video";
  src: string;
  caption?: string;
  onClose: () => void;
};

const GalleryLightbox = ({ type, src, caption, onClose }: Props) => {
  const lightboxRef = useRef<HTMLDivElement>(null);

  // Close on ESC or outside click
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (lightboxRef.current && !lightboxRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/80 dark:bg-black/95 backdrop-blur-xl flex items-center justify-center animate-fade-in"
      aria-modal="true"
      tabIndex={-1}
      role="dialog"
    >
      <div
        ref={lightboxRef}
        className="relative max-w-3xl w-full mx-4 rounded-2xl shadow-xl overflow-hidden bg-white/85 dark:bg-[#222] transition-all"
      >
        <button
          className="absolute top-2 right-2 z-10 rounded-full p-1 bg-white/80 hover:bg-lala-blue/90 dark:bg-black/70 dark:hover:bg-lala-orange text-lala-blue dark:text-white transition"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-7 h-7" />
        </button>
        <div className="flex items-center justify-center min-h-[40vw] max-h-[82vh] bg-black/80">
          {type === "image" ? (
            <img
              src={src}
              alt={caption || ""}
              className="max-h-[75vh] max-w-full block mx-auto rounded-2xl shadow-2xl"
              style={{ background: "#222", objectFit: "contain" }}
            />
          ) : (
            <video
              src={src}
              autoPlay
              controls
              muted
              playsInline
              className="max-h-[75vh] max-w-full rounded-2xl shadow-2xl bg-black"
              style={{ background: "#111", objectFit: "contain" }}
            />
          )}
        </div>
        {caption && (
          <figcaption className="text-center px-6 py-3 text-base text-lala-blue dark:text-lala-sand handwritten bg-gradient-to-t from-white/60 to-transparent dark:from-[#161208]/90">
            {caption}
          </figcaption>
        )}
      </div>
    </div>
  );
};

export default GalleryLightbox;

