/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react"
 import Footer from "../footer/Footer"
//  import HeadWithQuery from "../head/head"
 import Header from "../header/header"
 
 const LayoutCommon = ({ children, headProps={}, hideLink, showCareers=true }) => {
   return (
     <>
       {/* <HeadWithQuery {...headProps} /> */}
       <Header showCareers={showCareers} showDarkLogo={false} />
       <div className="content-wrap">
         <main>{children}</main>
       </div>
       <Footer />
     </>
   )
 }

 export default LayoutCommon
 