import React from 'react';
import { Link } from 'react-router-dom';

import facebookIcon from '../../assets/facebook-icon.svg';
import linkedInIcon from '../../assets/linkedin-icon.svg';
import lnstagramIcon from '../../assets/instagram-icon.svg';
import twitterIcon from '../../assets/twitter-icon.svg';
import youtubeIcon from '../../assets/youtube-icon.svg';
import playstoreIcon from '../../assets/playstore-icon.svg';
import applestoreIcon from '../../assets/apple-store-icon.svg';
import phoneIcon from '../../assets/phone-icon.svg';
import logoJelloShort from '../../assets/logoJelloShort.svg';

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
              <Link to="/coming">Aprenda novas coisas</Link>
            </p>
            <p>
              <Link to="/coming">Crie seu curso</Link>
            </p>
            <p>
              <Link to="/coming">Programa de afiliados</Link>
            </p>
            <p>
              <Link to="/coming">Comunidade</Link>
            </p>
          </div>
          <div className="jello-info-center">
            <p>
              <span>JELLO</span>
            </p>
            <p>
              <Link to="/coming">A empresa</Link>
            </p>
            <p>
              <Link to="/coming">Seja um patrocinador</Link>
            </p>
            <p>
              <Link to="/coming">Guia de uso da marca</Link>
            </p>
          </div>
          <div className="jello-info-right">
            <p>
              <span>Suporte</span>
            </p>
            <p>
              <Link to="/coming">Central de ajuda</Link>
            </p>
            <p>
              <Link to="/coming">Termos de uso</Link>
            </p>
            <p>
              <Link to="/coming">Termos de compra</Link>
            </p>
            <p>
              <Link to="/coming">Política de privacidade</Link>
            </p>
            <p>
              <Link to="/coming">Política de cookies</Link>
            </p>
          </div>
        </div>

        <div className="jello-info-bottom">
          <div className="jello-social-network">
            <span>Nossas redes e Apps</span>
            <div className="jello-social-network-icons">
              <Link to="/coming">
                <img src={facebookIcon} alt="Logo do Facebook" />
              </Link>

              <Link to="/coming">
                <img src={linkedInIcon} alt="Logo do LinkedIn" />
              </Link>

              <Link to="/coming">
                <img src={lnstagramIcon} alt="Logo do Instragram" />
              </Link>

              <Link to="/coming">
                <img src={twitterIcon} alt="Logo do Twitter" />
              </Link>

              <Link to="/coming">
                <img src={youtubeIcon} alt="Logo do Youtube" />
              </Link>

              <Link to="/coming">
                <img src={playstoreIcon} alt="Logo do Play Store" />
              </Link>

              <Link to="/coming">
                <img src={applestoreIcon} alt="Logo do Apple Store" />
              </Link>
            </div>
          </div>

          <div className="jello-contact">
            <img src={phoneIcon} alt="Símbolo de telefone" />
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
            <img src={logoJelloShort} alt="Logo Jello" />
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
