import React from "react";
import { IconSquareArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

function HeadSection({ data }) {
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
      className="w-100 position-relative overflow-hidden pb-5"
      style={{
        background:
          "linear-gradient(to top, #FFF5F5 70%, rgba(255, 245, 245, 0) 100%)",
        padding: "20px",
      }}
    >
      <div
        className="position-relative mx-auto d-flex flex-column align-items-center text-center"
        style={{
          width: "100%",
          maxWidth: "1180px",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <motion.img
          src={data.images.team}
          alt="Team"
          className="position-absolute top-0 start-0 w-100 h-100 rounded-2xl object-cover md:object-fill"
          style={{
            zIndex: 0,

            objectPosition: "center",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="position-relative text-dark mt-13 md:mt-23 lg:mt-26"
          style={{ zIndex: 1 }}
          initial="hidden"
          animate="visible"
          variants={contentVariant}
          custom={0.2}
        >
          <motion.h1
            className="fw-medium mb-4 mx-auto"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              maxWidth: "800px",
              lineHeight: "1.3",
            }}
            variants={contentVariant}
            custom={0.4}
          >
            {data.heading}
          </motion.h1>

          <motion.p
            className="mx-auto mb-2 px-2"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.3rem)",
              maxWidth: "700px",
              color: "#656565",
              lineHeight: "1.6",
            }}
            variants={contentVariant}
            custom={0.6}
          >
            {data.description}
          </motion.p>

          <Link to={data.ctaLink}>
            <motion.div
              className="d-inline-flex align-items-center justify-content-center gap-2 mt-2"
              style={{
                cursor: "pointer",
                color: "#CD0E11",
                fontSize: "clamp(1rem, 2vw, 1.3rem)",
                fontWeight: "500",
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

          <motion.img
            src={data.images.star1}
            alt="Star 1"
            className="position-absolute d-none d-xl-block"
            style={{
              top: "-59px",
              right: "-66px",
              width: "30px",
              height: "30px",
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
          />
          <motion.img
            src={data.images.star2}
            alt="Star 2"
            className="position-absolute d-none d-xl-block"
            style={{
              top: "-39px",
              right: "-48px",
              width: "40px",
              height: "40px",
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1,
            }}
          />
          <motion.img
            src={data.images.star3}
            alt="Star 3"
            className="position-absolute d-none d-xl-block"
            style={{
              top: "182px",
              left: "-188px",
              width: "30px",
              height: "30px",
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 1,
            }}
          />
          <motion.img
            src={data.images.star4}
            alt="Star 4"
            className="position-absolute d-none d-xl-block"
            style={{
              top: "198px",
              left: "-224px",
              width: "45px",
              height: "45px",
            }}
            animate={{ scale: [1, 1.4, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeadSection;
