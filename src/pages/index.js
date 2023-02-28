import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { HomeWrapper } from "../components/home/home.css";
import LayoutHome from "../components/layout/layoutHome";
import HeroSection from "../components/heroSection/heroSection";
import ContentSection from "../components/contentSection/contentSection";
import Clients from "../components/clientSection/clients";
import { HeaderData } from "../components/head/Head";

export const Head = () => {
  return (
    <HeaderData />
  )
}

const IndexPage = () => {
  const queryData = useStaticQuery(graphql`
  query {
    allContentfulServices(sort: {fields: createdAt}) {
      nodes {
        title
        description {
          description
        }
        shortDescription
        image1
        image2
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
      }
    }
  }
  `);

  return (
    <LayoutHome showCareers={false}>
      <HomeWrapper>
        <HeroSection contentData={queryData.allContentfulServices.nodes} />
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
                (v, i) => {
                  return v?.parentServiceName == item.title;
                }
              )}
              image1={item?.image1}
              image2={item?.image2}
            />
          );
        })}
        <Clients
          clientSectionData={queryData.allContentfulClientContent.nodes[0]}
          partnerSectionData={queryData.allContentfulPartnerContent.nodes[0]}
          clientsAndPartnersData={
            queryData.allContentfulClientsAndPartners.nodes
          }
        />
      </HomeWrapper>
    </LayoutHome>
  );
};

export default IndexPage;
