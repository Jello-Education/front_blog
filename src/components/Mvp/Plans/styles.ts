import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 1100px;
  width: 100%;
  margin-bottom: 2rem !important;

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

   > h1 {
    font-size: 2.3rem !important;
  }

  button {
    height: 4.5rem;
    width: 40rem;
    background: #44F9BD;
    border-radius: 40px;
    border: 0;
    box-shadow: 1px 8px 1px #39CF9D;
    color: #000;
    font-size: 2.8rem;
    font-weight: bold;
    margin-bottom: -2rem; 
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
    width: 25rem;
    height: 40rem;
    background: #fafafa;
    border-radius: 30px;
    box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
    margin: 0 15px;
    padding: 40px !important;
    
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;

    &.recomended{
      height: 45rem;
      background: #FD3373;
      color: #fafafa;
    }

    h1{
      width: 250px;
      font-size: 2.3rem !important;  

      b {
        color: #39CF9D;
        text-shadow: 1px 3px 1px #000;

        &.premium {
          color: #fff;
        }
      }   
    }

    @media (max-width: 1200px){
      margin-bottom: 20px;
    }

`;

export const Description = styled.div`
  height: 432px;
  width: 212px;
  
  ul {
    list-style: disc;
    font-size: 1.3rem;
    color: #000;

    li {
      margin-top: 1.5rem;
    }
  }
`;