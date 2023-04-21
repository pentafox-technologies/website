import { Box, Container } from "@mantine/core";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PopupButton } from "react-calendly";
import { caseStudyData } from "../../data/portfolioData";
import { HeaderData } from "../components/head/Head";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import PageWrapper from "../components/pageWrapper/PageWrapper";
import PortfolioLayout from "../components/pageWrapper/PortfolioLayout";
import SectionTitle from "../components/Title/SectionTitle";
import apiCall from "../services/contentfulApiCall";
import { portfolioStyles } from "../styles/portfolio.css";
import { gsap } from "gsap";

export const Head = () => {
  return (
    <HeaderData pageTitle="Portfolio" />
  )
}

const Portfolio = () => {
  const { classes } = portfolioStyles();
  const arrowRef = useRef(null);
  const [portfolioPageData, setPortfolioPageData] = useState([])

  useMemo(() => {
    apiCall('caseStudies')
    .then((studyData) => {
      setPortfolioPageData(caseStudyData.map((obj2) => {
        const obj1 = studyData?.items?.find((obj1) => obj1.fields.identifier === obj2.identifier);
        return {
          identifier: obj2.identifier,
          image: obj2.image,
          title: obj1.fields.title,
          description: obj1.fields.description,
          descriptionPoints: obj1.fields.descriptionPoints,
          skillset: obj1.fields.skillset
        };
      }))
    })
    .catch(e => console.log(e))
  }, [])

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
  }, [portfolioPageData])

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
  }, [])

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo
      headProps={{ pageTitle: "Portfolio" }}
    >
      <HomeWrapper>
        <PageWrapper style={{position: 'relative'}}>
          <Box className={classes.landing}>
            <div style={{position: 'absolute', width: '100%', bottom: 0, flex: 1}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,288L720,288L1440,128L1440,320L720,320L0,320Z"></path></svg>
            </div>
            {/* <div className={classes.imgBackground} /> */}
            <Box className={classes.landingContainer}>
              <Box className={classes.textContainer} style={{zIndex: 99}}>
                <h1 className={classes.landingHeroText}>
                  We the world's favourite <br />
                  Digital <br />
                  Transformation <br />
                  partner.
                </h1>
                <Box mt="lg">
                  <p
                    className={classes.landingDescriptionText}
                    style={{ lineHeight: 2 }}
                  >
                    Our goal is to modernize businesses of all kinds by
                    leveraging the power of the Cloud and incorporating embedded
                    intelligence from a diverse set of AI/ML capabilities, with
                    a focus on delivering effective product solutions.
                  </p>
                </Box>
                <Box mt="xl">
                  <PopupButton
                    url="https://calendly.com/vignesh-sankaran"
                    className={classes.appointmentBtn}
                    rootElement={document.getElementById("___gatsby")}
                    text={
                      <div>
                        Talk to our Experts
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width={13}
                          fill="rgb(110, 12, 15)"
                          style={{ marginLeft: 12 }}
                        >
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                      </div>
                    }
                  />
                </Box>
              </Box>
              <Box className={classes.landingImage}>
                <StaticImage
                  src="../images/portfolio_landing.png"
                  placeholder="tracedSVG"
                />
              </Box>
            </Box>
          </Box>
          
          {/* AboutUs Section */}
          <Container
            size={1200}
            py={40}
            px={0}
            style={{height: '100vh', display: 'flex', alignItems: 'center'}}
          >
            <div>
              <SectionTitle title={"About Us"} index="01" />
              <div style={{height: '100%', display: 'flex', padding: 15, flexWrap: 'wrap', gap: 60}}>
                <div style={{position: 'relative'}}>
                  <h1 style={{fontSize: '3rem', color: 'rgba(0,0,0,0.3)', fontWeight: 700}}>Why us?</h1>
                  <svg viewBox="0 0 162 119" fill="none" xmlns="http://www.w3.org/2000/svg" width={70} style={{position: 'absolute', right: '40%', top: '6%'}}>
                    <path d="M0.913757 114.53C13.9807 116.216 32.3056 122.378 43.7012 113.083C51.0025 107.128 57.0714 99.6064 62.6869 92.0921C73.647 77.4257 81.4769 57.0014 83.9262 38.9656C86.7749 17.9886 65.2558 22.4197 58.3958 36.6239C48.6178 56.8698 53.4826 94.2165 79.0133 100.444C108.309 107.591 123.562 71.7844 130.096 49.9154C134.773 34.2631 153.849 -9.9389 143.644 2.81731C137.309 10.736 128.12 15.6577 122.008 23.6058C118.81 27.7641 121.911 27.9558 125.382 25.0963C131.067 20.4118 136.477 14.6482 140.667 8.60318C141.379 7.57589 145.275 0.763508 146.837 3.12604C151.902 10.7886 153.525 20.5514 158.568 28.4832" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                    <path d="M132.848 24.4348C141.945 26.8851 150.961 28.4036 160.05 30.4235C162.841 31.0437 159.046 30.7305 158.171 30.7851" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                </div>
                <div style={{flex: 1, fontSize: "1.2rem", color: "rgba(0,0,0,0.6)", minWidth: 250}}>
                  <p>Welcome to Pentafox Technologies, the world's favorite digital transformation partner. We're a team of seasoned experts with a passion for modernizing businesses of all kinds. Our mission is to leverage the power of the cloud and incorporate embedded intelligence from a diverse set of AI/ML capabilities to deliver effective product solutions that meet our clients' unique needs.</p>
                  <p>At Pentafox, we believe that digital transformation is more than just a buzzword - it's a strategic imperative. Our team has years of experience helping companies across a wide range of industries navigate the complex process of digital transformation. We work closely with our clients to understand their unique challenges and develop tailored solutions that drive measurable results.</p>
                  <p>Our approach to digital transformation is rooted in a deep understanding of the latest technologies and industry trends. We combine cutting-edge tools and techniques with a focus on user experience to deliver solutions that are both innovative and practical.</p>
                  <p>But our success is not just about technology - it's about people. We're a team of passionate professionals who are dedicated to delivering exceptional service and building long-term relationships with our clients. We're proud to have a diverse team of experts from a range of backgrounds and experiences, united by a shared commitment to excellence.</p>
                  <p>Whether you're looking to streamline your operations, modernize your customer experience, or launch a new product, we're here to help. Contact us today to learn more about how we can help your business thrive in the digital age.</p>
                </div>
              </div>
            </div>
          </Container>

          {/* CaseStudies Section */}
          <Container
            size={1200}
            py={40}
            px={0}
          >
            <SectionTitle title={`Case Studies`} index='02' reverse subText='#Problem-solving in action' />
            {portfolioPageData?.map((item, index) => (
              <Box sx={{minHeight: '60vh', display: 'flex', alignItems: 'center'}}>
                <PortfolioLayout 
                  key={index}
                  id={index}
                  rightSide={index % 2}
                  heading={item.title}
                  description={item.description}
                  list={item.descriptionPoints}
                  skillset={item.skillset}
                  imageComponent={item.image}
                />
              </Box>
            ))}
          </Container>
          {/* <Container
            size={1200}
            py={40}
            px={0}
          >
            <SectionTitle title={"Our Testimonial"} index="03" subText='#Trusted by Clients' />
          </Container> */}
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
                  <h1 className={classes.letsTalk}>Let's Talk.
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
          {/* <div style={{position: 'absolute', width: '100%', bottom: 0, zIndex: -10}}>
            <svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 260"
            ><path fill="#292733" fill-opacity="1" d="M0,224L60,213.3C120,203,240,181,360,192C480,203,600,245,720,234.7C840,224,960,160,1080,154.7C1200,149,1320,203,1380,229.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
          </div> */}
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default Portfolio;
