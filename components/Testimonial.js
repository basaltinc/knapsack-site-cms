import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TestimonialWrapper = styled.figure`
  position: relative;
  overflow: hidden;
  margin: 0;
  width: 400px;
  display: flex;
  min-height: 200px;
  text-align: left;
  box-shadow: ${props => props.theme.bs};
  font-size: 1.8rem;
  background-color: #ffffff;
  figcaption {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 2 1 100%;
    z-index: 1;
    opacity: 1;
    padding: 30px 10px;
    &:before {
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      right: 59%;
      content: '';
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 250px 105px 250px 0px;
      border-color: transparent #fff transparent transparent;
    }
  }
  h5,
  blockquote {
    line-height: 1.6em;
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

const ImgWrapper = styled.div`
  padding: 20px;
  align-items: center;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${props => props.theme.secondary} 30%,
    ${props => props.theme.secondaryExtra}
  );
`;

const ProfilePicture = styled.img`
  width: 110px;
  border-radius: 50%;
  height: 110px;
  z-index: 2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`;

const Testimonial = props => (
  <TestimonialWrapper id="testimonials">
    <ImgWrapper>
      <ProfilePicture src={props.img} alt="profile-sample1" />
    </ImgWrapper>
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
