import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 183px;
`;

export const Main = styled.div`
  width: 100%;
  padding: 64px 24px;
  border-top: 2px solid #fd3373;
  border-bottom: 2px solid #fd3373;
  
  b.subTitle{
    margin-left: 7.5%;
    font-size: 22px;
    @media (max-width: 1050px){
      margin-left: 31%;
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1050px){
      margin-bottom: 40px;
    }
  ul{
    b{
      font-size: 22px;
    }
    &.middle{
      text-align: center;
    }
    &.right{
      text-align: right;
    }
    
    li{
      margin-bottom: 10px;
      &:first-child{
        margin-bottom: 20px;
      }
      a{
        color: #200;
        font-size: 20px;
      }
    }
  }
`;

export const SubContent = styled.div`
  width: 85%;
  margin: auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width:  1050px){
    text-align: center;
    justify-content: center;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width:  1050px){
    margin-bottom: 40px;
  }
`;

export const Icon = styled.div`
  height: 60px;
  width: 60px;
  margin-right: 20px;
  margin-bottom: 10px; 
  background-color: #fd98b8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Detail = styled.div `
  width: 447px;
  height: 116px;
  margin-right: 10px;
  border-radius: 15px;
  border: 3px solid #fd3373;
  padding: 0 25px;
  display: flex;
  align-items: center;
  svg:first-child{
    margin-right: 20px;
  }
  @media (max-width: 1050px){
    margin-bottom: 20px;
  }
  img{
    margin-left: -30px;
  }
`;

export const Texts = styled.div`
  margin-left: 30px;
  margin-right: 0;
  text-align: left;
  font-size: 22px;
`;

export const Bottom = styled.div`
  height: 200px;
  padding: 30px;
  display: flex;
  justify-content: center;

  span{
    font-size: 20px;
  }
`;