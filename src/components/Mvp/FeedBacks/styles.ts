import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 8rem;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 3.2rem;
  }

  p {
    margin-bottom: -7rem;
    font-size: 1.5rem;
  }

  a {
    color: #FD3373;
  }

  img {
    height: 60rem;
    width: 60rem;
  }

  button {
    height: 3rem;
    width: 20rem;
    border-radius: 15px;
    background: #FD3373;
    border: 0;
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    margin-top: -5rem;

    transition: opacity 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`;
