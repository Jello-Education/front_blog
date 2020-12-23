import React from 'react';

import mailImage from '../../assets/mail-image.svg';

import { Container, Input, Button } from './styles';

const NewsletterSection: React.FC = () => {
  return (
    <Container>
      <div className="newsletter-section">
        <div className="newsletter-container">
          <img src={mailImage} alt="Newsletter" />

          <div className="newsletter-right-side">
            <div className="newsletter-top">
              <span>Fique por dentro das nossas novidades!</span>
            </div>

            <div className="newsletter-bottom">
              <p>
                Assine
                <span> gratuitamente </span>a Newsletter do nosso blog para
                receber em primeira mão os
                <span> melhores conteúdos sobre educação!</span>
              </p>

              <div className="forms">
                <Input placeholder="Nome" />
                <Input placeholder="Email" />
                <Button>Quero receber!</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NewsletterSection;
