import styled from 'styled-components';
import Button from '../components/Button';

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

const Code = styled.code`
  display: block;
  background-color: rgba(26, 31, 76, 0.8);
  color: #f8f8f8;
  margin: 2rem 0;
  max-width: 600px;
  padding: 4rem;
  margin: 4rem auto 2rem;
  text-align: left;
`;

const GettingStarted = () => (
  <GettingStartedWrapper id="getting-started">
    <h2>Getting Started</h2>
    <Code>
      npx create-bedrock my-design-system <br />
      cd my-design-system <br />
      npm install <br />
      npm start <br />
    </Code>
    <Button color="#1A1F4C" link="/docs">
      Read the Docs
    </Button>
  </GettingStartedWrapper>
);

export default GettingStarted;
