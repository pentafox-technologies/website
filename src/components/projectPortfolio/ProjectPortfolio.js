import React, { useState } from "react";
import { graphql, useStaticQuery, navigate } from "gatsby";
import { IconArrowUp } from "@tabler/icons-react";

function ProjectPortfolio() {
  const [hoveredId, setHoveredId] = useState(null);

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
            gatsbyImageData(width: 900, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const projects = data?.allContentfulPortfolio?.nodes;
  const aviationProjects = projects?.filter((p) => p.filter === "aviation");

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
            background: "linear-gradient(90deg, #c52222, #2460e2)",
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
        Tap into insightful blogs, data sheets, case studies, and more.
      </p>

      {/* CARDS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {aviationProjects.map((project) => (
          <div
            key={project?.contentful_id}
            style={{
              background: "white",
              border: "1px solid #e5e7eb",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* IMAGE */}
            <div
              style={{
                height: "180px",
                overflow: "hidden",
                marginBottom: "20px",
              }}
            >
              <img
                src={project.coverImage?.gatsbyImageData?.images?.fallback?.src}
                alt={project.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* CONTENT */}
            <h3 style={{ fontSize: "20px", marginBottom: "12px" }}>
              {project?.name}
            </h3>

            <p style={{ fontSize: "15px", color: "#64748b", flex: 1 }}>
              {project?.overview?.overview}
            </p>

            {/* CTA */}
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
                color: "#c52222",
                marginTop: "12px",
                alignSelf: "flex-start",
                background:
                  hoveredId === project.contentful_id ? "#fbcccc" : "#ffe6e6",
                border: "none",
                padding: "8px 18px",
                borderRadius: "5px",
                fontWeight: 600,
                cursor: "pointer",
                fontSize: "12px"
              }}
            >
              Read More
            </button>
          </div>
        ))}
      </div>

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

// ------------------------------------------------  WITH FILTER TABS --------------------------------------

// import React, { useState, useEffect } from "react";
// import { graphql, useStaticQuery, navigate } from "gatsby";
// import { useLocation } from "@reach/router";
// import { IconArrowUp } from "@tabler/icons-react";

// function ProjectPortfolio() {
//   const location = useLocation();

//   /* ===================== FILTER CONFIG ===================== */

//   const FILTERS = [
//     { label: "Our Products", value: "product" },
//     { label: "AI & Analytics", value: "ai" },
//     { label: "Aviation", value: "aviation" },
//     { label: "Banking & Fintech", value: "banking" },
//     { label: "Cloud Services", value: "cloud" },
//     { label: "Machine Learning", value: "machine-learning" },
//     { label: "Other Services", value: "others" },
//   ];

//   const DEFAULT_FILTER = "product";

//   const [activeFilter, setActiveFilter] = useState(DEFAULT_FILTER);
//   const [hoveredId, setHoveredId] = useState(null);

//   /* ===================== DATA ===================== */

//   const data = useStaticQuery(graphql`
//     query PortfolioPageQuery {
//       allContentfulPortfolio(sort: { fields: createdAt, order: ASC }) {
//         nodes {
//           contentful_id
//           id
//           slug
//           name
//           category
//           filter
//           isDetailedContent
//           overview {
//             overview
//           }
//           detailedDescription {
//             detailedDescription
//           }
//           challengeContent {
//             challengeContent
//           }
//           projectImage {
//             gatsbyImageData(width: 900, placeholder: BLURRED)
//           }
//         }
//       }
//     }
//   `);

//   const normalProjects = data.allContentfulPortfolio.nodes;
//   // const aviationProjects = data.allContentfulAviationPortfolio.nodes;

//   /* ===================== ENTRY LOGIC ===================== */

//   useEffect(() => {
//     const routeFilter = location?.state?.filter;
//     const storedFilter = sessionStorage.getItem("portfolio_last_filter");

//     if (routeFilter) {
//       setActiveFilter(routeFilter);
//       sessionStorage.setItem("portfolio_last_filter", routeFilter);
//     } else if (storedFilter) {
//       setActiveFilter(storedFilter);
//     }
//   }, [location]);

//   /* ===================== FILTER HANDLER ===================== */

//   const handleFilterChange = (value) => {
//     setActiveFilter(value);
//     sessionStorage.setItem("portfolio_last_filter", value);
//   };

//   /* ===================== FILTERED PROJECTS ===================== */

