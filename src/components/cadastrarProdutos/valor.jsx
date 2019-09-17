import React, { Component } from "react";

class Valor extends Component {
  virgula = e => {
    if (e.target.value.length > 2) {
      let point = e.target.value;
      point = point.toString();
      point = point.split("");
      point = point.filter(item => {
        return item !== ",";
      });
      point = point.map((item, index) => {
        if (point.length - 3 === index) {
          return item + ",";
        } else {
          return item;
        }
      });
      point = point.join("");
      if (e.target.value.length > 6) {
        point = point.split("");
        point = point.filter(item => {
          return item !== ".";
        });
        point = point.map((item, index) => {
          if (point.length - 7 === index) {
            return item + ".";
          } else {
            return item;
          }
        });
        point = point.join("");
        console.log(point);
      }
      return (e.target.value = point);
    }
  };

  isNaN = e => {
    let number = e.target.value;
    number = number.split("");
    let lastNumber = number[number.length - 1];
    if (!isNaN(lastNumber)) {
      return this.virgula(e);
    } else {
      number.pop();
      number = number.join("");
      e.target.value = number;
      if (number !== "") {
        window.alert("Apenas numeros nesse Campo!!!");
      }
    }
  };

  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        onChange={e => this.isNaN(e)}
        // step="0.00000001"
        maxLength="10"
      ></input>
    );
  }
}

export default Valor;
