import React, { Component } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Header from './Header';
import Meta from './Meta';

const theme = {
  primary: '#3A8493',
  secondary: '#4CB5C1',
  tertiary: '#ACDFDF',
  accent: '#C7EB36',
  light: 'E4ECC2',
  black: '#393939',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  bs: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
};

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: Arial;
    font-weight: normal;
    font-style: normal;
  }
  html {
      box-sizing: border-box;
      font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

const StyledPage = styled.div`

`;

class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <GlobalStyles />
          <Header />
          {this.props.children}
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
