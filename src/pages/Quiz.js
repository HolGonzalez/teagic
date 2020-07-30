import React, {Component, Fragment} from 'react';
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

    componentDidUpdate(prevProps, prevState){
        this.Hello()
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
        
        var vResults, vDirection
        //Se puede borrar
        if(this.state.left > this.state.right){
            console.log("L: " + this.state.left)
            vResults = "Tu hemisferio izquierdo es el dominante."
            vDirection = "/left"
        }else{
            console.log("R: " + this.state.right)
            vResults = "Tu hemisferio derecho es el dominante."
            vDirection = "/right"
        }
        //Fin
        
        if(this.state.question === 5){
            return(
                <Fragment>
                    <div className="container-md p-2 col-10 col-lg-6 has-text-centered align-middle">
                        <div className="row row-cols-1 box">
                            <p className="mb-2 title is-3"><strong>{vResults}</strong></p>
                        </div>
                    </div>
                    <div className="container-md p-2 col-10 col-lg-6 has-text-centered align-middle">
                        <div className="row m-3 justify-content-md-center">
                            <div className="col box mb-3 mr-3 p-3 has-text-centered">
                                <p className="title is-4 mb-2"><strong>Hemisferio Izquierdo</strong></p>
                                <img className="rounded img-fluid m-2" src={require('../img/Left.svg')} alt="Hemisferio derecho"></img>
                                <Link className="btn button is-warning" to="/left">Comenzar a estudiar</Link>
                            </div>
                            <div className="col box mb-3 mr-3 p-3 has-text-centered">
                                <p className="title is-4 mb-2"><strong>Hemisferio Derecho</strong></p>
                                <img className="rounded img-fluid m-2" src={require('../img/Right.svg')} alt="Hemisferio derecho"></img>
                                <Link className="btn button is-info" to="/right">Comenzar a estudiar</Link>
                            </div>
                        </div>
                    </div>
                </Fragment>

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