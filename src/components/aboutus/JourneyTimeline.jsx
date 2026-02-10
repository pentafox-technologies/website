import React, { useEffect, useState, useRef } from "react";
import "./JourneyTimeline.css";
import { 
  IconHeart, IconTrophy, IconThumbUp, IconStar, 
  IconRocket, IconTarget, IconBulb, IconBolt, 
  IconAward, IconChartLine 
} from "@tabler/icons-react";

const timelineData = [
  {
    year: "2016",
    title: "Innovation",
    content: "Driving digital ecosystems. Tech + People, Creative Flow, Impact Delivery.",
    icon: <IconHeart size={32} stroke={1.5} />,
  },
  {
    year: "2017",
    title: "Our Mission",
    content: "Delivering value at scale. Excellence, Client Focus, Scalable Tech.",
    icon: <IconTrophy size={32} stroke={1.5} />,
  },
  {
    year: "2018",
    title: "Trust First",
    content: "People-first always. Integrity, Well-being, Empathy.",
    icon: <IconThumbUp size={32} stroke={1.5} />,
  },
  {
    year: "2019",
    title: "Quality",
    content: "Exceptional delivery. QA Processes, Design Systems, Testing Culture.",
    icon: <IconStar size={32} stroke={1.5} />,
  },
  {
    year: "2020",
    title: "Speed",
    content: "Go-to-market fast. Agile Teams, Rapid Prototyping, Automation.",
    icon: <IconRocket size={32} stroke={1.5} />,
  },
  {
    year: "2021",
    title: "Focus",
    content: "Sharp strategic goals. OKRs, KPIs, Clarity in Vision.",
    icon: <IconTarget size={32} stroke={1.5} />,
  },
  {
    year: "2022",
    title: "Ideas",
    content: "Innovation at the core. Hackathons, Feedback Loops, Product Labs.",
    icon: <IconBulb size={32} stroke={1.5} />,
  },
  {
    year: "2023",
    title: "Power",
    content: "Boosting capabilities. Infrastructure, Cloud Ops, Performance.",
    icon: <IconBolt size={32} stroke={1.5} />,
  },
  {
    year: "2024",
    title: "Recognition",
    content: "We value achievement. Internal Awards, External Certifications, Peer Reviews.",
    icon: <IconAward size={32} stroke={1.5} />,
  },
  {
    year: "2025",
    title: "Growth",
    content: "Scale without compromise. Hiring Smart, Retention, Expansion.",
    icon: <IconChartLine size={32} stroke={1.5} />,
  },
];

const JourneyTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const generatePath = () => {
    let path = "M0,100 ";
    timelineData.forEach((_, i) => {
      const x = (i + 1) * 220;
      const prevX = i * 220;
      const midX = prevX + 110;
      const y = i % 2 === 0 ? 160 : 40;
      path += `Q${midX},${y} ${x},100 `;
    });
    return path;
  };

  return (
    <div className="jt-wrapper">
      <h1 className="jt-heading">Journey of Pentafox</h1>

      <div className="jt-scroll-container">
        <div
          className="jt-container"
          style={{ width: `${timelineData.length * 220}px` }}
          ref={timelineRef}
        >
          {!isMobile && (
            <svg
              className="jt-wave-desktop"
              viewBox={`0 0 ${timelineData.length * 220} 200`}
              preserveAspectRatio="none"
            >
              <path
                d={generatePath()}
                className="jt-wave-path"
              />
            </svg>
          )}

          <div className="jt-track">
            {timelineData.map((item, index) => {
              const isTrough = index % 2 === 0;

              return (
                <div key={index} className="jt-card-wrapper">
                  {/* PEAKS - Content BELOW */}
                  {!isTrough && (
                    <div className="jt-text-block jt-text-bottom">
                      <h3 className="jt-year">{item.year}</h3>
                      <p className="jt-description">
                        <span className="jt-title-highlight">{item.title}:</span>{" "}
                        {item.content}
                      </p>
                    </div>
                  )}

                  <div className="jt-icon-wrapper">
                    <div
                      className={`jt-icon-circle ${isTrough ? "jt-move-down" : "jt-move-up"}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* TROUGHS - Content ABOVE */}
                  {isTrough && (
                    <div className="jt-text-block jt-text-top">
                      <h3 className="jt-year">{item.year}</h3>
                      <p className="jt-description">
                        <span className="jt-title-highlight">{item.title}:</span>{" "}
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;



// import { IconHeart } from "@tabler/icons-react";
// import React, { useEffect, useState, useRef } from "react";

// const JourneyTimeline = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const timelineRef = useRef(null);

//   const timelineData = [
//     {
//       year: "2017",
//       title: "Innovation",
//       content: "Driving digital ecosystems.",
//       icon: <IconHeart />,
//     },
//     {
//       year: "2017",
//       title: "Innovation",
//       content: "Driving digital ecosystems.",
//       icon: <IconHeart />,
//     },
//     {
//       year: "2017",
//       title: "Innovation",
//       content: "Driving digital ecosystems.",
//       icon: <IconHeart />,
//     },
//     {
//       year: "2017",
//       title: "Innovation",
//       content: "Driving digital ecosystems.",
//       icon: <IconHeart />,
//     },
//     {
//       year: "2017",
//       title: "Innovation",
//       content: "Driving digital ecosystems.",
//       icon: <IconHeart />,
//     },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Generates wave path: 2017 starts at trough (160), 2018 at peak (40)
//   const generatePath = () => {
//     let path = "M0,100 ";
//     timelineData.forEach((_, i) => {
//       const x = (i + 1) * 220;
//       const prevX = i * 220;
//       const midX = prevX + 110;
//       const y = i % 2 === 0 ? 160 : 40;
//       path += `Q${midX},${y} ${x},100 `;
//     });
//     return path;
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h1 style={styles.heading}>Journey of Pentafox</h1>

//       <div style={styles.scrollContainer}>
//         <div
//           style={{
//             ...styles.container,
//             width: `${timelineData.length * 220}px`,
//           }}
//           ref={timelineRef}
//         >
//           {/* Wave Path */}
//           {!isMobile && (
//             <svg
//               style={styles.waveDesktop}
//               viewBox={`0 0 ${timelineData.length * 220} 200`}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d={generatePath()}
//                 fill="none"
//                 stroke="rgba(255, 255, 255, 0.4)"
//                 strokeWidth="3"
//                 strokeDasharray="10,10"
//               />
//             </svg>
//           )}

//           <div style={styles.track}>
//             {timelineData.map((item, index) => {
//               const isTrough = index % 2 === 0; // index 0, 2 are troughs (Bottom of U)

//               return (
//                 <div key={index} style={styles.cardWrapper}>
//                   {/* Content for PEAKS (Inverted U) - Text sits BELOW */}
//                   {!isTrough && (
//                     <div style={{ ...styles.textBlock, top: "140px" }}>
//                       <h3 style={styles.year}>{item.year}</h3>
//                       <p style={styles.description}>
//                         <span style={{ color: "black" }}>
//                           {item.title}:
//                         </span>{item?.content}
//                       </p>
//                       {/* <p style={styles.description}>{item.title}</p> */}
//                     </div>
//                   )}

//                   <div style={styles.iconWrapper}>
//                     <div
//                       style={{
//                         ...styles.iconCircle,
//                         // 60px shift aligns perfectly with the 40/160 coordinates of the wave
//                         transform: isTrough
//                           ? "translateY(60px)"
//                           : "translateY(-60px)",
//                       }}
//                     >
//                       <span style={styles.icon}>{item.icon}</span>
//                     </div>
//                   </div>

//                   {/* Content for TROUGHS (U shape) - Text sits ABOVE */}
//                   {isTrough && (
//                     <div style={{ ...styles.textBlock, bottom: "140px" }}>
//                       <h3 style={styles.year}>{item.year}</h3>
//                       <p style={styles.description}>
//                         <span style={{ color: "black" }}>{item.title}:</span>{" "}
//                         {item?.content}
//                       </p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     background: "#dc2b2b",
//     padding: "60px 0",
//     color: "#ffffff",
//     minHeight: "100vh",
//     overflow: "hidden",
//     fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "clamp(2rem, 5vw, 3.5rem)",
//     fontWeight: "800",
//     marginBottom: "40px",
//   },
//   scrollContainer: {
//     overflowX: "auto",
//     padding: "200px 0", // Crucial: Gives enough space so upper icons aren't hidden
//     scrollbarWidth: "none",
//     msOverflowStyle: "none",
//   },
//   container: {
//     position: "relative",
//     margin: "0 auto",
//   },
//   waveDesktop: {
//     position: "absolute",
//     top: "50%",
//     left: 0,
//     height: "200px",
//     width: "100%",
//     transform: "translateY(-50%)",
//     zIndex: 1,
//   },
//   track: {
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     zIndex: 2,
//     height: "200px",
//   },
//   cardWrapper: {
//     width: "220px",
//     height: "100%",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconWrapper: {
//     zIndex: 3,
//   },
//   iconCircle: {
//     width: "80px",
//     height: "80px",
//     background: "#ffffff",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow:
//       "0 10px 30px rgba(0, 0, 0, 0.2), 0 0 0 10px rgba(255, 255, 255, 0.15)",
//     transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
//   },
//   icon: { fontSize: "32px" },
//   textBlock: {
//     position: "absolute",
//     textAlign: "center",
//     width: "210px",
//     padding: "0 10px",
//   },
//   year: {
//     fontSize: "1.8rem",
//     fontWeight: "900",
//     margin: "0 0 8px",
//     textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//   },
//   description: {
//     fontSize: "0.95rem",
//     lineHeight: "1.4",
//     fontWeight: "500",
//     color: "rgba(255, 255, 255, 0.9)",
//   },
// };

// export default JourneyTimeline;

// import React, { useEffect, useState, useRef } from "react";

// const JourneyTimeline = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const timelineRef = useRef(null);

//   const timelineData = [
//     { year: "2017", title: "Pentafox Infotech was founded", icon: "💡" },
//     {
//       year: "2018",
//       title: "Launched in UK, Germany, and Malaysia markets.",
//       icon: "🏃",
//     },
//     {
//       year: "2019",
//       title: "Diversified our IT Services with a focus on automation",
//       icon: "🧗",
//     },
//     {
//       year: "2020",
//       title: "Partnered with AWS. 100% YoY Growth again.",
//       icon: "🤝",
//     },
//     {
//       year: "2021",
//       title: "Expanded our infra to 250+ global engineers.",
//       icon: "🚀",
//     },
//     { year: "2022", title: "Innovation and Scale.", icon: "🌟" },
//     {
//       year: "2020",
//       title: "Partnered with AWS. 100% YoY Growth again.",
//       icon: "🤝",
//     },
//     {
//       year: "2021",
//       title: "Expanded our infra to 250+ global engineers.",
//       icon: "🚀",
//     },
//     { year: "2022", title: "Innovation and Scale.", icon: "🌟" },
//   ];

//   useEffect(() => {
//     const checkMobile = () => setIsMobile(window.innerWidth < 1024);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   // Generates a smooth wave path based on data length
//   // We start at 100, then go down to 160 (2017), then up to 40 (2018)
//   const generatePath = () => {
//     let path = "M0,100 ";
//     timelineData.forEach((_, i) => {
//       const x = (i + 1) * 220;
//       const prevX = i * 220;
//       const midX = prevX + 110;
//       const y = i % 2 === 0 ? 160 : 40; // Alternating Y coordinates
//       path += `Q${midX},${y} ${x},100 `;
//     });
//     return path;
//   };

//   return (
//     <div style={styles.wrapper}>
//       <h1 style={styles.heading}>Journey of Pentafox</h1>

//       <div style={styles.scrollContainer}>
//         <div
//           style={{
//             ...styles.container,
//             width: `${timelineData.length * 220}px`,
//           }}
//           ref={timelineRef}
//         >
//           {/* Wave Path */}
//           {!isMobile && (
//             <svg
//               style={styles.waveDesktop}
//               viewBox={`0 0 ${timelineData.length * 220} 200`}
//               preserveAspectRatio="none"
//             >
//               <path
//                 d={generatePath()}
//                 fill="none"
//                 stroke="rgba(255, 255, 255, 0.3)"
//                 strokeWidth="3"
//                 strokeDasharray="10,10"
//               />
//             </svg>
//           )}

//           <div style={styles.track}>
//             {timelineData.map((item, index) => {
//               const isEven = index % 2 === 0; // 0 (2017), 2 (2019) -> Move Down
//               return (
//                 <div key={index} style={styles.cardWrapper}>
//                   {/* For 2017 (Even), Text is ABOVE. For 2018 (Odd), Text is BELOW */}
//                   {isEven && (
//                     <div style={{ ...styles.textBlock, bottom: "130px" }}>
//                       <h3 style={styles.year}>{item.year}</h3>
//                       <p style={styles.description}>{item.title}</p>
//                     </div>
//                   )}

//                   <div style={styles.iconWrapper}>
//                     <div
//                       style={{
//                         ...styles.iconCircle,
//                         transform: !isEven
//                           ? "translateY(150px)"
//                           : "translateY(-200px)",
//                       }}
//                     >
//                       <span style={styles.icon}>{item.icon}</span>
//                     </div>
//                   </div>

//                   {!isEven && (
//                     <div style={{ ...styles.textBlock, top: "130px" }}>
//                       <h3 style={styles.year}>{item.year}</h3>
//                       <p style={styles.description}>{item.title}</p>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const styles = {
//   wrapper: {
//     background: "#dc2b2b",
//     padding: "80px 0",
//     color: "#ffffff",
//     minHeight: "100vh",
//     overflow: "hidden",
//   },
//   heading: {
//     textAlign: "center",
//     fontSize: "3rem",
//     marginBottom: "100px",
//   },
//   scrollContainer: {
//     overflowX: "auto",
//     height: "auto",
//     padding: "100px 0",
//     scrollbarWidth: "none",
//   },
//   container: {
//     position: "relative",
//     margin: "0 auto",
//   },
//   waveDesktop: {
//     position: "absolute",
//     top: "50%",
//     left: 0,
//     height: "200px",
//     width: "100%",
//     transform: "translateY(-50%)",
//     zIndex: 1,
//   },
//   track: {
//     position: "relative",
//     display: "flex",
//     alignItems: "center",
//     zIndex: 2,
//   },
//   cardWrapper: {
//     width: "220px",
//     height: "200px",
//     position: "relative",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   iconWrapper: {
//     zIndex: 3,
//   },
//   iconCircle: {
//     width: "80px",
//     height: "80px",
//     background: "#ffffff",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     boxShadow: "0 0 20px rgba(255, 255, 255, 0.2)",
//     transition: "transform 0.5s ease",
//   },
//   icon: { fontSize: "30px" },
//   textBlock: {
//     position: "absolute",
//     textAlign: "center",
//     width: "200px",
//   },
//   year: { fontSize: "1.8rem", fontWeight: "800", margin: "0 0 5px" },
//   description: { fontSize: "0.85rem", opacity: 0.8, padding: "0 10px" },
// };

// export default JourneyTimeline;
