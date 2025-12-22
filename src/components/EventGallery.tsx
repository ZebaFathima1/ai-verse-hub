import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Images, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import TiltCard from "@/components/animations/TiltCard";
import { cn } from "@/lib/utils";

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  event: string;
}

const galleryImages: GalleryImage[] = [
  // AI Verse 3.0
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
    id: 5,
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    title: "Panel Discussion",
    event: "AI Verse 3.0",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=800&h=600&fit=crop",
    title: "Award Ceremony",
    event: "AI Verse 3.0",
  },
  // AI Verse 2.0
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
    title: "Hackathon Team",
    event: "AI Verse 2.0",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&h=600&fit=crop",
    title: "Networking Session",
    event: "AI Verse 2.0",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    title: "Team Presentation",
    event: "AI Verse 2.0",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop",
    title: "Workshop in Action",
    event: "AI Verse 2.0",
  },
  // Data Stargaze
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    title: "Workshop Session",
    event: "Data Stargaze",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=600&fit=crop",
    title: "Team Collaboration",
    event: "Data Stargaze",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    title: "Group Discussion",
    event: "Data Stargaze",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    title: "Closing Ceremony",
    event: "Data Stargaze",
  },
];

const events = ["All", "AI Verse 3.0", "AI Verse 2.0", "Data Stargaze"];

const EventGallery = () => {
  const [selectedEvent, setSelectedEvent] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = selectedEvent === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.event === selectedEvent);

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Item animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, -30, 0],
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Images className="w-4 h-4" />
              </motion.div>
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

        {/* Event Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {events.map((event, index) => (
              <motion.button
                key={event}
                onClick={() => setSelectedEvent(event)}
                className={cn(
                  "relative px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hoverable overflow-hidden",
                  selectedEvent === event
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground bg-muted/50 hover:bg-muted"
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Active Background */}
                {selectedEvent === event && (
                  <motion.div
                    className="absolute inset-0 gradient-bg rounded-xl"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {event === "All" && <Sparkles className="w-4 h-4" />}
                  {event}
                  {event !== "All" && (
                    <span className={cn(
                      "px-2 py-0.5 rounded-full text-xs",
                      selectedEvent === event 
                        ? "bg-primary-foreground/20" 
                        : "bg-primary/10 text-primary"
                    )}>
                      {galleryImages.filter(img => img.event === event).length}
                    </span>
                  )}
                </span>
              </motion.button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedEvent}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={itemVariants}
                layout
              >
                <TiltCard tiltAmount={10}>
                  <motion.div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                    whileHover={{ scale: 1.02 }}
                    onClick={() => openLightbox(image, index)}
                  >
                    {/* Image */}
                    <motion.img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    {/* Content Overlay */}
                    <motion.div
                      className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {/* Zoom Icon */}
                      <div className="flex justify-end">
                        <motion.div
                          className="w-10 h-10 rounded-full glass-card flex items-center justify-center"
                          initial={{ scale: 0, rotate: -180 }}
                          whileHover={{ scale: 1.1 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <ZoomIn className="w-5 h-5 text-primary-foreground" />
                        </motion.div>
                      </div>
                      
                      {/* Text Content */}
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <motion.span
                          className="inline-block px-2 py-1 rounded-md gradient-bg text-xs font-medium text-primary-foreground mb-2"
                          initial={{ x: -20, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.15 }}
                        >
                          {image.event}
                        </motion.span>
                        <p className="text-primary-foreground font-semibold">{image.title}</p>
                      </motion.div>
                    </motion.div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    />
                  </motion.div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Images Message */}
        <AnimatePresence>
          {filteredImages.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Images className="w-16 h-16 mx-auto text-muted-foreground/50 mb-4" />
              <p className="text-muted-foreground">No images found for this event.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-foreground/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            />

            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable z-10"
              onClick={closeLightbox}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Navigation Buttons */}
            <motion.button
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            <motion.button
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-background/20 transition-colors hoverable z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ delay: 0.1 }}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              className="relative max-w-5xl max-h-[80vh] mx-4 z-10"
              initial={{ scale: 0.5, opacity: 0, rotateY: -30 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 30 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={selectedImage.id}
                src={selectedImage.src}
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Caption */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent rounded-b-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.span
                  className="inline-block px-3 py-1 rounded-full gradient-bg text-sm font-medium text-primary-foreground mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedImage.event}
                </motion.span>
                <h3 className="text-xl font-display font-bold text-background">{selectedImage.title}</h3>
              </motion.div>
            </motion.div>

            {/* Image Counter */}
            <motion.div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/10 backdrop-blur-sm text-background text-sm font-medium z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <span className="gradient-text font-bold">{currentIndex + 1}</span>
              <span className="text-background/50"> / {filteredImages.length}</span>
            </motion.div>

            {/* Thumbnail Strip */}
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2 z-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.4 }}
            >
              {filteredImages.slice(Math.max(0, currentIndex - 2), Math.min(filteredImages.length, currentIndex + 3)).map((img, idx) => {
                const actualIndex = Math.max(0, currentIndex - 2) + idx;
                return (
                  <motion.button
                    key={img.id}
                    className={cn(
                      "w-12 h-12 rounded-lg overflow-hidden border-2 transition-all hoverable",
                      actualIndex === currentIndex
                        ? "border-primary scale-110"
                        : "border-transparent opacity-50 hover:opacity-100"
                    )}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentIndex(actualIndex);
                      setSelectedImage(filteredImages[actualIndex]);
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventGallery;
