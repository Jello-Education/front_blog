import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: -30px;
  z-index: 10;

  width: 380px;

  @media (max-width: 1270px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    color: #535353;
    font-size: 1.2rem;
  }

  span, p{
    color: #A83056;
    font-size: 0.9rem;
  }
`;
  
export const User = styled.div`
  position: relative;
  z-index: 1;
  height: 316px;
  background: #fff;
  border-radius: 10px;
  padding: 0 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Icon = styled.div`
  position: absolute;
  z-index: 999;
  top: 20px;
  right: 20px;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  background: #fd79a3;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InfoBoxes = styled.div`
  margin-top: 50px;
  padding: 27px 22px;
  height: 167px;
  background: #fff;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  p{
      margin-bottom: 20px;
    }

  div{
    width: 160px;
    height: 59px;

    display: flex;
    align-self: center;
    align-items: center;
    justify-content: center;

    img{
      height: 59px;
      width: 59px;
      margin-right: -20px;
    }

    span{
      margin-left: 30px;
    }
  }
`;