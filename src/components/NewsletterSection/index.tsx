import React from 'react';
import Image from 'next/image';


import { Container, Input, Button } from './styles';

const NewsletterSection: React.FC = () => {
  return (
    <Container>
      <div className="newsletter-section">
        <div className="newsletter-container">
          <Image 
            src="/mail-image.svg" 
            alt="Newsletter" 
            width={200}
            height={200}
            />

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
