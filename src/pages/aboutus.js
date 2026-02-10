import React from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import { HomeWrapper } from "../components/home/home.css";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import TitleComp from "../components/commonComponents/TitleComp";
import JourneyTimeline from "../components/aboutus/JourneyTimeline";
import StatsText from "../components/commonComponents/StatsText";
import CurveTimeline from "../components/aboutus/Curvetimeline";

export default function AboutUs() {
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>
          <TitleComp title="Pentafox - Transforming Businesses Globally" />
          <StatsText statsCount="5+" statsDesc="Countries" />
          <JourneyTimeline />
          <CurveTimeline />
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
}
