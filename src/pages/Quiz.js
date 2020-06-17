import React, {Component, Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import Question from '../components/Question'


class Quiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            left : 0,
            right : 0
        }

        this.Left = this.Left.bind(this)
        this.Right = this.Right.bind(this)
    }

    Left(e){
        this.setState({
            left: this.state.left + parseInt(e.target.value)
        })
    }

    Right(e){
        this.setState({
            right: this.state.right + parseInt(e.target.value)
        })
    }


    render() {
        return (
            <div className="container p-2 mx-auto">
                <p className="subtitle is-3">Pregunta Uno</p>
                <div class="control">
                    <label className="radio">
                        <input type="radio" name="answer" value="1"
                            onChange={ this.Left}/> Izquierda
                    </label>
                    <label className="radio">
                        <input type="radio" name="answer" value="1"
                            onChange={ this.Right}/> Derecha
                    </label>
                </div>
                <div class="control">
                        <input className="button is-link" type="submit" value="Enviar"></input>
                </div>
                    <p>{this.state.left}</p>
                    <p>{this.state.right}</p>
            </div>
        )
    }
}

export default Quiz