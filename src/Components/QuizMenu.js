import React, { useContext } from 'react'
import "../App.css"

import { QuizContext } from '../Context/ContextQuiz'



export default function QuizMenu() {
const {quizStatus , setQuizStatus} = useContext(QuizContext)

    return (
        <div className="Quiz">
            <button onClick={() => {setQuizStatus("quiz")}}> Start Quiz </button>
        </div>
    )
}
