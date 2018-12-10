import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'next/link';

/* eslint-disable no-nested-ternary */
const ButtonWrapper = styled.button`
  background-color: ${props =>
    props.isInverted
      ? 'white'
      : props.color
        ? props.color
        : props.theme.accent};
  border-color: ${props =>
    !props.isInverted
      ? 'white'
      : props.color
        ? props.color
        : props.theme.accent};
  color: ${props =>
    !props.isInverted
      ? 'white'
      : props.color
        ? props.color
        : props.theme.accent};
  border-width: 2px;
  border-radius: 3px;
  font-size: 2rem;
  padding: 1.5rem 3rem;
  transition: all 0.3s ease-in-out;
  box-shadow: ${props => props.theme.bs};
  margin: 1rem;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: ${props =>
      !props.isInverted
        ? 'white'
        : props.color
          ? props.color
          : props.theme.accent};
    color: ${props =>
      props.isInverted
        ? 'white'
        : props.color
          ? props.color
          : props.theme.accent};
    border-color: ${props =>
      props.isInverted
        ? 'white'
        : props.color
          ? props.color
          : props.theme.accent};
  }
  cursor: pointer;
`;
/* eslint-enable no-nested-ternary */

const Button = props => {
  if (props.isTargetBlank)
    return (
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <ButtonWrapper color={props.color} isInverted={props.isInverted}>
          {props.children}
        </ButtonWrapper>
      </a>
    );
  return (
    <Link href={props.link}>
      <a>
        <ButtonWrapper color={props.color} isInverted={props.isInverted}>
          {props.children}
        </ButtonWrapper>
      </a>
    </Link>
  );
};

Button.defaultProps = {
  isInverted: false,
  color: '#1a1f4c',
  isTargetBlank: false,
};

Button.propTypes = {
  isInverted: PropTypes.bool,
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  link: PropTypes.string.isRequired,
  isTargetBlank: PropTypes.bool,
};

export default Button;
