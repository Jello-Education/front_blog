import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 120px;
`;

export const Video = styled.div`
  width: 100%;
  height: 604px;

  padding: 0 10rem;

  @media (max-width: 1100px) {
    padding: 0 3rem;
  }

  display: flex;
  align-items: center;
  
  @media (max-width: 1100px) {
    flex-direction: column;
  }

  div.video {
    width: 65rem;
    height: 100%;

    background: #ccc;

    margin-right: 3rem;
  }


`;

export const Aside = styled.div`
  height: 100%;
  width: 25rem;

  @media (max-width: 1100px) {
    margin-top: 2rem;
    width: 100%;
  }
`;

export const Anotations = styled.div`
    width: 100%;
    height: 88%;

    background: #f1f1f1;
    border-radius: 15px;

    padding: 15px;

    nav {
      display: flex;
      align-items: center;
      justify-content: center;

      h3 {
        font-size: 1.5rem;
        margin-left: 0.5rem;
      }

      img {
        margin-right: 0.5rem;
      }
    }

    p {
      font-size: 0.85rem;
      margin-top: 1.2rem;
      line-height: 1.5rem;
    }
`;

export const Progress = styled.div`
  height: 10%;
  width: 100%;

  border-radius: 15px;
  background: #f1f1f1;

  margin-top: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-left: 20px;
    margin-bottom: 10px;
  }
`;

export const Description = styled.div`
  width: 100%;

  margin-top: 60px;
  padding: 0 10rem;

  @media (max-width: 1100px) {
    padding: 5rem;
    
    text-align: center;
  }

  h1 {
    font-size: 3rem;
    color: #FD3373;
  }

  > div.line {
    margin-top: 4rem;

    flex: 1;
    border-bottom: 3px solid #ccc;

    > p {
      width: 100px;

      font-size: 1.2rem;

      border-bottom: 3px solid #FD3373;
      padding-bottom: 3px;
      margin-bottom: -3px;
    }
  }
`;

export const Texts = styled.div`
  margin-top: 4rem;

  h4{
    color: #C73865;
    font-size: 1.2rem;
  }

  p {
    width: 70rem;

    line-height: 1.5rem;

    margin-top: 1rem;
    margin-bottom: 500px;

    @media (max-width: 1100px) {
        width: 35rem;
      }
  }
`;