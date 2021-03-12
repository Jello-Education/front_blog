import React from 'react';

import { Container, User, InfoBoxes } from './styles';

const Aside: React.FC = () => {
  return (
    <Container>
      <User>
        <img src="/profile-User-Img.png" alt="userImg"/>

        <h3>João Henrique</h3>

        <span>Membro desde fevereiro de 2021</span>
      </User>
      <InfoBoxes>
        <h3>Conexões</h3>

        <div>
          <img src="/profile-User-Img.png" alt="userImg"/>
          <img src="/profile-User-Img.png" alt="userImg"/>
          <img src="/profile-User-Img.png" alt="userImg"/>
          <span>+40</span>
        </div>
      </InfoBoxes>
      <InfoBoxes>
        <h3>Interesses</h3>

        <p>Marketing Digital, Desenvolvimento Mobile, UI Design...</p>
      </InfoBoxes>
    </Container>
  );
}

export default Aside;