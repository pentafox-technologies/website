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
import { MantineProvider } from "@mantine/core";

const themeObj = {
  fontFamily: "'Varela Round', sans-serif !important",
  fontSizes: {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 18,
    xl: 20,
  },
  headings: {
    fontFamily: "'Outfit', sans-serif !important",
  },
}

const LayoutCommon = ({
  children,
  headProps = {},
  hideLink,
  showCareers = true,
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeObj}>
      <Header showCareers={showCareers} showDarkLogo={false} />
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </MantineProvider>
  );
};

export default LayoutCommon;
