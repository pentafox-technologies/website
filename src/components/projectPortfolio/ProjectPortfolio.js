import React, { useState } from "react";
import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";
import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
import {
  IconArrowNarrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { Button } from "@mantine/core";
import { navigate } from "gatsby";

const FILTERS = [
  { label: "Our Products", value: "product" },
  { label: "AI & Analytics", value: "ai" },
  { label: "Aviation", value: "aviation" },
  { label: "Banking & Fintech", value: "banking" },
  { label: "Cloud", value: "cloud" },
  { label: "Machine Learning", value: "machine-learning" },
  // { label: "Health Care", value: "health-care" },
  { label: "Others", value: "others" },
];

const ProjectPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("product");

  const filteredProjects = portfolioProjectDetails.filter(
    (project) => project.filter === activeFilter
  );

  return (
    <ProjectPortfolioWrapper>
      {/* FILTER TABS (UNCHANGED UI) */}
      <div className="filter-tabs">
        {FILTERS.map((filter) => (
          <div
            key={filter.value}
            className={`filter-tab ${
              activeFilter === filter.value ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </div>
        ))}
      </div>

      <div className="container">
        {filteredProjects.map((project, index) => {
          const reverse = index % 2 === 0;

          return (
            <ProjectPortfolioWrapper
              key={project.id || index}
              reverse={reverse}
            >
              <div className="portfolio-row">
                {/* IMAGE */}
                <div className="left-col image-wrapper">
                  <img
                    src={project?.project_image}
                    alt={project?.name}
                  />
                </div>
                {/* CONTENT */}
                <div className="right-col">
                  <span className="category">{project?.category}</span>
                  <h3>{project?.name}</h3>
                  <p className="overview">{project?.overview}</p>

                  <div className="meta">
                    <div className="meta-row">
                      <IconCircleCheckFilled size={18} color="#05ff01" />
                      <span>
                        <span className="label">Impact:</span>
                        {project?.impact}
                      </span>
                    </div>

                    <div className="meta-row">
                      <IconCircleCheckFilled size={18} color="#05ff01" />
                      <span>
                        <span className="label">Core Tech:</span>
                        {project?.core_tech}
                      </span>
                    </div>
                  </div>
                  {project?.in_detail &&
                    Object.entries(project?.in_detail).length && (
                      <Button
                        onClick={() => navigate(`/portfolio/${project.id}`)}
                        rightIcon={
                          <IconArrowNarrowRight size={18} color="white" />
                        }
                        styles={{
                          root: {
                            backgroundColor: "#cd0e11",
                            "&:hover": {
                              backgroundColor: "#b80c0f",
                            },
                          },
                        }}
                      >
                        View Case Study
                      </Button>
                    )}
                </div>
              </div>
            </ProjectPortfolioWrapper>
          );
        })}
      </div>
    </ProjectPortfolioWrapper>
  );
};

export default ProjectPortfolio;

// import React, { useState } from "react";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";
// import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
// import {
//   IconArrowNarrowRight,
//   IconCircleCheckFilled,
// } from "@tabler/icons-react";
// import { Button } from "@mantine/core";
// import { navigate } from "gatsby";

// const FILTERS = [
//   { label: "All Projects", value: "all" },
//   { label: "Banking & Fintech", value: "banking" },
//   { label: "AI & Analytics", value: "ai" },
//   { label: "Aviation", value: "aviation" },
//   { label: "Own Products", value: "product" },
// ];

// const ProjectPortfolio = () => {
//   const [activeFilter, setActiveFilter] = useState("all");

//   const filteredProjects =
//     activeFilter === "all"
//       ? portfolioProjectDetails
//       : portfolioProjectDetails.filter(
//           (project) => project.filter === activeFilter
//         );
//   return (
//     <>
//       {/* FILTER TABS */}
//       <div className="filter-tabs">
//         {FILTERS.map((filter) => (
//           <div
//             key={filter.value}
//             className={`filter-tab ${
//               activeFilter === filter.value ? "active" : ""
//             }`}
//             onClick={() => setActiveFilter(filter.value)}
//           >
//             {filter.label}
//           </div>
//         ))}
//       </div>
//       <ProjectPortfolioWrapper>
//         <div className="container">
//           {filteredProjects.map((project, index) => {
//             const reverse = index % 2 === 0;

//             return (
//               <ProjectPortfolioWrapper
//                 key={project.id || index}
//                 reverse={reverse}
//               >
//                 <div className="portfolio-row">
//                   {/* IMAGE (TOP ON MOBILE) */}
//                   <div className="left-col image-wrapper">
//                     <img src={project?.project_image} alt={project?.name} />
//                   </div>

//                   {/* CONTENT */}
//                   <div className="right-col">
//                     <span className="category">{project?.category}</span>
//                     <h3>{project?.name}</h3>
//                     <p className="overview">{project?.overview}</p>

//                     <div className="meta">
//                       <div className="meta-row">
//                         <IconCircleCheckFilled size={18} color="#05ff01" />

//                         <span>
//                           <span className="label">Impact:</span>
//                           {project.impact}
//                         </span>
//                       </div>

//                       <div className="meta-row">
//                         <IconCircleCheckFilled size={18} color="#05ff01" />

//                         <span>
//                           <span className="label">Core Tech:</span>
//                           {project.core_tech}
//                         </span>
//                       </div>
//                     </div>

//                     <Button
//                       onClick={() => navigate(`/portfolio/${project.id}`)}
//                       rightIcon={
//                         <IconArrowNarrowRight size={18} color="white" />
//                       }
//                       styles={{
//                         root: {
//                           backgroundColor: "#cd0e11",
//                           "&:hover": {
//                             backgroundColor: "#b80c0f",
//                           },
//                         },
//                       }}
//                     >
//                       View Case Study
//                     </Button>
//                   </div>
//                 </div>
//               </ProjectPortfolioWrapper>
//             );
//           })}
//         </div>
//       </ProjectPortfolioWrapper>
//     </>
//   );
// };

// export default ProjectPortfolio;

// import React from "react";
// import { Container, Grid, Box, Text } from "@mantine/core";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";

// const ProjectPortfolio = () => {
//   return (
//     <Box
//       py={80}
//       style={{
//         background: "#ffffff",
//         position: "relative",
//         zIndex: 2,
//       }}
//     >
//       <Container size={1200}>
//         {portfolioProjectDetails.map((project, index) => {
//           const reverse = index % 2 === 1;

//           return (
//             <Grid key={project.id || index} gutter={48} align="center" mb={80}>
//               {/* IMAGE (TOP ON MOBILE) */}
//               <Grid.Col
//                 span={6}
//                 order={reverse ? 2 : 1}
//                 breakpoints={[{ maxWidth: "md", span: 12, order: 1 }]}
//               >
//                 <img
//                   src={project.project_image}
//                   alt={project.name}
//                   style={{
//                     width: "100%",
//                     height: "clamp(220px, 40vw, 320px)",
//                     borderRadius: 16,
//                     objectFit: "cover",
//                     boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
//                   }}
//                 />
//               </Grid.Col>

//               {/* CONTENT */}
//               <Grid.Col
//                 span={6}
//                 order={reverse ? 1 : 2}
//                 breakpoints={[{ maxWidth: "md", span: 12, order: 2 }]}
//               >
//                 <Box>
//                   <Text size="xs" fw={600} c="red" tt="uppercase" mb={8}>
//                     {project.category}
//                   </Text>

//                   <Text size="xl" fw={700} mb={12}>
//                     {project.name}
//                   </Text>

//                   <Text c="dimmed" lh={1.6}>
//                     {project.overview}
//                   </Text>
//                 </Box>
//               </Grid.Col>
//             </Grid>
//           );
//         })}
//       </Container>
//     </Box>
//   );
// };

// export default ProjectPortfolio;

// import React from "react";
// import LayoutCommon from "../layout/layoutCommon";
// import PageWrapper from "../pageWrapper/PageWrapper";
// import { ProjectPortfolioStyles } from "./projectPortfolio.styles";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";

// const ProjectPortfolio = () => {
//   return (
//     <ProjectPortfolioStyles>
//       <div className="page-wrap">
//         {portfolioProjectDetails.map((project, index) => (
//           <div
//             key={project.id || index}
//             className={`portfolio-row ${index % 2 === 1 ? "reverse" : ""}`}
//           >
//             {/* TEXT */}
//             <div className="portfolio-text">
//               <span className="category">{project.category}</span>
//               <h2 className="title">{project.name}</h2>
//               <p className="overview">{project.overview}</p>
//             </div>

//             {/* IMAGE */}
//             <div className="portfolio-image">
//               <img src={project.project_image} alt={project.name} />
//             </div>
//           </div>
//         ))}
//       </div>
//     </ProjectPortfolioStyles>
//   );
// };

// export default ProjectPortfolio;
