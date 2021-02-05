import Image from 'next/image';

import { Container, Text, Aside } from './styles';


const Detail: React.FC = () => {
  return (
    <Container>
      <Aside className="right">
        <Image 
          src="/lading-slime-pink-right.svg" 
          alt="landingSlimeGreenLeft"
          width={252}
          height={255}
        />
        <Image 
          src="/landing-slime-green-right.svg" 
          alt="landingSlimeGreenRight"
          width={200}
          height={200}
        />
      </Aside>

      <Text>
        <h1>Diversas opções acessíveis</h1>
        
        <line />
        
        <p>
          Nossa missão é facilitar a aprendizagem. Entendendo
          a importancia da educação, possuimos vários cursos gratuitos!
          <a href="google">Saiba mais</a>
        </p>  
      </Text>
    
      <Aside className="left">
        <Image 
          src="/lading-slime-pink-left.svg" 
          alt="ladingSlimePinkLeft"
          width={250}
          height={250}
        />
        <Image 
          src="/landing-slime-green-left.svg" 
          alt="ladingSlimePinkRight"
          width={200}
          height={200}
        />
      </Aside>
    </Container>
  );
}

export default Detail;