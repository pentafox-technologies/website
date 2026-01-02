import React from "react";
import { Wrapper } from "./projectDetails.styles";
import LayoutCommon from "../layout/layoutCommon";
import PageWrapper from "../pageWrapper/PageWrapper";
import {portfolioProjectDetails} from "../../services/portfolioProjectDetails";
import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";

export default function ProjectDetails({ pageContext }) {
  const { projectId } = pageContext;

  const project = portfolioProjectDetails.find((p) => p.id === projectId);

  if (!project) return <h2>Project not found</h2>;

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: "Portfolio" }}
    >
      <PageWrapper style={{ position: "relative" }}>
        <Wrapper>
          <div className="container">
            {/* HERO */}
            <section className="hero">
              <h1>{project?.name}</h1>
              <p className="subtitle">{project?.in_detail?.description}</p>
            </section>

            {/* OVERVIEW */}
            <section className="section">
              <h3 className="project-section-title">Project Overview</h3>
              <div className="content">{project?.overview}</div>
            </section>

            {/* CHALLENGE & SOLUTION */}
            <section className="section">
              <div className="challenge-solution-grid">
                <div className="challenge-box">
                  <h3>The Challenge</h3>
                  <p className="content">
                    {project?.in_detail?.challenge?.content}
                  </p>

                  <ul className="challenge-list">
                    {project?.in_detail?.challenge?.key_points?.map(
                      (point, index) => (
                        <li key={index}>
                          <div className="meta-row">
                            <IconCircleXFilled
                              size={18}
                              className="challenge-list-icon-color list-icon"
                            />
                            <span className="content">{point}</span>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="solution-box">
                  <h3>Our Solution</h3>
                  <p className="content">
                    {project?.in_detail?.solution?.content}
                  </p>

                  <ul className="solution-list">
                    {project?.in_detail?.solution?.key_points?.map(
                      (point, index) => (
                        <li key={index}>
                          <div className="meta-row">
                            <IconCircleCheckFilled
                              size={18}
                              className="solution-list-icon-color list-icon"
                            />
                            <span className="content">{point}</span>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>

            {/* CAPABILITIES */}
            <section className="section">
              <h3 className="project-section-title">Core Capabilities</h3>
              <div className="capabilities-grid">
                {project?.in_detail?.core_capability.map((item, index) => (
                  <div className="capability-card" key={index}>
                    {item?.icon && (
                      <div className="card-icon">{item?.icon}</div>
                    )}
                    <div className="card-container">
                      <div className="card-container-heading">
                        {item?.heading}
                      </div>
                      <div>{item?.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* IMPACT */}
            <section className="section">
              <h3 className="project-section-title">
                Tangible Business Impact
              </h3>
              <div className="impact-metrics">
                {project?.in_detail?.business_impact.map((impact, index) => (
                  <div className="metric-card" key={index}>
                    <div className="metric-value">{impact?.value}</div>
                    <p>{impact?.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* OUTCOMES */}
            <section className="section">
              <h3 className="project-section-title">Key Outcomes</h3>
              <ul className="outcomes-list">
                {project?.in_detail?.key_outcomes.map((outcome, index) => (
                  <li>
                    <div className="card-container">
                      <div className="card-container-heading">
                        {outcome?.heading}
                      </div>
                      <div>{outcome?.content}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            {/* FOOTER CTA */}
            {/* <footer className="footer">
              <p className="footer-title">Have a project in mind?</p>
              <p>Let’s build secure, scalable digital solutions together.</p>
            </footer> */}
          </div>
        </Wrapper>
      </PageWrapper>
    </LayoutCommon>
  );
}
