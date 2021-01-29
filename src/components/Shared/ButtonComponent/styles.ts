import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  display: flex;
  flex: 1;
  width: 100%;
  height: 60px;

  background: #fd3373;
  border-radius: 20px;
  border: 0px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 12px 0px;

  justify-content: center;
  align-items: center;

  color: #fafafa;
  font-weight: 500;
  font-size: 24px;
  transition: background-color 0.2s;

  &:hover {
    background: ${shade(0.2, '#fd3373')};
  }
`;
