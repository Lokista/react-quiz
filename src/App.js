import './App.css'
import React , { useState , useContext } from 'react'
import Quiz from './Components/Quiz';
import QuizEnd from './Components/QuizEnd';
import QuizMenu from './Components/QuizMenu';


import { QuizContext } from './Context/ContextQuiz'

function App() {
  const [quizStatus , setQuizStatus ] = useState("menu");
  const [points , setPoints] = useState(0)

  return (
    <div className="App">
    <h1> Quiz Games </h1>
    <QuizContext.Provider value={{quizStatus , setQuizStatus , points, setPoints} }>
    { quizStatus === "quiz" && <Quiz/> }
    { quizStatus === "menu" && <QuizMenu/> }
    { quizStatus === "end" && <QuizEnd/>}
    </QuizContext.Provider>
    </div>
  );
}

export default App;
