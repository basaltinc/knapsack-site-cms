import styled from 'styled-components';

export const NavStyles = styled.div`
  input {
    display: none;
  }
  label {
    @media (min-width: 900px) {
      display: none;
    }
  }

  @media (max-width: 900px) {
    input:checked {
      & ~ label span {
        &:before {
          transform: translateY(-50%) rotate(45deg) scale(0.6);
        }
        &:after {
          transform: translateY(-50%) rotate(-45deg) scale(0.6);
        }
        margin: 0;
      }
      // Open nav
      & ~ nav {
        margin: 0 4rem 4rem -11rem;
        padding-bottom: 1rem;
        @media (min-width: 700px) {
          margin-top: 1rem;
        }
        pointer-events: auto;
        transform: translate(35px, 50px);
        // Restoring nav items from "lines" in the menu icon
        a {
          color: ${props => props.theme.light};
          letter-spacing: 0;
          height: 40px;
          line-height: 40px;
          margin-top: 0;
          opacity: 1;
          transform: scaleY(1);
          transition: 0.5s, opacity 0.1s;

          // Hiding the lines
          &:before {
            opacity: 0;
          }
        }
      }
    }
  }

  span {
    position: absolute;
    display: inline-block;
    right: 0;
    width: 60px;
    height: 60px;
    margin: 1rem 1rem 1rem 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.5s + 0.1;
    &:before,
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.light};
      border-radius: 5px;
      transition: 0.5s;
    }

    &:before {
      transform: translateY(-50%) rotate(45deg) scale(0);
    }

    &:after {
      transform: translateY(-50%) rotate(-45deg) scale(0);
    }
  }
`;

export const NavListStyles = styled.nav`
  float: right;
  display: inline-block;
  margin-right: 2rem;
  pointer-events: none;
  transition: 0.5s;
  margin-top: 5px;
  a {
    padding: 0.5rem 3rem;
    display: inline-block;
    align-items: center;
    position: relative;
    text-decoration: none;
    cursor: pointer;
    float: right;
    clear: both;
    color: transparent;
    font-size: 14px;
    letter-spacing: -10px;
    height: 10px;
    line-height: 10px;
    text-transform: uppercase;
    white-space: nowrap;
    transform: scaleY(0.2);
    transition: 0.5s, opacity 1s;
    // Getting the lines for the hamburger menu icon
    &:before {
      position: absolute;
      content: '';
      top: 50%;
      right: 0;
      width: 100%;
      height: 2px;
      background-color: ${props => props.theme.light};
      transform: translateY(-50%) scaleY(5);
      transition: 0.5s;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.accent};
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 3rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (min-width: 900px) {
    display: flex;
    a {
      color: ${props => props.theme.light};
      font-size: 1.5rem;
      padding: 1rem 2rem;
      transform: none;
      line-height: inherit;
      letter-spacing: normal;
      pointer-events: all;
      &:before {
        display: none;
      }
    }
  }
`;
