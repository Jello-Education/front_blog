import styled from 'styled-components';

import { darken } from "polished";

export const Container = styled.div`
  width: 75%;
  margin: auto;
  margin-top: 50px;

  > button{
    width: 188px;
    height: 50px;
    border: 0;
    background: #fd3373;
    color: #fff;
    border-radius: 5px;
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.3s;

    &:hover{
      background: ${darken(0.06, "#fd3373")}
    }
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 10px;
  
  b{
    border-bottom: 5px solid #FD3373;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 50px;
`;

export const Card = styled.button`
  width: 30%;
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