import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/documentation">
      <a>Documentation</a>
    </Link>
    <Link href="/contact">
      <a>Contact</a>
    </Link>
  </NavStyles>
);

export default Nav;
