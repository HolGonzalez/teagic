import React, {Component, Fragment} from 'react';

class DecToBin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : 0
        }
        this.OperationNum = this.OperationNum.bind(this)
    }

    OperationNum(){
        let decimal = document.getElementById("anyDecimal").value;
        let cont = true;
        let dec = 0;
        if (decimal === ''){
          cont = false;
          alert("Ingrese un numero");
        }
        if (cont === true) {         
          var number = parseInt(decimal);
          dec = (number).toString(2);
          this.setState({
              value : dec
          })  
        } 
    }
    
    render(){
        return (
          <Fragment>
              <div className="container-md p-2 has-text-centered align-middle">
              <div className="row row-cols-1 box">
                <h1 className="title is-3">DECIMAL A BINARIO</h1>
                <input type="number" id="anyDecimal" className="form-control" placeholder="Digita un numero" onChange={this.OperationNum}></input>
                <div className="p-2">
                    <span className="font-weight-bold subtitle is-4" >Resultado: </span>
                    <span className="text-primary subtitle is-4">{this.state.value}</span> 
                </div>
              </div>
              </div>
          </Fragment>
        );
    }

}

export default DecToBin