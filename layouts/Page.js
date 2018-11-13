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
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  h3 {
    font-size: 4rem;
  }
  h4 {
    font-size: 3.2rem;
  }
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const StyledPage = styled.div``;

const Page = props => (
  <ThemeProvider theme={theme}>
    <>
      <StyledPage>
        <GlobalStyle />
        <Meta />
        <Header />
        <>{props.children}</>
      </StyledPage>
      <Footer />
    </>
  </ThemeProvider>
);

Page.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Page;
