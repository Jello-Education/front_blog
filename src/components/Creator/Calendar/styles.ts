import styled from 'styled-components';

export const Container = styled.div`
  width: 810px;
  height: 497px;
  background: #fff;
  border-radius: 40px;
  padding: 20px 30px;

  h1, h2, p {
    color: #535353;
    font-weight: bold;
  }

  h1 {
    font-size: 1.5rem;
  }

  div.icon {
      width: 30px;
      height: 30px;
      background: #C73865;
      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;
    }

  nav {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;

  }

  header {
    > div {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    p {
      margin-right: 15px;
      font-size: 1.2rem;
    }

    > div {
      margin-left: 10px;
    }
  }
  }
`;
