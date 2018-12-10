import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import getConfig from 'next/config';
import styled from 'styled-components';
import Page from '../layouts/Page';
import { docCategories } from '../data/settings';

const { publicRuntimeConfig } = getConfig();
const { docs } = publicRuntimeConfig;

export const Wrapper = styled.div`
  display: block;
  @media (min-width: 650px) {
    display: flex;
  }
  position: relative;
  hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid ${props => props.theme.lightGrey};
  }
  a {
    &:hover {
      text-decoration: ${props => props.theme.accent} underline;
    }
  }
`;

export const DocSidebar = styled.aside`
  text-align: left;
  justify-content: space-between;
  padding: 2rem;
  @media (min-width: 800px) {
    width: 20%;
    border-right: 1px solid ${props => props.theme.lightGrey};
  }
`;

export const CategoryWrapper = styled.div`
  padding: 0 0 2rem 0;
  a {
    display: block;
    cursor: pointer;
  }
`;

export const Category = styled.p`
  font-weight: bold;
  margin-top: 2rem;
`;

export const SubCategory = styled.a`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Docs = styled.div`
  padding: 2rem;
  max-width: 1200px;
  p,
  a {
    font-size: 2rem;
  }
  pre {
    margin: 2rem 0;
  }
  @media (min-width: 800px) {
    flex-grow: 1;
  }
`;

/* eslint-disable react/prop-types, no-unused-vars */
const DocsPage = props => {
  let [doc] = docs;
  if (props.router.query.item) {
    doc = docs.find(d => d.id === props.router.query.item);
  }
  return (
    <Page>
      <Wrapper>
        <DocSidebar>
          <Category>Documentation</Category>
          <CategoryWrapper>
            {docCategories.map(category => (
              <React.Fragment key={category.category}>
                <Category key={category.category}>{category.category}</Category>
                {category.docs.map(docItem => {
                  const theDoc = docs.find(d => d.data.title === docItem.doc);
                  return (
                    <div key={theDoc.id}>
                      <Link href={`/docs/${theDoc.id}`}>
                        <SubCategory>{theDoc.data.title}</SubCategory>
                      </Link>
                    </div>
                  );
                })}
              </React.Fragment>
            ))}
          </CategoryWrapper>
        </DocSidebar>
        <Docs>
          <h2>{doc.data.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: doc.content }} />
        </Docs>
      </Wrapper>
    </Page>
  );
};

export default withRouter(DocsPage);
