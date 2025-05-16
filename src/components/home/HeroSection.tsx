
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

interface HeroSectionProps {
  socialLinks: {
    name: string;
    icon: React.ElementType;
    url: string;
    color: string;
  }[];
}

const HeroSection = ({ socialLinks }: HeroSectionProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-[#ff8fab] to-[#fb6f92] bg-clip-text text-transparent">Marione Lourdes</span>
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          A passionate and creative individual with a love for baking, photography, and creating beautiful experiences.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <a href="#contact" className="px-6 py-3 bg-[#fb6f92] hover:bg-[#ff8fab] text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg">
            Hi! I'm Marione Lourdes Lieve
          </a>
          <a href="#about" className="px-6 py-3 bg-white hover:bg-[#ffe5ec] text-[#fb6f92] font-medium rounded-full border border-[#ffb3c6] transition-colors">
            Learn More
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
        <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem]">
          <div className="absolute inset-0 bg-[#ffb3c6] rounded-full blur-3xl opacity-40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full border-4 border-white shadow-lg overflow-hidden">
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
  );
};

export default HeroSection;
