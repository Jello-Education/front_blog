import Image from 'next/image';

import { Container, PlansContainer, Plan, Description } from './styles';

const Plans: React.FC = () => {
  return (
    <Container>
      <h1>Comece a aprender agora mesmo!</h1>

      <Image className="top" 
        src="/landing-squares.svg" 
        alt="SquareImg"
        width={200}
        height={200}
        />
      <PlansContainer>
        <Plan>
          <h1>Strandard Free</h1>

          <Description/>
        </Plan>
        <Plan className="recomended">
          <h1>Espinelo R$ 25,90</h1>

          <Description/>
        </Plan>
        <Plan>
          <h1>Paladinum R$ 35,90</h1>

          <Description/>
        </Plan>
      </PlansContainer>

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