import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  background: #e5e5e5; 
  padding: 0 24px;
  
  @media (max-width: 1000px){
    text-align: center;
  }
`;

export const Section = styled.div`
  text-align: left;
  display: flex;
  justify-content: space-around;
`;

export const Main = styled.div`
  width: 1038px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Titles = styled.div`
  margin-bottom: 52px;
  p{
    color: #fd3373;
    text-decoration: underline;
    margin-bottom: 48px;
  }
  h1{
    font-size: 42px;
    margin-bottom: 21px
  }
  sub{
    font-size: 36px;
  }
`;