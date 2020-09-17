import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import DecToBin from "../components/DecToBin";
import TableBinDec from "../components/TableBinDec";

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

class DecimalBinary extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container box">
          <div className="row justify-content-between">
            <div className="col-12">
              <p className="text-left title is-size-3">
                Conversion Decimal a Binario
              </p>
              <p>
                Supongamos que queremos convertir el número decimal 9191 a
                binario, el procedimiento es el siguiente:
              </p>
              <ul className="list-group mt-4">
                <li className="list-group-item">
                  Tomamos el número <strong>91</strong> y lo dividimos entre{" "}
                  <strong>2</strong>, esto nos da un cociente (el resultado de
                  la división) y un residuo (cuanto sobro al dividir el número),
                  como estamos dividiendo entre <strong>2</strong> el residuo
                  solo puede tener dos valores:{" "}
                  <span className="text-warning font-weight-bold">0</span> o{" "}
                  <span className="text-warning font-weight-bold">1</span>; el
                  residuo nos indica si para esta posición hay un{" "}
                  <span className="text-warning font-weight-bold">0</span> o un{" "}
                  <span className="text-warning font-weight-bold">1</span> en el
                  número binario correspondiente, en este caso el residuo es{" "}
                  <span className="text-warning font-weight-bold">1</span>, ya
                  que <strong>91</strong>÷<strong>2</strong> es{" "}
                  <strong>45</strong> y nos sobra 1.
                </li>
                <li className="list-group-item">
                  Una vez que calculamos esta división, repetimos el proceso con
                  el cociente de la división anterior, es decir,{" "}
                  <strong>45</strong>; y volvemos a calcular la división entre{" "}
                  <strong>2</strong>, obteniendo: <strong>22</strong> como
                  resultado y{" "}
                  <span className="text-warning font-weight-bold">1</span> como
                  residuo, lo que nos dice cual es el valor en la segunda
                  posición del número binario.
                </li>
                <li className="list-group-item">
                  Y así, repetimos una y otra vez hasta que el resultado sea{" "}
                  <strong>0</strong>.
                </li>
                <li className="list-group-item">
                  Entonces los siguientes pasos son <strong>22</strong>÷
                  <strong>2</strong>, que nos da <strong>11</strong> como
                  resultado y{" "}
                  <span className="text-warning font-weight-bold">0</span> como
                  residuo.
                </li>
                <li className="list-group-item">
                  Luego <strong>11</strong>÷<strong>2</strong>, que nos da{" "}
                  <strong>5</strong> como resultado y{" "}
                  <span className="text-warning font-weight-bold">1</span> como
                  residuo.
                </li>
                <li className="list-group-item">
                  Despues <strong>5</strong>÷<strong>2</strong>, que nos da{" "}
                  <strong>2</strong> como resultado y{" "}
                  <span className="text-warning font-weight-bold">1</span> como
                  residuo.
                </li>
                <li className="list-group-item">
                  Luego <strong>1</strong>÷<strong>2</strong>, que nos da{" "}
                  <strong>1</strong> como resultado y{" "}
                  <span className="text-warning font-weight-bold">0</span> como
                  residuo.
                </li>
                <li className="list-group-item">
                  Y por ultimo dividimos <strong>1</strong> entre{" "}
                  <strong>2</strong> y obtenemos <strong>0</strong> como
                  resultado y{" "}
                  <span className="text-warning font-weight-bold">1</span> como
                  residuo.
                </li>
              </ul>
              <p className="mt-4">
                Si observamos los residuos que obtuvimos, tenemos el número
                binario:{" "}
                <span className="text-warning font-weight-bold">1011011</span>,
                que es equivalente al número decimal <strong>91</strong>. Quizá
                el procedimiento te parezca algo complicado, pero con la ayuda
                de la siguiente imagen debería ser más claro.
              </p>
              <div className="has-text-centered col-sm-12 col-lg-12 ">
                <img
                  className="mt-4"
                  src={require("../img/decimalBinario.svg")}
                ></img>
              </div>
              <p className="text-muted mt-0">
                <em>
                  <a
                    href="https://arquimedes.matem.unam.mx/mati/actividades/actividad_decimal_a_binario/index.html"
                    target="_blank"
                  >
                    <small>
                      Información recopilada de: arquimedes.matem.unam.mx
                    </small>
                  </a>
                </em>
              </p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

