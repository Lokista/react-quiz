import React , {useContext} from 'react'
import { QuizContext } from '../Context/ContextQuiz'
import { Questions } from './Question'
import '../App.css'

function QuizEnd() {
    const {points,setPoints , quizStatus , setQuizStatus} = useContext(QuizContext)

    const letsgoBack = () =>{
        setPoints(0)
        setQuizStatus("menu")
    }

    return (
        <div className="Quiz">
            <h1> 
                {points === Questions.length && "Congratulation you achiev what other can't"}
                {points < Questions.length && `You dissapoint me ${points}/${Questions.length}`}
                <button onClick={letsgoBack}>Again?</button>
            </h1>
        </div>
    )
}

export default QuizEnd
