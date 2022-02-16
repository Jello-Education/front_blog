import React, { useState } from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";

import CheckBoxInput from "../../components/Shared/checked/index";
import { Container, Input, Button } from "../../styles/registerStyles";

const register: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState(true);
  const [selectedTeacher, setSelectedTeacher] = useState(false);

  return (
    <Container>
      <Header />
      <h1 className="title">Cadastre-se</h1>
      <Input>
        <CheckBoxInput
          title="Aluno(a)"
          selected={selectedStudent}
          defaultChecked={true}
          onChange={(e) => {
            setSelectedStudent(true), setSelectedTeacher(false);
          }}
        />
        <CheckBoxInput
          title="Criador(a))"
          selected={selectedTeacher}
          onChange={(e) => {
            setSelectedStudent(false), setSelectedTeacher(true);
          }}
        />
      </Input>

      <Input>
        <h1>Nome Completo</h1>
        <input
          className="lineText"
          type="text"
          placeholder="Ex: Felipe da Silva"
        />
      </Input>
      <Input>
        <h1>Nome Social(apelido)</h1>
        <input
          className="lineText"
          type="text"
          placeholder="Ex: Felipe da Silva"
        />
      </Input>
      <Input>
        <h1>E-mail</h1>
        <input
          className="lineText"
          type="text"
          placeholder="Ex: seuemail@gmail.com"
        />
      </Input>
      <Input>
        <h1>Celular</h1>
        <div className="flag"></div>
        <input
          className="lineText"
          type="text"
          placeholder="Ex: 41 9 9999 9999"
        />
      </Input>
      <Input>
        <h1>Data de Nascimento</h1>
        <input className="lineText" type="text" placeholder="Ex: DD/MM/AAAA" />
      </Input>
      <Input>
        <h1>Senha</h1>
        <input className="lineText" type="text" placeholder="********" />
      </Input>
      <Input>
        <h1>Confirmar senha</h1>
        <input className="lineText" type="text" placeholder="********" />
      </Input>
      <Button>
        <a>Concluir</a>
      </Button>
      <JelloInfo />
    </Container>
  );
};

export default register;
