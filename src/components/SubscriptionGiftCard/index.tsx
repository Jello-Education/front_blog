import React from "react";

import { Container, Botao } from "./styles";

export interface BackgroundColor {
  variant: string;
  margin: string;
}

interface Props {
  title: string;
  price: string;
  background: string;
  marginMedium: string;
}

const itemPlan = [
  {
    title: "Descrição 1",
  },
  {
    title: "Descrição 2",
  },
];

export function SubscriptionGiftCard({
  title,
  price,
  background,
  marginMedium,
}: Props) {
  return (
    <Container variant={background} margin={marginMedium}>
      <div className="planoBranco">
        {" "}
        <h2 className="planoTitulo">{title}</h2>
        <h3 className="planoPreco">{price}</h3>
        <div className="ContainerList">
          <ul>
            {" "}
            {itemPlan &&
              itemPlan.map((item, key) => (
                <>
                  <li>
                    {background == "primary" ? (
                      <img
                        src="/SIMBOLO DEGRADE.svg"
                        alt="Logo em minuatura da Jello"
                      />
                    ) : (
                      <img
                        className="icon-branco"
                        src="/SIMBOLO DEGRADE.svg"
                        alt="Logo em minuatura da Jello"
                      />
                    )}
                    {item.title}
                  </li>
                </>
              ))}
          </ul>
        </div>
      </div>
      <Botao>
        <button>Quero esse!</button>
      </Botao>
    </Container>
  );
}
