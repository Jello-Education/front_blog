import React from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";

import {
  Container,
  Titulo,
  Botao,
  Plans,
  Extra,
} from "../../styles/signatureStyles";

import { SubscriptionGiftCard } from "../../components/SubscriptionGiftCard";

const TelaAssinatura: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <SEO title="TelaAssinatura" />
        {/* <Titulo>
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
        </Titulo> */}

        <div className="content">
          <div className="TitlePlans">
            <h1>
              Comece a aprender agora mesmo!
              <br /> Conheça nossos planos:
            </h1>
          </div>
          <Plans>
            <SubscriptionGiftCard
              title="STANDARD"
              price="GRÁTIS"
              background="primary"
              marginMedium=""
            />
            <SubscriptionGiftCard
              title="ESPINELO"
              price="R$ 25,90"
              background="dafault"
              marginMedium="medium"
            />

            <SubscriptionGiftCard
              title="PALADIUM"
              price="R$ 35,90"
              background="primary"
              marginMedium=""
            />
          </Plans>
          <Extra>
            <img
              className="extra-01"
              src="/Assista on quiser.svg"
              alt="Imagem representando diversos tipos de dispositivos de acesso a internet"
            />
            <div className="divider"></div>
            <img
              className="extra-02"
              src="/Economize dados.svg"
              alt="Imagem representando que é possivel baixar as aulas em seu dispositivo"
            />
          </Extra>
        </div>
      </Container>
      <JelloInfo />
    </>
  );
};

export default TelaAssinatura;
