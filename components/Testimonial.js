import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TestimonialWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 400px;
  height: 200px;
  text-align: left;
  box-shadow: ${props => props.theme.bs};
  font-size: 1.8rem;
  background-color: ${props => props.theme.secondary};
  figcaption {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    opacity: 1;
    padding: 30px 0 30px 10px;
    background-color: #ffffff;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &:before {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 100%;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 120px 120px 120px 0px;
      border-color: transparent #fff transparent transparent;
    }
  }
  &:after {
    position: absolute;
    bottom: 50%;
    right: 40%;
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 110px 160px 0 120px;
    border-color: ${props => props.theme.primary} transparent transparent
      transparent;
  }
  h5,
  blockquote {
    line-height: 1.6em;
    -webkit-transform: translateX(-30px);
    transform: translateX(-30px);
    margin: 0;
    color: ${props => props.theme.primary};
  }
  h5 {
    margin: 10px 0;
    line-height: 1.1em;
    font-weight: 900;
  }
  blockquote {
    font-size: 0.9em;
    font-style: italic;
  }
`;

const ProfilePicture = styled.img`
  position: absolute;
  width: 110px;
  border-radius: 50%;
  top: 50%;
  left: -10px;
  z-index: 2;
  -webkit-transform: translate(50%, -50%);
  transform: translate(50%, -50%);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Testimonial = props => (
  <TestimonialWrapper id="testimonials">
    <ProfilePicture src={props.img} alt="profile-sample1" />
    <figcaption>
      <blockquote>{props.quote}</blockquote>
      <h5>- {props.name}</h5>
    </figcaption>
  </TestimonialWrapper>
);

Testimonial.propTypes = {
  img: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Testimonial;
