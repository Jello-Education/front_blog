import React from 'react';

import { Container, Content } from './styles';

const VideoPlayer: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src="/landing-ilust-video.svg" alt="ilustração video" />
        <div>
          <h2>A plataforma que mais abraça os estudantes</h2>
          <p>
            Nosso objetivo é fazer com que você se torne especialista naquilo
            que deseja com os melhores métodos.
          </p>
          <a href="/">Saiba mais</a>
        </div>
      </Content>
      <img src="/landing-squares2.svg" alt="formas quadradas" id="squares1" />
      <img src="/landing-squares3.svg" alt="formas quadradas" id="squares2" />
      <img src="/landing-squares.svg" alt="formas triangulares" id="triangles" />
    </Container>
  );
};

export default VideoPlayer;
