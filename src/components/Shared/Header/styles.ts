import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  height: 80px;
  width: 100%;
  padding: 0 0.3rem;
  background: #fafafa;
  border: 0.75px solid #e5e5e5;
  border-radius: 0 0 20px 20px;

  img {
    margin-right: 7.8rem;
    width: 8rem !important;
    height: 3rem;
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    img {
      margin-right: 3rem;
    }

    div {
      div {
        margin-left: 0;
      }
    }
  }
`;

export const HeaderContent = styled.div`
  height: 100%;
  max-width: 1350px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;



export const NavBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  margin-left: 4rem;
`;
