import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';

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

const ButtonsWrapper = styled.div`
  padding: 6rem 0;
`;

const Hero = () => (
  <HeroWrapper>
    <h2>Welcome to Bedrock</h2>
    <ButtonsWrapper>
      <Button color="#343e98" isInverted link="/">
        Get Started
      </Button>
      <Button color="#343e98" link="/documentation">
        Documentation
      </Button>
    </ButtonsWrapper>
  </HeroWrapper>
);

export default Hero;
