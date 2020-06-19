import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bulma/css/bulma.css'
import Question from '../components/Question'


class Quiz extends Component {

    constructor(props) {
        super(props)

        this.state = {
            left : 0,
            right : 0,
            question : 0,
            results : "",
            direction :""
        }

        this.Left = this.Left.bind(this)
        this.Right = this.Right.bind(this)
    }

    Left(e){
        this.ValidateOption(e)
        this.setState({
            left: this.state.left + 1,
            question : this.state.question + 1
        })
    }

    Right(e){
        this.ValidateOption(e)
        this.setState({
            right: this.state.right + 1,
            question : this.state.question + 1
        })
    }

    ValidateOption(e){
        var number = document.getElementsByName(e.target.name);
        for(var i = 0; i < number.length; i++){   
            number[i].disabled = true
        }
    }

    render() {
        //console.log("Left: " + this.state.left, "Right: " + this.state.right, "Question: " + this.state.question)
        var results, direction
        if(this.state.left > this.state.right){
            console.log("L: " + this.state.left)
            results = "Tu hemisferio izquierdo es el dominante."
            direction = "/left"
        }else{
            console.log("R: " + this.state.right)
            results = "Tu hemisferio derecho es el dominante."
            direction = "/right"
        }
        if(this.state.question === 5){
            return(
                <div className="container-md p-2 col-10 col-lg-6 has-text-centered align-middle">
                    <div className="row row-cols-1 box">
                        <h2 className="title is-2">Resultados</h2>
                        <p className="mb-2"><strong>{results}</strong></p>
                        <div className="row row-cols-1 mx-auto">
                            <Link className="btn button is-link" to={direction}>Comenzar a estudiar</Link>
                        </div>
                    </div>
                </div>

            )
        } else{
        return (
            <div className="container-md p-2 col-10 col-lg-6">
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
            </div>
        )}
    }
}

export default Quiz