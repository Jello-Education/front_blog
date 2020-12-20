import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  border-radius: 20px;
  padding: 16px 30px;
  background: #FD98B8;

  display: flex;
`;

export const Texts = styled.div`
  width: 100%;
  text-align: left;
  color: #fff;
  margin-top: 20px;
  margin-left: 50px;


  h1{
    margin: 0;    
    font-size: 36px;
    margin-bottom: 35px;
  }

  
`;

export const Form = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  p{
    width: 556px;
    font-size: 24px;
    line-height: 39.24px;

    b{
      color: #FD3373;
    }
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;

    input{
      width: 448px;
      height: 64px;
      padding: 0 20px;
      margin-bottom: 12px;
      background: #FAFAFA;
      border-radius: 25px; 
      border: 0;
    }

    button{
      width: 448px;
      height: 60px;
      background: #FD3373;
      color: #fff;
      border-radius: 20px;
      border: 0;
      transition: opacity 0.3s;

      &:hover{
        opacity: 0.8;
      }
    }
  }
`;