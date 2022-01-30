import React from 'react';
import Link from 'next/link';

import { Container } from './styles';

interface NavLinkProps {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <Container>
      <Link href={to}>{children}</Link>
      <div></div>
    </Container>
  );
};

export default NavLink;
