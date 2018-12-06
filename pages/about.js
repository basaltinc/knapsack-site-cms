import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/Page';
import { title, intro, body, features, postFeaturesCopy } from '../data/about';

const About = styled.div`
  &:before {
    content: '';
    display: block;
    height: 125px;
    width: 100%;
    margin: 0 50px 0 0;
    background: linear-gradient(
      to right bottom,
      ${props => props.theme.primaryExtra} 49.9%,
      transparent 50.1%
    );
  }
`;

const Hero = styled.div`
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary} 0,
    ${props => props.theme.primaryExtra}
  );
  padding: 10rem 2rem 5rem;
  color: ${props => props.theme.light};
  text-align: center;
`;

const Inner = styled.div`
  max-width: 1300px;
  padding: 0 3rem;
  margin: 0 auto;
  h3 {
    padding: 1rem 4rem;
    max-width: 900px;
    margin: 0 auto 5rem;
    text-align: justify;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  margin: 4rem auto;
  flex-flow: row wrap;
  align-content: center;
`;
const Feature = styled.div`
  padding: 1rem;
  p {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

export default () => (
  <Page>
    <Hero>
      <h1>{title}</h1>
    </Hero>
    <About>
      <Inner>
        <h3>{intro}</h3>
        <p>{body}</p>
        <Features>
          {features.map(feature => (
            <Feature key={feature.title}>
              <p>{feature.title}</p>
              <ul>
                {feature.items &&
                  feature.items.map(item => <li key={item}>item</li>)}
              </ul>
            </Feature>
          ))}
        </Features>
        <p>{postFeaturesCopy}</p>
      </Inner>
    </About>
  </Page>
);
