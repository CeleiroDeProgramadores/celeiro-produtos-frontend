import React, { Component } from "react";
import GlobalStyled from "./globalStyle";
import Cadastro from "./components/cadastrarProdutos/index";
class App extends Component {
  render() {
    return (
      <>
        <GlobalStyled />
        <Cadastro />
      </>
    );
  }
}

export default App;
