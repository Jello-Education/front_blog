import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -300px;
`;

export const Left = styled.div`

`;

export const Right = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Ad  = styled.div`
  width: 90%;
  height: 5rem;
  background: #C4C4C4;
  margin-bottom: 2rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1rem;
  }
`;
