import React from 'react';
import Page from '../layouts/Page';
import {
  Wrapper,
  CategoryWrapper,
  Category,
  DocSidebar,
  Documentation,
  SubCategory,
  SubDoc,
  Doc,
  Code,
} from './documentation.styles';

export default () => (
  <Page>
    <Wrapper>
      <DocSidebar>
        <CategoryWrapper>
          <Category>Getting Started</Category>
          <SubCategory href="#requirements">Requirements</SubCategory>
          <SubCategory href="#install">Install</SubCategory>
          <SubCategory href="#cli">CLI</SubCategory>
        </CategoryWrapper>
        <CategoryWrapper>
          <Category>Design Tokens</Category>
          <SubCategory href="#design-tokens">Introduction</SubCategory>
        </CategoryWrapper>
        <CategoryWrapper>
          <Category>Patterns</Category>
          <SubCategory href="#patterns">Introduction</SubCategory>
        </CategoryWrapper>
      </DocSidebar>
      <Documentation>
        <h1>Bedrock Documentation</h1>
        <p>
          Welcome to Bedrock! Bedrock is an open source, scalable platform ideal
          for multi-brand design systems. Using Bedrock, you can get your own
          design system up and running quickly.
        </p>
        <br />
        <hr />
        <Doc>
          <h2>Getting Started</h2>
          <SubDoc>
            <h3 id="requirements">Requirements</h3>
            <a href="https://nodejs.org/en/" target="_blank">
              node.js 8+
            </a>
          </SubDoc>
          <SubDoc>
            <h3 id="install">Installation</h3>
            <p>
              In your terminal, run the following commands, replacing
              <code> my-design-system </code> with the name of your design
              system:
            </p>
            <Code>
              npx create-bedrock my-design-system <br />
              cd my-design-system <br />
              npm install <br />
              npm start <br />
            </Code>
            <p>
              Navigate to{' '}
              <a href="http://localhost:3999">http://localhost:3999</a> in your
              browser.
            </p>
          </SubDoc>
          <SubDoc>
            <h3 id="cli">CLI</h3>
            <p>In your terminal, use following commands:</p>
            <br />
            <p>
              <code>npm start</code> - Compile, start all watches and local
              server
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
          <p>Design tokens are a way to store visual information (CSS) in organized bundles. Bedrock is set up to use design tokens using <a href="https://www.npmjs.com/package/theo">Theo</a>. As your design system grows, design tokens allow for scalability and </p>
          <SubDoc>
            <h3 id="design-tokens">Connecting Design Tokens</h3>
            <p>Connect your design tokens like this:</p>
          </SubDoc>
        </Doc>
        <hr />
        <Doc>
          <h2 id="patterns">Patterns</h2>
          <p>
            Patterns are the bread and butter of your design system. Blah blah
            blah blah
          </p>
          <SubDoc>
            <h3>Something</h3>
          </SubDoc>
        </Doc>
        <hr />
      </Documentation>
    </Wrapper>
  </Page>
);
