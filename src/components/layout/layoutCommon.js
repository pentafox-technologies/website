/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "../footer/Footer";
import HeadWithQuery, { HeaderData } from "../head/Head";
import Header from "../header/header";

const LayoutCommon = ({
  children,
  headProps = {},
  hideLink,
  showCareers = true,
  showDarkLogo = false
}) => {
  return (
    <>
      <Header showCareers={showCareers} showDarkLogo={showDarkLogo} />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutCommon;
