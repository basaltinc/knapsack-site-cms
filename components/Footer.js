import styled from 'styled-components';
import { NavList } from './Nav';
import Contributors from './Contributors';

const StyledFooter = styled.footer`
  background-color: ${props => props.theme.primary};
  color: white;
  margin: 0;
  padding: 2rem;
  display: block;
  width: 100%;
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
`;

const FooterRight = styled.div`
  max-width: 50%;
  text-align: right;
`;

const Footer = () => (
  <StyledFooter>
    <FooterNav>
      <NavList />
    </FooterNav>
    <FooterRight>
      <Contributors />
    </FooterRight>
  </StyledFooter>
);

export default Footer;
