/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/header";
//  import PropTypes from "prop-types"
//  import Footer from "../footer/footer"
//  import HeadWithQuery from "../head/head"
//  import "../../scss/main.scss"

const LayoutHome = ({
  children,
  headProps = {},
  hideLink,
  showCareers = true,
}) => {
  return (
    <>
      {/* <HeadWithQuery {...headProps} /> */}
      <Header showCareers={showCareers} showDarkLogo={false} />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutHome;
