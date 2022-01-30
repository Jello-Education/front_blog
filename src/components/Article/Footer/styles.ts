import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  padding-top: 40px;
  border-top: 2px solid #fd3373; 
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1{
    margin-bottom: 30px;
  }
`;

export const Posts = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 100px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;