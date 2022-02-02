import styled from "styled-components";

export const Container = styled.div`
  > img {
    width: 100%;
    margin-top: 30px;
    height: 40rem;
  }

  @media (min-width: 1440px) {
    > img {
      height: 61rem;
    }
  }

  @media (min-width: 900px) and (max-width: 1400px) {
    > img {
      height: 56rem;
      margin-top: -5rem;
    }
  }

  @media (max-width: 500px) {
    > img {
      margin-top: -5rem;
    }
  }
`;

export const Info = styled.div`
  margin-top: 40px;
  padding: -1 250px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center;
  }

  @media (max-width: 425px) {
    padding: 0 0;
  }
`;

export const Left = styled.div`
  width: 377px;
  height: 277px;
  font-size: 1.3rem;

  p {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    svg {
      margin-right: 10px;
    }
  }

  @media (max-width: 425px) {
    width: 263px;
    height: 247px;
    margin-left: 14px;
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
  background-color: #fd3373;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    height: 47px;
    width: 50px;
    margin-right: 7px;
  }
`;

export const Box = styled.div`
  width: 30rem;
  height: 37rem;
  background: #dd6f92;
  border-radius: 50px;
  padding: 10px 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input,
  textarea {
    width: 100%;
    height: 4rem;
    border-radius: 40px;
    border: 1.90625px solid #fd3373;
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
    width: 20rem;
    height: 4rem;
    background: #39dea7;
    color: #f9f9f9;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16.7564px;
    border: 0;
    align-self: flex-start;
    font-size: 1.8rem;
    font-weight: bold;
  }

  @media (min-width: 1024px) and (max-width: 1300px) {
    padding: 10px 100px;

    input,
    textarea {
      width: 160%;
    }

    p {
      width: 10rem;
    }
    button {
      margin-inline-start: -4rem;
    }
  }

  @media (min-width: 750px) {
    button {
      width: 16rem;
      font-size: 1.5rem;
    }
  }
`;
