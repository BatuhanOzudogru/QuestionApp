import React, { useContext, useRef, useEffect, useState } from "react";
import "./question.css";
import { DataContext } from "../../contexts/DataContext";
import CountdownComponent from "../CountdownComponent";
const QuestionComponent = () => {
  const {
    questionData,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setUserAnswers,
    showResult,
    setShowResult,
    start,
  } = useContext(DataContext);
  const timerNewQuestion = useRef(null);
  const timerOptions = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const questionsLength = questionData.length - 1;

  useEffect(() => {
    if (start) {
      setShowOptions(false);
      clearTimeout(timerOptions.current);
      timerOptions.current = setTimeout(() => {
        setShowOptions(true);
      }, 0);
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
      }, 150000000);
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
<div className="row">
    <div className="col-1"></div>      
    <img className="col-1" src="src/assets/pictures/logoQuizApp.png" alt="" />
    <div className="col-8"></div>
    <div className="col-1">
        <CountdownComponent />
    </div>
    <div className="col-1"></div>
    <div className="col-2"></div>
    <div className="col-8 row height-412">
        <div className="col-6">
            <img className="w-100 h-100 max-width-462 border border-secondary border-3 rounded-5 shadow-lg" src={questionData[currentQuestion].media} alt="" />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
            <p className="question-p">{questionData[currentQuestion].question}</p>
        </div>
    </div>
    {showOptions && (
        <div className="mt-5 row row-gap-3">
            {questionData[currentQuestion].options.map((option, index) => (
              <>
              <div className="col-4 "></div>
            
                <button className="col-4 btn btn-outline-secondary start-btn " key={index} onClick={() => { handleNextQuestion(option); }}>
                    {option}
                </button>

                <div className="col-4"></div>
                </>
            ))}
        </div>
    )}
</div>
  );
};

export default QuestionComponent;
