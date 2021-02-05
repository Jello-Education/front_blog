import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1100px){
    height: 400px;
  }
`;

export const Text = styled.div`
  width: 750px;
  height: 140px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media (max-width: 1170px){
    text-align: center;
    height: 170px;
  }

  h1{
    @media (max-width: 1170px){
      font-size: 36px;    
    }
  }

  line{
    display: block;
    height: 5px;
    width: 40px;
    background: #fd3373;

    @media (max-width: 1170px){
    margin-left: 125px;
  }
  }

  p{
    font-weight: 100;
    line-height: 40px;

    @media (max-width: 1170px){
      margin-top: 10px;
      line-height: 30px;
    }

    a{
      margin-left: 20px;
      color: #fd3373;
  }
  }

`;



export const Aside = styled.aside`
  position: relative;
  top: -50px;
  display: flex;
  flex-direction: column;

  img{
    
    @media (max-width: 1170px){
      display: none;
    }
    
    &:first-child{
      transform: translateY(40px)
    }
  }

`
