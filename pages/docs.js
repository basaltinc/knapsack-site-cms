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

const oldDocs = () => (
  <>
    <h1>Bedrock Documentation</h1>
    <p>
      Welcome to Bedrock! Bedrock is an open source, scalable platform ideal for
      multi-brand design systems. Using Bedrock, you can get your own design
      system up and running quickly.
    </p>
    <br />
    <hr />
    <Doc>
      <h2>Getting Started</h2>
      <SubDoc>
        <h3 id="requirements">Requirements</h3>
        <a
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          node.js 8+
        </a>
      </SubDoc>
      <SubDoc>
        <h3 id="install">Installation</h3>
        <p>
          In your terminal, run the following commands, replacing
          <code> my-design-system </code> with the name of your design system:
        </p>
        <Code>
          npx create-bedrock my-design-system <br />
          cd my-design-system <br />
          npm install <br />
          npm start <br />
        </Code>
        <p>
          Navigate to <a href="http://localhost:3999">http://localhost:3999</a>{' '}
          in your browser.
        </p>
      </SubDoc>
      <SubDoc>
        <h3 id="cli">CLI</h3>
        <p>In your terminal, use following commands:</p>
        <br />
        <p>
          <code>npm start</code> - Compile, start all watches and local server
        </p>
        <p>
          <code>npm run build</code> - Compile with compression turned on
        </p>
        <p>
          <code>npm run serve</code> - Start server
        </p>
      </SubDoc>
    </Doc>
    <hr />
    <Doc>
      <h2>Design Tokens</h2>
      <p>
        Design tokens are a way to store visual information (CSS) in organized
        bundles. Bedrock is set up to use design tokens using{' '}
        <a
          href="https://www.npmjs.com/package/theo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Theo
        </a>
        . As your design system grows, design tokens allow for scalability and{' '}
      </p>
      <SubDoc>
        <h3 id="design-tokens">Connecting Design Tokens</h3>
        <p>Connect your design tokens like this:</p>
      </SubDoc>
    </Doc>
    <hr />
    <Doc>
      <h2 id="patterns">Patterns</h2>
      <p>
        Patterns are the bread and butter of your design system. Blah blah blah
        blah
      </p>
      <SubDoc>
        <h3>Something</h3>
        <p>More about that something</p>
      </SubDoc>
    </Doc>
    <hr />
  </>
);

export default withRouter(DocsPage);
