
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Utensils, Cake, Palette, Mountain, Music } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Interests = () => {
  // Interest data
  const interests = [
    {
      title: "Photography",
      icon: <Camera className="w-6 h-6" />,
      description: "Capturing beautiful moments through my lens, especially nature and portraits.",
      color: "bg-pink-400",
      image: "/placeholder.svg"
    },
    {
      title: "Cooking",
      icon: <Utensils className="w-6 h-6" />,
      description: "Experimenting with different cuisines and flavors in the kitchen.",
      color: "bg-pink-500",
      image: "/placeholder.svg"
    },
    {
      title: "Baking",
      icon: <Cake className="w-6 h-6" />,
      description: "Creating delicious pastries, breads, and desserts for friends and family.",
      color: "bg-pink-600",
      image: "/placeholder.svg"
    },
    {
      title: "Arts and Crafts",
      icon: <Palette className="w-6 h-6" />,
      description: "Expressing creativity through various art forms and DIY projects.",
      color: "bg-pink-400",
      image: "/placeholder.svg"
    },
    {
      title: "Hiking",
      icon: <Mountain className="w-6 h-6" />,
      description: "Exploring nature and enjoying the peace and beauty of outdoor trails.",
      color: "bg-pink-500",
      image: "/placeholder.svg"
    },
    {
      title: "Music",
      icon: <Music className="w-6 h-6" />,
      description: "Enjoying different genres of music and how they can change moods.",
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
                    <Card className="overflow-hidden border-pink-100 hover:shadow-md transition-shadow h-full">
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
              <Card className="overflow-hidden border-pink-100 hover:shadow-md transition-shadow">
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
              helps me see the world through a different lens, while cooking and baking satisfy both my creative 
              side and my love for delicious food.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Arts and crafts projects provide a hands-on creative outlet, and hiking allows me to connect with 
              nature while staying active. Music is the soundtrack to my life, inspiring me and setting the mood 
              for different activities.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              These interests have not only enriched my life but have also helped me develop various skills that 
              complement each other. For example, my eye for photography enhances my cake decoration, while my 
              love for hiking provides inspiration for my creative projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Interests;
