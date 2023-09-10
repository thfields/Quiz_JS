import { useContext, useEffect } from "react";
import { QuizContext } from "./context/quiz";

import Welcome from "./components/Welcome";
import Question from "./components/Question";
import GameOver from "./components/GameOver";

import "./App.css";


function App() {
  
  
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    //embaralhar as perguntas
    dispatch({type:"REORDER_QUESTIONS"});
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return(
    <div className="App">
      <h1>Quiz do JavaScript</h1>
      {quizState.gameStage === "Start" && <Welcome/>}
      {quizState.gameStage === "Playing" && <Question/>}
      {quizState.gameStage === "End" && <GameOver/>}
    </div>
  )
}

export default App
