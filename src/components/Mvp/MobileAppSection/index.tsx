import React from 'react';

import { Container, Buttons, Texts, Squares } from './styles';
import { FaApple } from 'react-icons/fa'

const MobileAppSection: React.FC = () => {
  
  const buttonStyleOject = {
    color: "#000", 
    width: 210, 
    height: 70, 
    fontSize: 24,
    padding: 10,
  }
  
  return (
    <Container>
      <img className="mockUp" src="/landing-mockup.png" alt="mockupImg"/>

      <Squares>
        <img className="squares" src="/landing-squares.svg" alt=""/>
        
      </Squares>

      <Texts>
        <h1> O melhor da educação na palma das suas mã<b>os</b></h1>
        <p>
          Com o nosso app, você consegue acompanhar 
          seus estudos em qualquer lugar
        </p>

        <Buttons>
          <button>
            <img src="/landing-playStore.svg" alt="PlayStore img"/>
            <h4>Play store</h4>
          </button>
          <button>
            <FaApple size={40} />
            <h4>App store</h4>
          </button>
        </Buttons>
      </Texts>
    </Container>
  );
}

export default MobileAppSection;