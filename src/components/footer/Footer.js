import { Anchor, Box, Center, Image, Text } from "@mantine/core";
import { graphql, Link, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";
import IsMobile from "../../helpers/IsMobile";
import { FooterWrapper } from "./footer.css";

const Footer = () => {
  const isMobileDevice = IsMobile();

  const queryData = useStaticQuery(graphql`
    query {
      allContentfulContact {
        nodes {
          mobile
          mail
        }
      }
      allContentfulLocations(sort: { fields: createdAt }) {
        nodes {
          name
          address
        }
      }
      allContentfulSocialLink(sort: { fields: createdAt }) {
        nodes {
          socialLink
          socialIcon
          title
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <div className="container lg-container">
        <div className={`row ${!isMobileDevice ? "vertical-bottom" : ""}`}>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="heading-txt mb-24">
              <span className="bold">Don’t be a stranger</span>
              just say hello
            </p>
            <p className="mb-3">
              Feel free to get in touch with us.
              <br />
              We are always open to discussing new projects, creative
              <br />
              ideas or opportunity to be part of your visions.
            </p>

            <div className="row">
              <div className="col-6">
                <p className="mb-2">
                  <span>Feel like talking</span>
                  <Anchor href={`mailto:${queryData.allContentfulContact.nodes[0]?.mobile}`}>
                    {queryData.allContentfulContact.nodes[0]?.mobile}
                  </Anchor>
                </p>
              </div>
              <div className="col-6">
                <p className="mb-2">
                  <span>Need help?</span>
                  <Anchor href={`mailto:${queryData.allContentfulContact.nodes[0]?.mail}`}>
                    {queryData.allContentfulContact.nodes[0]?.mail}
                  </Anchor>
                </p>
              </div>
            </div>
            {isMobileDevice ? null : (
              <Box pt='sm'>
                <ul className="list-unstyled social-icons mb-40">
                  {
                    queryData.allContentfulSocialLink?.nodes?.map((link, item) => (
                      <li key={item}><a href={link.socialLink} target="_blank"><Image src={link.socialIcon} width={17} /></a></li>
                    ))
                  }
                </ul>
              </Box>
            )}
          </div>
          <div className="col-12 col-sm-6 col-md-6">
            <p className="mb-40">
              <span className="section-title">Our Locations</span>
              <div className="location-grid">
                {queryData.allContentfulLocations.nodes.map((item, i) => (
                  <div key={i}>
                    <p className="location-title">{item.name}</p>
                    <p className="location-address">{item.address}</p>
                  </div>
                ))}
              </div>
            </p>
            {isMobileDevice ? (
              <ul className="list-unstyled social-icons mb-40">
                {
                  queryData.allContentfulSocialLink?.nodes?.map((link, item) => (
                    <li key={item}><a href={link.socialLink} target="_blank"><Image src={link.socialIcon} width={17} /></a></li>
                  ))
                }
              </ul>
            ): null}
          </div>
        </div>

        <div className="btm-link">
          <div className="left-col">
            <Link to="/" className="pr-3 text-white">
              Home
            </Link>
            {"   "}&#124;{"   "}
            <Link to="/careers" className="pl-3 text-white">
              Careers
            </Link>
            {/* <Link to="/products" className="pl-3 text-white">
              Products
            </Link> */}
          </div>
          <div className="right-col">
            <Center inline>
              <Text>Designed by</Text>
              <Image src="https://i.imgur.com/hTb0x0M.png" width={60} ml='xs'/>
            </Center>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
