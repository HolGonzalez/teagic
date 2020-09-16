import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import DecToBin from "../components/DecToBin";

class Theme extends React.Component {
  render() {
    const title = this.props.title;
    const content = this.props.content;
    const left = this.props.left;
    const right = this.props.right;
    const image = this.props.image;
    const quote = this.props.quote;

    return (
      <Fragment>
        <div className="container box">
          <div className="row justify-content-between">
            <div className={left}>
              <p className="text-left title is-size-3">{title}</p>
              <p>{content}</p>
              <p className="text-muted">
                <em>
                  <small>{quote}</small>
                </em>
              </p>
            </div>
            <div className={right}>
              <img className="mt-2" src={image}></img>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class Right extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center p-4">
          <div className="col-12">
            <h1 className="title is-1 mt-3 mb-3 has-text-centered">Hemisferio Derecho</h1>
          </div>
          <div className="col-lg-12 m-2">
            <Theme
              title="Partes de la division"
              left="col-sm-12 col-lg-8"
              content="La división es un cálculo matemático que implica repartir en partes iguales el total de un todo numérico. La división consiste en averiguar la cantidad de veces que un número llamado «divisor», está contenido en otro número llamado «dividendo». El resultado de esta operación llamada división recibe la denominación de «cociente».  El dividendo 125 dividido por el divisor 5 arroja un cociente o resultado igual a 25."
              quote="Texto tomado de: partesde"
              right="col-sm-12 col-lg-4"
              image={require("../img/division.png")}
            ></Theme>
          </div>
          <div className="col-lg-12 m-2">
            <Theme
              title="Sistema Binario"
              left="col-sm-12 col-lg-10"
              content="El sistema binario es un sistema de numeración en el que los números se representan utilizando las cifras 0 y 1, es decir solo 2 dígitos (bi = dos). Esto en informática y en electrónica tiene mucha importancia ya que las computadoras trabajan internamente con 2 niveles: hay o no hay de Tensión, hay o no hay corriente, pulsado o sin pulsar, etc."
              quote="Texto tomado de: areatecnologia"
              right="col-sm-12 col-lg-2"
              image={require("../img/binary-code.svg")}
            />
          </div>
          <div className="col-lg-12 m-2">
            <Theme
              title="Sistema Decimal"
              left="col-sm-12 col-lg-10"
              content="El sistema decimal es un sistema de numeración: una serie de símbolos que, respetando distintas reglas, se emplean para la construcción de los números que son considerados válidos. En este caso, el sistema toma como base al diez.
              Esto quiere decir que el sistema decimal se encarga de la representación de las cantidades empleando diez cifras o dígitos diferentes: 0 (cero), 1 (uno), 2 (dos), 3 (tres), 4 (cuatro), 5 (cinco), 6 (seis), 7 (siete), 8 (ocho) y 9 (nueve)."
              quote="Texto tomado de: definicion.de"
              right="col-sm-12 col-lg-2"
              image={require("../img/numbers.svg")}
            />
          </div>
          <div className="col-11 col-md-10 col-lg-8">
            <DecToBin />
          </div>
          <div className="col-12 m-4 has-text-centered">
            <Link className="btn button is-warning m-2" to="/left">
              Cambiar de hemisferio
            </Link>
            <Link className="btn button is-danger m-2" to="/evaluation">
              Prueba de conocimientos
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
