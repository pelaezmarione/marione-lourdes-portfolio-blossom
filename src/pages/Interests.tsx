
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Mountain, Cake } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const Interests = () => {
  // State for photo gallery dialog
  const [showPhotoGallery, setShowPhotoGallery] = useState(false);
  const [showBakingGallery, setShowBakingGallery] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Photo gallery images
  const photoGalleryImages = [
    { id: 1, title: "1", image: "images/g1.JPG" },
    { id: 2, title: "2", image: "images/g2.JPG" },
    { id: 3, title: "3", image: "images/g3.JPG" },
    { id: 4, title: "4", image: "images/g4.JPG"},
    { id: 5, title: "5", image: "images/g5.JPG"},
    { id: 6, title: "6", image: "images/g6.JPG"},
    { id: 7, title: "7", image: "images/g7.JPG"},
    { id: 8, title: "8", image: "images/g8.JPG"},
    { id: 9, title: "9", image: "images/g9.JPG"},
    { id: 10, title: "10", image: "images/g10.JPG"},
    { id: 11, title: "11", image: "images/g11.JPG"},
    { id: 12, title: "12", image: "images/12.JPG"},
    { id: 13, title: "13", image: "images/13.JPG"},
    { id: 14, title: "14", image: "images/14.JPG"},
    { id: 15, title: "15", image: "images/17.JPG"},
    { id: 16, title: "16", image: "images/16.JPG"},
    { id: 17, title: "17", image: "images/18.JPG"},
    { id: 18, title: "18", image: "images/19.JPG"},
    { id: 19, title: "19", image: "images/20.JPG"},
    { id: 20, title: "20", image: "images/21.JPG"},
    { id: 21, title: "21", image: "images/22.JPG"},
    { id: 22, title: "22", image: "images/23.JPG"},
    { id: 23, title: "23", image: "images/24.JPG"},
    { id: 24, title: "24", image: "images/25.JPG"},
  ];

  // Baking gallery images
  const bakingGalleryImages = [
    { id: 1, title: "Chocolate Cake", image: "images/c1.jpg" },
    { id: 2, title: "Fresh Bread", image: "images/c2.jpg" },
    { id: 3, title: "Cupcakes", image: "images/c3.jpg" },
    { id: 4, title: "Pastries", image: "images/c4.jpg" },
    { id: 5, title: "Cookies", image: "images/c5.jpg" },
    { id: 6, title: "Pie", image: "images/c6.jpg" },
  ];

  // Interest data (removed cooking, arts and crafts, and music)
  const interests = [
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6" />,
      description: "Capturing beautiful moments through my lens, especially nature and portraits.",
      color: "bg-[#ff8fab]",
      image: "/images/photo1.JPG",
      onClick: () => setShowPhotoGallery(true)
    },
    {
      title: "Hiking",
      icon: <Mountain className="w-6 h-6" />,
      description: "Exploring nature and enjoying the peace and beauty of outdoor trails.",
      color: "bg-[#ff8fab]",
      image: "/images/friendshiking.jpg"
    },
    {
      title: "Baking",
      icon: <Cake className="w-6 h-6" />,
      description: "Creating delicious pastries, breads, and desserts for friends and family.",
      color: "bg-[#fb6f92]",
      image: "/images/mds2025.jpg",
      onClick: () => setShowBakingGallery(true)
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
    <div 
      className="container mx-auto px-4 py-20 min-h-screen"
      style={{
        // ADD YOUR BACKGROUND IMAGE HERE - Replace 'your-background-image.jpg' with your image path
        backgroundImage: "url('/images/your-background-image.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="pt-16">
        <SectionHeading 
          title="Personal Interests" 
          subtitle="Discover the various hobbies and activities that inspire me"
          align="center" 
        />

        {/* Grid layout for all screen sizes - removed carousel */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className={`overflow-hidden border-[#ffb3c6] hover:shadow-md transition-shadow ${(interest.title === 'Photography' || interest.title === 'Baking') ? 'cursor-pointer' : ''}`}
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
                  <h3 className="font-semibold text-lg text-[#fb6f92] mb-2">{interest.title}</h3>
                  <p className="text-gray-600">{interest.description}</p>
                  {(interest.title === 'Photography' || interest.title === 'Baking') && (
                    <p className="text-[#ff8fab] font-medium mt-2 text-sm">Click to view gallery →</p>
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
          className="mt-16 bg-gradient-to-r from-[#ffe5ec] to-[#ffb3c6] p-8 rounded-2xl shadow-sm"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-[#fb6f92] mb-4">Why These Interests Matter</h3>
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

      {/* Photo Gallery Dialog with proper scrollbar */}
      <Dialog open={showPhotoGallery} onOpenChange={setShowPhotoGallery}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogTitle className="text-2xl font-bold text-[#fb6f92] mb-4">Memory Vault</DialogTitle>
          
          <div className="h-[60vh] overflow-auto border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {photoGalleryImages.map((photo) => (
                <div 
                  key={photo.id}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity group"
                  onClick={() => setSelectedImage(photo.image)}
                >
                  <img 
                    src={photo.image} 
                    alt={photo.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Baking Gallery Dialog with proper scrollbar */}
      <Dialog open={showBakingGallery} onOpenChange={setShowBakingGallery}>
        <DialogContent className="max-w-4xl max-h-[80vh]">
          <DialogTitle className="text-2xl font-bold text-[#fb6f92] mb-4">Baked Goodies Gallery</DialogTitle>
          
          <div className="h-[60vh] overflow-auto border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {bakingGalleryImages.map((baking) => (
                <div 
                  key={baking.id}
                  className="relative aspect-square overflow-hidden rounded-md cursor-pointer hover:opacity-90 transition-opacity group"
                  onClick={() => setSelectedImage(baking.image)}
                >
                  <img 
                    src={baking.image} 
                    alt={baking.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 font-medium">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Image Preview Dialog with proper accessibility */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-2 bg-black/90 border-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          <div className="relative">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Enlarged photo" 
                className="w-full rounded-lg object-contain max-h-[85vh]" 
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Interests;