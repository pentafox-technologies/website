import { Box, Center, Container, Image } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { data } from "../../data/financialServicesData";
import AppoinmentButton from "../components/button/AppoinmentButton";
import { ContentSectionWrapper } from "../components/contentSection/contentSection.css";
import { HeaderData } from "../components/head/Head";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import AlternateLayout from "../components/pageWrapper/AlternateLayout";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import apiCall from "../services/contentfulApiCall";
import { financialStyles } from "../styles/financials.css";

export const Head = () => {
  return (
    <HeaderData pageTitle="Financial Services" />
  )
}

const FinancialServices = () => {
  const graph = useRef(null);
  const { classes } = financialStyles();
  const rightToLeftASAP = useRef(null);
  const rightToLeftScroll = useRef(null);
  const bottomToTopScroll = useRef(null);
  const [pageData, setPageData] = useState([])

  const financialsData = useStaticQuery(graphql`
    query MyQuery {
      allContentfulFinancialServices {
        nodes {
          heroText
          heroDescription {
            heroDescription
          }
        }
      }
      allContentfulTechStack {
        nodes {
          title
          iconUrl
        }
      }
    }
  `)

  // We are getting product data from contentful using API to avoid data fetching issues from Grapgql and combined the data from contentful
  // and its resp images using identifiers.
  useMemo(() => {
    const combinedArray = [];
    apiCall('ourProducts')
    .then((produectData) => {
      data.forEach((item1) => {
        const item2 = produectData?.items?.[0]?.fields?.ourProducts?.find((item2) => item2.identifier === item1.identifier)

        if(item2) {
          combinedArray.push({
            ...item1,
            ...item2
          })
        }
      })
    })
    .finally(() => setPageData(combinedArray))
    .catch(e => console.log(e))
  }, [])

  // Tech Stack Section Icons positioning
  useEffect(() => {
    const ciclegraph = graph.current;
    const circleElements = ciclegraph.childNodes;

    let angle = 360 - 120;
    let dangle = 360 / circleElements.length;

    for (let i = 0; i < circleElements.length; i++) {
      let circle = circleElements[i];
      angle += dangle;
      if (i % 2 == 0) {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 4.6
        }px) rotate(-${angle}deg)`;
      } else {
        circle.style.transform = `rotate(${angle}deg) translate(${
          ciclegraph.clientWidth / 2.4
        }px) rotate(-${angle}deg)`;
      }
    }
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // HeroSection Illustration Animation
    gsap.from(rightToLeftASAP.current, {
      opacity: 0,
      x: 200,
      duration: 1,
    });

    // ContactUs Section Animation
    gsap.from(bottomToTopScroll.current, {
      opacity: 0.3,
      y: 100,
      duration: 1,
      scrollTrigger: {
        trigger: bottomToTopScroll.current,
        start: "bottom bottom",
        end: "+=100",
        scrub: false,
      },
    });

    // OurProducts Section Animation
    gsap.from(rightToLeftScroll.current, {
      opacity: 0.2,
      x: -200,
      duration: 1,
      scrollTrigger: {
        trigger: rightToLeftScroll.current,
        start: "center bottom",
        end: "center top",
        scrub: false,
      },
    });

    // Tech Stack Section Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: graph.current,
        start: "top 100%",
        end: "bottom 50%",
        toggleActions: "restart none none none",
        scrub: true
      },
    });

    tl.from("#circle", {
      duration: 1,
      scale: 0,
      opacity: 0,
      stagger: 0.2,
      ease: "back.out(1.9)",
      repeat: 0,
    });

    const svg = document.querySelector(".icon-tabler-chevrons-down");
    const tl1 = gsap.timeline({ repeat: -1, yoyo: true });

    tl1.to(svg, { duration: 0.5, y: 5, ease: "power1.inOut" })
      .to(svg, { duration: 0.5, y: 0, ease: "power1.inOut" });

  }, []);

  // OurProducts Image bounce Animation
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
  }, [pageData])

  const scrollToFirstSection = () => {
    const firstSection = document.querySelector("#content-section-0");
    firstSection.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={true}
      headProps={{ pageTitle: "Financial Services" }}
    >
      <HomeWrapper>
        <PageWrapper>
          {/* Landing Container */}
          <Container size={1200} className={classes.landing} p={0}>
            {/* <div className={classes.background} /> */}
            <Box className={classes.landingContainer}>
              <Box className={classes.textContainer} sx={{ zIndex: 99 }}>
                <h1 className={classes.landingHeroText} dangerouslySetInnerHTML={{ __html: financialsData?.allContentfulFinancialServices?.nodes[0].heroText }} />
                <Box>
                  <p
                    className={classes.landingDescriptionText}
                    style={{ lineHeight: 2 }}
                  >
                    {financialsData?.allContentfulFinancialServices?.nodes[0].heroDescription.heroDescription}
                  </p>
                </Box>
                <Box mt="xl">
                  <AppoinmentButton />
                </Box>
              </Box>
              <Box className={classes.landingImage} ref={rightToLeftASAP}>
                <StaticImage
                  src="../images/Illustrations/landing.png"
                  placeholder="tracedSVG"
                />
              </Box>
            </Box>
            <div class={classes.scrollDown} onClick={scrollToFirstSection}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevrons-down" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 7l5 5l5 -5"></path>
                <path d="M7 13l5 5l5 -5"></path>
              </svg>
            </div>
          </Container>
          {/* Services container */}
          {/* <Container size={1200} py={40} px={0}>
            <h1 className={classes.landingHeroText}>Power Up Your Lending <br/>with Our Cutting-Edge Cloud Services</h1>
            <Center py={90}>
              <Box ref={rightToLeftScroll}>
                <StaticImage 
                  src='../images/Financial Services.png'
                  placeholder='tracedSVG'
                  width={800}
                />
              </Box>
            </Center>
          </Container> */}
          {/* Products Container */}
          <Container size={1300} py={40}>
            {pageData.map((item, i) => {
              return (
                <AlternateLayout
                  key={i}
                  id={i}
                  rightSide={i % 2}
                  heading={item.title}
                  description={item.description}
                  list={item.points}
                  imageComponent={item.image}
                />
              );
            })}
          </Container>
          {/* TechStack Container */}
          <Container size={1200} sx={{height: '80vh'}}>
            <Center sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
              <h1>
                Exploring Our Cutting-Edge Tech Stack
              </h1>
              <p
                style={{
                  lineHeight: 2,
                  fontSize: "1.2rem",
                  color: "rgba(0,0,0,0.6)",
                  marginTop: 18,
                }}
              >
                The Tools and Technologies Powering Our Platform
              </p>
            </Center>
            <ContentSectionWrapper>
              <div className="container lg-container">
                <div className="middle-content" style={{display: 'flex', justifyContent: 'center', marginTop: '20%'}}>
                  <Box className={classes.circlegraph} ref={graph}>
                    {financialsData?.allContentfulTechStack?.nodes?.map((icon, index) => {
                      return (
                        <img
                          key={index}
                          src={icon.iconUrl}
                          id={"circle"}
                          className={classes.circle}
                          alt={icon.title}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      );
                    })}
                  </Box>
                </div>
              </div>
            </ContentSectionWrapper>
          </Container>
          {/* Contact us container */}
          <Container size={1200} ref={bottomToTopScroll}>
            <Box className={classes.contactUsContainer}>
              <Image
                src="https://i.imgur.com/rlGkYYt.png"
                className={classes.contactUsIllustration}
                width={"45%"}
              />
              <Box>
                <h1 className={classes.contactUsHeroText}>
                  Take the first step today!
                </h1>
                <p className={classes.contactUsSubtext}>
                  Book a free demo with us.
                </p>
                <AppoinmentButton />
              </Box>
            </Box>
          </Container>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default FinancialServices;