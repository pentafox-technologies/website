/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import Footer from "../footer/Footer";
import HeadWithQuery from "../head/Head";
import Header from "../header/header";
import LogoSVG from '../../images/logo-pf-white.svg';
import IsMobile from "../../helpers/IsMobile";
import { Box, createStyles } from "@mantine/core";

const isMobileDevice = IsMobile();
const useStyles = createStyles(() => ({
  logoWrapper: {
    position: 'absolute', zIndex: 99, left: 130, top: 40,
    [`@media (max-width: 1199px)`]: {
      left: 20
    }
  }
}))

const LayoutHome = ({
  children,
  headProps = {},
  hideLink,
  showCareers = true,
}) => {
  const { classes } = useStyles();
  return (
    <>
      {/* <Header showCareers={showCareers} showDarkLogo={false} /> */}
      <Box className={classes.logoWrapper} 
      >
        <Link to="/">
          {
            <LogoSVG height={isMobileDevice ? '30' : '60'} width={isMobileDevice ? '130' : "200"} />
          }
        </Link>
      </Box>
      <div className="content-wrap">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default LayoutHome;
