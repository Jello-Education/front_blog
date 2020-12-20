import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1300px){
    display: none;
  }

  form{
    height: 246px;
    width: 330px;
    margin-top: 530px;
    margin-bottom: 80px; 
    padding: 20px 5px;
    background: #fff;
    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1{
      margin-bottom: 12px;
      font-size: 24px;
      font-weight: normal;
    }

    input{
      width: 100%;
      height: 48px;
      margin-bottom: 5px;
      border: 1px solid #FD98B8;
      border-radius: 10px;
      padding: 10px 10px;
    }

    button{
      width: 320px;
      height: 48px;
      margin-top: 20px;
      background: #FD3373;
      color: #fff;
      border-radius: 10px;
      border: 0;
    }
  }
`;


export const Ad = styled.div`
  width: 330px;
  margin: 30px 0;
  height: 244px;
  background: rgba(196, 196, 196, 0.5); 
  
  display: flex;
  align-items: center;
  justify-content: center;
`;