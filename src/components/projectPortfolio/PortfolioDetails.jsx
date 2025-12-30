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

// import React from "react";
// import { Wrapper } from "./projectDetails.styles";
// import LayoutCommon from "../layout/layoutCommon";
// import PageWrapper from "../pageWrapper/PageWrapper";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";

// export default function ProjectDetails({ pageContext }) {
//   const { projectId } = pageContext;

//   const project = portfolioProjectDetails.find((p) => p.id === projectId);

//   if (!project) return <h2>Project not found</h2>;

//   const { name, category, in_detail } = project;
//   const { description } = in_detail;

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
//               <p className="subtitle">
//                 Digitalizing National Cybercrime Response — A secure, automated
//                 platform enabling faster investigations and transparency.
//               </p>
//             </section>

//             {/* OVERVIEW */}
//             <section className="section">
//               <h2 className="project-section-title">Project Overview</h2>
//               <div className="box">
//                 We transformed fragmented NCRP workflows into a unified,
//                 API-driven digital platform enabling real-time complaint
//                 processing, banking integrations, and regulatory compliance.
//               </div>
//             </section>

//             {/* CHALLENGE & SOLUTION */}
//             <section className="section">
//               <div className="challenge-solution-grid">
//                 <div className="challenge-box">
//                   <h3>The Challenge</h3>
//                   <ul>
//                     <li>Fragmented workflows across systems</li>
//                     <li>High manual effort and errors</li>
//                     <li>Delayed response times</li>
//                     <li>Lack of audit visibility</li>
//                   </ul>
//                 </div>

//                 <div className="solution-box">
//                   <h3>Our Solution</h3>
//                   <ul>
//                     <li>Centralized command center</li>
//                     <li>End-to-end workflow automation</li>
//                     <li>Real-time banking integrations</li>
//                     <li>Full audit trail & compliance</li>
//                   </ul>
//                 </div>
//               </div>
//             </section>

//             {/* CAPABILITIES */}
//             <section className="section">
//               <h2 className="project-section-title">Core Capabilities</h2>
//               <div className="capabilities-grid">
//                 {[
//                   "Automated Complaint Orchestration",
//                   "Real-time Banking Integration",
//                   "Unified Operational Dashboard",
//                   "Performance & Compliance Analytics",
//                 ].map((item) => (
//                   <div className="capability-card" key={item}>
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </section>

//             {/* IMPACT */}
//             <section className="section">
//               <h2 className="project-section-title">
//                 Tangible Business Impact
//               </h2>
//               <div className="impact-metrics">
//                 <div className="metric-card">
//                   <div className="metric-value">85%</div>
//                   <p>Reduction in Manual Effort</p>
//                 </div>
//                 <div className="metric-card">
//                   <div className="metric-value">~90%</div>
//                   <p>Automation Success Rate</p>
//                 </div>
//                 <div className="metric-card">
//                   <div className="metric-value">11,276+</div>
//                   <p>Cases Processed</p>
//                 </div>
//                 <div className="metric-card">
//                   <div className="metric-value">100%</div>
//                   <p>Regulatory Compliance</p>
//                 </div>
//               </div>
//             </section>

//             {/* OUTCOMES */}
//             <section className="section">
//               <h2 className="project-section-title">Key Outcomes</h2>
//               <ul className="outcomes-list">
//                 <li>Full Regulatory Alignment with NCRP & I4C</li>
//                 <li>Faster Turnaround Time for Investigations</li>
//                 <li>Enhanced Operational Transparency</li>
//                 <li>Scalable & Future-Proof Architecture</li>
//               </ul>
//             </section>

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

// import React from "react";
// import { portfolioProjectDetails } from "../../services/portfolioProjectDetails";

// const PortfolioDetails = ({ pageContext }) => {
//   const { projectId } = pageContext;

//   const project = portfolioProjectDetails.find((p) => p.id === projectId);

//   if (!project) return <h2>Project not found</h2>;

//   const { name, category, in_detail } = project;
//   const { description } = in_detail;

//   return (
//     <>
//       <section className="description">
//         <div className="container">
//           <h1>{name}</h1>
//           <p className="subtitle">{description}</p>
//         </div>
//       </section>

//       <main className="container">
//         <section className="section">
//           <h2 className="project-section-name">Project Overview</h2>

//           <div className="challenge-solution-grid">
//             <div className="challenge-box box">
//               <h3 className="box-name">The Challenge</h3>
//               <p>{challenge}</p>
//             </div>

//             <div className="solution-box box">
//               <h3 className="box-name">Our Solution</h3>
//               <p>{solution}</p>
//             </div>
//           </div>
//         </section>

//         <section className="section">
//           <h2 className="project-section-name">Core Capabilities Delivered</h2>

//           <div className="capabilities-grid">
//             {capabilities.map((cap, index) => (
//               <div className="capability-card" key={index}>
//                 <h3 className="capability-name">{cap.name}</h3>
//                 <p>{cap.description}</p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {impactMetrics && (
//           <section className="section">
//             <h2 className="project-section-name">Tangible Business Impact</h2>

//             <div className="impact-metrics">
//               {impactMetrics.map((metric, index) => (
//                 <div className="metric-card box" key={index}>
//                   <div className="metric-value">{metric.value}</div>
//                   <p className="metric-desc">{metric.label}</p>
//                 </div>
//               ))}
//             </div>
//           </section>
//         )}

//         {outcomes && (
//           <section className="section">
//             <h2 className="project-section-name">Key Outcomes</h2>

//             <div className="section-content">
//               <ul className="outcomes-list">
//                 {outcomes.map((item, index) => (
//                   <li key={index} className="box">{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </section>
//         )}
//       </main>

//       <footer className="footer">
//         <div className="container">
//           <p className="footer-name">{name}</p>
//           <p>{category}</p>
//           <p className="footer-sub">Portfolio Case Study</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default PortfolioDetails;
