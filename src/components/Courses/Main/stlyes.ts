import styled from 'styled-components';

export const Container = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 50px;
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;

  h1{

    b{
      border-bottom: 5px solid #FD3373;
    }
  }

  span{
    margin-left: 50px;
    color: #FD3373;
    font-size: 14px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  @media (max-width: 1400px){
    justify-content: center;

    > button{
      margin-right: 10px;
    }
  }
`;

export const Card = styled.button`
  width: 328px;
  height: 403px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #f1f1f1;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  transition: all 0.3s;

  img{
    margin-bottom: 10px;
  }

  &:hover{
    transform: scale(1.1);
    border-color: #FD3373;
  }
`;

export const Bottom = styled.div`
  height: 200px;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  nav{
    display: flex;
    flex-direction: column;
    align-items: center;

    small{
      margin-left: 5px;
      margin-top: 2px;
    }
  }

  b{
    margin-bottom: -10px;
    color: #025FCD;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;