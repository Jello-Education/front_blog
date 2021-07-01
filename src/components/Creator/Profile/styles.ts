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
  align-items: center;
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

  p {
    color: #A83056;
    font-size: 0.9rem;
  }

  button {
    border: 0;
    background: none;
  }
`;
