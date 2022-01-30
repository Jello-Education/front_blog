import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 60px;
  padding: 0 10rem;

  @media (max-width: 1100px) {
    padding: 5rem;
    
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    color: #FD3373;
  }

  > div.line {
    margin-top: 4rem;

    display: flex;
    align-items: center;
    flex: 1;

    border-bottom: 3px solid #ccc;

    > button {
      background: none;
      border: 0;

      margin-right: 20px;

      font-family: "Montserrat";
      font-size: 1.2rem;

      transition: border 0.2s;

      &.line {
        border-bottom: 3px solid #FD3373;
        padding-bottom: 3px;
        margin-bottom: -3px;
      }
    }
  }
`;

export const Texts = styled.div`
  margin-top: 4rem;

  h4{
    color: #C73865;
    font-size: 1.2rem;
  }

  p {
    width: 70rem;

    line-height: 1.5rem;

    margin-top: 1rem;
    margin-bottom: 500px;

    @media (max-width: 1100px) {
        width: 35rem;
      }
  }
`;

export const Duvida = styled.div`
  width: 100%;
  margin-bottom: 200px;

  div.inputs {
    width: 70%;

    input {
      width: 100%;
      height: 300px;
      border: 1px solid #FD3373;
      border-radius: 25px;

      margin: 15px 0;

      &:nth-child(2) {
        height: 40px;
      }
    }

    label{
      margin-left: 5px;
    }
  }


  div.buttons {
    width: 70%;
    
    display: flex;
    justify-content: flex-end;

    button {
      width: 120px;
      height: 40px;

      background: #F24C4C;
      border-radius: 25px;
      border: 0;
      margin-right: 10px;

      font-size: 1rem;

      color: #fff;

      transition: opacity 0.2s;

      &:nth-child(2){
        background: #44F9BD;
      }

      &:hover{
        opacity: 0.8;
      }
    }
  }
`;

export const Chat = styled.div`
  width: 100%;
  height: 600px;
  
  display: flex;
  align-items: center;

  margin-bottom: 200px;

  div.left {
    width: 80%;
    height: 100%;

    background: #eee;
    border-radius: 10px;

    nav{
      width: 100%;
      
      padding: 20px;

      display: flex;
      align-items: center;

      img {
        margin-right: 20px;
      }

      input{ 
        width: 90%;
        height: 40px;

        border: 1px solid #C73865;
        background: none;
        border-radius: 20px;

        padding: 20px;

        font-size: 1rem;

        color: #ccc;
      }
    }
  }

  div.right {
    width: 20%;
    height: 100%;

    background: #BDBDBD;
    border-radius: 10px;

    padding: 20px;

    margin-left: 10px;

    button {
      height: 40px;
      width: 100%;

      border-radius: 20px;
      background: #44F9BD;
      border: 0;

      font-size: 1.1rem;
      color: #000;

    }
  }
`;