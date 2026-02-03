import { Box, Container, Grid, Image } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useRef } from "react";
import OutfitWrapper from "../components/FontWrapperComp/OutfitWrapper";
import VarelaWrapper from "../components/FontWrapperComp/VarelaWrapper";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import SectionTitle from "../components/Title/SectionTitle";
import { window } from "browser-monads";

//child components
import HeadSection from "../components/About_Page/HeadSection";
import Journey from "../components/About_Page/Journey_section";
import Corevalues from "../components/About_Page/coreValues";
import Leadership from "../components/About_Page/Leadership_section";
import Teams from "../components/About_Page/Teams_section";
import Pendafox from "../components/About_Page/Pendafox_section";

//json
import aboutPageData from "../services/AboutPageData";

const Values = ({ title, value, image }) => {
  return (
    <Grid.Col
      md={3.5}
      sx={{
        border: "1.5px solid rgba(0,0,0,0.1)",
        borderRadius: 12,
        ":hover": {
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          transition: "all 0.3s ease-in-out",
        },
      }}
      my={15}
    >
      <Box p="md">
        <Box>
          <Image
            src={image}
            placeholder="tracedSVG"
            width={100}
            height={100}
            layout="constrained"
            objectFit="cover"
          />
        </Box>
        <Box>
          <OutfitWrapper style={{ fontWeight: 600, fontSize: "1.4rem" }}>
            {title}
          </OutfitWrapper>
          <VarelaWrapper style={{ fontSize: "1.1rem", marginTop: 8 }}>
            {value}
          </VarelaWrapper>
        </Box>
      </Box>
    </Grid.Col>
  );
};

const ImageWrapper = ({ image, name, designation }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: window.screen.width / 4,
        marginTop: 18,
      }}
      px={30}
    >
      <Box
        sx={{
          borderRadius: 130,
          padding: 8,
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          overflow: "hidden",
        }}
      >
        <Image src={image} width={220} height={220} radius={110} />
      </Box>
      <OutfitWrapper
        style={{
          marginTop: 12,
          fontSize: 18,
          fontWeight: 500,
          textAlign: "center",
        }}
      >
        {name}
      </OutfitWrapper>
      <VarelaWrapper style={{ textAlign: "center" }}>
        {designation}
      </VarelaWrapper>
    </Box>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "About Us" }}
    >
      <HomeWrapper>
        <PageWrapper>

          <>
            <HeadSection data={aboutPageData.headSectionData} />
            <Journey data={aboutPageData.journeyData} />
            <Corevalues data={aboutPageData.coreValuesData} />
            <Leadership data={aboutPageData.leadershipData} /> 
            <Teams data={aboutPageData.teamData} />
            <Pendafox data={aboutPageData.pentafoxData} />
          </>

        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default AboutUs;
