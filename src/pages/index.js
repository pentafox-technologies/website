import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { HomeWrapper } from "../components/home/home.css";
import LayoutCommon from "../components/layout/layoutCommon";
import HeroSection from "../components/heroSection/heroSection";
import ContentSection from "../components/contentSection/contentSection";
import Clients from "../components/clientSection/clients";
import { HeaderData } from "../components/head/Head";
import AviationImg from "../about_assets/Aviation.png";
import walaneImg from "../about_assets/Solution_Walane.png";
import fastKycImg from "../about_assets/FastKyc-image.png";
import digiOps from "../about_assets/Digiops2.png";
import aerviaImg1 from "../about_assets/aervia-image-1.png";
import aerviaImg2 from "../about_assets/aervia-image-2.png";
import walaneImg1 from "../about_assets/walane-image-1.png";
import walaneImg2 from "../about_assets/walane-image-2.png";
import fastkycImg1 from "../about_assets/fastkyc-image-1.png";
import fastkycImg2 from "../about_assets/fastkyc-image-2.png";
import digiopsImg1 from "../about_assets/digiops-image-1.png";
import digiopsImg2 from "../about_assets/digiops-image-2.png";

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

        <h3 style={{ textAlign: "center", marginTop: "10px", color: "#CD0E11" }}>Our Products</h3>

        <ContentSection
          id="Aervia-smart"
          isPoint={true}
          rightSide={false}
          heading="Aervia – Smart Aviation Operations Suite"
          description={`
            Aervia is Pentafox’s flagship aviation operations platform designed to streamline airline operations and improve workforce coordination using AI/ML-driven intelligence.

            It combines intelligent operational modules with advanced Workforce Management (WFM) to plan manpower, automate workflows, and enhance operational visibility.

            Aervia enables airlines to optimize resources, improve efficiency, and ensure reliable execution across flight, ground, and business functions.
            
            At Pentafox, our goal is to help airlines operate smarter, faster, and more efficiently through purpose-built technology.`}
          discoverLabel="Discover More"
          image1={aerviaImg1}
          image2={aerviaImg2}
          route="/pentafox-portfolio"
          routerState={{filter: "aviation"}}
        />
        <ContentSection
          id="Walane-ai"
          rightSide={true}
          isPoint={true}
          heading="Walane AI Business Automation"
          description={`
            Walane is Pentafox’s intelligent conversational AI platform designed to automate customer interactions and improve engagement across digital channels.
            
            It combines AI-powered chatbots with workflow automation to handle customer support, sales, onboarding, and service requests efficiently and at scale.
            
            Walane enables organizations to streamline communication, reduce manual effort, and deliver faster, more consistent customer experiences across WhatsApp, web, and mobile platforms.
            
            At Pentafox, our goal is to help businesses operate smarter, faster, and more efficiently through AI-driven automation.
            `}
          discoverLabel="Discover More"
          singleImage={walaneImg}
          route="https://www.walane.ai/"
          openAnotherTab
        />
        <ContentSection
          id="fastKYC-platform"
          rightSide={false}
          isPoint={true}
          heading="FastKYC Platform"
          description={`
            FastKYC is Pentafox’s digital identity verification platform designed to simplify and automate customer onboarding and compliance processes.
            
            It combines secure document capture, automated verification workflows, and centralized record management to ensure accurate and compliant identity validation.
            
            FastKYC enables organizations to accelerate onboarding, improve compliance visibility, and reduce manual verification effort while maintaining secure and audit-ready records.
            
            At Pentafox, our goal is to help businesses onboard customers faster, safer, and more efficiently through intelligent digital verification solutions.
            `}
          discoverLabel="Discover More"
          image1={fastkycImg1}
          image2={fastkycImg2}
          route="https://www.fastkyc.com/"
          openAnotherTab
        />

        <ContentSection
          id="digiops"
          rightSide={true}
          isPoint={true}
          heading="Digital Lending Platform - LMS,LOS,DDMS"
          description={`
            Pentafox’s Digital Lending Platform is an end-to-end solution designed to transform and streamline lending operations for Banks, NBFCs, FinTechs, and financial institutions.
            
            It combines Loan Origination System (LOS), Loan Management System (LMS), and Digital Document Management System (DDMS) to automate the complete lending lifecycle—from onboarding and loan processing to servicing and collections.
            
            The platform enables organizations to accelerate loan processing, improve operational efficiency, strengthen credit risk controls, and ensure seamless management across origination, servicing, and compliance workflows.
            
            At Pentafox, our goal is to help financial institutions operate smarter, faster, and more efficiently through intelligent digital lending solutions.
            `}
          discoverLabel="Discover More"
          image1={digiopsImg1}
          image2={digiopsImg2}
          route="https://digiops.in/"
          openAnotherTab
        />

        <h3 style={{ textAlign: "center", marginTop: "10px", color: "#CD0E11" }}>Our Services</h3>

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
              rightSide={index % 2 !== 0}
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
