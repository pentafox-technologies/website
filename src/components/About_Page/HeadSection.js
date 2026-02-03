import React, { useEffect, useState } from "react";
import { IconSquareArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "gatsby";

function HeadSection({ data }) {
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowStars(window.innerWidth >= 1200);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const contentVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay,
      },
    }),
  };

  return (
    <section
      style={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "3rem",
        background:
          "linear-gradient(to top, #FFF5F5 70%, rgba(255, 245, 245, 0) 100%)",
        padding: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          width: "100%",
          maxWidth: "1180px",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        {/* Background Image */}
        <motion.img
          src={data.images.team}
          alt="Team"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectPosition: "center",
            borderRadius: "16px",
            zIndex: 0,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Content */}
        <motion.div
          style={{
            position: "relative",
            zIndex: 1,
            marginTop: "100px",
            color: "#000",
          }}
          initial="hidden"
          animate="visible"
          variants={contentVariant}
          custom={0.2}
        >
          <motion.h1
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              maxWidth: "800px",
              lineHeight: "1.3",
              margin: "0 auto 1rem",
              fontWeight: 500,
            }}
            variants={contentVariant}
            custom={0.4}
          >
            {data.heading}
          </motion.h1>

          <motion.p
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "700px",
              margin: "0 auto 0.5rem",
              padding: "0 0.5rem",
              color: "#656565",
              lineHeight: "1.6",
            }}
            variants={contentVariant}
            custom={0.6}
          >
            {data.description}
          </motion.p>

          {/* CTA */}
          <Link to={data.ctaLink} style={{ textDecoration: "none" }}>
            <motion.div
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginTop: "0.5rem",
                cursor: "pointer",
                color: "#CD0E11",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                fontWeight: 500,
              }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              variants={contentVariant}
              custom={0.8}
            >
              <span>{data.ctaText}</span>
              <IconSquareArrowRight size={24} stroke={1.5} />
            </motion.div>
          </Link>

          {/* Decorative Stars (Desktop Only) */}
          {showStars && (
            <>
              <motion.img
                src={data.images.star1}
                alt="Star 1"
                style={{
                  position: "absolute",
                  top: "-59px",
                  right: "-66px",
                  width: "30px",
                  height: "30px",
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <motion.img
                src={data.images.star2}
                alt="Star 2"
                style={{
                  position: "absolute",
                  top: "-39px",
                  right: "-48px",
                  width: "40px",
                  height: "40px",
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <motion.img
                src={data.images.star3}
                alt="Star 3"
                style={{
                  position: "absolute",
                  top: "178px",
                  left: "-188px",
                  width: "30px",
                  height: "30px",
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />

              <motion.img
                src={data.images.star4}
                alt="Star 4"
                style={{
                  position: "absolute",
                  top: "194px",
                  left: "-224px",
                  width: "45px",
                  height: "45px",
                }}
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default HeadSection;
