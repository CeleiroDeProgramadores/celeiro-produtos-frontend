import React from "react";

const form = ({ children }) => {
  return (
    <form>
      <h1>Identificação</h1>
      <div>
        <div id="nome">
          <span>Nome</span>
          <input
            type="name"
            name="nome"
            placeholder="Ex: Macarrão espaguete galo 500G "
          ></input>
        </div>
        <div>
          <span>Código interno</span>
          <input type="number" name="codInter" placeholder="0"></input>
        </div>
        <div>
          <span>Código do fabricador</span>
          <input type="number" name="codFab" placeholder="0"></input>
        </div>
        <div>
          <span>Código de barras</span>
          <input type="number" name="codBar" placeholder="00000000"></input>
        </div>
      </div>
      <h1>Espicificação</h1>
      <div>
        <div>
          <span>Unidade</span>
          <select name="unidade">
            <option selected name="un" value="un">
              Unidade (Un)
            </option>
            <option name="kg" value="kg">
              kilo grama (Kg)
            </option>
            <option name="g" value="g">
              Grama (G)
            </option>
            <option name="cx" value="cx">
              Caixa (Cx)
            </option>
          </select>
        </div>
        <div>
          <span>Quantidade</span>
          <input type="number" name="qtd" placeholder="Qnt"></input>
        </div>
        <div>
          <span>Custo do produto</span>
          <input type="number" name="custoProd" placeholder="R$"></input>
        </div>
        <div>
          <span>Valor da venda</span>
          <input type="number" name="valorVend" placeholder="R$"></input>
        </div>
      </div>
      <h1>Tributação</h1>
      <div>
        <div>
          <span>NCM</span>
          <input type="number" name="ncm" placeholder="00000000"></input>
        </div>
        <div>
          <span>CEST</span>
          <input type="number" name="cest" placeholder=" 000000"></input>
        </div>
        {React.createElement(children[0].type, children[0].props)}
        {React.createElement(children[1].type, children[1].props)}
      </div>
    </form>
  );
};

export default form;
