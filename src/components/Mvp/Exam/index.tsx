import Image from 'next/image';

import { Container } from './styles';

const Exam: React.FC = () => {
  return (
    <Container>
      <div>
        <h2>Deseja saber qual área combina com você?</h2>
        <p>
          Aqui na JELLO entendemos muito bem as dúvidas sobre qual carreira
          seguir, pensando nisso, dispinibilizamos um teste para você ver qual
          área mais combina com você!
        </p>
        <button style={{ marginTop: 32}}>Fazer teste</button>
      </div>

      <Image 
        src="/landing-ilust-exam.svg" 
        alt="exame ilustração" 
        width={466}
        height={369}
        />
    </Container>
  );
};

export default Exam;
