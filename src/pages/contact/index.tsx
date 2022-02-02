import React from "react";
import Header from "../../components/Shared/Header";

import {
  Container,
  Info,
  Left,
  Box,
  Icons,
  Icon,
} from "../../styles/contactStyles";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import JelloInfo from "../../components/Shared/JelloInfo";

const contact: React.FC = () => {
  return (
    <Container>
      <Header />
      <img
        className="background"
        src="backgroundTelaContato.svg"
        alt="banner"
      />

      <Info>
        <Left>
          <p>
            <FaPhoneAlt size={30} color="#FD3373" /> (31) XXXX-XXXX
          </p>
          <p>
            <FaEnvelope size={30} color="#FD3373" /> email@jello.com.br
          </p>
          <p>
            <FaMapMarkerAlt size={30} color="#FD3373" /> Rua xxx, Brasil
          </p>
          <Icons>
            <Icon>
              <FaFacebookF size={25} color="#fff" />
            </Icon>

            <Icon>
              <FaLinkedinIn size={25} color="#fff" />
            </Icon>

            <Icon>
              <FaInstagram size={25} color="#fff" />
            </Icon>

            <Icon>
              <FaTwitter size={25} color="#fff" />
            </Icon>

            <Icon>
              <FaYoutube size={25} color="#fff" />
            </Icon>
          </Icons>
        </Left>
        <Box>
          <span>Digite seu nome:</span>
          <input type="text" />
          <span>Digite seu e-mail:</span>
          <input type="text" />
          <span>
            <p>Digite sua mensagem:</p>
          </span>
          <textarea />

          <button>Enviar</button>
        </Box>
      </Info>
      <JelloInfo />
    </Container>
  );
};

export default contact;
