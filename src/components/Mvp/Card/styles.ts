import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 16px;
  cursor: pointer;
  border-radius: 8px;
  text-align: center;

  transition: background-color 0.2s;

  margin: 0 16px;

  strong {
    font-size: 1.5rem;
    margin-top: 10px;
  }

  img {
    width: 9rem;
    height: 9rem;
  }

  &:hover {
    background: rgba(253, 51, 115, 0.1);
  }
`;
