import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./about.css";
import {
  IconBulb,
  IconUsers,
  IconHeartHandshake,
  IconStar,
  IconShieldLock,
  IconLeaf,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

const iconMap = {
  IconBulb: IconBulb,
  IconUsers: IconUsers,
  IconHeartHandshake: IconHeartHandshake,
  IconStar: IconStar,
  IconShieldLock: IconShieldLock,
  IconLeaf: IconLeaf,
};

function CoreValues({ data }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut", delay: 0.3 } },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 0.3, when: "beforeChildren" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  };

  const ValueCard = ({ value }) => {
    const Icon = iconMap[value.icon];

    return (
      <motion.div className="col-md-4 col-sm-6" variants={cardVariants}>
        <div className="p-4 h-100 d-flex align-items-start">
          <motion.div
            variants={iconVariants}
            className="d-flex align-items-center justify-content-center rounded-4 me-3"
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "#FFF5F5",
              flexShrink: 0,
            }}
          >
            <Icon size={32} stroke={1.5} className="text-danger" />
          </motion.div>

          <motion.div variants={textVariants}>
            <h5 className="fw-bold mb-2">{value.title}</h5>
            <p
              className="mb-0"
              style={{
                color: "#14121999",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {value.text}
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-white text-center">
      <div className="container">
        <motion.h2
          className="font-medium mb-3 core-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.title}
        </motion.h2>

        <motion.p
          className="font-medium mb-5 text-[#656565]"
          style={{ fontSize: "16px", maxWidth: "700px", margin: "0 auto" }}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.subtitle}
        </motion.p>

        <motion.div
          className="row g-4 lg:g-5 text-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {data.values.map((value, index) => (
            <ValueCard key={index} value={value} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CoreValues;
