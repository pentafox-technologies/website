import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
import {
  IconArrowNarrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { Badge, Button, Flex, Grid } from "@mantine/core";
import { useLocation } from "@reach/router";

/* ===================== FILTERS ===================== */

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

/* ===================== COMPONENT ===================== */

const ProjectPortfolio = () => {
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);

  /* ===================== GRAPHQL (SINGLE QUERY) ===================== */

  const data = useStaticQuery(graphql`
    query PortfolioPageQuery {
      allContentfulPortfolio(sort: { fields: createdAt, order: ASC }) {
        nodes {
          contentful_id
          id
          slug
          name
          category
          filter
          isDetailedContent
          overview {
            overview
          }
          impact {
            impact
          }
          coreTech {
            coreTech
          }
          projectImage {
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
          challengeContent {
            challengeContent
          }
        }
      }

      allContentfulAviationPortfolio(sort: { fields: createdAt, order: ASC }) {
        nodes {
          contentful_id
          id
          slug
          filters
          name
          isDetailedContent
          projectImage {
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
          projectDescription {
            projectDescription
          }
          technologyStack
        }
      }
    }
  `);

  const normalProjects = data.allContentfulPortfolio.nodes;
  const aviationProjects = data.allContentfulAviationPortfolio.nodes;

  /* ===================== PAGE ENTRY LOGIC ===================== */

  useEffect(() => {
    if (typeof window === "undefined") return;

    const routeFilter = location?.state?.filter;
    const cameFromDetail = sessionStorage.getItem("portfolio_from_detail");
    const storedFilter = sessionStorage.getItem("portfolio_last_filter");

    if (routeFilter) {
      setActiveFilter(routeFilter);
      sessionStorage.setItem("portfolio_last_filter", routeFilter);
    } else if (cameFromDetail && storedFilter) {
      setActiveFilter(storedFilter);
      sessionStorage.removeItem("portfolio_from_detail");
    } else {
      setActiveFilter(DEFAULT_FILTER);
    }
  }, [location]);

  /* ===================== FILTER HANDLER ===================== */

  const handleFilterChange = (value) => {
    setActiveFilter(value);
    sessionStorage.setItem("portfolio_last_filter", value);
  };

  /* ===================== FILTERED DATA ===================== */

  const filteredProjects =
    activeFilter === "aviation"
      ? aviationProjects.filter((p) => p.filters === "aviation")
      : normalProjects.filter((p) => p.filter === activeFilter);

  /* ===================== UI ===================== */

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
              key={project.contentful_id}
              reverse={reverse}
            >
              <div className="portfolio-row">
                {/* IMAGE */}
                <div className="left-col image-wrapper">
                  <img
                    src={
                      project.projectImage?.gatsbyImageData?.images?.fallback
                        ?.src
                    }
                    alt={project.name}
                  />
                </div>

                {/* CONTENT */}
                <div className="right-col">
                  {project?.category && (
                    <span className="category">{project.category}</span>
                  )}
                  <h3>{project?.name}</h3>

                  <p className="overview">
                    {project?.overview?.overview ||
                      project?.projectDescription?.projectDescription}
                  </p>

                  <div className="meta">
                    {project?.impact?.impact && (
                      <div className="meta-row">
                        <IconCircleCheckFilled size={18} color="#05ff01" />
                        <span>
                          <span className="label">Impact:</span>
                          {project?.impact?.impact}
                        </span>
                      </div>
                    )}

                    {project?.coreTech?.coreTech && (
                      <div className="meta-row">
                        <IconCircleCheckFilled size={18} color="#05ff01" />
                        <span>
                          <span className="label">Core Tech:</span>
                          {project?.coreTech?.coreTech}
                        </span>
                      </div>
                    )}
                  </div>

                  {project?.technologyStack?.length > 0 && (
                    <Flex gap={8} wrap="wrap">
                      {project.technologyStack.map((tech, index) => (
                        <Badge key={index} color="green">
                          {tech}
                        </Badge>
                      ))}
                    </Flex>
                  )}

                  {project?.isDetailedContent && (
                    <div className="meta">
                      <Button
                        onClick={() => {
                          sessionStorage.setItem(
                            "portfolio_from_detail",
                            "true"
                          );
                          navigate(`/portfolio/${project.slug}`, {
                            state: {
                              filter: project.filter || project.filters,
                              id: project.contentful_id,
                              slug: project.slug,
                            },
                          });

                          // navigate(`/portfolio/${project.slug}`);
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
                    </div>
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
// import { graphql, useStaticQuery, navigate } from "gatsby";
// import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
// import {
//   IconArrowNarrowRight,
//   IconCircleCheckFilled,
// } from "@tabler/icons-react";
// import { Button } from "@mantine/core";
// import { useLocation } from "@reach/router";

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

// const ProjectPortfolio = () => {
//   const location = useLocation();
//   const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);

//   /* ===================== GRAPHQL ===================== */

//   const allCategoryContentFul = useStaticQuery(graphql`
//     query PortfolioQuery {
//       allContentfulPortfolio(sort: { fields: createdAt, order: ASC }) {
//         nodes {
//           contentful_id
//           id
//           slug
//           name
//           category
//           filter

//           overview {
//             overview
//           }

//           impact {
//             impact
//           }

//           coreTech {
//             coreTech
//           }

//           projectImage {
//             gatsbyImageData(width: 900, placeholder: BLURRED)
//           }

//           challengeContent {
//             challengeContent
//           }
//         }
//       }
//     }
//   `);

//   const aviationContentFul = useStaticQuery(graphql`
//     query aviationPortfolioQuery {
//       allContentfulAviationPortfolio(sort: { fields: createdAt, order: ASC }) {
//         nodes {
//           contentful_id
//           id
//           slug
//           filters
//           name

//           projectImage {
//             gatsbyImageData(width: 900, placeholder: BLURRED)
//           }

//           projectStory {
//             projectStory
//           }

//           technologyStack
//         }
//       }
//     }
//   `);

//   const projects =
//     activeFilter === "aviation"
//       ? aviationContentFul.allContentfulAviationPortfolio.nodes
//       : allCategoryContentFul.allContentfulPortfolio.nodes;

//   // const projects = data.allContentfulPortfolio.nodes;

//   // console.log(projects);

//   /* ===================== PAGE ENTRY LOGIC ===================== */

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const routeFilter = location?.state?.filter;
//     const cameFromDetail = sessionStorage.getItem("portfolio_from_detail");
//     const storedFilter = sessionStorage.getItem("portfolio_last_filter");

//     if (routeFilter) {
//       setActiveFilter(routeFilter);
//       sessionStorage.setItem("portfolio_last_filter", routeFilter);
//     } else if (cameFromDetail && storedFilter) {
//       setActiveFilter(storedFilter);
//       sessionStorage.removeItem("portfolio_from_detail");
//     } else {
//       setActiveFilter(DEFAULT_FILTER);
//     }
//   }, [location]);

//   /* ===================== FILTER ===================== */

//   const handleFilterChange = (value) => {
//     setActiveFilter(value);
//     sessionStorage.setItem("portfolio_last_filter", value);
//   };

//   const filteredProjects = projects.filter(
//     (project) => project.filter === activeFilter
//   );

//   /* ===================== UI ===================== */

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

//       <div className="container">
//         {filteredProjects.map((project, index) => {
//           const reverse = index % 2 === 0;

//           return (
//             <ProjectPortfolioWrapper
//               key={project.contentful_id}
//               reverse={reverse}
//             >
//               <div className="portfolio-row">
//                 {/* IMAGE */}
//                 <div className="left-col image-wrapper">
//                   <img
//                     src={
//                       project.projectImage?.gatsbyImageData?.images?.fallback
//                         ?.src
//                     }
//                     alt={project.name}
//                   />
//                 </div>

//                 {/* CONTENT */}
//                 <div className="right-col">
//                   {project?.category && (
//                     <span className="category">{project.category}</span>
//                   )}
//                   <h3>{project?.name}</h3>

//                   <p className="overview">
//                     {project?.overview?.overview ||
//                       project?.projectStory?.projectStory}
//                   </p>

//                   <div className="meta">
//                     {project?.impact?.impact && (
//                       <div className="meta-row">
//                         <IconCircleCheckFilled size={18} color="#05ff01" />
//                         <span>
//                           <span className="label">Impact:</span>
//                           {project?.impact?.impact}
//                         </span>
//                       </div>
//                     )}
//                     {project?.coreTech?.coreTech && (
//                       <div className="meta-row">
//                         <IconCircleCheckFilled size={18} color="#05ff01" />
//                         <span>
//                           <span className="label">Core Tech:</span>
//                           {project?.coreTech?.coreTech}
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* {project.challengeContent?.challengeContent?.length > 0 && ( */}
//                   <Button
//                     onClick={() => {
//                       sessionStorage.setItem("portfolio_from_detail", "true");
//                       navigate(`/portfolio/${project.slug}`);
//                     }}
//                     rightIcon={<IconArrowNarrowRight size={18} color="white" />}
//                     styles={{
//                       root: {
//                         backgroundColor: "#cd0e11",
//                         "&:hover": {
//                           backgroundColor: "#b80c0f",
//                         },
//                       },
//                     }}
//                   >
//                     View Case Study
//                   </Button>
//                   {/* )} */}
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
