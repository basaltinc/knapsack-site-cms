import styled from 'styled-components';
import { NavList } from './Nav';
import Contributors from './Contributors';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.primary};
  color: white;
  margin: 0;
  padding: 2rem;
  width: 100%;
  height: auto;
  font-size: 1.5rem;
  z-index: 999;
  a {
    color: white;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: space-between;
  }
`;

const FooterNav = styled.div`
  * {
    display: block;
  }
  a {
    padding: 0.5rem 0;
    position: relative;
    &:after {
      height: 2px;
      background: ${props => props.theme.accent};
      content: '';
      width: 0;
      position: absolute;
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 0;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: 100%;
      }
    }
  }
  margin-bottom: 1rem;
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  position: absolute;
  bottom: 3px;
`;

const FooterRight = styled.div`
  margin-top: 2rem;
  @media (min-width: 900px) {
    max-width: 50%;
    text-align: right;
    margin-top: 0;
  }
`;

const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <NavList />
      <Copyright>Copyright Basalt, LLC {new Date().getFullYear()}</Copyright>
    </FooterNav>
    <FooterRight>
      <Contributors />
    </FooterRight>
  </StyledFooter>
);

export default Footer;
