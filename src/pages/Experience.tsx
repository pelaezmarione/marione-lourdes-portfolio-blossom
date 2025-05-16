import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Cake, Star, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogClose 
} from "@/components/ui/dialog";

const Experience = () => {
  // State for image dialog
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  
  // Function to handle image click
  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsDialogOpen(true);
  };

  // Sample cake gallery
  const cakeGallery = [
    { id: 1, title: "Anniversary Cake", image: "/images/anniversarycakes.jpg" },
    { id: 2, title: "Wedding Cake", image: "/images/weddingcake.jpg" },
    { id: 3, title: "Season Special", image: "/images/val25.jpg" },
    { id: 4, title: "Cupcake Bouquet", image: "/images/cupsinabox.jpg" },
    { id: 5, title: "Cupcakes", image: "/images/cupcakes.jpg" },
    { id: 6, title: "Custom Design", image: "/images/set3.jpg" },
    { id: 7, title: "Vintage Cake", image: "/images/vintagecake.jpg" },
  ];

  // Customer testimonials
  const testimonials = [
    {
      name: "Jaehyun Jeong",
      message: "The cake Marione made for my birthday was absolutely beautiful and delicious!",
      rating: 5,
    },
    {
      name: "Kyla Tagun",
      message: "Exceptional talent for cake decoration. Will definitely order again for special occasions.",
      rating: 5,
    },
    {
      name: "Michael Moralda",
      message: "Not only was the cake stunning visually, but the taste exceeded our expectations. Highly recommend!",
      rating: 5,
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
          title="Work Experience" 
          subtitle="My journey as a homebaker and cake decorator"
          align="center"
        />
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="gallery">Cake Gallery</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-pink-100">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-5 rounded-full bg-pink-100">
                        <Cake className="w-8 h-8 text-pink-600" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-pink-700 text-center mb-4">
                        Homebaker & Cake Decorator
                      </h3>
                      
                      <div className="flex justify-center items-center mb-6 text-pink-500">
                        <p className="font-medium">2022 - Present</p>
                      </div>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <span className="mr-2 text-pink-500">•</span>
                          <span>Creating custom cakes for special occasions</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-pink-500">•</span>
                          <span>Developing unique flavor combinations</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-pink-500">•</span>
                          <span>Mastering various decoration techniques</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-pink-500">•</span>
                          <span>Managing a small home-based business</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
              
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 mb-8"
                >
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">My Baking Journey</h3>
                  <p className="text-gray-700 leading-relaxed">
                    I began my journey as a homebaker in 2022, fueled by a passion for creating beautiful and 
                    delicious treats. What started as a hobby quickly evolved into a small business as friends 
                    and family began requesting my cakes for their special occasions.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Over time, I've developed my skills in both flavor creation and cake decoration, constantly 
                    learning new techniques through online courses, books, and practice. I specialize in custom 
                    birthday cakes and celebration cakes that not only look stunning but taste amazing as well.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    Each cake is made with love and attention to detail, ensuring that every customer receives 
                    a product that exceeds their expectations and makes their celebration even more special.
                  </p>
                </motion.div>
                
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <h3 className="text-xl font-semibold text-pink-700 mb-4">Customer Testimonials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {testimonials.map((testimonial, index) => (
                      <motion.div key={index} variants={itemVariants}>
                        <Card className="h-full shadow-sm hover:shadow-md transition-shadow border-pink-100">
                          <CardContent className="p-5">
                            <div className="flex mb-2">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 text-pink-500 fill-pink-500" />
                              ))}
                            </div>
                            <p className="text-gray-600 italic text-sm mb-3">"{testimonial.message}"</p>
                            <p className="text-sm font-medium text-pink-700">- {testimonial.name}</p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {cakeGallery.map((cake) => (
                <motion.div key={cake.id} variants={itemVariants}>
                  <Card 
                    className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-pink-100"
                    onClick={() => handleImageClick(cake.image)}
                  >
                    <div className="relative h-64">
                      <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                      <img 
                        src={cake.image} 
                        alt={cake.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 translate-y-full group-hover:translate-y-0 transition-transform">
                        <h3 className="text-white text-lg font-medium">{cake.title}</h3>
                      </div>
                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                        <div className="bg-white/80 p-1.5 rounded-full">
                          <Maximize2 className="w-4 h-4 text-pink-700" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {/* Dialog for enlarged image view */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="sm:max-w-4xl p-1 bg-white/95 border-pink-100">
            <div className="relative w-full h-full">
              {selectedImage && (
                <div className="relative max-h-[80vh] overflow-hidden flex items-center justify-center">
                  <img 
                    src={selectedImage} 
                    alt="Enlarged cake" 
                    className="max-w-full max-h-[80vh] object-contain"
                  />
                  <DialogClose className="absolute top-2 right-2 bg-white/80 p-1.5 rounded-full hover:bg-white">
                    <X className="w-5 h-5 text-pink-700" />
                    <span className="sr-only">Close</span>
                  </DialogClose>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Experience;
