import React, { useState, useEffect } from "react";
import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";
import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
import {
  IconArrowNarrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { Box, Button, Image } from "@mantine/core";
import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

const FILTERS = [
  { label: "Our Products", value: "product" },
  { label: "AI & Analytics", value: "ai" },
  { label: "Aviation", value: "aviation" },
  { label: "Banking & Fintech", value: "banking" },
  { label: "Cloud Services", value: "cloud" },
  { label: "Machine Learning", value: "machine-learning" },
  { label: "Other Services", value: "others" },
];

const DEFAULT_FILTER = "product";

const ProjectPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);
  const location = useLocation();
  
  // PAGE ENTRY LOGIC
  useEffect(() => {
    if (typeof window === "undefined") return;
    const routeFilter = location?.state?.filter;
    const cameFromDetail = sessionStorage.getItem("portfolio_from_detail");
    const storedFilter = sessionStorage.getItem("portfolio_last_filter");

    if (routeFilter) {
      // Priority 1: filter from route state
      setActiveFilter(routeFilter);
      sessionStorage.setItem("portfolio_last_filter", routeFilter);
    } else if (cameFromDetail && storedFilter) {
      // Returned from detail page
      setActiveFilter(storedFilter);
      sessionStorage.removeItem("portfolio_from_detail");
    } else {
      // Fresh entry
      setActiveFilter(DEFAULT_FILTER);
    }
  }, [location]);

  // FILTER HANDLER
  const handleFilterChange = (value) => {
    setActiveFilter(value);
    sessionStorage.setItem("portfolio_last_filter", value);
  };

  const filteredProjects = portfolioProjectDetails.filter(
    (project) => project.filter === activeFilter
  );

  return (
    <ProjectPortfolioWrapper>
      {/* FILTER TABS */}
      <div className="filter-tabs">
        {FILTERS.map((filter) => (
          <div
            key={filter.value}
            className={`filter-tab ${
              activeFilter === filter.value ? "active" : ""
            }`}
            onClick={() => handleFilterChange(filter.value)}
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
                  <img src={project?.project_image} alt={project?.name} />
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
                    Object.entries(project?.in_detail).length > 0 && (
                      <Button
                        onClick={() => {
                          //  MARK NAVIGATION SOURCE
                          sessionStorage.setItem(
                            "portfolio_from_detail",
                            "true"
                          );
                          navigate(`/portfolio/${project.id}`);
                        }}
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

// import React, { useState, useEffect } from "react";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";
// import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
// import {
//   IconArrowNarrowRight,
//   IconCircleCheckFilled,
// } from "@tabler/icons-react";
// import { Button } from "@mantine/core";
// import { navigate } from "gatsby";
// import { useLocation } from "@reach/router";

// /* ===================== FILTER CONFIG ===================== */

// const FILTERS = [
//   { label: "Our Products", value: "product" },
//   { label: "AI & Analytics", value: "ai" },
//   { label: "Aviation", value: "aviation" },
//   { label: "Banking & Fintech", value: "banking" },
//   { label: "Cloud Services", value: "cloud" },
//   { label: "Machine Learning", value: "machine-learning" },
//   { label: "Other Services", value: "others" },
// ];

// const DEFAULT_FILTER = "product";

// /* ===================== COMPONENT ===================== */

// const ProjectPortfolio = () => {
//   const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);
//   const location = useLocation();

//   /* ===================== PAGE ENTRY LOGIC ===================== */

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     console.log(location?.state?.filter, location);

//     const routeFilter = location?.state?.filter; // 🔥 from Link state
//     const cameFromDetail = sessionStorage.getItem("portfolio_from_detail");
//     const storedFilter = sessionStorage.getItem("portfolio_last_filter");

//     if (routeFilter) {
//       // Priority 1: filter from route state
//       setActiveFilter(routeFilter);
//       sessionStorage.setItem("portfolio_last_filter", routeFilter);
//     } else if (cameFromDetail && storedFilter) {
//       // Priority 2: return from detail page
//       setActiveFilter(storedFilter);
//       sessionStorage.removeItem("portfolio_from_detail");
//     } else {
//       // Priority 3: fresh entry
//       setActiveFilter(DEFAULT_FILTER);
//     }
//   }, [location]);

//   /* ===================== FILTER HANDLER ===================== */

//   const handleFilterChange = (value) => {
//     setActiveFilter(value);
//     sessionStorage.setItem("portfolio_last_filter", value);
//   };

//   /* ===================== FILTERED PROJECTS ===================== */

//   const filteredProjects = portfolioProjectDetails.filter(
//     (project) => project.filter === activeFilter
//   );

//   /* ===================== RENDER ===================== */

//   return (
//     <ProjectPortfolioWrapper>
//       {/* FILTER TABS */}
//       <div className="filter-tabs">
//         {FILTERS.map((filter) => (
//           <div
//             key={filter.value}
//             className={`filter-tab ${
//               activeFilter === filter.value ? "active" : ""
//             }`}
//             onClick={() => handleFilterChange(filter.value)}
//           >
//             {filter.label}
//           </div>
//         ))}
//       </div>

//       {/* PROJECT LIST */}
//       <div className="container">
//         {filteredProjects.map((project, index) => {
//           const reverse = index % 2 === 0;

//           return (
//             <ProjectPortfolioWrapper
//               key={project.id || index}
//               reverse={reverse}
//             >
//               <div className="portfolio-row">
//                 {/* IMAGE */}
//                 <div className="left-col image-wrapper">
//                   <img src={project?.project_image} alt={project?.name} />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="right-col">
//                   <span className="category">{project?.category}</span>
//                   <h3>{project?.name}</h3>
//                   <p className="overview">{project?.overview}</p>

//                   <div className="meta">
//                     <div className="meta-row">
//                       <IconCircleCheckFilled size={18} color="#05ff01" />
//                       <span>
//                         <span className="label">Impact:</span> {project?.impact}
//                       </span>
//                     </div>

//                     <div className="meta-row">
//                       <IconCircleCheckFilled size={18} color="#05ff01" />
//                       <span>
//                         <span className="label">Core Tech:</span>{" "}
//                         {project?.core_tech}
//                       </span>
//                     </div>
//                   </div>

//                   {/* CASE STUDY CTA */}
//                   {project?.in_detail &&
//                     Object.entries(project?.in_detail).length > 0 && (
//                       <Button
//                         onClick={() => {
//                           sessionStorage.setItem(
//                             "portfolio_from_detail",
//                             "true"
//                           );
//                           navigate(`/portfolio/${project.id}`);
//                         }}
//                         rightIcon={
//                           <IconArrowNarrowRight size={18} color="white" />
//                         }
//                         styles={{
//                           root: {
//                             backgroundColor: "#cd0e11",
//                             "&:hover": {
//                               backgroundColor: "#b80c0f",
//                             },
//                           },
//                         }}
//                       >
//                         View Case Study
//                       </Button>
//                     )}
//                 </div>
//               </div>
//             </ProjectPortfolioWrapper>
//           );
//         })}
//       </div>
//     </ProjectPortfolioWrapper>
//   );
// };

// export default ProjectPortfolio;
