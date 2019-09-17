import React from "react";
import Valor from "./valor";

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
            required="true"
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
          <input
            type="number"
            name="codBar"
            placeholder="00000000"
            required="true"
          ></input>
        </div>
      </div>
      <h1>Espicificação</h1>
      <div>
        <div>
          <span>Unidade</span>
          <select name="unidade" defaultValue="un">
            <option name="un" value="un">
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
          <input
            type="number"
            name="qtd"
            placeholder="Qnt"
            required="true"
          ></input>
        </div>
        <div>
          <span>Custo do produto</span>
          <Valor type="text" name="custoProd" placeholder="R$" />
        </div>
        <div>
          <span>Valor da venda</span>
          <Valor
            type="text"
            name="valorVend"
            placeholder="R$"
            required="true"
          />
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
