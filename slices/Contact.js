import styled from 'styled-components';
import Button from '../components/Button';

const ContactWrapper = styled.div`
  background-color: ${props => props.theme.accent};
  color: ${props => props.theme.light};
  padding: 4rem 2rem;
  text-align: center;
  p {
    font-size: 4rem;
  }
`;

const Contact = () => (
  <ContactWrapper id={'contact'}>
    <h3>Want to learn more about Bedrock?</h3>
    <Button link={'/'} color={'#7faba8'}>Contact Us</Button>
  </ContactWrapper>
);

export default Contact;
