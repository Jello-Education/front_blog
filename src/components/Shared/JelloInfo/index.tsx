import React from "react";
import Image from "next/image";

import {
  Container,
  Content,
  SubContent,
  SocialMediaContainer,
  Icon,
  Detail,
  Texts,
  Main,
  Bottom,
} from "./styles";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaGooglePlay,
  FaPhoneAlt,
} from "react-icons/fa";

const JelloInfo: React.FC = () => {
  return (
    <Container>
      <Main>
        <Content>
          <ul className="left">
            <li>
              <b>Nossas redes</b>
            </li>
            <li>
              <SocialMediaContainer>
                <Icon>
                  <FaFacebookF size={15} color="#fff" />
                </Icon>

                <Icon>
                  <FaLinkedinIn size={15} color="#fff" />
                </Icon>

                <Icon>
                  <FaInstagram size={15} color="#fff" />
                </Icon>

                <Icon>
                  <FaTwitter size={15} color="#fff" />
                </Icon>

                <Icon>
                  <FaYoutube size={15} color="#fff" />
                </Icon>
              </SocialMediaContainer>
            </li>
            <li>
              <b>Nossos apps</b>
            </li>
            <li>
              <SocialMediaContainer>
                <Icon>
                  <FaApple size={15} color="#fff" />
                </Icon>

                <Icon>
                  <FaGooglePlay size={15} color="#fff" />
                </Icon>
              </SocialMediaContainer>
            </li>
          </ul>

          <ul className="left">
            <li>
              <b>Educação</b>
            </li>
            <li>
              <a href="aprenda">Aprenda novas coisas</a>
            </li>
            <li>
              <a href="aprenda">Cria seu curso</a>
            </li>
            <li>
              <a href="aprenda">Programa de afiliados</a>
            </li>
            <li>
              <a href="aprenda">Comunidade</a>
            </li>
          </ul>

          <ul className="left">
            <li>
              <b>JELLO</b>
            </li>
            <li>
              <a href="aprenda">A empresa</a>
            </li>
            <li>
              <a href="aprenda">Seja um patriocinador</a>
            </li>
            <li>
              <a href="aprenda">Guia de uso de marca</a>
            </li>
          </ul>

          <ul className="left">
            <li>
              <b>Suporte</b>
            </li>
            <li>
              <a href="aprenda">Central de ajuda</a>
            </li>
            <li>
              <a href="aprenda">Termos de uso</a>
            </li>
            <li>
              <a href="aprenda">Termos de compra</a>
            </li>
            <li>
              <a href="aprenda">Política de privacidade</a>
            </li>
            <li>
              <a href="aprenda">Política de cookies</a>
            </li>
          </ul>
        </Content>

        <SubContent>
          <Detail>
            <FaPhoneAlt size={32} color="#fd3373" />

            <Texts>
              <p>Dúvidas? Sugestões</p>
              <b>Entre em contato!</b>
            </Texts>
          </Detail>

          <Detail>
            <Image
              src="/jelloLogo.svg"
              alt="landingLogo"
              width={32}
              height={32}
            />

            <Texts style={{ marginLeft: 20 }}>
              <p>Planos para empresas</p>
              <b>Saiba mais.</b>
            </Texts>
          </Detail>
        </SubContent>
      </Main>

      <Bottom>
        <span>Jello -- 2020 © Todos os direitos reservados</span>
      </Bottom>
    </Container>
  );
};

export default JelloInfo;
