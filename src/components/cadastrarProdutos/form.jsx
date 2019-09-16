import React from "react";

const form = ({ children }) => {
  return (
    <form>
      <h1>Identificação</h1>
      <div>
        <div id="nome">
          <span>Nome</span>
          <input type="text" name="nome"></input>
        </div>
        <div>
          <span>Código interno</span>
          <input type="text" name="codInter"></input>
        </div>
        <div>
          <span>Código do fabricador</span>
          <input type="text" name="codFab"></input>
        </div>
        <div>
          <span>Código de barras</span>
          <input type="text" name="codBar"></input>
        </div>
      </div>
      <h1>Espicificação</h1>
      <div>
        <div>
          <span>Unidade</span>
          <input type="text" name="un"></input>
        </div>
        <div>
          <span>Quantidade</span>
          <input type="text" name="qtd"></input>
        </div>
        <div>
          <span>Custo do produto</span>
          <input type="text" name="custoProd"></input>
        </div>
        <div>
          <span>Valor da venda</span>
          <input type="text" name="valorVend"></input>
        </div>
      </div>
      <h1>Tributação</h1>
      <div>
        <div>
          <span>NCM</span>
          <input type="text" name="ncm"></input>
        </div>
        <div>
          <span>CEST</span>
          <input type="text" name="cest"></input>
        </div>
        {React.createElement(children[0].type, children[0].props)}
        {React.createElement(children[1].type, children[1].props)}
      </div>
    </form>
  );
};

export default form;
