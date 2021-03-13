import styled from 'styled-components';

export const Container = styled.div`
  margin-left: 25px;
  margin-top: 30px;
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
  height: 345px;
  border-radius: 10px;
  background: #fff;
  padding: 22px 20px 0px 0px;

  > h3{
    margin-left: 25px;
  }
`;

export const CourseList = styled.div`
  margin-top: 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 14;
    color: #FD3373;
    margin-bottom: 30px;
  }

  div{
    text-align: center;

    > p{
      font-size: 14px;
      margin-top: 10px;
    }
  }
`;

export const CourseBox = styled.div`
  width: 330px;
  height: 219px;
  border: 2px solid #f1f1f1;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img{
    width: 100%;
    height: 160px;
  }

  h3{
    margin-bottom: 15px;
  }
`;