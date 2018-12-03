import styled from 'styled-components';
import Button from '../components/Button';

const ContactWrapper = styled.div`
  background: url('./static/bedrock.jpg');
  background-size: cover;
  color: ${props => props.theme.light};
  padding: 18rem 2rem 8rem;
  position: relative;
  z-index: 0;
  text-align: center;
  p {
    font-size: 4rem;
  }
  &:before {
    display: block;
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    height: 125px;
    width: 100%;
    margin: 0 50px 0 0;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(49.9%, ${props => props.theme.lightGrey}),
      color-stop(50.1%, transparent)
    );
    background: linear-gradient(
      to right bottom,
      ${props => props.theme.lightGrey} 49.9%,
      transparent 50.1%
    );
  }
  &:after {
    display: block;
    position: absolute;
    content: ' ';
    background-color: rgba(26, 31, 76, 0.4);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const ContactContent = styled.div`
  z-index: 2;
`;

const Contact = () => (
  <ContactWrapper id="contact">
    <ContactContent>
      <h3>Want to learn more about Bedrock?</h3>
      <Button link="mailto:bedrock@basalt.io" color="#1a1f4c" isInverted>
        Contact Us
      </Button>
    </ContactContent>
  </ContactWrapper>
);

export default Contact;
