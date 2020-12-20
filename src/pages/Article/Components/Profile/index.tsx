import React from 'react';

import { Container, User, Icons, Icon } from './styles';
import { FaWhatsapp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi'

import userFoto from '../../../../assets/userFoto.svg';


const Profile: React.FC = () => {
  return (
    <Container>
      <User>
        <img src={userFoto} alt="userFoto"/>
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