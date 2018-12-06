import Link from 'next/link';
import { NavStyles, NavListStyles } from './styles/NavStyles';

export const NavList = () => (
  <>
    <Link href="/#getting-started">
      <a>Getting Started</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
    {/*<Link href="/features">*/}
      {/*<a>Features</a>*/}
    {/*</Link>*/}
    <Link href="/docs">
      <a>Docs</a>
    </Link>
    <Link href="mailto:bedrock@basalt.io">
      <a>Contact</a>
    </Link>
  </>
);

/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
export const Nav = () => (
  <NavStyles>
    <input type="checkbox" id="toggle" />
    <label htmlFor="toggle">
      <span />
    </label>
    <NavListStyles>
      <NavList />
    </NavListStyles>
  </NavStyles>
);
/* eslint-enable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */
