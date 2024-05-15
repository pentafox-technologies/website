import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import BenefitsSection from "../components/Benefits/BenefitsSection";
import { HeaderData } from "../components/head/Head";
import { HomeWrapper } from "../components/home/home.css";
import JobsList from "../components/JobsList/JobsList";
import LayoutCommon from "../components/layout/layoutCommon";
import { CareersContent } from "../components/pageWrapper/careers.css";
import PageWrapper, {
  TopSectionWrapper,
} from "../components/pageWrapper/PageWrapper";
import { Container, Text, Title } from "@mantine/core";

export const Head = () => {
  return (
    <HeaderData pageTitle="Careers" />
  )
}

const Careers = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulJobs(sort: {fields: createdAt}) {
        nodes {
          title
          tags
          skills
          location
          shortDescription
          jobType
          education
          experience
          jobDescription {
            jobDescription
          }
          profile {
            profile
          }
        }
      }
      allContentfulBenefits(sort: { fields: createdAt }) {
        nodes {
          title
          imageUrl
        }
      }
    }
  `);

  return (
    <LayoutCommon hideLink showCareers={false} showDarkLogo={true} headProps={{pageTitle: 'Careers'}} showBanner={true} >
      <HomeWrapper>
        <PageWrapper>
          {/* <TopSectionWrapper> */}

          <Container size={1200}
            py={40}
            px={0}
            style={{height: '50vh', display: 'flex', alignItems: 'center', margin: '0 auto'}}>
            <div style={{textAlign: 'center', width: '100%'}}>
              <Title variant="gradient" gradient={{ from: 'red', to: 'pink', deg: 90 }} size={52}>Wanna work on right things?</Title>
              <Text size={24}>Come join us and grow with us!</Text>
            </div>
          </Container>

            {/* <div className="container lg-container">
              <h1>Wanna work on right things?</h1>
              <p>Come join us and grow with us!</p>
            </div> */}
          {/* </TopSectionWrapper> */}

          <BenefitsSection
            title="Benefits @ Pentafox"
            description="Thoughtfully packaged benefits that enhance the lifestyle for every employee keeping in mind their physical and mental wellbeing. Financial wellness is also competitive enough to make it easy for every employee to take good care of self and family (now, and in the future) and so we can build for everyone, together."
            data={queryData.allContentfulBenefits.nodes}
          />

          <div className="container lg-container">
            <CareersContent>
              <h2 className="heading text-center">Current opportunities</h2>
              <p className="text-center">
                We are proud to be an equal opportunity workplace and an
                affirmative action employer.
              </p>

              <JobsList data={queryData.allContentfulJobs.nodes} />

              <div className="job-email text-center">
                <p>
                  Email your CV to{" "}
                  <a href="mailto:jobs@pentafox.in" title="Email us">
                    jobs@pentafox.in
                  </a>{" "}
                  with &lt;Job-Title&gt; as subject.
                </p>
              </div>
            </CareersContent>
          </div>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default Careers;
