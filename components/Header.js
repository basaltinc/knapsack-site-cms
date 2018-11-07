import Link from 'next/link';
import styled from 'styled-components';
import { Nav } from './Nav';

const StyledHeader = styled.header`
  top: 0px;
  position: sticky;
  background-color: ${props => props.theme.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
`;

const Logo = styled.div`
  font-size: 3rem;
  margin-left: 1rem;
  min-width: 200px;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.light};
    text-decoration: none;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>Bedrock</a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
