import React from "react";
import { HomeWrapper } from "../components/home/home.css";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import LayoutCommon from "../components/layout/layoutCommon";
import EnterprisePortfolio from "../components/enterprise/EnterprisePortfolio";

const pentafoxPortfolio = () => {
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: "Portfolio" }}
    >
      <HomeWrapper>
        <PageWrapper style={{ position: "relative" }}>
          <EnterprisePortfolio />
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};
export default pentafoxPortfolio;
