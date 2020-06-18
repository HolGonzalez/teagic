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
        this.ValidateOption(e)
        this.setState({
            left: this.state.left + parseInt(e.target.value)
        })
    }

    Right(e){
        this.ValidateOption(e)
        this.setState({
            right: this.state.right + parseInt(e.target.value)
        })
    }

    ValidateOption(e){
        var number = document.getElementsByName(e.target.name);
        for(var i = 0; i < number.length; i++){   
            number[i].disabled = true
        }
    }

    render() {
        console.log(this.state.left, this.state.right)

        return (
            <div className="container-md p-2 col-6">
                <div className="row row-cols-1 box">
                    <h2 className="title is-2 has-text-centered">Test cerebro</h2>
                    <Question 
                        title="¿Tiendo a estar más frecuentemente?" 
                        numberQuestion="one"
                        optionLeft=" Tenso y preocupado"
                        optionRight=" Relajado y despreocupado"
                        changeLeft={this.Left}
                        changeRight={this.Right}
                    ></Question>
                    <Question 
                        title="¿Qué es lo que ves a primera vista?" 
                        src={require('../img/faces-cup.png')}
                        alt="faces-cup"
                        autor="Frank Hensler"
                        numberQuestion="two"
                        optionLeft=" Copas"
                        optionRight=" Caras"
                        changeLeft={this.Left}
                        changeRight={this.Right}
                    ></Question> 
                    <Question 
                        title="¿Cómo tomas tus decisiones?" 
                        numberQuestion="three"
                        optionLeft=" Más racionalmente"
                        optionRight=" Más emocionalmente"
                        changeLeft={this.Left}
                        changeRight={this.Right}
                    ></Question>
                    <Question 
                        title="¿En qué dirección está dirigiendose la bailarina?" 
                        src={require('../img/dancer.gif')}
                        alt="dancer"
                        autor="Nobuyuki Kayahara"
                        numberQuestion="four"
                        optionLeft=" Derecha"
                        optionRight=" Izquierda"
                        changeLeft={this.Left}
                        changeRight={this.Right}
                    ></Question>
                    <Question 
                        title="¿Concibes la información mejor acústicamente o visualmente?" 
                        numberQuestion="five"
                        optionLeft=" Mejor acústicamente"
                        optionRight=" Mejor visualmente"
                        changeLeft={this.Left}
                        changeRight={this.Right}
                    ></Question>
                </div>
                <div class="row row-cols-1">
                    <input className="button is-link" type="submit" value="Enviar"></input>
                </div>
            </div>
        )
    }
}

export default Quiz