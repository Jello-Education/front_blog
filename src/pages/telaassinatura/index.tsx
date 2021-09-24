import React from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";

import { Planos, Titulo, Botao, Extra } from "../../styles/signatureStyles";
import { Container } from "../../styles/aboutStyles";

const TelaAssinatura: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <SEO title="TelaAssinatura" />
        <Titulo>
          <img
            src="/assinatura-background.svg"
            alt="Imagem de pessoas felizes por terminarem um curso da jello"
          />
          <div>
            <h2>Faça curso online com a gente</h2>
            <p>
              Assine a plataforma Jello e tenha a oportunidade de fazer seu
              plano de estudo personalizado. Uma plataforma complemente
              diferente, mas com foco no seu objetivo.
            </p>
            <Botao>
              <div>
              <button className="button-top">Ver Planos</button>
              </div>
            </Botao>
          </div>

          <div>
            <h1>Comece a aprender agora mesmo! Conheça nossos planos:</h1>
          </div>
        </Titulo>
        <Planos>
          <div className="planoBranco">
            {" "}
            <h2 className="planoTitulo">STANDARD</h2>
            <h3 className="planoPreco">Grátis</h3>
            <ul>
              <li>
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
            </ul>
            <Botao>
            <div>
              <button className="button-planos">Quero esse!</button>
            </div>
            </Botao>
          </div>

          <div className="planoRosa">
            {" "}
            <h2 className="planoTitulo">ESPINELO</h2>
            <h3 className="planoPreco">R$ 25,90</h3>
            <ul>
              <li>
                {" "}
                <img
                  className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                   className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                   className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                   className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                   className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                   className="icon-branco"  
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                 className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                 className="icon-branco"
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
             
            </ul>
            <Botao>
            <div>
              <button className="button-planos">Quero esse!</button>
            </div>
            </Botao>
          </div>

        

          <div className="planoBranco">
            {" "}
            <h2 className="planoTitulo">PALADIUM</h2>
            <h3 className="planoPreco">R$ 35,90</h3>
            <ul>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
              <li>
                {" "}
                <img
                  src="/SIMBOLO DEGRADE.svg"
                  alt="Logo em minuatura da Jello"
                ></img>
                Descrição
              </li>
            </ul>
            <Botao>
            <div>
              <button className="button-planos">Quero esse!</button>
            </div>
            </Botao>
          </div>
        </Planos>
        <Extra>
          <img
            className="extra-01"
            src="/Assista on quiser.svg"
            alt="Imagem representando diversos tipos de dispositivos de acesso a internet"
          />

          <img
            className="extra-02"
            src="/Economize dados.svg"
            alt="Imagem representando que é possivel baixar as aulas em seu dispositivo"
          />
        </Extra>
      </Container>
      <JelloInfo />
    </>
  );
};

export default TelaAssinatura;
