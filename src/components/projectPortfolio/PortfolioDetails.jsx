import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import LayoutCommon from "../layout/layoutCommon";
import PageWrapper from "../pageWrapper/PageWrapper";
import { Wrapper } from "./projectDetails.styles";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { IconCircleXFilled } from "@tabler/icons-react";

export default function PortfolioDetails() {
  const location = useLocation();

  // --------- /portfolio/fastkyc → fastkyc -----------
  const slug = location.pathname.split("/").filter(Boolean).pop();

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
    }
  `);

  const handleSeperateHeadingAndContent = (data) => {
    const [heading, content] = data?.split("--"); // Ex:- item = heading -- content
    return { heading, content };
  };

  // Find project by slug
  const project = data.allContentfulPortfolio.nodes.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return <h2>Project not found</h2>;
  }

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
            {/* HERO */}
            <section className="hero">
              <h1>{project.name}</h1>
              <p className="subtitle">
                {project.detailedDescription?.detailedDescription}
              </p>
            </section>

            {/* OVERVIEW */}
            <section className="section">
              <h3 className="project-section-title">Project Overview</h3>
              <div className="content">{project?.overview?.overview}</div>
            </section>

            {/* CHALLENGE & SOLUTION */}
            <section className="section">
              <div className="challenge-solution-grid">
                <div className="challenge-box">
                  <h3>The Challenge</h3>
                  <p className="content">
                    {project?.challengeContent?.challengeContent}
                  </p>

                  <ul className="challenge-list">
                    {project?.challengekeyPoints?.map((point, index) => (
                      <li key={index}>
                        <div className="meta-row">
                          <IconCircleXFilled
                            size={18}
                            className="challenge-list-icon-color list-icon"
                          />
                          <span className="content">{point}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="solution-box">
                  <h3>Our Solution</h3>
                  <p className="content">
                    {project?.solutionContent?.solutionContent}
                  </p>

                  <ul className="solution-list">
                    {project?.solutionKeyPoints?.map((point, index) => (
                      <li key={index}>
                        <div className="meta-row">
                          <IconCircleCheckFilled
                            size={18}
                            className="solution-list-icon-color list-icon"
                          />
                          <span className="content">{point}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CAPABILITIES */}
            <section className="section">
              <h3 className="project-section-title">Core Capabilities</h3>
              <div className="capabilities-grid">
                {project?.coreCapability.map((item, index) => {
                  const { heading, content } =
                    handleSeperateHeadingAndContent(item);
                  return (
                    <div className="capability-card" key={index}>
                      <div className="card-container">
                        <div className="card-container-heading">{heading}</div>
                        <div>{content}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* IMPACT */}
            <section className="section">
              <h3 className="project-section-title">
                Tangible Business Impact
              </h3>
              <div className="impact-metrics">
                {project?.businessImpact.map((impact, index) => {
                  const { heading, content } =
                    handleSeperateHeadingAndContent(impact);
                  return (
                    <div className="metric-card" key={index}>
                      <div className="metric-value">{heading}</div>
                      <p>{content}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* OUTCOMES */}
            <section className="section">
              <h3 className="project-section-title">Key Outcomes</h3>
              <ul className="outcomes-list">
                {project?.keyOutcomes.map((outcome, index) => {
                  const { heading, content } =
                    handleSeperateHeadingAndContent(outcome);
                  return (
                    <li key={index}>
                      <div className="card-container">
                        <div className="card-container-heading">{heading}</div>
                        <div>{content}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </Wrapper>
      </PageWrapper>
    </LayoutCommon>
  );
}

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
