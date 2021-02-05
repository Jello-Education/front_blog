import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 1100px;
  width: 100%;
  margin-bottom: 230px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  @media (max-width: 1200px){
      height: 2600px;
    }

  img{
    position: absolute;
    z-index: -1;

    &.top{
      top: 80px;
      right: 200px;
    }

    &.bottom{
      bottom: -180px;
      left: 220px;
      transform: rotate(180deg)
    }

    @media (max-width: 1200px){
      display: none;
    }
  }
`;

export const PlansContainer = styled.div` 
  display: flex;
  align-items: flex-end;

  @media (max-width: 1200px){
      flex-direction: column;
    }
`;

export const Plan = styled.div`
    width: 448px;
    height: 756px;
    background: #fafafa;
    border-radius: 30px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    &.recomended{
      height: 814px;
      background: #fd79a3;
      color: #fafafa;
    }

    h1{
      width: 250px;
      
    }

    @media (max-width: 1200px){
      margin-bottom: 20px;
    }

`;

export const Description = styled.div`
  height: 432px;
  width: 212px;
  background: #c4c4c4;
`;