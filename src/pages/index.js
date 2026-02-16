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

        {/* ===== CONTENTFUL SERVICES ===== */}
        {queryData.allContentfulServices.nodes?.map((item, index) => {
          return (
            <ContentSection
              key={index}
              id={index}
              rightSide={index % 2}
              listWithIcons
              heading={item.title}
              description={item?.description?.description}
              category={queryData.allContentfulSubServices.nodes.filter(
                (v) => v?.parentServiceName === item.title
              )}
              image1={item?.image1}
              image2={item?.image2}
              discoverLabel={item?.discoverLabel}
              route={item?.portfolioRoute}
            />
          );
        })}

        {/* ===== AVIATION STATIC SECTION ===== */}
        <ContentSection
          id="aviation-static"
          rightSide={1}
          listWithIcons={false}
          heading="Aervia Digital Platforms"
          description={`Pentafox is a technology company focused on building digital solutions for aviation operations. We develop centralized platforms that help airlines manage flight operations, crew, passengers, assets, procurement, and revenue workflows efficiently.

Our systems replace manual processes with automated, real-time, and reliable technology, improving operational visibility, safety, and decision-making. We design every solution to meet real-world aviation needs, ensuring scalability, compliance, and seamless coordination across teams.

At Pentafox, our goal is to help airlines operate smarter, faster, and more efficiently through purpose-built technology.`}
          discoverLabel="Explore Aviation Work"
          image1={AviationImg}
          image2={AviationImg}
          route="/pentafox-portfolio"
        />

        {/* ===== CLIENTS SECTION ===== */}
        <Clients
          clientSectionData={queryData.allContentfulClientContent.nodes[0]}
          partnerSectionData={queryData.allContentfulPartnerContent.nodes[0]}
          clientsAndPartnersData={queryData?.allContentfulClientsAndPartners?.nodes?.sort(
            (a, b) => b.order - a.order
          )}
        />
      </HomeWrapper>
    </LayoutCommon>
  );
};

export default IndexPage;
