
import { motion } from "framer-motion";

const BackgroundHearts = () => {
  return (
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
  );
};

export default BackgroundHearts;
