
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { User, Calendar, MapPin, Phone, Mail } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const AboutSection = () => {
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
  );
};

export default AboutSection;
