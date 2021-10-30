import React, { Component } from "react";
import ReactDOM from "react-dom";

import { LoginSenha } from "./styles";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const eye = <FontAwesomeIcon icon={faEye} />;

class Senha extends Component {
  state = {
    isPasswordShown: false,
  };

  togglePasswordVisiblity = () => {
    const { isPasswordShown } = this.state;
    this.setState({ isPasswordShown: !isPasswordShown });
  };

  render = () => {
    const { isPasswordShown } = this.state;
    return (
      <form>
        <div>
          <LoginSenha>
            <div>
              <input
                className="input100"
                placeholder="Senha"
                type={isPasswordShown ? "text" : "password"}
                name="pass"
              />
              <i
                className="password-icon"
                onClick={this.togglePasswordVisiblity}
              >
                {eye}
              </i>
            </div>
          </LoginSenha>
        </div>
      </form>
    );
  };
}

export default Senha;
