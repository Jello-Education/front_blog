import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface NavLinkProps {
  to: string;
}

const NavLink: React.FC<NavLinkProps> = ({ children, to }) => {
  return (
    <Container>
      <Link to={to}>
        {children}
        {/* <h2></h2> */}
        <div />
      </Link>
    </Container>
  );
};

export default NavLink;
