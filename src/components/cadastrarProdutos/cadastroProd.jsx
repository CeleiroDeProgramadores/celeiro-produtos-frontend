import React, { Component } from "react";
import Header from "../Header/index";
import CadProd from "./cadastroProdStyle";
import Form from "./form";

class Cadastro extends Component {
  render() {
    return (
      <>
        <Header />
        <CadProd>
          <Form>
            <div id="salvar">
              <button type="submit">Salvar</button>
            </div>
            <div>
              <button type="button">Cancelar</button>
            </div>
          </Form>
        </CadProd>
      </>
    );
  }
}

export default Cadastro;
