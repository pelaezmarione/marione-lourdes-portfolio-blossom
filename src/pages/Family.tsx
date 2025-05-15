
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";

const Family = () => {
  const familyMembers = [
    {
      name: "Omar R. Pelaez",
      relation: "Father",
      description: "Supportive and hardworking father who has always encouraged my creative pursuits.",
      image: "/placeholder.svg"
    },
    {
      name: "Rhea Amor P. Pelaez",
      relation: "Mother",
      description: "Loving mother who taught me the joy of cooking and baking from a young age.",
      image: "/placeholder.svg"
    },
    {
      name: "Lieve Rhemar P. Pelaez",
      relation: "Sister",
      description: "My wonderful sister and closest companion in all adventures.",
      image: "/placeholder.svg"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <div className="pt-16">
        <SectionHeading 
          title="Family Background" 
          subtitle="The loving family who has supported me throughout my journey"
          align="center"
        />
        
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {familyMembers.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group hover:shadow-lg transition-shadow border-pink-100">
                <div className="relative h-72 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-20">
                    <h3 className="text-white text-xl font-semibold">{member.name}</h3>
                    <p className="text-pink-200 font-medium">{member.relation}</p>
                  </div>
                </div>
                <CardContent className="p-5">
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-50 to-pink-100 p-8 rounded-2xl shadow-sm"
        >
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-pink-700 mb-4">Family Values</h3>
            <p className="text-gray-700 leading-relaxed">
              My family has always emphasized the importance of creativity, hard work, and pursuing one's passions. 
              Growing up in a nurturing environment has shaped me into the person I am today. The support from my 
              parents and my sister has been instrumental in my journey to explore different interests and develop my skills.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              We enjoy spending quality time together, whether it's cooking family meals, going on hikes, or supporting 
              each other's creative endeavors. These shared experiences have strengthened our bond and continue to be 
              a source of joy and inspiration in my life.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Family;
