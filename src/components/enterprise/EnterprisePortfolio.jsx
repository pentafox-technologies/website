import React, { useState } from "react";
import { Container, Box } from "@mantine/core";
import { enterpriseProjects } from "../../data/enterpriseProjects";
import ProjectCard from "./ProjectCard";
import { EnterpriseStyles } from "./enterprise.styles";

const filters = [
  { label: "All Projects", value: "all" },
  { label: "Banking & Fintech", value: "banking" },
  { label: "AI & Analytics", value: "ai" },
  { label: "Aviation", value: "aviation" },
  { label: "Own Products", value: "product" },
];

const EnterprisePortfolio = () => {
  const [active, setActive] = useState("all");

  const data =
    active === "all"
      ? enterpriseProjects
      : enterpriseProjects.filter((p) => p.category === active);

  return (
    <EnterpriseStyles>
      {/* Filters */}
      <Box className="filters">
        {filters.map((f) => (
          <button
            key={f.value}
            className={`filter ${active === f.value ? "active" : ""}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </Box>

      {/* Cards */}
      <Container size={1300}>
        <Box className="grid">
          {data.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Container>
    </EnterpriseStyles>
  );
};

export default EnterprisePortfolio;
