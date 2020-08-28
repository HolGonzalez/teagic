import React, {useState} from "react";

const QuestionBox = ({question, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="box rounded">
      <div className="h3">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="btn btn-info m-2"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
