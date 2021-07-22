import styled from 'styled-components';

export const Container = styled.div`
  width: 330px;
  height: 672px;
  border-radius: 40px;
  background: #fff;
  margin-right: 40px;
  padding: 20px 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;

  header{
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: 9rem;
    }

    h2{
      margin-top: 10px;
    }
  }

  p, span {
    color: #A83056;
    font-size: 0.9rem;
  }

  span {
    margin-right: 10px;
  }

  button {
    border: 0;
    background: none;
    border-radius: 25px;
    padding: 5px 0;

    display: flex;
    align-items: center;

    transition: all 0.2s;

    &:hover {
      background: #FD79A3;
      color: #fff !important;
      padding: 5px;
    }

    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;
