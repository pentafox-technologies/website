import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { ProjectPortfolioWrapper } from "./projectPortfolio.styles";
import { useLocation } from "@reach/router";
function ProjectPortfolio() {

  const location = useLocation();

  const [hoveredId, setHoveredId] = useState(null)

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
          detailedDescription {
            detailedDescription
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
            projectDescription,
          }
          technologyStack
        }
      }
    }
  `);
  const allProjects = [
    ...data.allContentfulPortfolio.nodes,
    ...data.allContentfulAviationPortfolio.nodes,
  ];

  return (
    <section
      style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#f3fffb",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "700",
          lineHeight: "1.2",
          marginBottom: "16px",
        }}
      >
        Explore{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #22c55e, #2563eb)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pentafox&apos;s
        </span>{" "}
        Portfolio
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#475569",
          maxWidth: "700px",
          margin: "0 auto 30px",
        }}
      >
        Tap into insightful blogs, data sheets, case studies, and more.
      </p>

      <div
        style={{
          width: "80px",
          height: "4px",
          backgroundColor: "#10b981",
          margin: "0 auto",
          borderRadius: "4px",
          marginBottom: "42px"

        }}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {allProjects.map((project) => (
          <div
            key={project.contentful_id}
            style={{
              background: "#ffffff",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* IMAGE + BADGE */}
            <div
              style={{
                position: "relative",
                height: "220px",
                overflow: "hidden",
              }}
            >
              <img
                src={
                  project.projectImage?.gatsbyImageData?.images?.fallback?.src
                }
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* CASE STUDIES badge (top-right) */}
              {/* <span
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "0px",
                  background: "#10b981",
                  color: "#ffffff",
                  fontSize: "12px",
                  fontWeight: 600,
                  padding: "6px 14px",
                  borderRadius: "20px",
                }}
              >
                CASE STUDIES
              </span> */}
            </div>

            {/* CONTENT */}
            <div style={{ padding: "24px", flex: 1 }}>
              <h3
                style={{
                  fontSize: "22px",
                  fontWeight: 550,
                  marginBottom: "12px",
                  lineHeight: "1.4",
                }}
              >
                {project.name}
              </h3>

              <p
                style={{
                  fontSize: "15px",
                  color: "#64748b",
                  lineHeight: "1.6",
                }}
              >
                {project?.detailedDescription?.detailedDescription}
              </p>
            </div>

            {/* READ MORE (LEFT aligned) */}
            <div
              style={{
                padding: "0 24px 24px",
                textAlign: "left",
              }}
            >
              <button
                onMouseEnter={() => setHoveredId(project.contentful_id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() =>
                  navigate(`/portfolio/${project.slug}`, {
                    state: {
                      filter: project.filter || project.filters,
                      id: project.contentful_id,
                    },
                  })
                }
                style={{
                  background: hoveredId === project.contentful_id ? "#ccfbf1" : "#e6fff5",
                  color: "#000",
                  border: "none",
                  padding: "8px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: 550,
                }}
              >
                READ MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectPortfolio
