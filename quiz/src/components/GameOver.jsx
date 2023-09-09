// eslint-disable-next-line no-unused-vars
import { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { QuizContext } from '../context/quiz';

import Welldone from '../img/Welldone.svg';

import './GameOver.css';

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="gameover">
        <h2>Fim de jogo!</h2>
        <p>Pontuação: {quizState.score * 2}</p>
        <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
        <img src={Welldone} alt="Fim do Quiz" />
        <button onClick={() => dispatch({type: "NEW_GAME"})}>Jogar novamente</button>
    </div>
  );
};

export default GameOver