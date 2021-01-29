import React from 'react';
import Image from 'next/image';

import { Container, User, Icons, Icon } from './styles';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi'

const Profile: React.FC = () => {
  return (
    <Container>
      <User>
        <Image 
          src="/userFoto.svg" 
          alt="userFoto"
          width={30}
          height={30}
          />
            <p>Por <b>Fulano de Tal</b></p>
      </User>
      <Icons>
        <FiShare2 color="#FD98B8" size={40}/>
            
        <Icon>
          <FaWhatsapp color="#fff" size={25}/>
        </Icon>

        <Icon>
          <FaFacebookF color="#fff" size={25}/>
        </Icon>

        <Icon>
          <FaInstagram color="#fff" size={25}/>
        </Icon>

        <Icon>
          <FaLinkedinIn color="#fff" size={25}/>
        </Icon>

        <Icon>
          <FaTwitter color="#fff" size={25}/>
        </Icon>
            
        </Icons>
    </Container>
  );
}

export default Profile;