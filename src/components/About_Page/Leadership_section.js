import React from "react";
import { motion } from "framer-motion";
import './about.css'

function LeadershipSection({ data }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideSmooth = {
    hidden: { opacity: 0, x: -60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.35,
        type: "spring",
        stiffness: 40,
        damping: 18,
        mass: 0.8,
      },
    }),
  };

  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section
      className="pt-5"
      style={{
        backgroundColor: "#fef4f3",
        overflow: "hidden",
      }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            className="font-medium mb-3"
            style={{ fontSize: "30px" }}
            variants={fadeUp}
            custom={0}
          >
            {data.title}
          </motion.h2>

          <motion.p
            className="font-medium mb-5 text-[#656565]"
            style={{
              fontSize: "16px",
              maxWidth: "600px",
              margin: "0 auto",
            }}
            variants={fadeUp}
            custom={1}
          >
            {data.description}
          </motion.p>
        </motion.div>


        <div className="leadership-grid">
          {/* LEFT SIDE */}
          <motion.div
            className="leadership-image-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={data.mainImage}
              alt="Leadership Team"
              className="leadership-main-img"
              variants={zoomIn}
            />


            <div className="founders-overlay">
              {data.founders.map((founder, index) => (
                <motion.div
                  key={index}
                  className={`founder-wrapper founder-${index}`}
                  variants={slideSmooth}
                  custom={index + 2}
                  whileHover={{
                    scale: 1.15,
                    filter: "brightness(1.2)",
                    transition: { type: "spring", stiffness: 200 },
                  }}
                >
                  <img
                    src={founder.img}
                    alt={founder.alt}
                    className="founder-img"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="leadership-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="fw-medium mb-3"
              style={{ fontSize: "28px" }}
              variants={slideRight}
              custom={1}
            >
              {data.rightSection.title}
            </motion.h2>

            <motion.p
              className="text-muted"
              style={{ fontSize: "16px", lineHeight: "1.6" }}
              variants={slideRight}
              custom={2}
            >
              {data.rightSection.text}
            </motion.p>
          </motion.div>
        </div>
      </div>
</section>
  );
}

export default LeadershipSection;
