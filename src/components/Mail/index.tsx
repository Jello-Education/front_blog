import React from 'react';

import { Container, Texts, Form } from './styles';

import mailBoxImg from '../../assets/mailBox.svg';

const Mail: React.FC = () => {
  return (
    <Container>
       <img src={mailBoxImg} alt="mailBoxImg"/>

       <Texts>
         <h1>Fique por dentro das nossas novidades!</h1>

         <Form>
            <p>
              Assine <b>gratuitamente</b> a Newsletter do nosso blog 
              para receber em primeira mão os <b>melhores conteúdos sobre educação!</b>
            </p>
            <form action="">
              <input type="text" placeholder="Nome"/>
              <input type="email" placeholder="Email"/>
              
              <button>Quero receber!</button>
            </form>
         </Form>
       </Texts>
    </Container>
  );
}

export default Mail;