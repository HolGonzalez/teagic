import React from "react";

const Result = ({ score, playAgain }) => (
  <div className="container">
    <div className="row justify-content-md-center">
      <div className="col-8 box rounded has-text-centered">
        <div className="h3">
          Tu puntuación {score} / 5 preguntas correctas!
        </div>
        <button className="btn btn-success" onClick={playAgain}>
          Responder nuevamente!
        </button>
      </div>
    </div>
  </div>
);

export default Result;
