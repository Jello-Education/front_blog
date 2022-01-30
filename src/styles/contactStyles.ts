import styled from 'styled-components';

export const Container = styled.div`
  > img {
    margin-top: 30px;
    width: 100%;
    height: 40rem;
  }
`;

export const Info  = styled.div`
  margin-top: 40px;
  padding: 0 250px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Left  = styled.div`
  width: 377px;
  height: 277px;
  font-size: 1.3rem;

  p {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg{ 
      margin-right: 10px;
    }
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 50px;
  width: 50px;
  margin-right: 20px;
  margin-bottom: 10px; 
  background-color: #FD3373;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 30rem;
  height: 37rem;
  background: #DD6F92;
  border-radius: 50px;
  padding: 10px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input, textarea {
    width: 100%;
    height: 4rem;
    border-radius: 40px;
    border: 1.90625px solid #FD3373;
  }

  textarea {
    height: 13rem;
    padding: 15px 25px;
  }

  span {
    align-self: flex-start;
    margin-left: 20px;
  }

  button {
    width: 10rem;
    height: 4rem;
    background: #39DEA7;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16.7564px;
    border: 0;
    align-self: flex-start;
    font-size: 1.2rem;
  }
`;
