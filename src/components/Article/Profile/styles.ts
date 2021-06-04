import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 52px;
  border-bottom: 2px solid #fd3373;
  margin-bottom: 54px;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px){
    justify-content: center;
  }
`;

export const User  = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1000px){
    margin-right: 40px;
  }

  p{
    font-size: 24px;
    margin-left: 10px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-left: 5px;
  background: #FD98B8;

  display: flex;
  align-items: center;
  justify-content: center;
`;
