/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import Footer from "../footer/Footer";
import { MantineProvider } from "@mantine/core";
import HeaderBar from "../header/header";

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
  showDarkLogo = false,
  headerColor = '#FFFFFF',
  lightLinks = false,
  showHome = true,
  showBanner = true
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={themeObj}>
      <HeaderBar showCareers={showCareers} showDarkLogo={showDarkLogo} headerColor={headerColor} lightLinks={lightLinks} showHome={showHome} showBanner={showBanner} />
      <div className="content-wrap" style={{position: 'relative'}}>
        <main>{children}</main>
      </div>
      <Footer />
    </MantineProvider>
  );
};

export default LayoutCommon;
