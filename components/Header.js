import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const Logo = styled.h1`
  font-size: 3rem;
  margin-left: 1rem;
  position: relative;
  z-index: 2;
  a {
    padding: 0.5rem 1rem;
    color: ${props => props.theme.primary};
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  justify-content: space-between;
  align-items: stretch;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-content: center;
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