//   const filteredProjects = normalProjects.filter((p) => p.filter === activeFilter);

//   /* ===================== UI ===================== */

//   const handleScollToTop = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <section
//       style={{
//         position: "relative",
//         padding: "30px 20px 60px",
//         background: "#fff3f3",
//       }}
//     >
//       {/* HEADER */}
//       <h1
//         id="heading"
//         style={{ fontSize: "56px", fontWeight: 700, textAlign: "center" }}
//       >
//         Explore{" "}
//         <span
//           style={{
//             background: "linear-gradient(90deg, #c52222, #2460e2)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//         >
//           Pentafox's
//         </span>{" "}
//         Portfolio
//       </h1>

//       <p
//         style={{
//           fontSize: "18px",
//           color: "#475569",
//           maxWidth: "700px",
//           margin: "16px auto 30px",
//           textAlign: "center",
//         }}
//       >
//         Tap into insightful blogs, data sheets, case studies, and more.
//       </p>

//       {/* FILTER TABS */}
//       <div
//         style={{
//           display: "flex",
//           gap: "12px",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           marginBottom: "40px",
//         }}
//       >
//         {FILTERS.map((f) => (
//           <button
//             key={f.value}
//             onClick={() => handleFilterChange(f.value)}
//             style={{
//               padding: "8px 16px",
//               borderRadius: "999px",
//               border: "1px solid #f7cfcf",
//               background: activeFilter === f.value ? "#b91010" : "#ffffff00",
//               color: activeFilter === f.value ? "#ffffff" : "#374151",
//               fontWeight: 600,
//               cursor: "pointer",
//             }}
//           >
//             {f.label}
//           </button>
//         ))}
//       </div>

//       {/* CARDS */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//           // gridTemplateColumns: "repeat(3, minmax(320px, 1fr))",
//           gap: "32px",
//           maxWidth: "1200px",
//           margin: "0 auto",
//         }}
//       >
//         {filteredProjects.map((project) => (
//           <div
//             key={project?.contentful_id}
//             style={{
//               background: "white",
//               // background: "#fdbebe28",
//               border: "1px solid #e5e7eb",
//               borderRadius: "10px",
//               padding: "20px",
//               display: "flex",
//               flexDirection: "column",
//               boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             {/* IMAGE */}
//             <div
//               style={{
//                 height: "220px",
//                 borderRadius: "16px",
//                 overflow: "hidden",
//                 marginBottom: "20px",
//               }}
//             >
//               <img
//                 src={
//                   project.projectImage?.gatsbyImageData?.images?.fallback?.src
//                 }
//                 alt={project.name}
//                 // style={{
//                 //   width: "100%",
//                 //   height: "100%",
//                 //   // objectFit: "cover",
//                 // }}
//               />
//             </div>

//             {/* CONTENT */}
//             <h3 style={{ fontSize: "22px", marginBottom: "12px" }}>
//               {project?.name}
//             </h3>

//             <p style={{ fontSize: "15px", color: "#64748b", flex: 1 }}>
//               {project?.overview?.overview}
//             </p>

//             {/* CTA */}
//             <button
//               onMouseEnter={() => setHoveredId(project.contentful_id)}
//               onMouseLeave={() => setHoveredId(null)}
//               onClick={() =>
//                 navigate(`/portfolio/${project.slug}`, {
//                   state: {
//                     filter: project.filter || project.filters,
//                     id: project.contentful_id,
//                   },
//                 })
//               }
//               style={{
//                 color: "#c52222",
//                 marginTop: "16px",
//                 alignSelf: "flex-start",
//                 background:
//                   hoveredId === project.contentful_id ? "#fbcccc" : "#ffe6e6",
//                 border: "none",
//                 padding: "8px 18px",
//                 borderRadius: "5px",
//                 fontWeight: 600,
//                 cursor: "pointer",
//               }}
//             >
//               Read More
//             </button>
//           </div>
//         ))}
//       </div>

//       <section
//         style={{
//           position: "absolute",
//           bottom: 10,
//           right: 10,
//           background: "#b91010",
//           color: "white",
//           padding: "7px",
//           borderRadius: "20px",
//           cursor: "pointer",
//         }}
//         onClick={handleScollToTop}
//       >
//         <IconArrowUp />
//       </section>
//     </section>
//   );
// }

// export default ProjectPortfolio;
