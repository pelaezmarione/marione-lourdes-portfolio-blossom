
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Calendar, User } from "lucide-react";

const Home = () => {
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
    <div className="container mx-auto px-4 py-20 min-h-screen">
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
                Contact Me
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
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-pink-200 rounded-full blur-3xl opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-white shadow-lg overflow-hidden">
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
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow border-pink-100">
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
    </div>
  );
};

export default Home;
