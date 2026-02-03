import React, { useState } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import LayoutCommon from "../layout/layoutCommon";
import PageWrapper from "../pageWrapper/PageWrapper";
import { IconBrandLinkedin, IconBrandX, IconExternalLink } from "@tabler/icons-react"

export default function PortfolioDetails() {
  const location = useLocation()

  const { filter, id } = location.state || {}
  const [isHover, setIsHover] = useState(false)

  const slug = location.pathname.split("/").filter(Boolean).pop()

  const data = useStaticQuery(graphql`
    query PortfolioDetailsQuery {
      allContentfulPortfolio {
        nodes {
          contentful_id
          slug
          name
          overview {
            overview
          }
          detailedDescription {
            detailedDescription
          }
          projectImage {
            gatsbyImageData(width: 900)
          }
        }
      }

      allContentfulAviationPortfolio {
        nodes {
          contentful_id
          slug
          name
          projectStory {
            projectStory
          }
          projectImage {
            gatsbyImageData(width: 900)
          }
        }
      }
    }
  `)

  // Choose source based on passed filter
  const allProjects = [
    ...data.allContentfulPortfolio.nodes,
    ...data.allContentfulAviationPortfolio.nodes,
  ]

  const project = allProjects.find((item) => item.slug === slug)

  if (!project) {
    return <h2>Project not found</h2>;
  }


  const relatedProjects = allProjects.filter(
    (item) => item.slug !== slug
  )

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: project.name }}
    >
      <PageWrapper>
        <section style={{ padding: "80px 40px" }}>
          {/* HERO */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div>
              {/* BADGE */}
              <span
                style={{
                  display: "inline-block",
                  background: "#f1f5f9",
                  color: "#334155",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  fontWeight: 600,
                  marginBottom: "16px",
                  lineHeight: "1.2"
                }}
              >
                CASE STUDIES{filter ? `, ${filter}` : ""}
              </span>

              {/* TITLE */}
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: 550,
                  lineHeight: "1.3",
                  marginBottom: "20px",
                }}
              >
                {project.name}
              </h1>

              {/* DESCRIPTION */}
              <p
                style={{
                  fontSize: "18px",
                  color: "#475569",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                }}
              >
                {project?.overview?.overview ||
                  project?.projectStory?.projectStory ||
                  project?.detailedDescription?.detailedDescription}
              </p>
              <p
                style={{
                  fontSize: "18px",
                  color: "#475569",
                  lineHeight: "1.6",
                  marginBottom: "30px",
                }}
              >
                {project?.overview?.overview ||
                  project?.projectStory?.projectStory ||
                  project?.detailedDescription?.detailedDescription}
              </p>


              {/* SHARE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "32px",
                }}
              >
                <strong style={{ fontSize: "16px" }}>Share this on:</strong>

                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== "undefined" ? window.location.href : ""
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 14px",
                    background: "#0a66c2",
                    color: "#fff",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 550,
                  }}
                >
                  <IconBrandLinkedin size={20} stroke={2} />
                  LinkedIn
                </a>

                <a
                  href={`https://twitter.com/intent/tweet?url=${typeof window !== "undefined" ? window.location.href : ""
                    }`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px 14px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontWeight: 550,
                  }}
                >
                  <IconBrandX size={20} stroke={2} />
                  X
                </a>
              </div>

            </div>

            {/* RIGHT IMAGE */}
            <div>
              <img
                src={
                  project.projectImage?.gatsbyImageData?.images?.fallback?.src
                }
                alt={project.name}
                style={{
                  width: "100%",
                  borderRadius: "16px",

                }}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "80px",
              paddingTop: "40px",
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHover(true)}
              onMouseLeave={() => setIsHover(false)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                background: isHover ? "#1f2933" : "#e14c1f",
                color: isHover ? "#2563eb" : "#ffffff",
                padding: "11px 24px",
                borderRadius: "6px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "15px",
                transition: "background-color 0.25s ease",
                boxShadow: isHover
                  ? "0 6px 20px rgba(0,0,0,0.25)"
                  : "none",
              }}
            >
              Download the Case Study Here
              <IconExternalLink size={18} stroke={2} />
            </a>
          </div>

        </section>

        {/* Other Related Products */}
        <section style={{ padding: "80px 40px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: 700,
              marginBottom: "40px",
            }}
          >
            Read our Other Products
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "32px",
            }}
          >
            {relatedProjects.map((item) => (
              <div
                key={item.contentful_id}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "20px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* IMAGE */}
                <div
                  style={{
                    height: "220px",
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#f8fafc",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src={
                      item.projectImage?.gatsbyImageData?.images?.fallback?.src
                    }
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* CONTENT */}
                <div style={{ flex: 1 }}>
                  <h3
                    style={{
                      fontSize: "22px",
                      marginBottom: "12px",
                      lineHeight: "1.4",
                    }}
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "15px",
                      color: "#64748b",
                      lineHeight: "1.6",
                    }}
                  >
                    {item?.overview?.overview ||
                      item?.projectDescription?.projectDescription}
                  </p>
                </div>

                {/* READ MORE */}
                <div style={{ marginTop: "16px" }}>
                  <button
                    onClick={() =>
                      navigate(`/portfolio/${item.slug}`, {
                        state: {
                          filter: item.filter || item.filters,
                        },
                      })
                    }
                    style={{
                      background: "#e6fff5",
                      border: "none",
                      padding: "12px 22px",
                      borderRadius: "10px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    READ MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>


      </PageWrapper>
    </LayoutCommon>
  );
}
