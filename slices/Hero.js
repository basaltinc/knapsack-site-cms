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

const Inner = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const Basalt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  img {
    display: inline-block;
    height: 20px;
    margin-left: 10px;
  }
`;
const Hero = () => (
  <HeroWrapper>
    <Inner>
      <h2>{hero}</h2>
      <Basalt>
        <p>by</p>
        <a href="https://basalt.io" target="_blank" rel="noopener noreferrer">
          <img src="/static/BASALT_master_white-color.svg" alt="basalt" />
        </a>
      </Basalt>
      <ButtonsWrapper>
        <Button color="#343e98" isInverted link="#getting-started">
          Install
        </Button>
        <Button color="#343e98" link="https://demo.getbedrock.com">
          Demo
        </Button>
      </ButtonsWrapper>
    </Inner>
  </HeroWrapper>
);

export default Hero;
