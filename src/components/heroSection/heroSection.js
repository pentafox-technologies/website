import { Box, Center } from "@mantine/core";
import { graphql, useStaticQuery } from "gatsby";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import { HeroSectionWrapper } from "./heroSection.css";
import { getImage } from "gatsby-plugin-image";
import { BgImage  } from "gbimage-bridge";

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
          gatsbyImageData(width: 1500, quality: 50, webpOptions: {quality: 70})
        }
      }
      platformImage: file(relativePath: { eq: "platform-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50, webpOptions: {quality: 70})
        }
      }
      digitalStrategyImage: file(relativePath: { eq: "digital-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50, webpOptions: {quality: 70})
        }
      }
      MLImage: file(relativePath: { eq: "cv-banner.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50, webpOptions: {quality: 70})
        }
      }
      ProductImage: file(relativePath: { eq: "platform-banner-1.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 1500, quality: 50, webpOptions: {quality: 70})
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
  `);

  const IndexImage = getImage(queryData?.indexImage)
  return (
    <HeroSectionWrapper>
      <div className="left-col">
        <BgImage
          Tag="figure"
          image={IndexImage}
        >
            <figcaption>
              <Center>
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
                  >
                    Know More
                  </span>
                </Box>
              </Center>
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
