import styled from 'styled-components';

export const Container = styled.div`
  font-family: "Montserrat";

  h1{
    font-size: 38px;
  }

  p{
    font-size: 22px;
  }
`;

export const BackgroundImage = styled.div`  
  background-image: url("./MPV_main_img.png");
  background-size: cover;
  height: 702px;
  width: 100%;
  color: #fff;
  font-family: "Montserrat";

  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 176px;

  &::before{
    content: "";
    background-color: rgb(253, 51, 115, 0.1);
    height: 702px;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }

  h1{
    width: 480px;
    font-size: 52px;
    margin-bottom: 20px;

    b{
      padding-left: 20px;
      border-left: 10px solid #FD3373;
      font-weight: bold;
    }

    i{
      font-style: normal;
      margin-left: -25px;
    }
  }

  p{
    width: 480px;
    font-size: 28px;
  }
`;