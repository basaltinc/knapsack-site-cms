import styled from 'styled-components';

const GettingStartedWrapper = styled.div`
  padding: 4rem 2rem;
  // background-color: ${props => props.theme.primary};
  background: linear-gradient(
    180deg,
    ${props => props.theme.primaryExtra} 0,
    ${props => props.theme.primary}
  );
  color: ${props => props.theme.light};
  text-align: center;
`;

const GettingStarted = () => (
  <GettingStartedWrapper id="getting-started">
    <h3>Getting Started</h3>
    <p>Instructions will go here</p>
    <p>Instructions will go here</p>
    <p>Instructions will go here</p>
    <p>Instructions will go here</p>
    <p>Instructions will go here</p>
  </GettingStartedWrapper>
);

export default GettingStarted;