class BinaryDecimal extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="container box">
          <div className="row justify-content-between">
            <div className="col-12">
              <p className="text-left title is-size-3">
                Conversion Binario a Decimal
              </p>
              <ul className="list-group mt-4">
                <li className="list-group-item">
                  Si tenemos el número binario<span className="text-warning font-weight-bold"> 1000011011
                  </span> y queremos saber cuál es su equivalente en la notación
                  decimal, debemos escribir las potencias de dos.
                </li>
                <li className="list-group-item">
                  De derecha a izquierda, comenzamos por{" "}
                  <strong>
                    2<sup>0</sup>
                  </strong>
                  , luego{" "}
                  <strong>
                    2<sup>1</sup>
                  </strong>
                  ,{" "}
                  <strong>
                    2<sup>2</sup>
                  </strong>
                  ,{" "}
                  <strong>
                    2<sup>3</sup>
                  </strong>
                  …y así sucesivamente. Es importante recordar que empezamos por
                  la derecha, o sea, en el orden inverso de la lectura
                  tradicional. Para que nos sea más fácil el cálculo, es
                  recomendable escribir también el valor de cada potencia, es
                  decir,{" "}
                  <strong>
                    2<sup>0</sup>=1
                  </strong>
                  , luego{" "}
                  <strong>
                    2<sup>1</sup>=2
                  </strong>
                  ,{" "}
                  <strong>
                    2<sup>2</sup>=4
                  </strong>
                  ,{" "}
                  <strong>
                    2<sup>3</sup>=8
                  </strong>
                  , etc.
                </li>
                <li className="list-group-item">
                  El segundo paso es escribir debajo el número binario,
                  colocando cada cifra en el valor correspondiente de la
                  potencia de dos. Acto seguido, sumamos solamente las potencias
                  de dos que tienen valor{" "}
                  <span className="text-warning font-weight-bold">1</span>, pues
                  la que tienen valor <strong>0</strong> suman exactamente eso,{" "}
                  <strong>0</strong>.
                </li>
                <li className="list-group-item">
                  De esta manera, encontramos que las potencias que tienen valor{" "}
                  <span className="text-warning font-weight-bold">1</span> en
                  este ejemplo son <span className="text-warning font-weight-bold"> 2<sup>9</sup></span>
                  ,<span className="text-warning font-weight-bold"> 2<sup>4</sup></span>,
                  <span className="text-warning font-weight-bold"> 2<sup>3</sup>
                  </span>,<span className="text-warning font-weight-bold"> 2<sup>1</sup></span>
                  y<span className="text-warning font-weight-bold"> 2<sup>0</sup></span>
                  . Sumamos los valores correspondientes de estas potencias: <strong>512</strong>+<strong>16</strong>+<strong>8</strong>+
                  <strong>2</strong>+<strong>1 </strong>y el resultado de esta
                  suma es el número decimal correspondiente. En este caso, el
                  número binario <span className="text-warning font-weight-bold">1000011011 </span>
                  es igual al número decimal <span className="text-warning font-weight-bold">539</span>.
                </li>
              </ul>
              <div className="has-text-centered col-sm-12 col-lg-12 ">
                <img
                  className="mt-4"
                  src={require("../img/binarioDecimal.png")}
                ></img>
              </div>
              <p className="text-muted mt-0">
                <em>
                  <a
                    href="https://educar.doncomos.com/convertir-binario-decimal"
                    target="_blank"
                  >
                    <small>
                      Información recopilada de: educar.doncomos.com
                    </small>
                  </a>
                </em>
              </p>
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
            <h1 className="title is-1 mt-3 mb-3 has-text-centered">
              Hemisferio Derecho
            </h1>
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
          <div className="col-lg-12 m-2">
            <DecimalBinary />
          </div>
          <div className="col-11 col-md-10 col-lg-8">
            <DecToBin />
          </div>
          <div className="col-lg-12 m-2">
            <BinaryDecimal />
          </div>
          <div className="col-11 col-md-10 col-lg-8">
            <TableBinDec />
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
