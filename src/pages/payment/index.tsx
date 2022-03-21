import React, { useState } from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";

import CheckBoxInput from "../../components/Shared/checked/index";
import { Container, Input, Button } from "../../styles/paymentStyles";

const payment: React.FC = () => {
  const [selectedStudent, setSelectedStudent] = useState(false);
  const [typeOfPayment, setTypeOfPayment] = useState("card");
  // function handleMyStudentsClickMenuItem(img) {
  //   document.getElementById().src = "credit-green.svg";
  // }

  return (
    <Container>
      <Header />
      <img className="progress" src="barra-progresso.svg"></img>
      <h1 className="title">Falta pouco para você começar a estudar!</h1>
      <p className="subTitle">Escolha a melhor forma de pagamento para você.</p>
      <div className="container">
        <a onClick={() => setTypeOfPayment("card")}>
          {typeOfPayment === "card" ? (
            <img className="icon credit" src="credit-green.svg" alt="" />
          ) : (
            <img id="credit" className="icon credit" src="credit.svg" alt="" />
          )}
        </a>
        <a onClick={() => setTypeOfPayment("ticket")}>
          {typeOfPayment === "ticket" ? (
            <img className="icon ticket" src="ticket-green.svg" alt="" />
          ) : (
            <img className="icon ticket" src="ticket.svg" alt="" />
          )}
        </a>
        <a onClick={() => setTypeOfPayment("pix")}>
          {typeOfPayment === "pix" ? (
            <img className="icon pix" src="pix-green.svg" alt="" />
          ) : (
            <img className="icon pix" src="pix.svg" alt="" />
          )}
        </a>
        <a onClick={() => setTypeOfPayment("picpay")}>
          {typeOfPayment === "picpay" ? (
            <img className="icon pixpay" src="picpay-green.svg" alt="" />
          ) : (
            <img className="icon pixpay" src="picpay.svg" alt="" />
          )}
        </a>
      </div>

      {/* CARTÃO DE CRÉDITO */}

      {typeOfPayment === "card" ? (
        <>
          <Input>
            <h1>Selecione as parcelas</h1>
            <div className="select">
              <select>
                <option>Número de parcelas</option>
                <option>Hello 1</option>
                <option>Hello 2</option>
                <option>Hello 3</option>
                <option>Hello 4</option>
              </select>
              <div className="select_arrow"></div>
            </div>
          </Input>
          <Input>
            <h1>Número do Cartão</h1>
            <input
              className="lineText"
              type="number"
              placeholder="**** **** **** ****"
            />
          </Input>
          <Input>
            <h1>Data de Validade</h1>
            <input className="lineText" type="number" placeholder="MM/AA" />
          </Input>
          <Input>
            <h1>
              Código de segurança
              <small>(impresso na parte de trás do cartão)</small>
            </h1>
            <input
              className="lineText"
              type="number"
              min="1"
              placeholder="***"
            />
          </Input>
          <Input>
            <h1>
              Nome do titular<small>(impresso no cartão)</small>
            </h1>
            <input
              className="lineText"
              type="text"
              placeholder="Nome impresso no cartão"
            />
          </Input>
          <Input>
            <h1>Data de Nascimento</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Ex: DD/MM/AAAA"
            />
          </Input>
          <Input>
            <h1>CPF</h1>
            <input
              className="lineText"
              type="text"
              placeholder="000.000.000-00"
            />
            <i className="bi bi-eye-slash" id="togglePassword"></i>
          </Input>
          <Input>
            <h1>Telefone</h1>
            <input
              className="lineText"
              type="text"
              placeholder="(00) 0 0000-0000"
            />
          </Input>
        </>
      ) : // BOLETO

      typeOfPayment === "ticket" ? (
        <>
          {" "}
          <Input>
            <h1>Nome Completo</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Ex:Jorge Ricardo da Silva"
            />
          </Input>
          <Input>
            <h1>CPF</h1>
            <input
              className="lineText"
              type="number"
              placeholder="000.000.000-00"
            />
          </Input>
          <Input>
            <h1>CEP</h1>
            <input
              className="lineText"
              type="number"
              min="1"
              placeholder="*****-***"
            />
          </Input>
          <Input>
            <h1>AV./Rua</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Nome impresso no cartão"
            />
          </Input>
          <Input>
            <h1>Número</h1>
            <input className="lineText" type="number" placeholder="123" />
          </Input>
          <Input>
            <h1>Complemento</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Ex: Ao lado da padaria"
            />
            <i className="bi bi-eye-slash" id="togglePassword"></i>
          </Input>
          <Input>
            <h1>Bairro</h1>
            <input
              className="lineText"
              type="text"
              placeholder="EX: Coutinho"
            />
          </Input>
          <Input>
            <h1>Cidade</h1>
            <input
              className="lineText"
              type="text"
              placeholder="EX: São Paulo"
            />
          </Input>
          <Input>
            <h1>Estado</h1>
            <input className="lineText" type="text" placeholder="EX: SP" />
          </Input>
        </>
      ) : // PIX

      typeOfPayment === "pix" ? (
        <>
          {" "}
          <Input>
            <h1>Nome Completo</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Ex:Jorge Ricardo da Silva"
            />
          </Input>
          <Input>
            <h1>CPF</h1>
            <input
              className="lineText"
              type="text"
              placeholder="000.000.000-00"
            />
            <i className="bi bi-eye-slash" id="togglePassword"></i>
          </Input>
        </>
      ) : typeOfPayment === "picpay" ? (
        <>
          {" "}
          <Input>
            <h1>Nome Completo</h1>
            <input
              className="lineText"
              type="text"
              placeholder="Ex:Jorge Ricardo da Silva"
            />
          </Input>
          <Input>
            <h1>CPF</h1>
            <input
              className="lineText"
              type="text"
              placeholder="000.000.000-00"
            />
            <i className="bi bi-eye-slash" id="togglePassword"></i>
          </Input>
        </>
      ) : null}
      <Input>
        <div className="container">
          <CheckBoxInput
            title="Aceito os Termos de Serviço e Política de Privacidade"
            selected={selectedStudent}
            defaultChecked={false}
            onChange={(e: any) => {
              setSelectedStudent(true);
            }}
          />
        </div>
      </Input>
      <Button>
        <a>Finalizar</a>
      </Button>

      <img className="footer" src="image-horizontal.svg" alt="" />

      <JelloInfo />
    </Container>
  );
};

export default payment;
