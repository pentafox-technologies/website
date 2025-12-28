import React from "react";
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
  IconBulb,
  IconUsers,
  IconHeartHandshake,
  IconStar,
  IconShieldLock,
  IconLeaf,
};

function CoreValues({ data }) {
  const titleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut", delay: 0.3 },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  const ValueCard = ({ value }) => {
    const Icon = iconMap[value.icon];

    return (
      <motion.div
        variants={cardVariants}
        style={{
          flex: "1 1 300px",
          maxWidth: "360px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            height: "100%",
          }}
        >
          <motion.div
            variants={iconVariants}
            style={{
              width: "64px",
              height: "64px",
              backgroundColor: "#FFF5F5",
              borderRadius: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: "16px",
              flexShrink: 0,
            }}
          >
            <Icon size={32} stroke={1.5} color="#DC3545" />
          </motion.div>

          <motion.div variants={textVariants}>
            <h5
              style={{
                fontWeight: 700,
                marginBottom: "8px",
              }}
            >
              {value.title}
            </h5>
            <p
              style={{
                margin: 0,
                color: "#14121999",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "1.6",
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
    <section
      style={{
        backgroundColor: "#ffffff",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
        }}
      >
        <motion.h2
          style={{
            fontWeight: 500,
            marginTop: "40px",
            marginBottom: "12px",
          }}
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.title}
        </motion.h2>

        <motion.p
          style={{
            fontWeight: 500,
            marginTop: "12px",
            marginBottom: "48px",
            color: "#656565",
            fontSize: "16px",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {data.subtitle}
        </motion.p>

        {/* CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "center",
            textAlign: "left",
          }}
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
