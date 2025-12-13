import React from "react";
import { motion } from "framer-motion";

function Pendafox_section({ data }) {
  const sectionVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      className="w-full px-6 md:px-15 py-12"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title and Subtitle */}
      <motion.div className="text-center mb-10" variants={itemVariants}>
        <motion.h2 className="text-3xl font-bold mb-2" variants={itemVariants}>
          {data.title}
        </motion.h2>
        <motion.p className="text-lg text-[#656565]" variants={itemVariants}>
          {data.subtitle}
        </motion.p>
      </motion.div>

      <motion.div className="flex flex-col md:flex-row mb-6 gap-4">
        {data.topImages.map((image, index) => (
          <motion.div
            key={index}
            className={`w-full md:h-[300px] ${index === 0 ? "md:w-3/5" : "md:w-2/5"
              }`}
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full md:h-full rounded object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Images */}
      <motion.div className="flex flex-col md:flex-row gap-4">
        {data.bottomImages.map((image, index) => (
          <motion.div key={index} className="w-full md:flex-1" variants={itemVariants}>
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-auto rounded object-cover"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Pendafox_section;
