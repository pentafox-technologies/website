import React from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import ProjectPortfolio from "../components/projectPortfolio/ProjectPortfolio";

const PentafoxPortfolio = () => {
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: "Portfolio" }}
    >
      <PageWrapper style={{ position: "relative" }}>
          <ProjectPortfolio />
      </PageWrapper>
    </LayoutCommon>
  );
};

export default PentafoxPortfolio;

// import React from "react";
// import { HomeWrapper } from "../components/home/home.css";
// import PageWrapper from "../components/pageWrapper/PageWrapper";
// import LayoutCommon from "../components/layout/layoutCommon";
// import ProjectPortfolio from "../components/projectPortfolio/ProjectPortfolio";
// import { Container, Flex, Grid, Text } from "@mantine/core";
// import SectionTitle from "../components/Title/SectionTitle";
// import { portfolioProjectDetails } from "../services/portfolioProjectDetails";

// const PentafoxPortfolio = () => {
//   return (
//     <LayoutCommon
//       hideLink
//       showCareers={false}
//       showDarkLogo
//       headProps={{ pageTitle: "Portfolio" }}
//     >
//       <HomeWrapper>
//         <PageWrapper style={{ position: "relative" }}>
//           <ProjectPortfolio />
//         </PageWrapper>
//       </HomeWrapper>
//     </LayoutCommon>
//   );
// };
// export default PentafoxPortfolio;
