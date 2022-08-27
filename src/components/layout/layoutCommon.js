/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "../footer/Footer";
import HeadWithQuery from "../head/Head";
import Header from "../header/header";

const LayoutCommon = ({
  children,
  headProps = {},
  hideLink,
  showCareers = true,
}) => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulSiteConfig {
        nodes {
          siteTitle
          siteTitleShort
          siteDescription
          siteUrl
          themeColor
          backgroundColor
          social {
            social {
              fbAppId
              linkedin
              twitter
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <HeadWithQuery {...queryData} />
      <Header showCareers={showCareers} showDarkLogo={false} />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutCommon;
