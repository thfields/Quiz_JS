// eslint-disable-next-line no-unused-vars
import { useContext } from "react";
// eslint-disable-next-line no-unused-vars
import { QuizContext } from "../context/quiz";

import "./Option.css";

// eslint-disable-next-line react/prop-types, no-unused-vars
const Option = ({option, selectOption, answer}) => {
    // eslint-disable-next-line no-unused-vars
    const [quizState, dispatch] = useContext(QuizContext);
    
  return (
    <div className={`option ${
        quizState.answerSelected && option === answer ? "correct" : ""}
        ${
            quizState.answerSelected && option !== answer ? "wrong" : ""}
        `} 
    onClick={() => selectOption()}>
        <p>{option}</p>
    </div>
  );
};

export default Option;