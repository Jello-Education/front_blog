import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 734px;
  background: #fd98b8;
  padding: 0 20%;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: 1200px){
    padding: 0;
    align-items: center;
    text-align: center;
  }

  h1{
    width: 700px;
    margin-top: 20px;
    margin-right: 600px;

    @media (max-width: 1200px){
      margin: 0;
    }
  }

  line{
    position: relative;
    top: -50px;
    height: 6px;
    width: 50px;
    display: block;
    background: #fd3373;

    @media (max-width: 1200px){
      top: -60px;
      left: -300px;
    }
  }
`;

export const BoxSection = styled.div`
  width: 1200px;
  display: flex;
  
  @media (max-width: 1200px){
    justify-content: center;
  }

`

export const BoxText = styled.div`
  position: relative;
  height: 314px;
  width: 648px;
  background-color: #fafafa;
  border-radius: 36px;
  box-shadow: 0px 10px 10px 0px rgba(109, 111, 159, 0.25);
  
  &.first {
    top: -80px;
    left: 0px;
    z-index: 10;
  }

  &.second{
    right: 80px;
    z-index: 1;

    @media (max-width: 1200px){
      display: none;
    }
  }
`

export const CarousellDots = styled.div`
  position: relative;
  bottom: -20px;
  width: 70px;
  
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: center;
`

interface DotsProps {
  active?: boolean;
}

export const Dots = styled.div<DotsProps>`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #fafafa;

  ${props => props.active && css`
    background: #44f9bd;
  `}
`