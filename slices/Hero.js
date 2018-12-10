import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { hero } from '../data/settings';
import { ButtonsWrapper } from '../components/styles/Utils';

const HeroWrapper = styled.div`
  background: linear-gradient(
    180deg,
    ${props => props.theme.primary} 0,
    ${props => props.theme.primaryExtra}
  );
  padding: 10rem 2rem 5rem;
  color: ${props => props.theme.light};
  text-align: center;
  h2 {
    font-size: 6rem;
    margin-bottom: 2rem;
  }
`;

const Hero = () => (
  <HeroWrapper>
    <h2>{hero}</h2>
    <ButtonsWrapper>
      <Button color="#343e98" isInverted link="#getting-started">
        Get Started
      </Button>
      <Button color="#343e98" link="https://demo.getbedrock.com">
        Demo
      </Button>
    </ButtonsWrapper>
  </HeroWrapper>
);

export default Hero;
