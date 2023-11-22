import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { IconArrowNarrowRight } from '@tabler/icons-react'
import { HeaderData } from "../components/head/Head";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import { CareersContent } from "../components/pageWrapper/careers.css";
import PageWrapper, {
  TopSectionWrapper,
} from "../components/pageWrapper/PageWrapper";
import { Button, Container, Text, Title } from "@mantine/core";
import InternshipSection, { INTERNSHIP_SECTION_VARIANT } from "../components/Internship/InternshipSection";

export const Head = () => {
  return (
    <HeaderData pageTitle="Internship - Pentafox" />
  )
}

function isToday(date) {
  const today = new Date();

  // 👇️ Today's date
  console.log(today);

  if (
    today.getFullYear() === date.getFullYear() &&
    today.getMonth() === date.getMonth() &&
    today.getDate() === date.getDate()
  ) {
    return true;
  }

  return false;
}

const ApplyButton = ({ variant="light" }) => {
  
  if (isToday(new Date('2023-08-10'))) {
    if (variant === "dark") return null

    return <Button
      color="red.1"
      sx={(theme) => ({
        color: theme.colors.red[8],
        ":hover": {
          backgroundColor: theme.white,
          color: theme.colors.red[9]
        }
      })}
    >All seats are occupied!</Button>
  }

  let btnProps = {};

  if (variant === "dark") {
    btnProps = {
      size: 'lg',
      sx: (theme) => ({
        color: theme.white,
        backgroundColor: theme.colors.red[9],
        ":hover": {
          border: '1px solid',
          borderColor: theme.colors.red[9],
          backgroundColor: theme.white,
          color: theme.colors.red[9]
        }
      })
    }
  }

  return (
    <Button
      // size="lg"
      rightIcon={<IconArrowNarrowRight />}
      color="red.1"
      component="a"
      href="https://rzp.io/l/pentafox-summer-internship"
      sx={(theme) => ({
        color: theme.colors.red[8],
        ":hover": {
          backgroundColor: theme.white,
          color: theme.colors.red[9]
        }
      })}
      {...btnProps}
    >Apply Now</Button>
  )
}


const Internship = () => {
  return (
    <LayoutCommon hideLink showCareers={false} showDarkLogo={false} headProps={{pageTitle: 'Internship'}} headerColor="rgb(230,68,68)" lightLinks >
      <HomeWrapper>
        <PageWrapper>
          <TopSectionWrapper>
            <Container my={'lg'}>
              <Title order={1}>4-Week Internship</Title>
              <p>Explore Your Passion and Expand Your Skills</p>
              <ApplyButton />
            </Container>
          </TopSectionWrapper>

          <InternshipSection
            variant={INTERNSHIP_SECTION_VARIANT.gray}
            title="Explore Your Path: Internship Tracks"
            description="Choose your desired track and embark on a journey of skill development and practical application in your chosen field."
            data={[
              {
                title: "Business Analysis",
                description: "Analyze business processes, gather requirements, and propose solutions. Enhance problem-solving and critical thinking skills."
              },
              {
                title: "Data Engineering with Python",
                description: "Learn data processing, manipulation, and analysis using Python. Build data pipelines and enhance skills in data wrangling."
              },
              {
                title: "Mobile App Development",
                description: "Dive into mobile app development for iOS and Android. Learn the app development lifecycle and create user-friendly mobile applications."
              },
              {
                title: "Platform Engineering",
                description: "Understand cloud computing and infrastructure management. Gain experience with platforms like AWS, GCP, or Azure."
              },
              {
                title: "Web Development",
                description: "Develop dynamic websites using HTML, CSS, and JavaScript. Gain hands-on experience with back-end and front-end development."
              },
            ]}
          >
            <ApplyButton variant="dark" />
          </InternshipSection>

          <InternshipSection
            variant={INTERNSHIP_SECTION_VARIANT.white}
            title="Why Choose Our Internship Program?"
            description="Join our 4-Week Internship program. Gain hands-on experience, mentorship from industry experts, and enhance your career prospects. Choose your track: Business Analysis, Data Engineering, Mobile App Development, Platform Engineering, or Web Development. Apply now and unlock your potential!"
            data={[
              {
                title: "Hands-on experience in real-world projects",
              },
              {
                title: "Mentorship from industry professionals",
              },
              {
                title: "Tailored learning in the chosen internship track",
              },
              {
                title: "Networking opportunities with industry experts",
              },
              {
                title: "Enhancing problem-solving and critical thinking skills",
              },
              {
                title: "Strengthening resumes for future career prospects",
              }
            ]}
          />

          <InternshipSection
            title="About This Internship Program"
            // description="Join our 4-Week Internship program. Gain hands-on experience, mentorship from industry experts, and enhance your career prospects. Choose your track: Business Analysis, Data Engineering, Mobile App Development, Platform Engineering, or Web Development. Apply now and unlock your potential!"
            data={[
              {
                title: "Mode",
                description: "Online & Remote"
              },
              {
                title: "Duration",
                description: "4 Weeks"
              },
              {
                title: "Certificate",
                description: "Yes, on successful completion!"
              },
              {
                title: "Start Date",
                description: "Will be shared over email"
              }
            ]}
          >
            <ApplyButton variant="dark" />
          </InternshipSection>

        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default Internship;
