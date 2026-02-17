import React, { useState } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { useLocation } from "@reach/router";
import LayoutCommon from "../layout/layoutCommon";
import PageWrapper from "../pageWrapper/PageWrapper";
import {
  IconArrowRight,
  IconBulb,
  IconChartBar,
  IconCpu,
  IconFileText,
  IconFlag,
  IconFlagCheck,
  IconStack,
  IconTarget,
  IconUsers,
} from "@tabler/icons-react";
import styled from "styled-components";
import { Wrapper } from "./projectDetails.styles";
import { Badge } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import { COLOR_CODES } from "../../constant/colorCode";
import { IconAlertTriangle } from "@tabler/icons-react";
import ProjectCard from "./ProjectCard";

const handleSeperateHeadingAndContent = (data) => {
  const contentArray = data?.split("--");
  const [heading, content, Icon] = contentArray;
  return {
    heading: contentArray.length === 2 ? heading : null,
    content: contentArray.length === 2 ? content : heading,
    Icon,
    contentArrayLength: contentArray.length,
  };
};

export const PointsWrapper = styled.div`
  --title-size: 3rem;
  --heading-size: 1.8rem;
  --content-size: 1.2rem;

  background: white;
  padding: 24px;
  border-radius: var(--radius);

  .header-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${COLOR_CODES?.lightRed};
    padding: 0px;
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }

  .section-heading {
    font-size: var(--heading-size);
    font-weight: 500;
    color: var(--gray-dark);
    margin-bottom: 12px;
    display: flex;
    align-items: center;
  }

  .section-content {
    font-size: var(--content-size);
    color: var(--gray-dark);
    line-height: 1.6;
    font-weight: 500;
    text-align: left;
  }

  .points-list {
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .point-row {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  .arrow-icon {
    color: var(--challenge-indication-color);
    margin-top: 3px;
    flex-shrink: 0;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .point-text {
    font-size: var(--content-size);
    color: var(--gray-dark);
    text-align: auto;
    margin: 2px;
    font-weight: 600;
  }
  .point-sub-text {
    font-size: var(--content-size);
    color: var(--gray-dark);
    margin: 2px;
  }
`;

