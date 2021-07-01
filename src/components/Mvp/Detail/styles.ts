import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 6rem;

  @media (max-width: 1100px){
    justify-content: center;
    
    img {
      display: none;
    }

    div {
      text-align: center;
    }
  }

  img {
    height: 60rem;
    width: 60rem;
  }
`;

export const Text = styled.div`
  height: 140px;
  width: 600px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: flex-start;
  text-align: right;


  h1 {
    align-self: flex-start;
    width: 100%;
    font-size: 2.65rem;
  }

  p{
    font-weight: 100;
    line-height: 2rem;
    margin-top: 20px;
  }

  a {
      font-size: 1.2rem;
      margin-top: 20px;
      color: #fd3373;
    }

`;


