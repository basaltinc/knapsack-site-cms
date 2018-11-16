import styled from 'styled-components';
import Testimonial from '../components/Testimonial';
import { Flex } from './styles/SliceStyles';

const TestimonialsWrapper = styled.div`
  background: ${props => props.theme.lightGrey};
  color: ${props => props.theme.primary};
  text-align: center;
  p {
    font-size: 4rem;
  }
  figure {
    margin: 2rem 1rem;
  }
  &:before {
    content: '';
    display: block;
    height: 125px;
    width: 100%;
    margin: 0 50px 0 0;
    background: -webkit-gradient(
      linear,
      left top,
      right bottom,
      color-stop(49.9%, ${props => props.theme.primary}),
      color-stop(50.1%, transparent)
    );
    background: linear-gradient(
      to right bottom,
      ${props => props.theme.primary} 49.9%,
      transparent 50.1%
    );
  }
`;

const Inner = styled.div`
  padding: 5rem 1rem;
`;

const Testimonials = () => (
  <TestimonialsWrapper>
    <Inner>
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
    </Inner>
  </TestimonialsWrapper>
);

export default Testimonials;