const RenderBadge = ({ heading, badgeList = [], Icon = IconCheck, key }) => {
  return (
    <PointsWrapper>
      <div
        className="header-section"
        // style={{ justifyContent: "center" }}
        key={key}
      >
        <div className="icon-container">
          <Icon color={COLOR_CODES?.titleRed} size={30} stroke={1.5} />
        </div>
        <h2 className="section-heading">{heading}</h2>
      </div>
      <div style={{ marginTop: "10px" }}>
        {badgeList?.length > 0 && (
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {badgeList?.map((badge, index) => (
              <Badge key={index} color="green">
                {badge}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </PointsWrapper>
  );
};

const RenderPoints = ({
  heading,
  content = "",
  keypoints = [],
  Icon = IconCheck,
  key,
}) => {
  return (
    <PointsWrapper>
      <div className="header-section" key={key}>
        <div className="icon-container">
          <Icon color={COLOR_CODES?.titleRed} size={30} stroke={1.5} />
        </div>
        <h2 className="section-heading">{heading}</h2>
      </div>

      {content && <p className="section-content">{content}</p>}
      {keypoints?.length > 0 && (
        <div className="points-list">
          {keypoints.map((item, index) => {
            const { heading, content } = handleSeperateHeadingAndContent(item);
            return (
              <div key={index} className="point-row">
                <span className="arrow-icon">
                  <IconArrowRight size={18} />
                </span>

                <div className="text-container">
                  {heading && <p className="point-text">{heading}</p>}
                  {content && <p className="point-sub-text">{content}</p>}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </PointsWrapper>
  );
};

export default function PortfolioDetails() {
  const location = useLocation();

  const { filter, id } = location.state || {};

  const slug = location.pathname.split("/").filter(Boolean).pop();

  const data = useStaticQuery(graphql`
    query PortfolioDetailsStaticQuery {
      allContentfulPortfolio {
        nodes {
          contentful_id
          name
          slug
          filter
          projectImage {
            gatsbyImageData(width: 900)
          }

          overview {
            overview
          }

          detailedDescription {
            detailedDescription
          }

          challengeContent {
            challengeContent
          }
          challengekeyPoints

          solutionContent {
            solutionContent
          }
          solutionKeyPoints

          missionKeyPoints

          goalKeyPoints

          coreTechnology {
            coreTechnology
          }
          technologyStack

          impactContent {
            impactContent
          }
          impactKeyPoints

          coreCapability
          keyOutcomes
          collaboration {
            collaboration
          }
          conclusion {
            conclusion
          }
        }
      }
    }
  `);

  const allContent = data?.allContentfulPortfolio?.nodes;
  const project = allContent?.find((item) => item.slug === slug);
  let relatedProjects = [];

  // if current project is aviation → show aviation only
  if (project?.filter === "aviation") {
    relatedProjects = allContent.filter(
      (item) => item.slug !== slug && item.filter === "aviation",
    );
  } else {
    // all other projects normal
    relatedProjects = allContent.filter((item) => item.slug !== slug);
  }

  const projectContentConfig = [
    {
      type: "point",
      renderCondition: project?.missionKeyPoints,
      props: {
        heading: "Mission",
        Icon: IconFlag,
        // content: project?.missionContent?.missionContent,
        keypoints: project?.missionKeyPoints,
      },
    },
    {
      type: "point",
      renderCondition: project?.goalKeyPoints,
      props: {
        heading: "Goals",
        Icon: IconTarget,
        keypoints: project?.goalKeyPoints,
      },
    },
    {
      type: "point",
      renderCondition:
        project?.challengeContent?.challengeContent ||
        project?.challengekeyPoints,
      props: {
        heading: "Challenges",
        Icon: IconAlertTriangle,
        content: project?.challengeContent?.challengeContent,
        keypoints: project?.challengekeyPoints,
      },
    },
    {
      type: "point",
      renderCondition:
        project?.solutionContent?.solutionContent || project?.solutionKeyPoints,
      props: {
        heading: "Solution & Strategy",
        Icon: IconBulb,
        content: project?.solutionContent?.solutionContent,
        keypoints: project?.solutionKeyPoints,
      },
    },
    {
      type: "point",
      renderCondition: project?.collaboration?.collaboration,
      props: {
        heading: "Collaboration",
        Icon: IconUsers,
        content: project?.collaboration?.collaboration,
      },
    },
    {
      type: "point",
      renderCondition:
        project?.impactContent?.impactContent || project?.impactKeyPoints,
      props: {
        heading: "Impact & Results",
        Icon: IconChartBar,
        content: project?.impactContent?.impactContent,
        keypoints: project?.impactKeyPoints,
      },
    },
    {
      type: "point",
      renderCondition: project?.keyOutcomes,
      props: {
        heading: "Outcomes & Results",
        Icon: IconChartBar,
        keypoints: project?.keyOutcomes,
      },
    },
    {
      type: "point",
      renderCondition: project?.coreTechnology?.coreTechnology,
      props: {
        heading: "Core Technology",
        Icon: IconCpu,
        content: project?.coreTechnology?.coreTechnology,
      },
    },
  ];

  if (!project) {
    return <h2>Project not found</h2>;
  }

  const DetailedDescriptionArray =
    project?.detailedDescription?.detailedDescription
      .split(/\s*\d+\.\s*/g)
      .filter(Boolean);

      console.log(DetailedDescriptionArray?.length);
      

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: project.name }}
    >
      <PageWrapper>
        <Wrapper>
          <div className="container">
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
                <h1
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 550,
                    lineHeight: "1.3",
                    marginBottom: "20px",
                  }}
                >
                  {project.name}
                </h1>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#475569",
                    lineHeight: "1.6",
                    marginBottom: "30px",
                  }}
                >
                  {project?.overview?.overview}
                </p>
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
                    boxShadow: "6px 6px 10px 1px #f7f3f3",
                    // border: "1px solid #b7adad"
                  }}
                />
              </div>
            </div>
            <hr style={{ margin: "40px 0" }} />

            <div style={{ display: "flex", justifyContent: "center" }}>
              {project?.detailedDescription?.detailedDescription && (
                <RenderPoints
                  Icon={IconFileText}
                  heading="Background & Story"
                  content={
                    DetailedDescriptionArray?.length !== 1
                      ? null
                      : project?.detailedDescription?.detailedDescription
                  }
                  keypoints={DetailedDescriptionArray?.length === 1 ? null : DetailedDescriptionArray}
                />
              )}
            </div>

            <div>
              {project?.technologyStack && (
                <RenderBadge
                  Icon={IconStack}
                  heading="Technology Stack"
                  badgeList={project?.technologyStack}
                />
              )}
            </div>

            <section className="section">
              <div className="challenge-solution-grid">
                {projectContentConfig?.map(
                  (data, index) =>
                    data?.renderCondition && (
                      <RenderPoints {...data?.props} key={index} />
                    ),
                )}
              </div>
              {project?.conclusion?.conclusion && (
                <RenderPoints
                  Icon={IconFlagCheck}
                  heading="Conclusion"
                  content={project?.conclusion?.conclusion}
                />
              )}
            </section>

            {/* Other Related Products */}
            <section style={{ padding: "0px 0" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 500,
                  marginBottom: "40px",
                }}
              >
                Read Our Other Products
              </h2>

              <ProjectCard
                isThemeGray={true}
                projects={relatedProjects}
                handleClickButton={(project) => {
                  navigate(`/portfolio/${project.slug}`, {
                    state: {
                      filter: project?.filter || project?.filters,
                    },
                  });
                }}
              />
            </section>
          </div>
        </Wrapper>
      </PageWrapper>
    </LayoutCommon>
  );
}
