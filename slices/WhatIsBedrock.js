import styled from 'styled-components';

const WhatIsBedrockWrapper = styled.div`
  //background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.light};
  text-align: center;
  p {
    font-size: 4rem;
    color: ${props => props.theme.primary};
  }
  &:before {
    content: '';
    display: block;
    height: 200px;
    width: 100%;
    margin: 0 50px 0 0;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(49.9%, ${props => props.theme.accent}),
      color-stop(50.1%, transparent)
    );
    background: linear-gradient(
      to right bottom,
      ${props => props.theme.accent} 49.9%,
      transparent 50.1%
    );
  }
`;

const WhatIsBedrock = () => (
  <WhatIsBedrockWrapper>
    <p>
      Bedrock is a tool to get your design system up and running FAST! <br /> It
      is uhmazing.
    </p>
  </WhatIsBedrockWrapper>
);

export default WhatIsBedrock;
