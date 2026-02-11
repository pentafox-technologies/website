import { BackgroundImage } from "@mantine/core";
import React from "react";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "10px 20px",
  },

  count: {
    color: "#e4554f", // red like image
    fontWeight: 700,
    lineHeight: 1,
    fontSize: "clamp(2rem, 5vw, 3.5rem)", // responsive
    margin: 0,
  },

  desc: {
    color: "gray", // dark blue like image
    fontWeight: 500,
    fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
    marginTop: "8px",
  },
};

function StatsText({ statsCount = "0", statsDesc = "" }) {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.count}>{statsCount}</h1>
      <p style={styles.desc}>{statsDesc}</p>
    </div>
  );
}

export default StatsText;
