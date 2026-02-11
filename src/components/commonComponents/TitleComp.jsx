import React from "react";

function TitleComp({ title = "", color = "rgba(0, 0, 0, 0.75)" }) {
  const titleStyle = {
    color: color,
    textAlign: "center",
    fontWeight: 600,
    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
    // fontSize: "clamp(1.4rem, 3vw, 3rem)",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <h1 style={titleStyle}>{title}</h1>
    </div>
  );
}

export default TitleComp;
