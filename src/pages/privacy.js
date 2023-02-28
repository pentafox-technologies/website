import React from "react";
import LayoutCommon from "../components/layout/layoutCommon";
import {HomeWrapper} from "../components/home/home.css"
import PageWrapper, { TopSectionWrapper } from "../components/pageWrapper/PageWrapper"
import { graphql, useStaticQuery } from "gatsby";
import { Container } from "@mantine/core";
import { HeaderData } from "../components/head/Head";

export const Head = () => {
  return (
    <HeaderData pageTitle="Privacy" />
  )
}

const Privacy = () => {
  const queryData = useStaticQuery(graphql `
   query MyQuery {
      allContentfulPrivacyStatement {
        nodes {
          privacyPolicy {
            childMarkdownRemark {
              html
              rawMarkdownBody
            }
          }
        }
      }
    }
  `)

  return (
    <LayoutCommon
      hideLink
      showCareers={false}
      showDarkLogo={false}
      headProps={{
        pageTitle: "Privacy Statement",
      }}
    >
      <HomeWrapper>
        <PageWrapper>
          <TopSectionWrapper>
            <div>
              <h1>Privacy Statement</h1>
            </div>
          </TopSectionWrapper>
          <Container size='md' sx={{marginTop: 80, marginBottom: 80, overflowWrap: 'break-word'}}>
            <div dangerouslySetInnerHTML={{ __html: queryData?.allContentfulPrivacyStatement?.nodes[0]?.privacyPolicy?.childMarkdownRemark?.html}} />
          </Container>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default Privacy;