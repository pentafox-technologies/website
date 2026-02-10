import { IconCompass } from "@tabler/icons-react";
import React, { useState } from "react";

function ProjectCard({
  projects = [],
  handleClickButton = () => {},
  isThemeGray = false,
}) {
  const [hoveredId, setHoveredId] = useState(0);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "10px auto",
      }}
    >
      {projects?.map((project, index) => (
        <div
          key={project?.contentful_id || index}
          onClick={() => handleClickButton(project)}
          style={{
            background: `${isThemeGray ? "#84848411" : "white"}`,
            border: `1px solid #e5e7eb`,
            borderRadius: "10px",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          {/* IMAGE */}
          <div
            style={{
              height: "180px",
              overflow: "hidden",
              marginBottom: "20px",
            }}
          >
            <img
              src={
                project?.coverImage?.gatsbyImageData?.images?.fallback?.src ||
                project?.projectImage?.gatsbyImageData?.images?.fallback?.src
              }
              alt={project?.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {/* CONTENT */}
          <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
            {project?.name}
          </h3>

          <p style={{ fontSize: "15px", color: "#64748b", flex: 1 }}>
            {project?.overview?.overview}
          </p>

          {/* CTA */}
          <button
            onMouseEnter={() => setHoveredId(project.contentful_id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleClickButton(project)}
            style={{
              color: `${isThemeGray ? "black" : "#c52222"}`,
              marginTop: "12px",
              alignSelf: "flex-start",
              background:
                hoveredId === project?.contentful_id ? "#fbcccc" : "#ffe6e6",
              // background: isThemeGray
              //   ? hoveredId === project?.contentful_id
              //     ? "#999898"
              //     : "#d7d4d4"
              //   : hoveredId === project?.contentful_id
              //     ? "#fbcccc"
              //     : "#ffe6e6",
              border: "none",
              padding: "8px",
              borderRadius: "5px",
              fontWeight: 600,
              cursor: "pointer",
              fontSize: "12px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {/* <IconCompass size={18} stroke={1.5}
  style={{
    transition: "transform 0.2s ease",
    transform:
      hoveredId === project?.contentful_id ? "rotate(15deg)" : "none",
  }}
  /> */}
            Explore More
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProjectCard;
