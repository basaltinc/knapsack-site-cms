import styled from 'styled-components';
import Testimonial from '../components/Testimonial';
import { Flex } from './styles/SliceStyles';

const TestimonialsWrapper = styled.div`
  background-color: ${props => props.theme.lightGrey};
  color: ${props => props.theme.primary};
  padding: 4rem 2rem;
  text-align: center;
  p {
    font-size: 4rem;
  }
  figure {
    margin: 2rem 1rem;
  }
`;

const Testimonials = () => (
  <TestimonialsWrapper>
    <h3>What are people saying about Bedrock?</h3>
    <Flex>
      <Testimonial
        img="../static/profiles/joe.png"
        quote="Twig, React, Json, compile, component, css, test driven, …"
        name="Joe Karasek"
      />
      <Testimonial
        img="../static/profiles/joe.png"
        quote="Twig, React, Json, compile, component, css, test driven, …"
        name="Joe Karasek"
      />
      <Testimonial
        img="../static/profiles/joe.png"
        quote="Twig, React, Json, compile, component, css, test driven, …"
        name="Joe Karasek"
      />
    </Flex>
  </TestimonialsWrapper>
);

export default Testimonials;
