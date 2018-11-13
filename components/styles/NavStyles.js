import styled from 'styled-components';

export const NavStyles = styled.div`
  float: right;
  label,
  span,
  input {
  }
  input {
    position: absolute;
    left: -100%;
    top: -100%;
  }
  label {
    float: right;
    margin-right: 120px;
  }

  input:checked {
    & ~ label span {
      &:before {
        transform: translateY(-50%) rotate(45deg) scale(0.6);
      }
      &:after {
        transform: translateY(-50%) rotate(-45deg) scale(0.6);
      }
    }
    // Open nav
    & ~ nav {
      margin: -1rem 5rem 4rem 0;
      @media (min-width: 700px) {
        margin-right: 4rem;
        margin-top: 1rem;
      }
      pointer-events: auto;
      transform: translate(50px, 50px);

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

  span {
    position: absolute;
    display: inline-block;
    right: 0;
    width: 30px;
    height: 30px;
    @media (min-width: 700px) {
      width: 60px;
      height: 60px;
    }
    margin: 1rem 1rem 1rem 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    border-radius: 100%;
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
  margin: 1rem 1rem 0 0;
  pointer-events: none;
  transition: 0.5s;
  a {
    padding: 0.7rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    color: ${props => props.theme.light};
    text-decoration: none;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: 1rem;
      padding: 0 10px;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.light};
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
  a {
    position: relative;
    display: inline-block;
    float: right;
    clear: both;
    color: transparent;
    font-size: 14px;
    letter-spacing: -10px;
    height: 7px;
    line-height: 7px;
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
  }
  //}
`;
