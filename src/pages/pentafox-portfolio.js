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
