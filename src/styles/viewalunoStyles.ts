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

    @media (min-width: 650px) and (max-width: 900px) {
      margin-left: 2rem;
    }
    
    @media (max-width: 400px) {
      margin-left: 1rem;
      width: 135%;

      p {
        font-size: 1.3rem;
      }

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

  
  @media (min-width: 650px) and (max-width: 900px) {
      
      margin-left: 2rem;
    }

  @media (max-width: 400px) {

    margin-left: 1rem;
    width: 136%;

  }
  
`;

