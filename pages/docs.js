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
    //z-index: -1;
  }
`;

export const CategoryWrapper = styled.div`
  padding: 1rem 0;
  a {
    display: block;
    cursor: pointer;
  }
`;

export const Category = styled.p`
  font-size: 2rem;
  font-weight: bold;
`;

export const SubCategory = styled.a`
  font-size: 1.5rem;
  font-weight: normal;
`;

export const Docs = styled.div`
  padding: 2rem;
  @media (min-width: 650px) {
    flex-grow: 1;
    margin-left: 20%;
  }
`;

export const Doc = styled.div`
  margin: 3rem 0 3rem;
`;

export const SubDoc = styled.div`
  margin: 2rem 0;
`;

export const Code = styled.code`
  display: block;
  background-color: ${props => props.theme.grey};
  color: ${props => props.theme.light};
  margin: 2rem 0;
  padding: 2rem;
`;

/* eslint-disable react/prop-types, no-unused-vars */
const DocsPage = props => {
  let [doc] = docs;
  if (props.router.query.item) {
    doc = docs.find(d => d.id === props.router.query.item);
  }

  console.log({ docs, doc });
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
