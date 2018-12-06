import styled from 'styled-components';
import { whatIsBedrock } from '../data/settings';

const WhatIsBedrockWrapper = styled.div`
  //background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.light};
  text-align: center;
  p {
    font-size: 4rem;
    max-width: 800px;
    margin: 1rem auto 6rem;
    padding: 0 2rem;
    color: ${props => props.theme.primary};
  }
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

const WhatIsBedrock = () => (
  <WhatIsBedrockWrapper>
    <p>{whatIsBedrock}</p>
  </WhatIsBedrockWrapper>
);

export default WhatIsBedrock;
