import styled from 'styled-components';
import { Slice } from './styles/SliceStyles';

const GettingStartedWrapper = styled.div`
  padding: 4rem 2rem;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.light};
  text-align: center;
`;

const GettingStarted = () => (
  <GettingStartedWrapper id={'getting-started'}>
    <h3>Getting Started</h3>
    <p>Instructions will go here</p>
  </GettingStartedWrapper>
);

export default GettingStarted;
