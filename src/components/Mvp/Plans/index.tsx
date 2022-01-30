import Image from 'next/image';

import { Container, PlansContainer, Plan, Description } from './styles';

const Plans: React.FC = () => {
  return (
    <Container>
      <h1>Comece a aprender agora mesmo! <br/> Conheça nossos planos:</h1>

      <Image className="top" 
        src="/landing-squares.svg" 
        alt="SquareImg"
        width={200}
        height={200}
        />
      <PlansContainer>
        <Plan>
          <h1>Strandard - <br/> <b>Grátis</b></h1>

          <Description>
            <ul>
              <li>Vantagem 1</li>
              <li>Vantagem 2</li>
            </ul>
          </Description>
        </Plan>
        <Plan className="recomended">
          <h1>Espinelo - <br/> <b className="premium">R$ 25,90</b></h1>

          <Description>
            <ul>
              <li>Vantagem 1</li>
              <li>Vantagem 2</li>
              <li>Vantagem 3</li>
              <li>Vantagem 4</li>
            </ul>
          </Description>
        </Plan>
        <Plan>
          <h1>Paladinum - <br/> <b>R$ 35,90</b></h1>

          <Description>
            <ul>
              <li>Vantagem 1</li>
              <li>Vantagem 2</li>
              <li>Vantagem 3</li>
              <li>Vantagem 4</li>
              <li>Vantagem 5</li>
              <li>Vantagem 6</li>
            </ul>
          </Description>
        </Plan>
      </PlansContainer>

      <button>Inscreva-se já</button>

      <Image className="bottom" 
        src="/landing-squares.svg" 
        alt="SquareImg"
        width={200}
        height={200}
        />
    </Container>
  );
}

export default Plans;