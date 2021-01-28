import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const InputComponent: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <Container>
      <input placeholder={placeholder} />
    </Container>
  );
};

export default InputComponent;
