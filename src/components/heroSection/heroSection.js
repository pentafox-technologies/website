import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import { HeroSectionWrapper } from "./heroSection.css";

const FigureWrapper = ({ children, id, ...props }) => {
  return (
    <BackgroundImage
      Tag="figure"
      fluid={props.image}
      onClick={() => scrollTo(`#content-section-${id}`)}
    >
      {children}
    </BackgroundImage>
  );
};

const HeroSection = ({ contentData }) => {
  const queryData = useStaticQuery(graphql`
    query {
      indexImage: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 800
            quality: 90
            traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      platformImage: file(relativePath: { eq: "platform-banner.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 500
            quality: 90
            traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      digitalStrategyImage: file(relativePath: { eq: "digital-banner.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 500
            quality: 90
            traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      MLImage: file(relativePath: { eq: "cv-banner.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 500
            quality: 90
            traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      ProductImage: file(relativePath: { eq: "platform-banner-1.jpg" }) {
        childImageSharp {
          fluid(
            maxHeight: 500
            quality: 90
            traceSVG: { color: "#292733", turnPolicy: TURNPOLICY_MINORITY }
          ) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
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

  console.log(queryData)

  return (
    <HeroSectionWrapper>
      <div className="left-col">
        <BackgroundImage
          Tag="figure"
          fluid={queryData.indexImage.childImageSharp.fluid}
        >
          <figcaption>
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
          </figcaption>
        </BackgroundImage>
      </div>
      <div className="right-col">
        {contentData?.map((item, index) => {
          console.log(item)
          return (
            <FigureWrapper
              key={index}
              id={index}
              image={queryData.platformImage.childImageSharp.fluid}
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
