import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import TableBinDec from '../components/TableBinDec'
import Card from '../components/Card'
import ReactPlayer from 'react-player'

class Binary extends React.Component {
    render() {

        const title = this.props.title

      return (
        <Fragment>
          <div className="container box">
            <div className="row">
              <div className="col-10">
                <p className="text-left title is-size-3">{title}</p>
                <p>
                En el sistema binario sólo hay dos cifras: 0 y 1. Como sucede en el sistema decimal, en este sistema binario también se utilizan exponentes para expresar cantidades mayores.
                Mientras que en el sistema decimal la base es 10, en el sistema binario la base es 2. Como se mencionó anteriormente, la representación exponencial se utiliza para convertir una cantidad de un sistema numérico cualquiera al sistema decimal.
                </p>
              </div>
              <div className="col-2">
                <img src={require('../img/binary-code.svg')}></img>
              </div>
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
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12">
                <h1 className="title is-1 mb-3">Hemisferio Izquierdo</h1>
              </div>
              <div className="col-lg-12">
                <Binary title="Sistema Binario"/>
              </div>
              <div className="col-11 col-md-10 col-lg-8">
                <TableBinDec/>
              </div>
              <div className="col-6">
                <div className="embed-responsive embed-responsive-16by9 box p-0">
                  <ReactPlayer
                  className="embed-responsive-item"
                  url='https://www.youtube.com/watch?v=9boMnm5X9ak'
                  controls
                  onError={()=>console.log('Error')}
                  />
                </div>
              </div>
              <div className="col-12 m-4 has-text-centered">
                <Link className="btn button is-info" to="/right">Cambiar de hemisferio</Link>
              </div>
            </div>
          </div>
        );
    }

}

export default Left