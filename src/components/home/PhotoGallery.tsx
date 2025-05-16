
import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface PhotoGalleryProps {
  title: string;
  gallery: {
    id: number;
    title: string;
    image: string;
  }[];
}

const PhotoGallery = ({ title, gallery }: PhotoGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="mb-20">
      <SectionHeading title={title} align="center" />
      
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {gallery.map((pic) => (
          <motion.div key={pic.id} variants={itemVariants}>
            <Card 
              className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-[#ffb3c6]"
              onClick={() => setSelectedImage(pic.image)}
            >
              <div className="h-48 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#fb6f92]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                <img 
                  src={pic.image} 
                  alt={pic.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform">
                  <h3 className="text-white text-lg font-medium">{pic.title}</h3>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-1 bg-transparent border-none shadow-none">
          <div className="relative">
            <DialogClose className="absolute top-2 right-2 bg-black/50 rounded-full p-1 text-white hover:bg-black/70">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              <span className="sr-only">Close</span>
            </DialogClose>
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged photo" 
                className="w-full rounded-lg object-contain max-h-[80vh]" 
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PhotoGallery;
