import React from 'react';

import Header from '../../components/Shared/Header';
import Description from '../../components/ViewAluno/Description';

import { Container, Video, Aside, Anotations, Progress } from '../../styles/viewalunoStyles';

const viewaluno: React.FC = () => {
  return (
    <Container>
      <Header />

      <Video>
        <div className="video"></div>
        <Aside>
          <Anotations>
            <nav>
              <img src="./viewaluno-pin.svg" alt="pin" />
              <h3>Bloco de anotações</h3>
            </nav>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec eget proin arcu vitae, ultrices elit viverra tellus iaculis. 
              Suspendisse lectus euismod volutpat ultricies amet. Tempus aliquet enim nulla fermentum nunc dolor amet. 
              Fringilla ut aliquet quis augue est fermentum elementum lobortis ultricies. 
              Arcu est vitae tortor vitae massa iaculis consectetur. Volutpat tempus lectus 
              aenean etiam. In et pharetra non dui est sollicitudin tortor nullam enim. Arcu vitae eget volutpat risus 
              mi euismod tempus venenatis.
            </p>
          </Anotations>
          <Progress>
            <h3>Seu progresso</h3>
            <img src="./viewaluno-progress.svg" alt="progress" />
          </Progress>
        </Aside>
      </Video>

      <Description />

    </Container>
  );
}

export default viewaluno;