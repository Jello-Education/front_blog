import React from 'react';
import Header from '../../components/Shared/Header';

import { Container, Video, Aside, Anotations, Progress, Description, Texts } from '../../styles/viewalunoStyles';

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

      <Description>
        <h1>Título</h1>

        <div className="line">
          <p>Descrição</p>
        </div>

        <Texts>
          <h4>Titulo descrição</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec eget proin arcu vitae, ultrices elit viverra tellus iaculis. 
            Suspendisse lectus euismod volutpat ultricies amet. Tempus aliquet enim nulla fermentum nunc dolor amet. 
            Fringilla ut aliquet quis augue est fermentum elementum lobortis ultricies. 
            Arcu est vitae tortor vitae massa iaculis consectetur. Volutpat tempus lectus 
            aenean etiam. In et pharetra non dui est sollicitudin tortor nullam enim. Arcu vitae eget volutpat risus 
            mi euismod tempus venenatis. Purus, accumsan rutrum lectus enim, adipiscing ligula integer tortor turpis. 
            Risus tellus enim euismod diam nulla eleifend. In aliquam, euismod eget urna velit neque convallis gravida 
            facilisi. Non pharetra etiam porta ornare ante urna ut cras. Et amet sit lectus elit. Scelerisque nisi, 
            egestas vitae non penatibus. Pretium id faucibus id pharetra maecenas maecenas.
            Arcu vitae eget volutpat risus 
            mi euismod tempus venenatis. Purus, accumsan rutrum lectus enim, adipiscing ligula integer tortor turpis. 
            Risus tellus enim euismod diam nulla eleifend. In aliquam, euismod eget urna velit neque convallis gravida 
            facilisi. Non pharetra etiam porta ornare ante urna ut cras. Et amet sit lectus elit.
          </p>
        </Texts>
      </Description>

    </Container>
  );
}

export default viewaluno;