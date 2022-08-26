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
                  <a
                    href={`tel:${queryData.allContentfulContact.nodes[0]?.mobile}`}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mobile}
                  </a>
                </p>
              </div>
              <div className="col-6">
                <p className="mb-2">
                  <span>Need help?</span>
                  <a
                    href={`mailto:${queryData.allContentfulContact.nodes[0]?.mail}`}
                  >
                    {queryData.allContentfulContact.nodes[0]?.mail}
                  </a>
                </p>
              </div>
            </div>

            
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
            </Link>{"   "}&#124;{"   "}
            <Link to="/products" className="pl-3 text-white">
              Products
            </Link>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
