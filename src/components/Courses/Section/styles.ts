import styled from 'styled-components';


export const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;


`;

export const Background = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
  width: 100%;
  height: 550px;
  
  background: 
    linear-gradient(112.88deg, 
    rgba(253, 51, 115, 0.4) 0.03%, 
    rgba(68, 249, 189, 0.076) 100%);
    
 
    img  {
      position: relative;
      left: 37em;
      top: 7.7em;
      width: 56%;

    }


  @media (min-width: 1900px) {
    img {
    position: relative;
      left: 70.8em;
      top: 6.8em;
    }
  }

  @media (min-width: 768px) and (max-width: 900px) {
    img {
      position: relative;
      left: 20.1em;
      top: 17.7em;
      width: 64%;
    }
  }

  @media (max-width: 375px) {
    img {
      position: relative;
      top: 32.2em;
      width: 100%;
    }
  }

`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
  }
  
  h1{
    font-size: 3rem;
    width: 15rem;
    margin-bottom: 70px;

    @media (max-width: 1000px) {
      width: 300px;
    }

    b{
      color: #FD3373;
    }
  }
`;

export const Input = styled.div`
  width: 35rem;
  height: 5rem;
  border-radius: 50px;
  background: #fff;
  color: #828282;
  border: 1px solid #f1f1f1;
  padding: 0 30px;

  display: flex;
  align-items: center;
  margin-right: 35em;

  input{
    border: 0;
    background: transparent;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 900px) {
    margin-right: 0;
  }

  @media (max-width: 375px) {
    margin-right: 0;
    width: 31rem;
  }
`;

export const Icon = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #44F9BD;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;