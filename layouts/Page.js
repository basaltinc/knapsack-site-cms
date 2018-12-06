import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Meta from '../components/Meta';

const theme = {
  primary: '#1a1f4c',
  primaryExtra: '#343e98',
  secondary: '#f5a426',
  tertiary: '#364852',
  accent: '#7faba8',
  light: '#f8f8f8',
  black: '#393939',
  grey: '#3A3A3A',
  lightGrey: '#E1E1E1',
  bs: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: Avenir;
    font-weight: normal;
    font-style: normal;
    min-height: 100vh;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    line-height: 1.3;
  }
  img {
    max-width: 100%;
    height:auto;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  p {
    font-size: 1.8rem;
  }
  h1 {
    font-size: 4.8rem;
  }
  h2 {
    font-size: 3.6rem;
  }
  h3 {
    font-size: 2.8rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const StyledPage = styled.div`
  min-height: 100%;
  position: relative;
`;

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 175px;
  min-height: 100vh;
  grid-template-areas:
    'header'
    'main'
    'footer';
  @media (max-width: 900px) {
    grid-template-rows: auto 1fr auto;
  }
`;

const Body = styled.div`
  position: relative;
  grid-area: main;
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <StyledPage>
      <GlobalStyle />
      <Meta />
      <PageWrapper>
        <Header />
        <Body>{props.children}</Body>
        <Footer />
      </PageWrapper>
    </StyledPage>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
