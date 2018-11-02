import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: ${props =>
    props.isInverted
      ? 'white'
      : props.color
        ? props.color
        : props.theme.primary};
  border-color: ${props => (props.color ? props.color : props.theme.primary)};
  color: ${props =>
    !props.isInverted
      ? 'white'
      : props.color
        ? props.color
        : props.theme.primary};
  border-width: 2px solid;
  border-radius: 2px;
  padding: 1rem 2rem;
  transition: all 0.3s ease-in-out;
  box-shadow: ${props => props.theme.bs};
  margin: 1rem;
  &:hover {
    background-color: ${props =>
      !props.isInverted
        ? 'white'
        : props.color
          ? props.color
          : props.theme.primary};
    color: ${props =>
      props.isInverted
        ? 'white'
        : props.color
          ? props.color
          : props.theme.primary};
  }
`;

Button.defaultProps = {
  isInverted: false,
};

Button.propTypes = {
  isInverted: PropTypes.bool,
};

export default Button;
