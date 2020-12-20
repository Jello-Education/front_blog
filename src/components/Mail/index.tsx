import React from 'react';

import { Container, Texts } from './styles';

import mailBoxImg from '../../assets/mailBox.svg';

const Mail: React.FC = () => {
  return (
    <Container>
       <img src={mailBoxImg} alt="mailBoxImg"/>

       <Texts>
         <h1>Fique por dentro das nossas novidades!</h1>

         <p>
           Assine <b>gratuitamente</b> a Newsletter do nosso blog 
          para receber em primeira mão os <b>melhores conteúdos sobre educação!</b>
         </p>
       </Texts>
    </Container>
  );
}

export default Mail;