import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Pendafox_section({ data }) {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const check = () => setIsMd(window.innerWidth >= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      style={{
        width: "100%",
        padding: "48px 24px", // px-6 py-12
      }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Title and Subtitle */}
      <motion.div
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
        variants={itemVariants}
      >
        <motion.h2
          style={{
            fontSize: "30px",
            fontWeight: 700,
            marginBottom: "8px",
          }}
          variants={itemVariants}
        >
          {data.title}
        </motion.h2>

        <motion.p
          style={{
            fontSize: "18px",
            color: "#656565",
          }}
          variants={itemVariants}
        >
          {data.subtitle}
        </motion.p>
      </motion.div>

      {/* Top Images */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: isMd ? "row" : "column",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        {data.topImages.map((image, index) => (
          <motion.div
            key={index}
            style={{
              width: isMd ? (index === 0 ? "60%" : "40%") : "100%",
              height: isMd ? "300px" : "auto",
            }}
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: isMd ? "100%" : "auto",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom Images */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: isMd ? "row" : "column",
          gap: "16px",
        }}
      >
        {data.bottomImages.map((image, index) => (
          <motion.div
            key={index}
            style={{
              width: "100%",
              flex: isMd ? 1 : "unset",
            }}
            variants={itemVariants}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "6px",
                objectFit: "cover",
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Pendafox_section;
