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
                <h2 className="title is-2 has-text-centered-desktop">Test cerebro</h2>
                <div className="row row-cols-1 box">
                <Question 
                    title="Tiendo a estar más frecuentemente:" 
                    numberQuestion="one"
                    optionLeft=" Tenso y preocupado"
                    optionRight=" Relajado y despreocupado"
                    changeLeft={this.Left}
                    changeRight={this.Right}
                ></Question>
                <Question 
                    title="Pregunta numero 2:" 
                    numberQuestion="two"
                    optionLeft=" Tenso y preocupado"
                    optionRight=" Relajado y despreocupado"
                    changeLeft={this.Left}
                    changeRight={this.Right}
                ></Question> 
                <Question 
                    title="Pregunta numero 3:" 
                    numberQuestion="three"
                    optionLeft=" Tenso y preocupado"
                    optionRight=" Relajado y despreocupado"
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