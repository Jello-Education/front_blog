import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const Top = styled.div`
  
`;

export const Section = styled.div`
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

export const Categories = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Categorie = styled.button`
  width: 212px;
  height: 123px;
  background: #fff;
  border-radius: 10px;
  border: 1px solid #bdbdbd;
  color: #828282;
  margin-right: 25px;
  margin-bottom: 20px;
  font-size: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s;

  &:last-child{
    margin-right: 0px;
  }

  &:hover{
    border-color: #FD3373;
    color: #FD3373;
  }
`;
