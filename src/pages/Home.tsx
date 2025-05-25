
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, User, Instagram, Facebook, Twitter } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Home = () => {
  // State for photo gallery dialog
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

  // Social media links
  const socialLinks = [
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/marionepelaez?igsh=MWl3bHowMTB4cG1naw%3D%3D&utm_source=qr", color: "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" },
    { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/marionefebb11?mibextid=LQQJ4d", color: "bg-blue-600" },
    { name: "Twitter", icon: Twitter, url: "https://x.com/marionepelaez?s=21&t=BTpLctfH5aw-bRvJOHqnyw", color: "bg-sky-500" }
  ];

  // Sample me pics gallery
  const mePicsGallery = [
    { id: 1, title: "♡ˎˊ˗", image: "/images/me4.JPG" },
    { id: 2, title: "╭∩╮( •̀_•́ )╭∩╮", image: "/images/me1.JPG" },
    { id: 3, title: "( ๑ ˃̵ᴗ˂̵) ♡", image: "/images/me2.JPG" },
    { id: 4, title: "⋆ 𐙚 ̊.", image: "/images/me3.JPG" },
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen relative">
      {/* Background with hearts */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#ffe5ec] to-white overflow-hidden">
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-[#ffb3c6]"
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
              Hi, I'm <span className="bg-gradient-to-r from-[#ff8fab] to-[#fb6f92] bg-clip-text text-transparent">Marione Lourdes Lieve!</span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              𓇼 ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ 𓇼 A passionate and creative individual with a love for baking, photography, and creating beautiful experiences. You can call me Mar or Yuni.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#contact" className="px-6 py-3 bg-[#fb6f92] hover:bg-[#ff8fab] text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg">
                Contact 𐙚
              </a>
              <a href="#about" className="px-6 py-3 bg-white hover:bg-[#ffe5ec] text-[#fb6f92] font-medium rounded-full border border-[#ffb3c6] transition-colors">
                About Me 🧸ྀི
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full text-white hover:scale-110 transition-transform"
                  style={{ background: social.color === "bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" ? 
                    "linear-gradient(to right, #8a3ab9, #e95950, #bc2a8d)" : 
                    social.color === "bg-blue-600" ? "#1877F2" : "#1DA1F2" }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem]">
              <div className="absolute inset-0 bg-[#ffb3c6] rounded-full blur-3xl opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white shadow-lg overflow-hidden">
                  <img
                    src="/images/marionepfp.jpg"
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
          <SectionHeading title="જ⁀➴𝑴𝒐𝒓𝒆 𝒐𝒇 𝑴𝒂𝒓𝒊𝒐𝒏𝒆 ♡" align="center" />
          
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
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-[#ffb3c6]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#fb6f92]">Personal Information</CardTitle>
                  <CardDescription>Get to know me better</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe5ec] flex items-center justify-center text-[#fb6f92]">
                        <User className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                        <p className="font-medium">Marione Lourdes Lieve P. Pelaez</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe5ec] flex items-center justify-center text-[#fb6f92]">
                        <Calendar className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Age & Birthdate</p>
                        <p className="font-medium">20 years old | February 11, 2005</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe5ec] flex items-center justify-center text-[#fb6f92]">
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
              <Card id="contact" className="h-full shadow-md hover:shadow-lg transition-shadow border-[#ffb3c6]">
                <CardHeader>
                  <CardTitle className="text-2xl text-[#fb6f92]">Contact Details</CardTitle>
                  <CardDescription>Reach out to me</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe5ec] flex items-center justify-center text-[#fb6f92]">
                        <Phone className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Phone Number</p>
                        <p className="font-medium">0966 934 2148</p>
                      </div>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#ffe5ec] flex items-center justify-center text-[#fb6f92]">
                        <Mail className="w-4 h-4" />
                      </span>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">pelaez.marionelourdes@gmail.com</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-[#ffe5ec] rounded-lg">
                    <p className="text-sm text-[#fb6f92]">
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
