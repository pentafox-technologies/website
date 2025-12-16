import React from "react";
import { Box } from "@mantine/core";
import { IconListCheck } from "@tabler/icons-react";

const ProjectCard = ({ project }) => {
  return (
    <Box className="card">
      {/* Header */}
      <Box className="cardHeader">
        <Box className="titleRow">
          <h3>{project.title}</h3>
          <span className="client">{project.client}</span>
        </Box>
        <p className="description">{project.description}</p>
      </Box>

      {/* Body */}
      <Box className="cardBody">
        <h4 className="sectionTitle">
          <span className="icon"><IconListCheck /></span> Core Capabilities
        </h4>

        <ul className="capabilities">
          {project.capabilities.map((cap, i) => (
            <li key={i}>{cap}</li>
          ))}
        </ul>
      </Box>
    </Box>
  );
};

export default ProjectCard;
