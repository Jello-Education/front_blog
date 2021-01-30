import styled from 'styled-components';

export const Container = styled.div`
  width: 1440px;
  margin: auto;
  margin-top: 50px;
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;

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
`;

export const Card = styled.div`
  width: 328px;
  height: 403px;
  border-radius: 10px;
  background: #fff;
  border: 2px solid #f1f1f1;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    margin-bottom: 10px;
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
      margin-top: 3px;
    }
  }

  b{
    color: #025FCD;
  }
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;