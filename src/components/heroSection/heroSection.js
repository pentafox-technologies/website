import { Box, Center } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import { HeroSectionWrapper } from "./heroSection.css";
import { getImage } from "gatsby-plugin-image";
import { BgImage  } from "gbimage-bridge";
import { PopupButton } from "react-calendly";
import { document } from 'browser-monads';

const FigureWrapper = ({ children, id, ...props }) => {
  const PlatformImage = getImage(props?.queryData?.platformImage)
  const DigitalStrategyImage = getImage(props?.queryData?.digitalStrategyImage)
  const MLImage = getImage(props?.queryData?.MLImage)
  const imageHelper = [PlatformImage, DigitalStrategyImage, MLImage]
  return (
    <BgImage
      Tag="figure"
      image={imageHelper[id]}
      onClick={() => scrollTo(`#content-section-${id}`)}
    >
      {children}
    </BgImage>
  );
};

const HeroSection = ({ contentData }) => {
  const queryData = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: {eq: "landing.jpg"}) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50)
        }
      }
      platformImage: file(relativePath: { eq: "platform-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50)
        }
      }
      digitalStrategyImage: file(relativePath: { eq: "digital-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50)
        }
      }
      MLImage: file(relativePath: { eq: "cv-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50)
        }
      }
      ProductImage: file(relativePath: { eq: "platform-banner-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50)
        }
      }
      allContentfulLangingContent {
        nodes {
          title
          landingImage
          landingTitle
          landingDescription {
            landingDescription
          }
        }
      }
    }
  `, {forceReload: true});

  const IndexImage = getImage(queryData?.indexImage)
  return (
    <HeroSectionWrapper>
      <div className="left-col">
        <BgImage
          Tag="figure"
          image={IndexImage}
        >
            <figcaption>
                <Box sx={{ maxWidth: 650 }}>
                  <h2>
                    {queryData.allContentfulLangingContent.nodes[0]?.landingTitle}
                  </h2>
                  <p>
                    {
                      queryData.allContentfulLangingContent.nodes[0]
                        ?.landingDescription.landingDescription
                    }
                  </p>
                  <span
                    className="know-more"
                    onClick={() => scrollTo(`#content-section-0`)}
                    style={{marginRight: 20}}
                  >
                    Know More
                  </span>
                  <PopupButton
                    url="https://calendly.com/vignesh-sankaran"
                    className="appointment-btn"
                    rootElement={document.getElementById('___gatsby')}
                    text={
                      <div style={{fontFamily: 'Varela Round'}}>
                        Talk to our Experts
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width={13} fill="rgb(110, 12, 15)" style={{marginLeft: 12}}>
                          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                        </svg>
                        
                        {/* <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> */}
                      </div>
                    }
                  />
                </Box>
            </figcaption>
        </BgImage>
      </div>
      <div className="right-col">
        {contentData?.map((item, index) => {
          return (
            <FigureWrapper
              key={index}
              id={index}
              queryData={queryData}
            >
              <figcaption>
                <h2>{item.title}</h2>
                <p>{item.shortDescription}</p>
              </figcaption>
            </FigureWrapper>
          );
        })}
      </div>
    </HeroSectionWrapper>
  );
};

export default HeroSection;
