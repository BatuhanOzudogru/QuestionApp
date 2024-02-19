import React, { useContext, useRef, useEffect, useState } from 'react';
import { DataContext } from '../contexts/DataContext';
import ResultComponent from './ResultComponent';
import CountdownComponent from './CountdownComponent';
const QuestionComponent = () => {
    const { questionData, currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, showResult, setShowResult, start, setStart } = useContext(DataContext);
    const timerNewQuestion = useRef(null);
    const timerOptions = useRef(null);
    const [showOptions, setShowOptions] = useState(false);
    const questionsLength = questionData.length - 1;
    const [showCountdown, setShowCountdown] = useState(true);
    
    useEffect(() => {
        if (start) {
            setShowOptions(false); 
            clearTimeout(timerOptions.current);     
            timerOptions.current = setTimeout(() => {
                setShowOptions(true);
            }, 10000); 
        }
    }, [start, currentQuestion]);

    useEffect(() => {
        if (start) {
            clearTimeout(timerNewQuestion.current); 
            timerNewQuestion.current = setTimeout(() => {
                if (currentQuestion < questionsLength) {
                    setCurrentQuestion(currentQuestion + 1);
                } else {
                    setShowResult(true);
                }
            }, 30000); 

        }
    }, [start, currentQuestion]);

    
    const handleNextQuestion = (option) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestion] = option;
        setUserAnswers(newAnswers);      
        if (currentQuestion < questionsLength) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };
 
    if (!start || showResult) {
      return null;
  }
  
    return (
        <div>
 
       <CountdownComponent />          
            <div>
            <img src={questionData[currentQuestion].media} style={{ width: '33%' , height:'33%'}} alt="" />
                <h1>{questionData[currentQuestion].question}</h1>
                {showOptions && (
                    <div>
                        {questionData[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => { handleNextQuestion(option); }}>
                                {option}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};


export default QuestionComponent;
