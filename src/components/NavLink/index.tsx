import React from 'react';

import { Container } from './styles';

const NavLink: React.FC = ({ children }) => {
  return (
    <Container>
      <h2>{children}</h2>
      <div />
    </Container>
  );
};

export default NavLink;
