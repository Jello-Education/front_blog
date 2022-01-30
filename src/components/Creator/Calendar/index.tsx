import React from 'react';

import { Container } from './styles';
import { FiEdit2 } from 'react-icons/fi';
import { FaQuestion } from 'react-icons/fa';

const Calendar: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <h1>Resumo</h1>

          <div className="icon">
            <FiEdit2 color="#fff" size={20}/>
          </div>
        </nav>

        <div>
          <p>Saldo:</p>
          <p>R$ 107,90</p>
          <div className="icon">
            <FaQuestion color="#fff" size={17}/>
          </div>
        </div>

        <h1>Calendário:</h1>
      </header>

    </Container>
  );
}

export default Calendar;