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
    font-size: 20px;
  }

  p {
    margin-top: 4px;
    font-size: 16px;
    max-width: 250px;
  }
  &:hover {
    background: rgba(253, 51, 115, 0.1);
  }
`;
