import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import HeroSection from "../components/heroSection/heroSection";
import ContentSection from "../components/contentSection/contentSection";
import Clients from "../components/clientSection/clients";
import { HeaderData } from "../components/head/Head";
import AviationImg from "../about_assets/Aviation.png";

export const Head = () => {
  return <HeaderData />;
};

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
    query {
      allContentfulServices(sort: { fields: createdAt }) {
        nodes {
          title
          description {
            description
          }
          shortDescription
          image1
          image2
          discoverLabel
          portfolioRoute
        }
      }
      allContentfulSubServices(sort: { fields: createdAt }) {
        nodes {
          title
          description
          icon
          parentServiceName
        }
      }
      allContentfulClientContent {
        nodes {
          title
          description {
            description
          }
        }
      }
      allContentfulPartnerContent {
        nodes {
          title
          description {
            description
          }
        }
      }
      allContentfulClientsAndPartners(sort: { fields: createdAt }) {
        nodes {
          name
          logoUrl
          parentSection
          size
          order
        }
      }
    }
  `);

  return (
    <LayoutCommon
      showCareers={false}
      showDarkLogo
      headerColor="rgb(255, 245, 245)"
      showHome={false}
    >
      <HomeWrapper>
        {/* HERO SECTION */}
        <HeroSection contentData={queryData.allContentfulServices.nodes} />

          <h3 style={{ textAlign: "center", marginTop: "10px" }}>Our Products</h3>


        <ContentSection
          id="Aervia-smart"
          rightSide={true}
          listWithIcons={true}
          heading="Aervia – Smart Aviation Operations Suite"
          description={`Aervia is Pentafox’s flagship aviation operations platform designed to streamline airline operations and improve workforce coordination.
It combines intelligent operational modules with advanced Workforce Management (WFM) to plan manpower, automate workflows, and enhance operational visibility.
Aervia enables airlines to optimize resources, improve efficiency, and ensure reliable execution across flight, ground, and business functions.`}
          discoverLabel="Explore Aviation Work"
          image1={AviationImg}
          image2={AviationImg}
          route="/pentafox-portfolio"
          category={[
            {
              title: "Workforce Management (WFM)",
              description:
                "Intelligent manpower planning and rostering platform that converts headcount into optimized rosters, shifts, and task assignments based on flight schedules, operational rules, and real-time demand.",
            },
            {
              title: "Operations Management",
              description:
                "Centralized tools to monitor and manage flight operations, ground activities, and operational workflows, ensuring smooth coordination and real-time operational visibility.",
            },
            {
              title: "Pricing & Revenue Management",
              description:
                "Automated pricing and revenue optimization tools that help airlines manage fare strategies, analyze demand, and improve revenue performance.",
            },
            {
              title: "Inflight & Booking Management",
              description:
                "Integrated systems to manage inflight services, passenger bookings, and operational support workflows, improving efficiency and enhancing passenger experience.",
            },
          ]}
        />
        <ContentSection
          id="Walane-ai"
          rightSide={false}
          listWithIcons={true}
          heading="Walane AI Business Automation"
          description={`Walane is an AI-powered conversational platform designed to automate customer interactions across channels like WhatsApp, web, and mobile. It helps businesses improve customer engagement, automate support and sales workflows, and deliver faster, more intelligent responses using conversational AI and automation.`}
          discoverLabel="Explore Walane"
          image1={AviationImg}
          image2={AviationImg}
          route="https://www.walane.ai/"
          category={[
            {
              title: "Conversational AI",
              description:
                "Build intelligent chatbots that understand user intent, respond naturally, and automate customer support, sales, and service workflows.",
            },
            {
              title: "Workflow Automation",
              description:
                "Automate repetitive business processes, customer journeys, notifications, and task execution using configurable conversation-driven workflows.",
            },
            {
              title: "Multi-Channel Integration",
              description:
                "Engage customers across WhatsApp, web, mobile apps, and enterprise systems, ensuring seamless and consistent communication experiences.",
            },
            {
              title: "Analytics & Insights",
              description:
                "Track conversations, user behavior, and engagement metrics with real-time dashboards to improve performance and optimize customer interactions.",
            },
          ]}
        />
        <ContentSection
          id="fastKYC-platform"
          rightSide={true}
          listWithIcons={true}
          heading="FastKYC Platform"
          description={`FastKYC is a digital identity verification platform that enables businesses to securely onboard customers through automated KYC workflows. It simplifies identity verification using WhatsApp and web-based interactions, helping organizations improve onboarding speed, ensure regulatory compliance, and reduce manual verification effort.`}
          discoverLabel="Explore FastKYC Platform"
          image1={AviationImg}
          image2={AviationImg}
          route="https://www.fastkyc.com/"
          category={[
            {
              title: "WhatsApp KYC Verification",
              description:
                "Enable customers to complete KYC directly through WhatsApp with guided, secure, and user-friendly identity verification workflows.",
            },
            {
              title: "Automated Identity Processing",
              description:
                "Automatically capture, validate, and verify customer identity documents, reducing manual effort and accelerating onboarding processes.",
            },
            {
              title: "Secure Document & Data Management",
              description:
                "Store and manage KYC records securely with centralized access, ensuring data integrity, privacy, and compliance with regulatory requirements.",
            },
            {
              title: "Compliance & Audit Trail",
              description:
                "Maintain complete audit-ready records of customer verification activities, ensuring transparency, traceability, and regulatory compliance.",
            },
          ]}
        />

        {/* ===== CONTENTFUL SERVICES ===== */}
        {queryData.allContentfulServices.nodes?.map((item, index) => {
          {
            console.log(
              queryData.allContentfulSubServices.nodes.filter(
                (v) => v?.parentServiceName === item.title,
              ),
            );
          }
          return (
            <ContentSection
              key={index}
              id={index}
              rightSide={index % 2}
              listWithIcons
              heading={item.title}
              description={item?.description?.description}
              category={queryData.allContentfulSubServices.nodes.filter(
                (v) => v?.parentServiceName === item.title,
              )}
              image1={item?.image1}
              image2={item?.image2}
              discoverLabel={item?.discoverLabel}
              route={item?.portfolioRoute}
            />
          );
        })}

        {/* ===== CLIENTS SECTION ===== */}
        <Clients
          clientSectionData={queryData.allContentfulClientContent.nodes[0]}
          partnerSectionData={queryData.allContentfulPartnerContent.nodes[0]}
          clientsAndPartnersData={queryData?.allContentfulClientsAndPartners?.nodes?.sort(
            (a, b) => b.order - a.order,
          )}
        />
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default IndexPage;
