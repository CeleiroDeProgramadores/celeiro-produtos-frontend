import React, { Component } from "react";
import Header from "../Header/index";
import CadProd from "./cadastroProdStyle";

class Cadastro extends Component {
  render() {
    return (
      <>
        <Header />
        <CadProd>
          <form>
            <h1>Identificação</h1>
            <div>
              <div>
                <span>Nome</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Código interno</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Código do fabricador</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Código de barras</span>
                <input type="text"></input>
              </div>
            </div>
            <h1>Espicificação</h1>
            <div>
              <div>
                <span>Unidade</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Quantidade</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Custo do produto</span>
                <input type="text"></input>
              </div>
              <div>
                <span>Valor da venda</span>
                <input type="text"></input>
              </div>
            </div>
            <h1>Tributação</h1>
            <div>
              <div>
                <span>NCM</span>
                <input type="text"></input>
              </div>
              <div>
                <span>CEST</span>
                <input type="text"></input>
              </div>
            </div>
          </form>
        </CadProd>
      </>
    );
  }
}

export default Cadastro;
