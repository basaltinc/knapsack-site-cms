import Link from 'next/link';
import { NavStyles, NavListStyles } from './styles/NavStyles';

export const NavList = () => (
  <>
    <Link href="#getting-started">
      <a className="nav-item">Getting Started</a>
    </Link>
    <Link href="/documentation">
      <a className="nav-item">Docs</a>
    </Link>
    <Link href="/contact">
      <a className="nav-item">Contact</a>
    </Link>
  </>
);

export const Nav = () => (
  <NavStyles>
    <input type="checkbox" id="toggle" />
    <label className="toggle-container" htmlFor="toggle">
      <span className="button button-toggle" />
    </label>
    <NavListStyles className={'nav'}>
      <NavList />
    </NavListStyles>
  </NavStyles>
);
