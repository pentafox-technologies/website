import React, { useEffect, useMemo, useRef, useState } from "react";
import { document } from 'browser-monads';
import { HeaderData } from "../components/head/Head";
import { caseStudyData } from "../../data/portfolioData";
import apiCall from "../services/contentfulApiCall";
import LayoutCommon from "../components/layout/layoutCommon";
import { HomeWrapper } from "../components/home/home.css";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import { Box, Container } from "@mantine/core";
import { gsap } from "gsap";
import SectionTitle from "../components/Title/SectionTitle";
import PortfolioLayout from "../components/pageWrapper/PortfolioLayout";
import { PopupButton } from "react-calendly";
import { PortfolioWrapper, portfolioStyles } from "../styles/portfolio.css";
import PageLinkButton from "../components/button/PageLinkButton";
import { graphql, useStaticQuery } from "gatsby";

export const Head = () => {
  return <HeaderData pageTitle="Digital Mobility" />;
};

const DigitalMobility = () => {
  const [digitalMobilityData, setDigitalMobilityData] = useState([]);
  const arrowRef = useRef(null);
  // const { classes } = portfolioStyles();

  const queryData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulCaseStudies(sort: {fields: createdAt}) {
        nodes {
          title
          description {
            description
          }
          descriptionPoints
          skillset
          identifier
        }
      }
    }
  `)

  useMemo(() => {
    setDigitalMobilityData(caseStudyData.map((obj2) => {
      const obj1 = queryData?.allContentfulCaseStudies?.nodes?.find((obj1) => obj1?.identifier === obj2?.identifier);
      return {
        identifier: obj2.identifier,
        image: obj2.image,
        title: obj1?.title,
        description: obj1?.description,
        descriptionPoints: obj1?.descriptionPoints,
        skillset: obj1?.skillset
      }
    }))
  }, [queryData])

  // useMemo(() => {
  //   apiCall("caseStudies")
  //     .then((studyData) => {
  //       setDigitalMobilityData(
  //         caseStudyData.map((obj2) => {
  //           const obj1 = studyData?.items?.find(
  //             (obj1) => obj1?.fields.identifier === obj2?.identifier
  //           );
  //           return {
  //             identifier: obj2.identifier,
  //             image: obj2.image,
  //             title: obj1?.fields.title,
  //             description: obj1?.fields.description,
  //             descriptionPoints: obj1?.fields.descriptionPoints,
  //             skillset: obj1?.fields.skillset,
  //           };
  //         })
  //       );
  //     })
  //     .catch((e) => console.log(e));
  // }, []);

  useEffect(() => {
    const mainImage = document.querySelectorAll(".main-image");
    const secondaryImage = document.querySelectorAll(".secondary-image");

    gsap.to(mainImage, {
      duration: 2,
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(secondaryImage, {
      duration: 2,
      y: -30,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [digitalMobilityData]);

  useEffect(() => {
    const arrow = arrowRef.current;

    const animateArrow = () => {
      gsap.fromTo(
        arrow,
        { opacity: 0, scale: 0.4 },
        { opacity: 1, scale: 1.1, duration: 0.2, ease: "back.out(4)" }
      );
    };

    const hideArrow = () => {
      gsap.set(arrow, { opacity: 0, scale: 0.5 });
    };

    const parent = arrow.parentElement;
    parent.addEventListener("mouseenter", animateArrow);
    parent.addEventListener("mouseleave", hideArrow);

    return () => {
      parent.removeEventListener("mouseenter", animateArrow);
      parent.removeEventListener("mouseleave", hideArrow);
    };
  }, []);

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: "Digital Mobility" }}
    >
      <HomeWrapper>
        <PageWrapper style={{ position: "relative" }}>
          <PortfolioWrapper>
            <Container size={1200} py={40} px={0}>
              <SectionTitle
                title={`Digital Mobility`}
                index="01"
                subText="#Embrace Digital Mobility"
                sectionDescription="In a world where mobility is essential, embracing digital transformation is not just a choice, but a necessity. Our work in the realm of digital mobility is driven by the desire to provide seamless, accessible, and eco-friendly transportation solutions. By leveraging the potential of technology, we are shaping a future where mobility is not only efficient but also sustainable."
                showDescription={true}
              />
              {digitalMobilityData?.map((item, index) => (
                <Box
                  sx={{
                    minHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <PortfolioLayout
                    key={index}
                    id={index}
                    section="digital-mobility"
                    rightSide={index % 2}
                    heading={item.title}
                    description={item.description?.description}
                    list={item.descriptionPoints}
                    skillset={item.skillset}
                    imageComponent={item.image}
                  />
                </Box>
              ))}
            </Container>
            <Container size={1200} py={40} px={0} sx={{display: 'flex', justifyContent: 'flex-end', marginBottom: 40}}>
              <PageLinkButton routeLink="/cloud-engineering" title="Cloud Engineering" subTitle="Embrace the power of cloud" />
            </Container>
            <Container
              size={1200}
              py={40}
              px={0}
            >
              <PopupButton
                url="https://calendly.com/vignesh-sankaran"
                rootElement={document.getElementById('___gatsby')}
                styles={{border: 'none', backgroundColor: 'transparent'}}
                text={
                  <div style={{display: 'flex', alignItems: 'center', gap: 40, justifyContent: 'center'}}>
                    <h1 className='letsTalk'>Let's Talk.
                      <svg viewBox="0 0 82 84" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'absolute', top: 0, right: '-5%'}} width={'10%'}>
                        <path d="M41.5816 1.21606C39.7862 5.82482 40.3852 10.0977 40.5593 14.9633C40.7854 21.2812 40.9774 27.5593 41.4363 33.8661" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M41.0651 45.1798C39.7505 51.5096 40.3418 57.6794 40.8893 64.0791C41.4093 70.1568 42.1389 76.2117 42.8566 82.2682" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M1.13413 46.6647C5.16696 44.8703 8.96881 44.7974 13.3092 44.5029C19.8761 44.0572 26.2025 43.2089 32.656 41.952" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M47.2629 40.0959C58.4139 39.3819 69.3895 37.5305 80.4472 35.9965" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M49.3429 34.6508L52.917 28.1667" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M32.9786 50.3504L28.6387 54.6391" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M52.6361 48.6656L56.9506 51.5758" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                        <path d="M31.549 30.8471C26.8741 29.4323 22.7143 27.3543 18.2738 25.3586" stroke="currentColor" stroke-width="1.90596" stroke-linecap="round"></path>
                      </svg>
                    </h1>
                    <div style={{width: '12%', opacity: 0}} ref={arrowRef}>
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-up-right" width={'100%'} viewBox="0 0 24 24" stroke-width="2" stroke="rgba(220, 41, 8, 1)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M17 7l-10 10"></path>
                        <path d="M8 7l9 0l0 9"></path>
                      </svg>
                    </div>
                  </div>
                }
              />
            </Container>
          </PortfolioWrapper>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default DigitalMobility;
