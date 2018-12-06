import React from 'react';
import styled from 'styled-components';
import Page from '../layouts/Page';
import {
  title,
  intro,
  body,
  features,
  postFeaturesCopy,
} from '../data/features-page';
import MediaCard from '../components/MediaCard';
import { ButtonsWrapper } from '../components/styles/Utils';
import Button from '../components/Button';
import { github } from '../data/settings';

const Features = styled.div`
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
  padding: 0 3rem 5rem;
  margin: 0 auto;
  h3 {
    padding: 1rem 4rem;
    max-width: 900px;
    margin: 0 auto 5rem;
    text-align: justify;
  }
`;

const FeaturesWrapper = styled.div`
  padding: 5rem 0;
`;

export default () => (
  <Page>
    <Hero>
      <h1>{title}</h1>
    </Hero>
    <Features>
      <Inner>
        <h3>{intro}</h3>
        <p>{body}</p>
        <FeaturesWrapper>
          {features.map(feature => (
            <>
              <MediaCard
                horizontal
                textAlign="left"
                key={feature.imgSrc}
                imgSrc={feature.imgSrc}
                title={feature.title}
                copy={feature.copy}
              />
              <br />
            </>
          ))}
        </FeaturesWrapper>
        <p>{postFeaturesCopy}</p>
        <ButtonsWrapper>
          <Button isInverted link={github}>
            GitHub
          </Button>
          <Button link="/docs">Documentation</Button>
        </ButtonsWrapper>
      </Inner>
    </Features>
  </Page>
);
