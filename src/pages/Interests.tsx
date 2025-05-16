
import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Mountain, Cake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const Interests = () => {
  // State for photo gallery dialog
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Photo gallery images
  const photoGalleryImages = [
    { id: 1, title: "Nature Shot", image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Portrait", image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Landscape", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: "Macro", image: "https://images.unsplash.com/photo-1648459776975-5c66e65df155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBob3RvZ3JhcGh5JTIwbWFjcm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 5, title: "Street", image: "https://images.unsplash.com/photo-1605348863000-033a516c1d11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 6, title: "Architecture", image: "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" }
  ];

  // Interest data (removed cooking, arts and crafts, and music)
  const interests = [
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6" />,
      description: "Capturing beautiful moments through my lens, especially nature and portraits.",
      color: "bg-pink-400",
      image: "/placeholder.svg",
      onClick: () => setShowPhotoGallery(true)
    },
    {
      title: "Hiking",
      icon: <Mountain className="w-6 h-6" />,
      description: "Exploring nature and enjoying the peace and beauty of outdoor trails.",
      color: "bg-pink-500",
      image: "/placeholder.svg"
    },
    {
      title: "Baking",
      icon: <Cake className="w-6 h-6" />,
      description: "Creating delicious pastries, breads, and desserts for friends and family.",
      color: "bg-pink-600",
      image: "/placeholder.svg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="pt-16">
        <SectionHeading 
          title="Personal Interests" 
          subtitle="Discover the various hobbies and activities that inspire me"
          align="center" 
        />

        {/* Carousel for larger screens */}
        <div className="hidden md:block">
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {interests.map((interest, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card 
                      className={`overflow-hidden border-pink-100 hover:shadow-md transition-shadow h-full ${interest.title === 'Photography' ? 'cursor-pointer' : ''}`}
                      onClick={interest.onClick}
                    >
                      <div className="h-48 relative">
                        <img 
                          src={interest.image} 
                          alt={interest.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute top-4 right-4 ${interest.color} text-white p-2 rounded-full`}>
                          {interest.icon}
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <h3 className="font-semibold text-lg text-pink-700 mb-2">{interest.title}</h3>
                        <p className="text-gray-600">{interest.description}</p>
                        {interest.title === 'Photography' && (
                          <p className="text-pink-500 font-medium mt-2 text-sm">Click to view gallery →</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-1" />
            <CarouselNext className="right-1" />
          </Carousel>
        </div>

        {/* Grid layout for mobile */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:hidden mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`overflow-hidden border-pink-100 hover:shadow-md transition-shadow ${interest.title === 'Photography' ? 'cursor-pointer' : ''}`}
                onClick={interest.onClick}
              >
                <div className="h-40 relative">
                  <img 
                    src={interest.image} 
                    alt={interest.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute top-4 right-4 ${interest.color} text-white p-2 rounded-full`}>
                    {interest.icon}
                  </div>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-lg text-pink-700 mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                  {interest.title === 'Photography' && (
                    <p className="text-pink-500 font-medium mt-2 text-sm">Click to view gallery →</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Interest Details Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-2xl shadow-sm"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">Why These Interests Matter</h3>
            <p className="text-gray-700 leading-relaxed">
              My diverse range of interests allows me to express my creativity in different ways. Photography 
              helps me see the world through a different lens, while baking satisfies both my creative 
              side and my love for delicious food.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Hiking allows me to connect with nature while staying active. These interests have not only 
              enriched my life but have also helped me develop various skills that 
              complement each other.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              For example, my eye for photography enhances my cake decoration, while my 
              love for hiking provides inspiration for my creative projects.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Photo Gallery Dialog */}
      <Dialog open={showPhotoGallery} onOpenChange={setShowPhotoGallery}>
        <DialogContent className="max-w-5xl">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-pink-700">My Photography</h2>
            <DialogClose className="bg-pink-100 hover:bg-pink-200 rounded-full p-1 text-pink-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photoGalleryImages.map((photo) => (
              <div 
                key={photo.id}
                className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedImage(photo.image)}
              >
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog */}
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
    </div>
  );
};

export default Interests;
