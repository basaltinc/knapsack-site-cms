import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/Page';

const Documentation = styled.div`
  // padding: 4rem;
`;

const DocSidebar = styled.aside`
  position: fixed;
  width: 200px;
  background-color: red;
  height: 100%;
`;

export default () => (
  <Page>
    <DocSidebar>
      <h4>Documentation</h4>
    </DocSidebar>
    <Documentation>
      <h1>Bedrock Documentation</h1>
    </Documentation>
  </Page>
);
