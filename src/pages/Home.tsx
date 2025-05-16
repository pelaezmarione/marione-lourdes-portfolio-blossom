
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, User, Music, VolumeX } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Home = () => {
  // State for music control
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // State for photo gallery dialog
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Effect to handle audio play/pause
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

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

  // Sample me pics gallery
  const mePicsGallery = [
    { id: 1, title: "Photo 1", image: "https://images.unsplash.com/photo-1517778022307-4800c34ab5a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJldHR5JTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 2, title: "Photo 2", image: "https://images.unsplash.com/photo-1600600423621-70c9f4416ae9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VsZmllfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" },
    { id: 3, title: "Photo 3", image: "https://images.unsplash.com/photo-1504257365157-1496a50d48f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
    { id: 4, title: "Photo 4", image: "https://images.unsplash.com/photo-1581467655410-0c2bf55d9d6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNlbGZpZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" },
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen relative">
      {/* Background with hearts */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-pink-100 to-white overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-pink-200"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 0.5 + 0.5,
              opacity: Math.random() * 0.4 + 0.1,
            }}
            animate={{
              y: [null, "-20px", null],
              opacity: [null, Math.random() * 0.7 + 0.3, null],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            ❤
          </motion.div>
        ))}
      </div>
      
      {/* Audio Player */}
      <audio ref={audioRef} loop>
        <source src="https://audio.jukehost.co.uk/zHiyVMnd5POL29BhKonOJWOH8UXmT9oj" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      {/* Music Control Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed top-24 right-6 z-50 bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <VolumeX size={20} /> : <Music size={20} />}
      </motion.button>

      <div className="pt-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">Marione Lourdes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              A passionate and creative individual with a love for baking, photography, and creating beautiful experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg">
                Hi! I'm Marione Lourdes Lieve
              </a>
              <a href="#about" className="px-6 py-3 bg-white hover:bg-pink-50 text-pink-500 font-medium rounded-full border border-pink-200 transition-colors">
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src="/placeholder.svg"
                    alt="Marione Lourdes"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Me Pics Gallery Section */}
        <section className="mb-20">
          <SectionHeading title="Me Pics" align="center" />
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {mePicsGallery.map((pic) => (
              <motion.div key={pic.id} variants={itemVariants}>
                <Card 
                  className="overflow-hidden group cursor-pointer hover:shadow-lg transition-shadow border-pink-100"
                  onClick={() => setSelectedImage(pic.image)}
                >
                  <div className="h-48 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
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
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <SectionHeading title="About Me" align="center" />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-pink-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-pink-700">Personal Information</CardTitle>
                  <CardDescription>Get to know me better</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
                        <User className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">Marione Lourdes Lieve P. Pelaez</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Age & Birthdate</p>
                        <p className="font-medium">20 years old | February 11, 2005</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
                        <MapPin className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium">Taguanao, Brgy. Indahag, Cagayan de Oro City</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card id="contact" className="h-full shadow-md hover:shadow-lg transition-shadow border-pink-100">
                <CardHeader>
                  <CardTitle className="text-2xl text-pink-700">Contact Details</CardTitle>
                  <CardDescription>Reach out to me</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
                        <Phone className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-medium">0966 934 2148</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-700">
                        <Mail className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">pelaez.marionelourdes@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-pink-50 rounded-lg">
                    <p className="text-sm text-pink-700">
                      I'd love to hear from you! Feel free to reach out to me for collaborations, 
                      cake orders, or just to say hello.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </div>

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
    </div>
  );
};

export default Home;
