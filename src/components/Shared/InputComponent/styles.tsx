import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 24rem;
  height: 4rem;

  margin-bottom: 12px;
  margin-right: 24px;
  padding-left: 19px;

  background: #fafafa;
  border-radius: 25px;

  justify-content: center;
  align-items: center;

  input {
    flex: 1;
    border: 0;
    background: transparent;

    &::placeholder {
      font-family: "Montserrat", sans-serif;
      font-weight: 500;
      font-size: 1rem;
      color: #b0a8a8;
      overflow: visible;
    }
  }
`;
