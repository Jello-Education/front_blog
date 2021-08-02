import styled from "styled-components";

export const Login = styled.div`

img {
  width: 56.5%;
}

strong {
    position: relative;
    top: 220px;
    left: 5px;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 48px;
    /* identical to box height */
    
    letter-spacing: 0.015em;
  }

}

h2 {
  position: relative;
  top: 220px;
  left: 5px;
  white-space: nowrap;
  font-style: normal;
  font-weight: normal;
  font-size: 27px;
  line-height: 43px;
  letter-spacing: -0.005em;
}


#wave {
  position: absolute;
  width:  734px;
  height: 1044px;
  left: -12.5em;
  top: -2.5px;
}
  
  form {
    input {
      position:relative;
      top: 240px;
      left: -13px;
      height: 50px;
      border-radius: 25px;
      padding: 5 16px;
      background: #FFF;
      border: 1px solid #a8a8b3;
      margin: 8px;

      ::placeholder {
        color: #AAAAAA;
    }

}

    button { 
      position:relative;
        left: -10px;
      margin-top: 16px;
    }

    button, input {
      max-width: 350px;
      align-items: center;
      width: 200%;
    }
  }

}


.icon-carta {
  position:absolute;
  width: 24px;
  top: 62%;
  left: 4.1%;
}

.icon-cadeado {

position:absolute;
  width: 24px;
  top: 72%;
  left: 4.1%;
}

.icon-espace {
  padding-left:44px;
}


a {
  position:relative;
  top: 245px;
  left: -110px;
width: 133px;
height: 17px;


font-family: Futura Bk BT;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;

letter-spacing: 0.015em;
text-decoration-line: underline;

color: #FD3373;
}


.entrar-button {
  position:relative;
  top: 240px;
  height: 50px;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.25); 
  border-radius: 25px;
  font-weight: 500;
  background: #FD3373;
  color: White;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    width: 20px;
    margin: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }

}

.cadastrar-button {
  position:relative;
  top: 240px;
  height: 50px;
  border: 2px solid #FD3373;
  border-radius: 50px;
  font-weight: 500;
  background-color: white;
  color:#FD3373;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  transition: filter 0.2s;

  img {
    width: 20px;
    margin: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }

 }
}

#line-1 {
  position: relative;
  top: 250px;
  left: -200px;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.25); 
  }
  
  .separator {
    position:relative;
    top: 235px;
    left: -13px;
    color: #FD3373;
    font-size: 14px;
  line-height: 17px;
  /* identical to box height */
  
  letter-spacing: 0.015em;
  text-transform: uppercase;
  }
  
  #line-2 {
    position: relative;
    top: 213.2px;
    left: 170px;
    box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.25); 
  }
  
  }
  
  }
  

.google-button {
  position:relative;
  top: 190px;
  margin-top: 64px;
  height: 50px;
  box-shadow: 1px 3px 15px rgba(0, 0, 0, 0.25); 
  border-radius: 25px;
  font-weight: 500;
  background: white;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;

  transition: filter 0.2s;

  img {
    width: 20px;
    margin: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  } 
}


@media (max-width: 768px) {
  
  img {
    width: 900px;
  }

}
  @media (max-width: 425px) {

    #wave {
      width: 0px
    }
    
    .content {
      width: 110em;
      height: 136em;
      top: 75%;
      left: 26em;
      border-radius: 25px;
}
    

    div .main-content {
      position: relative;
      top: -267px;
      left: -37px;
      zoom: 311%;
    }

    .aluno-image {
      width: 0px;
      
    }

    #wave {
      width: 0%
    }

    .icon-carta {
      position:absolute;
      width: 24px;
      top: 64%;
      left: 4.1%;
    }
    
    .icon-cadeado {
    
    position:absolute;
      width: 24px;
      top: 75%;
      left: 4.1%;
    }

    
    .chekmark-input {
      position: relative;
      top: -189px;
    } 


    #line-1 {
      width: 203px;
      top: 248px;
      left: -133px;
    }

    .separator {
      left: -8px;
    }

    #line-2 {
      position: relative;
      width: 203px;
      top: 218px;
      left: 117px;
    }

   
    

    @media (max-width: 375px) {
    

      .content {
        left: 25em;
      }
    
    }
    
    @media (max-width: 320px) {
      .aluno-image {
        width: 0px;
    }

    .content {
      left: 19em;
  }
    }
  }

`;
export const Container = styled.div`
  main {
    background-color: #fdfdfd;
    position: absolute;
    width: 524px;
    height: 515px;
    left: 780px;
    top: -0.5px;
    flex: 8;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    position: relative;
    top: 10px;
    left: -60px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: center;
    z-index: 1;

    > img {
      align-self: center;
    }
  }
`;

export const Checkbox = styled.label`
  .container {
    position: relative;
    top: 255px;
    display: block;
    position: relative;

    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  p {
    font-size: 11px;
    line-height: 17px;
    /* identical to box height */

    letter-spacing: 0.015em;

    /* principal #1 */

    color: #fd3373;
  }

  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .checkmark {
    position: absolute;
    top: 3px;
    left: 90px;
    height: 10px;
    width: 10px;
    border: 2px solid #fd3373;
    box-sizing: border-box;
    border-radius: 1.8px;
  }

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }

  .container input:checked ~ .checkmark {
    background-color: #fd3373;
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  .container input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  .container .checkmark:after {
    top: 2px;
    left: 2px;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: white;
  }

  @media (max-width: 425px) {
    p {
      font-size: 13.5px;
    }
    .checkmark {
      position: absolute;
      top: -0.5px;
      left: 85px;
      height: 15px;
      width: 15px;
      background-color: white;
      border: 2px solid #fd3373;
      box-sizing: border-box;
      border-radius: 1.8px;
    }

    .container .checkmark:after {
      top: 3px;
      left: 3px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: white;
    }
  }
`;
