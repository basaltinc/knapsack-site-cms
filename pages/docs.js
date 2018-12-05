import React from 'react';
import { withRouter } from 'next/router';
import Link from 'next/link';
import getConfig from 'next/config';
import styled from 'styled-components';
import Page from '../layouts/Page';

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
  @media (min-width: 650px) {
    position: fixed;
    width: 20%;
    height: 100%;
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
  @media (min-width: 650px) {
    flex-grow: 1;
    margin-left: 20%;
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
          <CategoryWrapper>
            <Category>Documentation</Category>
            {docs.map(docItem => (
              <div key={docItem.id}>
                <Link
                  href={{
                    pathname: '/docs',
                    query: {
                      item: docItem.id,
                    },
                  }}
                >
                  <SubCategory>{docItem.data.title}</SubCategory>
                </Link>
              </div>
            ))}
          </CategoryWrapper>
        </DocSidebar>
        <Docs>
          <div dangerouslySetInnerHTML={{ __html: doc.content }} />
        </Docs>
      </Wrapper>
    </Page>
  );
};

export default withRouter(DocsPage);
