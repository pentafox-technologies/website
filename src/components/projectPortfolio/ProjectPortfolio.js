import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
import {
  IconArrowNarrowRight,
  IconCircleCheckFilled,
} from "@tabler/icons-react";
import { Button } from "@mantine/core";
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
  const location = useLocation();
  const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);

  /* ===================== GRAPHQL ===================== */

  const data = useStaticQuery(graphql`
    query PortfolioQuery {
      allContentfulPortfolio(sort: { fields: createdAt, order: ASC }) {
        nodes {
          contentful_id
          id
          slug
          name
          category
          filter

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
    }
  `);

  const projects = data.allContentfulPortfolio.nodes;

  console.log(projects);

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

  /* ===================== FILTER ===================== */

  const handleFilterChange = (value) => {
    setActiveFilter(value);
    sessionStorage.setItem("portfolio_last_filter", value);
  };

  const filteredProjects = projects.filter(
    (project) => project.filter === activeFilter
  );

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
                  <span className="category">{project.category}</span>
                  <h3>{project.name}</h3>

                  <p className="overview">{project.overview?.overview}</p>

                  <div className="meta">
                    <div className="meta-row">
                      <IconCircleCheckFilled size={18} color="#05ff01" />
                      <span>
                        <span className="label">Impact:</span>
                        {project.impact?.impact}
                      </span>
                    </div>

                    <div className="meta-row">
                      <IconCircleCheckFilled size={18} color="#05ff01" />
                      <span>
                        <span className="label">Core Tech:</span>
                        {project.coreTech?.coreTech}
                      </span>
                    </div>
                  </div>

                  {project.challengeContent?.challengeContent?.length > 0 && (
                    <Button
                      onClick={() => {
                        sessionStorage.setItem("portfolio_from_detail", "true");
                        navigate(`/portfolio/${project.slug}`);
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
