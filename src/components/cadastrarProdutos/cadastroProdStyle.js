import styled from "styled-components";

const CadastProd = styled.div`
  width: 80%;
  padding: 20px;
  padding-bottom: 30px;
  height: auto;
  margin: 0 auto;
  background-color: #744aea;
  h1 {
    color: white;
    margin-top: 20px;
  }
  div {
    display: flex;
    flex: 1;
    justify-content: center;
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: center;
      justify-items: center;
      padding: 10px;
      :first-child {
        padding-left: 40px;
      }
      input {
        height: 25px;
        width: 100%;
      }
    }
    #nome {
      flex-basis: 30%;
    }
    #nome + div + div + div {
      flex-basis: 10%;
    }
    #nome + div + div {
      flex-basis: 10%;
    }
    #salvar {
      button {
        appearance: none;
        border: none;
        background: linear-gradient(
          270deg,
          rgba(37, 255, 1, 0.54) 0%,
          rgba(81, 0, 255, 0.42) 100%
        );
        height: 60px;
        width: 100%;
        color: white;
        font-size: 25px;
        margin-bottom: 15px;
      }
    }
    #salvar + div {
      button {
        appearance: none;
        border: none;
        background: linear-gradient(
          270deg,
          rgba(81, 0, 255, 0.42) 0%,
          rgba(255, 0, 0, 0.54) 100%
        );
        height: 60px;
        width: 100%;
        color: white;
        font-size: 25px;
        margin-bottom: 15px;
      }
    }
  }
`;

export default CadastProd;
