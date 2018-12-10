import styled from 'styled-components';
/* eslint-disable */
// import PropTypes from 'prop-types';
/* eslint-enable */
import Button from '../components/Button';
import { ButtonsWrapper } from '../components/styles/Utils';

const github = 'https://github.com/basaltinc/bedrock';

const GettingStartedWrapper = styled.div`
  padding: 4rem 2rem;
  background: linear-gradient(
    180deg,
    ${props => props.theme.primaryExtra} 0,
    ${props => props.theme.primary}
  );
  color: ${props => props.theme.light};
  text-align: center;
  a {
    color: white;
  }
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

// eslint-disable-next-line no-unused-vars
const GettingStarted = props => (
  <GettingStartedWrapper id="getting-started">
    <h2>Getting Started</h2>
    <Code>
      npx create-bedrock my-design-system <br />
      cd my-design-system <br />
      npm install <br />
      npm start <br />
    </Code>
    {/* <p> */}
    {/* Latest Release:{' '} */}
    {/* <a */}
    {/* href={props.latestRelease.html_url} */}
    {/* target="_blank" */}
    {/* rel="noopener noreferrer" */}
    {/* > */}
    {/* {props.latestRelease.name} */}
    {/* </a> */}
    {/* </p> */}
    <ButtonsWrapper>
      <Button color="#1A1F4C" link="/docs/getting-started">
        Read the Docs
      </Button>
      <Button color="#1A1F4C" isTargetBlank isInverted link={github}>
        GitHub
      </Button>
    </ButtonsWrapper>
  </GettingStartedWrapper>
);
/* eslint-disable */
// GettingStarted.propTypes = {
  // latestRelease: PropTypes.object.isRequired,
// };
/* eslint-enable */
export default GettingStarted;
