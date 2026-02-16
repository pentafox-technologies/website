import React from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import { HomeWrapper } from "../components/home/home.css";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import TitleComp from "../components/commonComponents/TitleComp";
import JourneyTimeline from "../components/aboutus/JourneyTimeline";
import StatsText from "../components/commonComponents/StatsText";
import IsMobile from "../helpers/IsMobile";
import { aboutPageData } from "../services/AboutPageData";
import CoreValues from "../components/About_Page/coreValues";
import LeadershipSection from "../components/About_Page/Leadership_section";

export default function AboutUs() {
  const isMobile = IsMobile();

  // Style Objects
  const headerContainerStyle = {
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "center",
    alignItems: isMobile ? "center" : "flex-start",
    padding: isMobile ? "40px 20px" : "60px 80px",
    gap: "40px",
  };

  const leftSectionStyle = {
    flex: 1,
    maxWidth: isMobile ? "100%" : "100%",
    display: "flex",
    flexDirection: "column",
  };

  const statsRowStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "20px",
    flexWrap: isMobile ? "wrap" : "wrap",
    gap: isMobile ? "20px" : "0",
  };

  const quoteWrapperStyle = {
    position: "relative",
    maxWidth: "450px",
    marginTop: isMobile ? "40px" : "0",
  };

  const quoteRedShadowStyle = {
    position: "absolute",
    top: "15px",
    left: "-15px",
    width: "100%",
    height: "100%",
    backgroundColor: "#d14d3a", // Red accent color
    borderRadius: "60px 0 60px 0px",
    zIndex: 1,
  };

  const quoteCardStyle = {
    position: "relative",
    backgroundColor: "#0a1a44", // Deep Navy
    color: "#ffffff",
    padding: isMobile ? "40px 30px" : "60px 50px",
    borderRadius: "60px 0 80px 0", // Unique curve
    zIndex: 2,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  };

  const quoteTextStyle = {
    fontSize: isMobile ? "18px" : "24px",
    fontWeight: "600",
    lineHeight: "1.4",
    margin: "0",
    fontStyle: "normal",
  };

  const authorBoxStyle = {
    textAlign: "right",
    marginTop: "30px",
  };

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <div style={headerContainerStyle}>
            {/* Left Content */}
            <div style={leftSectionStyle}>
              <TitleComp title="Driven by Innovation, Powered by People" />
              <div style={statsRowStyle}>
                <StatsText statsCount="5+" statsDesc="Regions" />
                <StatsText statsCount="20+" statsDesc="Clients" />
                <StatsText statsCount="4" statsDesc="Products" />
                <StatsText statsCount="40+" statsDesc="Employees" />
                <StatsText
                  statsCount="10+"
                  statsDesc="Certifications Years in business"
                />
              </div>
            </div>
          </div>

          <JourneyTimeline />

          <CoreValues data={aboutPageData.coreValuesData} />
          <LeadershipSection data={aboutPageData.leadershipData} />
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
}
// import React from "react";
// import LayoutCommon from "../components/layout/layoutCommon";
// import { HomeWrapper } from "../components/home/home.css";
// import PageWrapper from "../components/pageWrapper/PageWrapper";
// import TitleComp from "../components/commonComponents/TitleComp";
// import JourneyTimeline from "../components/aboutus/JourneyTimeline";
// import StatsText from "../components/commonComponents/StatsText";

// export default function AboutUs() {
//   return (
//     <LayoutCommon
//       hideLink
//       showCareers={false}
//       showDarkLogo={true}
//       headProps={{ pageTitle: "About Us" }}
//     >
//       <HomeWrapper>
//         <PageWrapper>
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               padding: "0 80px",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 flexDirection: "column",
//                 maxWidth: "60%",
//               }}
//             >
//               <TitleComp title="Pentafox - Transforming Businesses Globally" />
//               <div style={{ display: "flex", justifyContent: "space-around" }}>
//                 <StatsText statsCount="5+" statsDesc="Countries" />
//                 <StatsText statsCount="32+" statsDesc="Technologies" />
//                 <StatsText statsCount="20+" statsDesc="Clients" />
//                 <StatsText statsCount="45+" statsDesc="Employees" />
//               </div>
//             </div>
//           </div>

//           <JourneyTimeline />
//         </PageWrapper>
//       </HomeWrapper>
//     </LayoutCommon>
//   );
// }
