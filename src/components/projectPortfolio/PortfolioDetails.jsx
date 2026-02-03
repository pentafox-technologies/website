import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import LayoutCommon from "../layout/layoutCommon";
import PageWrapper from "../pageWrapper/PageWrapper";
import { Wrapper } from "./projectDetails.styles";
import { IconCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import { IconCircleXFilled } from "@tabler/icons-react";
import { Badge, Flex } from "@mantine/core";

const handleSeperateHeadingAndContent = (data) => {
  const contentArray = data?.split("--"); // Ex:- item = heading -- content
  const [heading, content, Icon] = contentArray;
  return {
    heading: contentArray.length === 2 ? heading : null,
    content: contentArray.length === 2 ? content : heading,
    Icon,
    contentArrayLength: contentArray.length,
  };
};

const ContentRendering = ({ heading = null, content = null }) => {
  return (
    <Wrapper>
      <section className="section">
        <h3 className="project-section-title">{heading}</h3>
        <div className="content">{content}</div>
      </section>
    </Wrapper>
  );
};

const BadgeRendering = ({ heading = null, badges = [], color = "green" }) => {
  return (
    <Wrapper>
      <section className="section">
        <h3 className="project-section-title">{heading}</h3>
        <div className="content">
          <Flex gap={8} wrap="wrap">
            {badges?.map((item, index) => (
              <Badge key={index} color={color}>
                {item}
              </Badge>
            ))}
          </Flex>
        </div>
      </section>
    </Wrapper>
  );
};

const CoupleBoxRendering = ({ data = [] }) => {
  return (
    <Wrapper>
      <section className="section">
        <div className="challenge-solution-grid">
          {data?.map((item, index) => {
            const Icon =
              item?.type === "success"
                ? IconCircleCheckFilled
                : IconCircleXFilled;
            return (
              <div
                className={
                  item?.type === "success" ? "solution-box" : "challenge-box"
                }
                key={index}
              >
                <h3>{item?.heading}</h3>
                <p className="content">{item?.content}</p>

                <ul
                  className={
                    item?.type === "success"
                      ? "solution-list"
                      : "challenge-list"
                  }
                >
                  {item?.keypoints?.map((point, index) => (
                    <li key={index}>
                      <div className="meta-row">
                        <Icon
                          size={18}
                          className={`${
                            item?.type === "success"
                              ? "solution-list-icon-color"
                              : "challenge-list-icon-color"
                          } list-icon`}
                        />
                        <span className="content">{point}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const BarRendering = ({ data = {} }) => {
  return (
    <Wrapper>
      <section className="section">
        <h3 className="project-section-title">{data?.heading}</h3>
        <div className="capabilities-grid">
          {data?.keypoints.map((item, index) => {
            const { heading, content, Icon, contentArrayLength } =
              handleSeperateHeadingAndContent(item);
            return (
              <div
                className={`capability-card ${
                  Icon
                    ? "with-icon"
                    : contentArrayLength === 1
                    ? "with-left-border"
                    : null
                }`}
                key={index}
              >
                {Icon && (
                  <div className="card-icon">
                    <Icon size={35} color="green" />
                  </div>
                )}

                <div className="card-container">
                  <div className="card-container-heading">{heading}</div>
                  <div className="content">{content}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const ListRendering = ({ data = {} }) => {
  return (
    <Wrapper>
      <section className="section">
        <h3 className="project-section-title">{data?.heading}</h3>
        <ul className="outcomes-list">
          {data?.keypoints.map((item, index) => {
            const { heading, content } = handleSeperateHeadingAndContent(item);
            return (
              <li key={index}>
                <div className="card-container">
                  <div className="card-container-heading">{heading}</div>
                  <div className="content">{content}</div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </Wrapper>
  );
};

const GridStatsRendering = ({ data = {} }) => {
  return (
    <Wrapper>
      <section className="section">
        <h3 className="project-section-title">{data?.heading}</h3>
        <div className="impact-metrics">
          {data?.keypoints.map((impact, index) => {
            const { heading, content } =
              handleSeperateHeadingAndContent(impact);
            return (
              <div className="metric-card" key={index}>
                <div className="metric-value">{heading}</div>
                <div className="content">{content}</div>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

export default function PortfolioDetails() {
  const location = useLocation();
  const { filter, id } = location?.state;

  // --------- /portfolio/fastkyc → fastkyc -----------
  const slug = location.pathname.split("/").filter(Boolean).pop();
  //           missionContent, goalContent, challengeContent, strategyContent
  const data = useStaticQuery(graphql`
    query PortfolioDetailsStaticQuery {
      allContentfulPortfolio {
        nodes {
          name
          slug

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

          coreCapability

          businessImpact

          keyOutcomes
        }
      }

      allContentfulAviationPortfolio {
        nodes {
          name
          slug

          projectStory {
            projectStory
          }

          missionKeyPoints
          goalKeyPoints
          challengeKeyPoints
          strategyKeyPoints

          impactResult

          technologyStack

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

  const aviationContent = data?.allContentfulAviationPortfolio?.nodes;
  const allContent = data?.allContentfulPortfolio?.nodes;

  const contentFiltering = filter === "aviation" ? aviationContent : allContent;

  // Find project by slug
  const project = contentFiltering?.find((item) => item.slug === slug);
  console.log(contentFiltering, project, filter, slug);

  // if (!project) {
  //   return <h2>Project not found</h2>;
  // }

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: project.name }}
    >
      <PageWrapper>
        <Wrapper>
          {!project ? (
            <h4 style={{ textAlign: "center", color: "gray", margin: "20vh 0" }}>Project not found</h4>
          ) : (
            <div className="container">
              {/* HERO */}
              <section className="hero">
                <h1>{project?.name}</h1>
                <p className="subtitle">
                  {filter !== "aviation"
                    ? project?.detailedDescription?.detailedDescription
                    : null}
                </p>
              </section>

              <ContentRendering
                heading="Project Overview"
                content={
                  filter === "aviation"
                    ? project?.projectStory?.projectStory
                    : project?.overview?.overview
                }
              />

              {filter === "aviation" && (
                <>
                  <BadgeRendering
                    heading="Technology Stack"
                    badges={project?.technologyStack}
                  />

                  <CoupleBoxRendering
                    data={[
                      {
                        type: "success",
                        heading: "Our Mission & Vision",
                        // heading: "Our Mission",
                        content: project?.missionContent,
                        keypoints: project?.missionKeyPoints,
                      },
                      {
                        type: "success",
                        heading: "Our Strategic Goals",
                        // heading: "Our Goals",
                        content: project?.goalContent,
                        keypoints: project?.goalKeyPoints,
                      },
                    ]}
                  />
                </>
              )}

              <CoupleBoxRendering
                data={[
                  {
                    type: "danger",
                    heading: "Our Key Challenges",
                    // heading: "Our Challenges",
                    content:
                      filter === "aviation"
                        ? null
                        : project?.challengeContent?.challengeContent,
                    keypoints:
                      filter === "aviation"
                        ? project?.challengeKeyPoints
                        : project?.challengekeyPoints,
                  },
                  {
                    type: "success",
                    heading: "Our Solution Strategy",
                    // heading: "Our Strategy",
                    content:
                      filter === "aviation"
                        ? null
                        : project?.solutionContent?.solutionContent,
                    keypoints:
                      filter === "aviation"
                        ? project?.strategyKeyPoints
                        : project?.solutionKeyPoints,
                  },
                ]}
              />

              {filter === "aviation" ? (
                <ListRendering
                  data={{
                    heading: "Business Impact",
                    keypoints: project?.impactResult,
                  }}
                />
              ) : (
                <BarRendering
                  data={{
                    heading: "Core Capabilities",
                    keypoints: project?.coreCapability,
                  }}
                />
              )}

              {filter === "aviation" ? (
                <>
                  <ContentRendering
                    heading="Collaboration"
                    content={project?.collaboration?.collaboration}
                  />

                  <ContentRendering
                    heading="Conclusion"
                    content={project?.conclusion?.conclusion}
                  />
                </>
              ) : (
                <>
                  <GridStatsRendering
                    data={{
                      heading: "Tangible Business Impact",
                      keypoints: project?.businessImpact,
                    }}
                  />

                  <ListRendering
                    data={{
                      heading: "Key Outcomes",
                      keypoints: project?.keyOutcomes,
                    }}
                  />
                </>
              )}
            </div>
          )}
        </Wrapper>
      </PageWrapper>
    </LayoutCommon>
  );
}
// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";
// import { useLocation } from "@reach/router";
// import LayoutCommon from "../layout/layoutCommon";
// import PageWrapper from "../pageWrapper/PageWrapper";
// import { Wrapper } from "./projectDetails.styles";
// import { IconCircleCheckFilled } from "@tabler/icons-react";
// import { IconCircleXFilled } from "@tabler/icons-react";

// export default function PortfolioDetails() {
//   const location = useLocation();

//   // --------- /portfolio/fastkyc → fastkyc -----------
//   const slug = location.pathname.split("/").filter(Boolean).pop();

//   const data = useStaticQuery(graphql`
//     query PortfolioDetailsStaticQuery {
//       allContentfulPortfolio {
// nodes {
//   name
//   slug

//   overview {
//     overview
//   }

//   detailedDescription {
//     detailedDescription
//   }

//   challengeContent {
//     challengeContent
//   }
//   challengekeyPoints

//   solutionContent {
//     solutionContent
//   }
//   solutionKeyPoints

//   coreCapability

//   businessImpact

//   keyOutcomes
// }
// }
//     }
//   `);

//   const handleSeperateHeadingAndContent = (data) => {
//     const [heading, content] = data?.split("--"); // Ex:- item = heading -- content
//     return { heading, content };
//   };

//   // Find project by slug
//   const project = data.allContentfulPortfolio.nodes.find(
//     (item) => item.slug === slug
//   );

//   if (!project) {
//     return <h2>Project not found</h2>;
//   }

//   return (
//     <LayoutCommon
//       hideLink
//       showCareers={false}
//       showDarkLogo
//       headProps={{ pageTitle: project.name }}
//     >
//       <PageWrapper>
//         <Wrapper>
// <div className="container">
//   {/* HERO */}
//   <section className="hero">
//     <h1>{project.name}</h1>
//     <p className="subtitle">
//       {project.detailedDescription?.detailedDescription}
//     </p>
//   </section>

//   {/* OVERVIEW */}
// <section className="section">
//   <h3 className="project-section-title">Project Overview</h3>
//   <div className="content">{project?.overview?.overview}</div>
// </section>

// {/* CHALLENGE & SOLUTION */}
// <section className="section">
//   <div className="challenge-solution-grid">
//     <div className="challenge-box">
//       <h3>The Challenge</h3>
//       <p className="content">
//         {project?.challengeContent?.challengeContent}
//       </p>

//       <ul className="challenge-list">
//         {project?.challengekeyPoints?.map((point, index) => (
//           <li key={index}>
//             <div className="meta-row">
//               <IconCircleXFilled
//                 size={18}
//                 className="challenge-list-icon-color list-icon"
//               />
//               <span className="content">{point}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>

//     <div className="solution-box">
//       <h3>Our Solution</h3>
//       <p className="content">
//         {project?.solutionContent?.solutionContent}
//       </p>

//       <ul className="solution-list">
//         {project?.solutionKeyPoints?.map((point, index) => (
//           <li key={index}>
//             <div className="meta-row">
//               <IconCircleCheckFilled
//                 size={18}
//                 className="solution-list-icon-color list-icon"
//               />
//               <span className="content">{point}</span>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </section>

// {/* CAPABILITIES */}
// <section className="section">
//   <h3 className="project-section-title">Core Capabilities</h3>
//   <div className="capabilities-grid">
//     {project?.coreCapability.map((item, index) => {
//       const { heading, content } =
//         handleSeperateHeadingAndContent(item);
//       return (
//         <div className="capability-card" key={index}>
//           <div className="card-container">
//             <div className="card-container-heading">{heading}</div>
//             <div>{content}</div>
//           </div>
//         </div>
//       );
//     })}
//   </div>
// </section>

// {/* IMPACT */}
// <section className="section">
//   <h3 className="project-section-title">
//     Tangible Business Impact
//   </h3>
//   <div className="impact-metrics">
//     {project?.businessImpact.map((impact, index) => {
//       const { heading, content } =
//         handleSeperateHeadingAndContent(impact);
//       return (
//         <div className="metric-card" key={index}>
//           <div className="metric-value">{heading}</div>
//           <p>{content}</p>
//         </div>
//       );
//     })}
//   </div>
// </section>

// {/* OUTCOMES */}
// <section className="section">
//   <h3 className="project-section-title">Key Outcomes</h3>
//   <ul className="outcomes-list">
//     {project?.keyOutcomes.map((outcome, index) => {
//       const { heading, content } =
//         handleSeperateHeadingAndContent(outcome);
//       return (
//         <li key={index}>
//           <div className="card-container">
//             <div className="card-container-heading">{heading}</div>
//             <div>{content}</div>
//           </div>
//         </li>
//       );
//     })}
//   </ul>
// </section>
// </div>
//         </Wrapper>
//       </PageWrapper>
//     </LayoutCommon>
//   );
// }

// import React from "react";
// import { Wrapper } from "./projectDetails.styles";
// import LayoutCommon from "../layout/layoutCommon";
// import PageWrapper from "../pageWrapper/PageWrapper";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";
// import { IconCircleCheckFilled, IconCircleXFilled } from "@tabler/icons-react";
// import { graphql, useStaticQuery } from "gatsby";

// export default function ProjectDetails({ pageContext }) {
//   const { projectId } = pageContext;

//   const data = useStaticQuery(graphql`
//     query PortfolioQuery {
//       allContentfulPortfolio(sort: { fields: createdAt, order: ASC }) {
//         nodes {
//           id
//           name
//           category

//           detailedDescription {
//             detailedDescription
//           }
//         }
//       }
//     }
//   `);

//   const project = portfolioProjectDetails.find((p) => p.id === projectId);

//   if (!project) return <h2>Project not found</h2>;

//   return (
//     <LayoutCommon
//       hideLink
//       showCareers={false}
//       showDarkLogo
//       headProps={{ pageTitle: "Portfolio" }}
//     >
//       <PageWrapper style={{ position: "relative" }}>
//         <Wrapper>
//           <div className="container">
//             {/* HERO */}
//             <section className="hero">
//               <h1>{project?.name}</h1>
//               <p className="subtitle">{project?.in_detail?.description}</p>
//             </section>

//             {/* OVERVIEW */}
// <section className="section">
//   <h3 className="project-section-title">Project Overview</h3>
//   <div className="content">{project?.overview}</div>
// </section>

//             {/* CHALLENGE & SOLUTION */}
// <section className="section">
//   <div className="challenge-solution-grid">
//     <div className="challenge-box">
//       <h3>The Challenge</h3>
//       <p className="content">
//         {project?.in_detail?.challenge?.content}
//       </p>

//       <ul className="challenge-list">
//         {project?.in_detail?.challenge?.key_points?.map(
//           (point, index) => (
//             <li key={index}>
//               <div className="meta-row">
//                 <IconCircleXFilled
//                   size={18}
//                   className="challenge-list-icon-color list-icon"
//                 />
//                 <span className="content">{point}</span>
//               </div>
//             </li>
//           )
//         )}
//       </ul>
//     </div>

//     <div className="solution-box">
//       <h3>Our Solution</h3>
//       <p className="content">
//         {project?.in_detail?.solution?.content}
//       </p>

//       <ul className="solution-list">
//         {project?.in_detail?.solution?.key_points?.map(
//           (point, index) => (
//             <li key={index}>
//               <div className="meta-row">
//                 <IconCircleCheckFilled
//                   size={18}
//                   className="solution-list-icon-color list-icon"
//                 />
//                 <span className="content">{point}</span>
//               </div>
//             </li>
//           )
//         )}
//       </ul>
//     </div>
//   </div>
// </section>

//             {/* CAPABILITIES */}
// <section className="section">
//   <h3 className="project-section-title">Core Capabilities</h3>
//   <div className="capabilities-grid">
//     {project?.in_detail?.core_capability.map((item, index) => (
//       <div className="capability-card" key={index}>
//         {item?.icon && (
//           <div className="card-icon">{item?.icon}</div>
//         )}
//         <div className="card-container">
//           <div className="card-container-heading">
//             {item?.heading}
//           </div>
//           <div>{item?.content}</div>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>

// {/* IMPACT */}
// <section className="section">
//   <h3 className="project-section-title">
//     Tangible Business Impact
//   </h3>
//   <div className="impact-metrics">
//     {project?.in_detail?.business_impact.map((impact, index) => (
//       <div className="metric-card" key={index}>
//         <div className="metric-value">{impact?.value}</div>
//         <p>{impact?.content}</p>
//       </div>
//     ))}
//   </div>
// </section>

//             {/* OUTCOMES */}
// <section className="section">
//   <h3 className="project-section-title">Key Outcomes</h3>
//   <ul className="outcomes-list">
//     {project?.in_detail?.key_outcomes.map((outcome, index) => (
//       <li>
//         <div className="card-container">
//           <div className="card-container-heading">
//             {outcome?.heading}
//           </div>
//           <div>{outcome?.content}</div>
//         </div>
//       </li>
//     ))}
//   </ul>
// </section>

//             {/* FOOTER CTA */}
//             {/* <footer className="footer">
//               <p className="footer-title">Have a project in mind?</p>
//               <p>Let’s build secure, scalable digital solutions together.</p>
//             </footer> */}
//           </div>
//         </Wrapper>
//       </PageWrapper>
//     </LayoutCommon>
//   );
// }
