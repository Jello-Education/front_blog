import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 25px;
  margin-top: 30px;
  z-index: 10;

  h3 {
    color: #535353;
    font-size: 1.2rem;
  }


  span, p {
    color: #A83056;
    font-size: 0.9rem;
  }
`;

export const Sobre = styled.div`
  position: relative;
  width: 800px;
  height: 204px;
  border-radius: 10px;
  background: #fff;
  margin-bottom: 30px;
  padding: 22px 37px;

  h3{
    margin-bottom: 25px;
    margin-right: 25px;
  }

  @media (max-width: 1000px) {
    width: 95% !important;
  }
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

export const CursesBox = styled.div`
  width: 800px;
  border-radius: 10px;
  background: #fff;
  padding: 22px 20px 0px 30px;

  @media (max-width: 1000px) {
    width: 95% !important;
  }
`;

export const CourseList = styled.div`
  margin-top: 15px;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1000px) {
    justify-content: center;
  }

  span{
    font-size: 14px;
    margin-bottom: 30px;
  }

  div{
    text-align: center;
    margin-top: 10px;

    > p{
      font-size: 0.8rem;
      margin-top: 10px;
    }
  }
`;

export const CourseBox = styled.div`
  width: 20.5rem;
  height: 13.5rem;
  border: 2px solid #f1f1f1;
  border-radius: 10px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.2s;

  img{
    width: 100%;
    height: 10rem;
  }

  h3{
    margin-bottom: 15px;
  }

  &:hover{
    border: 2px solid #FD3373;
  }
`;