import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'

class TableBinDec extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value : 0
        }
        this.OperationNum = this.OperationNum.bind(this)
    }

    OperationNum(e){
        var valueTemp = e.target.value
        var num = parseInt(e.target.id, 10)
        if(valueTemp == 1){
            this.setState({
                value : this.state.value + num
            })
        }
        else if(valueTemp == 0){
            this.setState({
                value : this.state.value - num
            })
        }
    }
    
    render(){
        return (
          <Fragment>
            <div className="container-md p-2 has-text-centered align-middle">
                <div className="row row-cols-1 box">
                <h1 className="title is-3">8-BIT BINARIO A DECIMAL</h1>
            <table className="table has-text-centered">
              <thead>
                <tr>
                    <th className="is-size-5"><var>2<sup>7</sup></var></th>
                    <th className="is-size-5"><var>2<sup>6</sup></var></th>
                    <th className="is-size-5"><var>2<sup>5</sup></var></th>
                    <th className="is-size-5"><var>2<sup>4</sup></var></th>
                    <th className="is-size-5"><var>2<sup>3</sup></var></th>
                    <th className="is-size-5"><var>2<sup>2</sup></var></th>
                    <th className="is-size-5"><var>2<sup>1</sup></var></th>
                    <th className="is-size-5"><var>2<sup>0</sup></var></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>
                        <div className="select">
                            <select id="128"
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="select">
                            <select id="64"
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </td>
                    <td>
                        <div className="select">
                            <select id="32"
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                    </td>
                  <td>
                  <div className="select">
                            <select id="16"
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                  </td>
                  <td>
                  <div className="select">
                            <select id="8"
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                  </td>
                  <td>
                  <div className="select">
                            <select id="4" 
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                  </td>
                  <td>
                  <div className="select">
                            <select id="2" 
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                  </td>
                  <td>
                  <div className="select">
                            <select id="1" 
                                onChange={this.OperationNum}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="subtitle is-4">{`El resultado en base decimal es: ${this.state.value}`}</p>
                </div>
            </div>  
          </Fragment>
        );
    }

}

export default TableBinDec