import styled from 'styled-components';


export const Container = styled.div`
  height: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }

  img.img-land {
    height: 40rem;
    margin-left: 100px;
  }
  > img {
    
  }
`;

export const Background = styled.div`
  position: absolute;
  z-index: -2;
  top: 0;
  right: 0;
  width: 100%;
  height: 500px;

  img {
    width: 100%;
    height: 40rem;
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
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #44F9BD;
  
  display: flex;
  align-items: center;
  justify-content: center;
`;