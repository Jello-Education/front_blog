import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 80px;
  width: 100%;
  background: #e5e5e5;
  text-align: left;
  padding: 0 24px;

  display: flex;
`;

export const Main = styled.div`
  width: 1038px;
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Titles = styled.div`
  margin-bottom: 52px;

  p{
    color: #fd3373;
    text-decoration: underline;
    margin-bottom: 48px;
  }

  h1{
    font-size: 42px;
    margin-bottom: 21px
  }

  sub{
    font-size: 36px;
  }
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 52px;
  border-bottom: 2px solid #fd3373;
  margin-bottom: 54px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  img{
    margin-right: 13px;
  }

  p{
    font-size: 24px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  height: 42px;
  width: 42px;
  border-radius: 50%;
  margin-left: 5px;
  background: #FD98B8;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`

`;

export const BlogImage = styled.div`
  margin-bottom: 73px;
`;

export const BlogContent = styled.div`
  width: 100%;
  height: 1232px;
  background: rgba(126, 126, 126, 0.5);
  border-bottom: 2px solid #fd3373;
`;  