import React from 'react';

import SEO from '../../components/Seo';

import { Login, Container, Checkbox } from '../../styles/loginStyles'
import Senha from '../../components/Login/senha'


const LoginProdutor: React.FC = () => {



    return (
        <Login>
            <SEO title="LoginProdutor" />
            <img className="alunoImage" src="/login-produtor.svg" alt="Imagem de professor criando" />
            <Container>

                <main >
                    <svg id="wave" width="725" height="1024" viewBox="0 0 725 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.0045 -0.5C72.0045 -0.5 96.4999 76 96.4999 229C96.4999 382 -13.0503 604.5 2.49989 765C18.05 925.5 72.0045 1023.5 72.0045 1023.5H725.5V-0.5H72.0045Z" fill="#FDFDFD" />
                    </svg>


                    <div className="main-content">

                        <strong>Olá!</strong>
                        <h2>Bem vindo(a) novamente!</h2>
                        <form >
                            <input
                                className="icon-espace"
                                type="text"
                                placeholder="E-mail"
                            />

                            <img className="icon-carta" src="/carta-rosa.png" alt="Imagem representando o e-mail" />

                            <Senha />

                            <img className="icon-cadeado" src="/cadeado.png" alt="Imagem representando a senha" />


                            <a href="#">Esqueci minha senha</a>
                            <button className="entrar-button" type="submit">
                                ENTRAR
                            </button>
                            <button className="cadastrar-button" type="submit">
                                CADASTRAR
                            </button>
                            <Checkbox>

                                    <label className="container"><p>Continuar conectado(a)</p>
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>

                            </Checkbox>
                            <div>
                                <svg id="line-1" width="322" height="2" viewBox="0 0 322 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1" x2="322" y2="1" stroke="#FD3373" stroke-width="2" />
                                </svg>
                                <p className="separator">ou</p>
                                <svg id="line-2" width="322" height="2" viewBox="0 0 322 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="1" x2="322" y2="1" stroke="#FD3373" stroke-width="2" />
                                </svg>
                            </div>
                            <button className="google-button">
                                <img src='/icons8-google-logo.svg' alt="Logo do Google" />
                                Entrar com Google
                            </button>
                        </form>
                    </div>
                </main>
            </Container>

        </Login>
    )
}

export default LoginProdutor

