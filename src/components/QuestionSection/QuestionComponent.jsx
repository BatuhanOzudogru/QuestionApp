// Importing necessary dependencies and components from React and custom contexts
import React, { useContext, useRef, useEffect, useState } from "react";
import "./question.css";
import { DataContext } from "../../contexts/DataContext";
import CountdownComponent from "../CountdownComponent";

// Functional component for rendering quiz questions
const QuestionComponent = () => {
  // Destructuring values from the DataContext
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

  // Refs for timers and state for managing options visibility
  const timerNewQuestion = useRef(null);
  const timerOptions = useRef(null);
  const [showOptions, setShowOptions] = useState(false);
  const questionsLength = questionData.length - 1;

  // Effect to manage the visibility of answer options and timer for option display
  useEffect(() => {
    if (start) {
      setShowOptions(false);
      clearTimeout(timerOptions.current);
      timerOptions.current = setTimeout(() => {
        setShowOptions(true);
      }, 10000);
    }
  }, [start, currentQuestion]);

  // Effect to manage the timer for moving to the next question
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

  // Function to handle moving to the next question and updating user answers
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

  // If the quiz hasn't started or the results are shown, return null to hide the component
  if (!start || showResult) {
    return null;
  }

  // JSX for rendering the question component
  return (
    <div className="row">
      {/* Logo and timer components */}
      <div className="col-1"></div>
      <img
        className="col-1 question-logo"
        src="public/pictures/logoQuizApp.png"
        alt=""
      />
      <div className="col-7"></div>
      <div className="col-1 text-light text-center align-self-center">
        <CountdownComponent />
      </div>
      <div className="col-2" id="hiddenId"></div>
      <div className="col-2"></div>

      {/* Question and options components */}
      <div className="col-8 row height-412">
        <div className="col-6">
          <img
            className="w-100 h-100 max-width-462 border border-secondary border-3 rounded-5 shadow-lg"
            src={questionData[currentQuestion].media}
            alt=""
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <p className="question-p">{questionData[currentQuestion].question}</p>
        </div>
      </div>

      {/* Render answer options if showOptions is true */}
      {showOptions && (
        <div className="mt-5 row row-gap-3">
          {questionData[currentQuestion].options.map((option, index) => (
            <>
              <div className="col-4 "></div>
              <button
                className="col-4 btn btn-outline-secondary start-btn "
                key={index}
                onClick={() => {
                  handleNextQuestion(option);
                }}
              >
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

// Exporting the QuestionComponent for use in other parts of the application
export default QuestionComponent;
