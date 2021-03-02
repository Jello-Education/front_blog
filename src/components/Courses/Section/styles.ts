import styled from 'styled-components';

export const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Texts = styled.div`
  h1{
    font-size: 48px;
    width: 550px;
    margin-bottom: 70px;

    b{
      color: #FD3373;
    }
  }
`;

export const Input = styled.div`
  width: 566px;
  height: 85px;
  border-radius: 20px;
  background: #fff;
  color: #828282;
  border: 1px solid #f1f1f1;
  padding: 0 30px;

  display: flex;
  align-items: center;

  input{
    border: 0;
    background: transparent;
    width: 100%;
  }
`;

export const Icon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #44F9BD;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;