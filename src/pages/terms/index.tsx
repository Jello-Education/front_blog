import React from "react";

import Header from "../../components/Shared/Header";
import JelloInfo from "../../components/Shared/JelloInfo";
import SEO from "../../components/Seo";

import { Container } from "../../styles/aboutStyles";
import { TextBox, Checkbox } from "../../styles/termsStyles";

const TermsJello: React.FC = () => {
  return (
    <Container>
      <Header />
      <SEO title="Termos" />
      <TextBox>
        <div>
          <div className="ScrollBar">
            <h1>Termos e Politicas</h1>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
            <p>
              Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum lorem
              ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem lipsum
              lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
              ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
              lorem ipsum
            </p>
          </div>
        </div>
      </TextBox>
      <Checkbox>
        <label className="container">
          <p>Li e aceito os termos descritos</p>
          <input type="checkbox" />
          <span className="checkmark"></span>
        </label>
      </Checkbox>

      <JelloInfo />
    </Container>
  );
};

export default TermsJello;
