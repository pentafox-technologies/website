import React, { useState } from "react";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { IconArrowUp } from "@tabler/icons-react";
import ProjectCard from "./ProjectCard";

function ProjectPortfolio() {
  const location = useLocation();
  const filterFromNav = location?.state?.filter;

  /* ===================== DATA ===================== */

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
          detailedDescription {
            detailedDescription
          }
          challengeContent {
            challengeContent
          }
          coverImage {
            gatsbyImageData(width: 900)
          }
          projectImage {
            gatsbyImageData(width: 900)
          }
        }
      }
    }
  `);

  const projects = data?.allContentfulPortfolio?.nodes;
  const aviationProjects = projects?.filter((p) => p.filter === "aviation");
  const bankingProjects = projects?.filter((p) => p.filter === "banking");

  const projectConfig = [...bankingProjects, ...aviationProjects];

  let projectWithoutOurProducts = projects?.filter(
    (p) => !["fastkyc", "walane"].includes(p.slug)
  );

  // if coming from aviation click
  if (filterFromNav === "aviation") {
    projectWithoutOurProducts = projectWithoutOurProducts?.filter(
      (p) => p.filter === "aviation"
    );
  }


  const handleScollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        position: "relative",
        padding: "30px 20px 60px",
        background: "#fff3f3",
      }}
    >
      {/* HEADER */}
      <h1
        id="heading"
        style={{ fontSize: "56px", fontWeight: 700, textAlign: "center" }}
      >
        Explore{" "}
        <span
          style={{
            background: "linear-gradient(90deg, #c52222, #f9b4b4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pentafox's
        </span>{" "}
        Portfolio
      </h1>

      <p
        style={{
          fontSize: "18px",
          color: "#475569",
          maxWidth: "700px",
          margin: "16px auto 30px",
          textAlign: "center",
        }}
      >
        Access blogs, data sheets, case studies, solution guides, and expert
        insights to power your growth.
      </p>

      <ProjectCard
        projects={projectWithoutOurProducts}
        handleClickButton={(project) => {
          navigate(`/portfolio/${project.slug}`, {
            state: {
              filter: project.filter || project.filters,
              id: project.contentful_id,
            },
          });
        }}
      />

      <section
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
          background: "#b91010",
          color: "white",
          padding: "7px",
          borderRadius: "20px",
          cursor: "pointer",
        }}
        onClick={handleScollToTop}
      >
        <IconArrowUp />
      </section>
    </section>
  );
}

export default ProjectPortfolio;


