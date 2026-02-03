import React from "react";
import { motion } from "framer-motion";

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
      style={{
        paddingTop: "3rem",
        backgroundColor: "#fef4f3",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 16px",
        }}
      >
        {/* HEADER */}
        <motion.div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2
            style={{
              fontSize: "30px",
              fontWeight: 500,
              marginBottom: "12px",
            }}
            variants={fadeUp}
            custom={0}
          >
            {data.title}
          </motion.h2>

          <motion.p
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "#656565",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
            variants={fadeUp}
            custom={1}
          >
            {data.description}
          </motion.p>
        </motion.div>

        {/* GRID */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT */}
          <motion.div
            style={{
              flex: 1,
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "280px",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.img
              src={data.mainImage}
              alt="Leadership Team"
              variants={zoomIn}
              style={{
                width: "100%",
                height: "auto",
                maxHeight: "490px",
                objectFit: "contain",
              }}
            />

            {/* FOUNDERS OVERLAY */}
            <div
              style={{
                position: "absolute",
                bottom: "90px",
                left: 0,
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 10px",
                pointerEvents: "none",
              }}
            >
              {data.founders.map((founder, index) => {
                const positions = [
                  { bottom: "40px", left: "0px" },
                  { bottom: "78px", left: "260px" },
                  { bottom: "0px", right: "15px" },
                ];

                return (
                  <motion.div
                    key={index}
                    variants={slideSmooth}
                    custom={index + 2}
                    whileHover={{
                      scale: 1.15,
                      filter: "brightness(1.2)",
                      transition: { type: "spring", stiffness: 200 },
                    }}
                    style={{
                      position: "absolute",
                      pointerEvents: "auto",
                      ...positions[index],
                    }}
                  >
                    <img
                      src={founder.img}
                      alt={founder.alt}
                      style={{
                        maxHeight: "55px",
                        transition: "all 0.3s ease",
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            style={{
              flex: 1,
              minWidth: "280px",
              maxWidth: "600px",
              textAlign: "left",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              style={{
                fontSize: "28px",
                fontWeight: 500,
                marginBottom: "12px",
              }}
              variants={slideRight}
              custom={1}
            >
              {data.rightSection.title}
            </motion.h2>

            <motion.p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#6c757d",
              }}
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
