import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import TableBinDec from '../components/TableBinDec'
import Cart from '../components/Card'

class Welcome extends React.Component {
    render() {

        const title = this.props.title

      return (
        <Fragment>
            <div className="">
                <div className="row row-cols-1 box">
                    <p className="text-left title is-size-3">{title}</p>
                    <p>En el sistema binario, las cifras que componen el número multiplican a las potencias de dos (1, 2, 4, 8, 16, ….)
                        <br></br>
                        20=1, 21=2, 22=4, 23=8, 24=16, 25=32, 26=64, ...
                        <br></br>
                        Por ejemplo, para pasar a binario un número decimal, empezamos por la derecha y vamos multiplicando cada cifra por las sucesivas potencias de 2, avanzando hacia la izquierda:</p>
                </div>
            </div>
        </Fragment>
      );
    }
  }

class Left extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : 0
        }
    }
    
    render(){
        return (
          <div className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-8">
                <Welcome title="Titulo o encabezado"></Welcome>
              </div>
              <div className="col-2">
                <Cart
                image={require('../img/binary-code.svg')}
                ></Cart>
              </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-11 col-md-10 col-lg-8">
                    <TableBinDec></TableBinDec>
                </div>
            </div>
          </div>
        );
    }

}

export default Left