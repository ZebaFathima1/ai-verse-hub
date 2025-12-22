import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TiltCard from "@/components/animations/TiltCard";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  event: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    title: "Opening Ceremony",
    event: "AI Verse 3.0",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    title: "Keynote Session",
    event: "AI Verse 3.0",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    title: "Hackathon Team",
    event: "AI Verse 2.0",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    title: "Workshop Session",
    event: "Data Stargaze",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    title: "Panel Discussion",
    event: "AI Verse 3.0",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&h=600&fit=crop",
    title: "Networking Session",
    event: "AI Verse 2.0",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
    title: "Award Ceremony",
    event: "AI Verse 3.0",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    title: "Team Collaboration",
    event: "Data Stargaze",
  },
];

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Memories
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gradient-text">Event Gallery</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Capturing moments of innovation, collaboration, and celebration from our past events.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={image.id} delay={index * 0.05}>
              <TiltCard tiltAmount={8}>
                <motion.div
                  className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => openLightbox(image, index)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4"
                  >
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-primary-foreground font-semibold text-sm">{image.title}</p>
                      <p className="text-primary-foreground/70 text-xs">{image.event}</p>
                    </div>
                    <motion.div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-primary-foreground" />
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/95 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable"
              onClick={closeLightbox}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image */}
            <motion.div
              className="relative max-w-5xl max-h-[80vh] mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/80 to-transparent rounded-b-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-display font-bold text-background">{selectedImage.title}</h3>
                <p className="text-background/70">{selectedImage.event}</p>
              </motion.div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/10 text-background text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
