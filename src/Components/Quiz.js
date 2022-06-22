import React , { useState , useContext } from 'react'
import { Questions } from './Question'
import '../App.css'
import { QuizContext } from '../Context/ContextQuiz'

export default function Quiz() {
    const [activeQuestion , setActiveQuestion] = useState(0)
    const [answer , setAnswer] = useState("")

    const {points , setPoints , setQuizStatus} = useContext(QuizContext)

    const nextQuestion = () =>{
        if(Questions[activeQuestion].answer === answer){
         setPoints((p) => p + 1)
        }
        setAnswer("")
        setActiveQuestion((q) => q + 1)


        if(activeQuestion === Questions.length - 1){
            setQuizStatus("end")
        }
    }

    return (
        <div className="Quiz">
            <h1>{Questions[activeQuestion].question}</h1>
            <div className="Answers">
                <button onClick={() => { setAnswer("a") } }>{ Questions[activeQuestion].a }</button>
                {answer === "a" && "<="}
                <button onClick={() => { setAnswer("b") } }>{ Questions[activeQuestion].b }</button>
                {answer === "b" && "<="}
                <button onClick={() => { setAnswer("c") } }>{ Questions[activeQuestion].c }</button>
                {answer === "c" && "<="}
                
            </div>
            <div>
                    <button className="Submit" onClick={nextQuestion}>Submit</button>

            </div>
             </div>
    )
}
