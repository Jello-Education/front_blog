import styled from 'styled-components';

export const Container = styled.div`
  width: 448px;
  height: 308px;
  background: #f2f2f2;
  border-radius: 10px; 
  margin: 10px 40px;

  header{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    width: 300px;
    margin: 10px 21px;
  }

  @media (max-width: 550px) {
    width: 344px;
  }
`;

export const Title = styled.div`
  height: 53px;
  width: 100%;
  background: #c4c4c4;
  margin-top: 10px;
`;

export const Content = styled.div`
  height: 112px;
  width: 100%;
  background: #c4c4c4;
  margin-top: 10px;
`;

export const Profile = styled.div`
   margin-top: 17px;
   display: flex;
   align-items: center;
   margin-left: 16px;

  img{
    width: 52px;
    height: 52px;
  }

   p{
     margin-left: 10px;
   }
`;