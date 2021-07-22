import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin-top: 80px;
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