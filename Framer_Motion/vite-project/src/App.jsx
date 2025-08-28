import React from "react";
import { motion } from "motion/react";

const App = () => {
  return (
    <div>
      <div className="page1">
        {/* First Box */}
        <motion.div
          className="box"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, 800, 800, 0, 0],
            y: [0, 0, 300, 300, 0],
            rotate: 360,
          }}
          transition={{
            duration: 5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Circle */}
        <motion.div
          className="circle"
          initial={{
            x: 0,
            scale: 1,
          }}
          animate={{
            x: 1100,
            scale: 2,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        {/* Second Box (example with hover) */}
        <motion.div
          className="box"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          whileHover={{
            scale: 1.2,
            rotate: 20,
          }}
          transition={{
            duration: 1,
          }}
        />
      </div>
     <div className="page2">
          




  <motion.div
    className="box"
    drag
    
    whileDrag={{
      scale: 1.2, // thoda zoom drag ke time
    }}
    dragConstraints={{
      left: 0,
      top: 0,
      right: 200,
      bottom: 100,
    }}
    dragElastic={0.2} // thoda elastic feel
    dragSnapToOrigin // 👈 chhodne ke baad original jagah pe aayega
    initial={{
      opacity: 0,
    }}
    animate={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
      type: "spring", // spring motion
      bounce: 0.2, // bounce effect
    }}
  />
</div>

    </div>
  );
};

export default App;
