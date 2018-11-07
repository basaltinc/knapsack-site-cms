import styled from 'styled-components';

export const Slice = styled.div`
  width: 100%;
  margin: 0;
  background-color: ${props => props.color};
  padding: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1300px;
  margin: 0 auto;
  flex-flow: row wrap;
  align-content: center;
`;
