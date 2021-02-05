import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 800px;
  width: 90%;

  display: flex;
  align-items: center;
  justify-content: space-around;

  img.mockUp, .squares{
    height: 80%;
    width: 70%;

    @media (max-width: 1100px){
      display: none;
    }
  }
`;

export const Squares = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 100px;
  left: 100px;

  img{
    width: 270px;
    height: 270px;
  }
`

export const Texts = styled.div`
  width: 700px;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;

  @media (max-width: 1100px){
      text-align: center;
      align-items: center;
      margin-left: 60px;
    }

  h1{
    margin-bottom: 20px;
  }

  p{
    width: 350px;
    margin-bottom: 20px;
  }

  b{
    font-weight: bold;
    border-bottom: 6px solid #fd3373;
  }
`;

export const Buttons = styled.div`
  width: 450px;
  height: 80px;
  border-left: 10px solid #fd3373;

  display: flex;
  justify-content: space-around;
  align-items: center;

  button{
    width: 212px;
    height: 70px;
    border-radius: 20px;
    border: 3px solid #fd3373;
    background: transparent;
    text-transform: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    font-weight: normal !important;
  }

  img{
   width: 30px;
   height: 30px;
   margin-right: 15px;
  }
  svg{
    margin-right: 15px;
    margin-bottom: 5px;
  }
`;