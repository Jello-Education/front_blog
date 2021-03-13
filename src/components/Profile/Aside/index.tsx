import React from 'react';

import { Container, User, InfoBoxes, Icon } from './styles';
import { FiEdit2 } from 'react-icons/fi';

const Aside: React.FC = () => {
  return (
    <Container>
      <User>
        <Icon>
          <FiEdit2 color="#fff" size={20}/>
        </Icon>

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