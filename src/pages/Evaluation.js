import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import quizService from "../quizService";
import QuestionBox from "../components/QuestionBox";
import Result from "../components/Result";

class Evaluation extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0,
  };

  getQuestion = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answers, correctAnswer) => {
    if (answers == correctAnswer) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5,
    });
  };

  playAgain = () => {
    this.getQuestion();
    this.setState({
      responses: 0,
      score: 0,
    });
  };

  componentDidMount() {
    this.getQuestion();
  }

  render() {
    return (
      <div className="container mx-auto p-2">
        <div className="row m-3 justify-content-md-center">
          <div className="col-12">
            <div className="title is-2 has-text-centered">
              Prueba de conocimientos
            </div>
            {this.state.questionBank.length > 0 &&
              this.state.responses < 5 &&
              this.state.questionBank.map(
                ({ question, answers, correct, questionId }) => (
                  <QuestionBox
                    question={question}
                    options={answers}
                    key={questionId}
                    selected={(answers) => this.computeAnswer(answers, correct)}
                  />
                )
              )}
            {this.state.responses === 5 ? (
              <Result
                score={this.state.score}
                playAgain={this.playAgain}
              ></Result>
            ) : null}
          </div>
        </div>
        <div className="col-12 m-4 has-text-centered">
          <Link className="btn button is-warning m-2" to="/left">
            Regresar al hemisferio izquierdo
          </Link>
          <Link className="btn button is-info m-2" to="/right">
            Regresar al hemisferio izquierdo
          </Link>
        </div>
      </div>
    );
  }
}

export default Evaluation;
