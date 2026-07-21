import React from 'react'
import LayoutCommon from '../components/layout/layoutCommon'
import { HomeWrapper } from '../components/home/home.css'
import PageWrapper, { TopSectionWrapper } from '../components/pageWrapper/PageWrapper'
import { Container, Title } from '@mantine/core'
import { graphql, useStaticQuery } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';
import { RichTextWrapper } from './staticPage.css';

// Wrap tables so wide ones scroll instead of overflowing on mobile.
const richTextOptions = {
  renderNode: {
    [BLOCKS.TABLE]: (node, children) => (
      <div className="rich-text-table-scroll">
        <table>{children}</table>
      </div>
    ),
  },
};

export const query = graphql`
query ($slug: String!) {
  contentfulStaticPage(slug: {eq: $slug}) {
    title
    slug
    shortDescription {
      shortDescription
    }
    content {
      raw
    }
  }
}`

const StaticPage = (props) => {
  const { content } = props.data.contentfulStaticPage;
  const contentJson = JSON.parse(content.raw);
  const richTextComponents = documentToReactComponents(contentJson, richTextOptions)
  
  return (
    <LayoutCommon hideLink showCareers={false} showDarkLogo={false} headProps={{ pageTitle: 'title'}} headerColor='rgb(230,68,68)' lightLinks >
      <HomeWrapper>
        <PageWrapper>
          <TopSectionWrapper>
            <Container>
              <Title>{props.data.contentfulStaticPage.title}</Title>
            </Container>
          </TopSectionWrapper>
          <Container size='md' sx={{marginTop: 80, marginBottom: 80, overflowWrap: 'break-word'}}>
            <RichTextWrapper>{richTextComponents}</RichTextWrapper>
          </Container>
        </PageWrapper>
      </HomeWrapper>
    </LayoutCommon>
  )
}

export default StaticPage