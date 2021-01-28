import React from 'react';

import Link from 'next/link'
import Image from 'next/image';


import { Container, JelloInfoContainer, JelloRightsReserved } from './styles';

const JelloInfo: React.FC = () => {
  return (
    <Container>
      <JelloInfoContainer>
        <div className="jello-info-top">
          <div className="jello-info-left">
            <p>
              <span>Educação</span>
            </p>
            <p>
              <Link href="/coming">Aprenda novas coisas</Link>
            </p>
            <p>
              <Link href="/coming">Crie seu curso</Link>
            </p>
            <p>
              <Link href="/coming">Programa de afiliados</Link>
            </p>
            <p>
              <Link href="/coming">Comunidade</Link>
            </p>
          </div>
          <div className="jello-info-center">
            <p>
              <span>JELLO</span>
            </p>
            <p>
              <Link href="/coming">A empresa</Link>
            </p>
            <p>
              <Link href="/coming">Seja um patrocinador</Link>
            </p>
            <p>
              <Link href="/coming">Guia de uso da marca</Link>
            </p>
          </div>
          <div className="jello-info-right">
            <p>
              <span>Suporte</span>
            </p>
            <p>
              <Link href="/coming">Central de ajuda</Link>
            </p>
            <p>
              <Link href="/coming">Termos de uso</Link>
            </p>
            <p>
              <Link href="/coming">Termos de compra</Link>
            </p>
            <p>
              <Link href="/coming">Política de privacidade</Link>
            </p>
            <p>
              <Link href="/coming">Política de cookies</Link>
            </p>
          </div>
        </div>

        <div className="jello-info-bottom">
          <div className="jello-social-network">
            <span>Nossas redes e Apps</span>
            <div className="jello-social-network-icons">
              <Link href="/coming"><Image 
                  src="/facebook-icon.svg"
                  alt="Logo do Facebook" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/linkedin-icon.svg" 
                  alt="Logo do LinkedIn" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/instagram-icon.svg'" 
                  alt="Logo do Instragram" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/twitter-icon.svg" 
                  alt="Logo do Twitter" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/youtube-icon.svg" 
                  alt="Logo do Youtube" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/playstore-icon.svg" 
                  alt="Logo do Play Store" 
                  width={30}
                  height={30}
                  /></Link>

              <Link href="/coming"><Image 
                  src="/apple-store-icon.svg" 
                  alt="Logo do Apple Store" 
                  width={30}
                  height={30}
                  /></Link>
            </div>
          </div>

          <div className="jello-contact">
            <Image 
              src="/phone-icon.svg" 
              alt="Símbolo de telefone" 
              width={60}
              height={60}
            />
            <div>
              <p>
                Dúvidas? Sugestões?{' '}
                <p>
                  <span>Entre em contato!</span>
                </p>
              </p>
            </div>
          </div>
          <div className="jello-companies">
            <Image 
              src="/logoJelloShort.svg" 
              alt="Logo Jello" 
              width={120}
              height={120}
            />
            <div>
              <p>
                Planos para empresas?{' '}
                <p>
                  <span>Saiba mais.</span>
                </p>
              </p>
            </div>
          </div>
        </div>
      </JelloInfoContainer>

      <JelloRightsReserved>
        <span>Jello - 2020 © Todos os direitos reservados</span>
      </JelloRightsReserved>
    </Container>
  );
};

export default JelloInfo;
