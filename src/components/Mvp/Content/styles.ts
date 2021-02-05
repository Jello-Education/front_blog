import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1{

  }

  p{
    margin-top: 20px;
    width: 452px;

    b{
      font-weight: normal;
      color: #fd3373;
    }
  }
`;

export const Box = styled.div`
  width: 920px;
  height: 622px;
  border-radius: 25px;
  background: #fafafa;
  margin: 30px 0;
  padding: 40px 0 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  button{
    width: 212px;
    height: 60px;
    background: #fd3373;
    color: #fff;
    border-radius: 20px;
    border: 0;
    margin-top: 30px;
    font-size: 18px;
    transition: all 0.3s;

    &:hover{
        opacity: 0.8;
      }
  }
`;