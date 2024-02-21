// Importing necessary dependencies from React
import React, { createContext, useEffect, useState } from "react";

// Importing the set of questions from the specified location
import questions from "../assets/questions";

// Creating a context for managing and sharing data throughout the application
const DataContext = createContext();

// DataProvider component to wrap the application and provide data to its children
const DataProvider = ({ children }) => {
  // State variables to manage question data, current question index, user answers, result visibility, and quiz start status
  const [questionData, setQuestionData] = useState(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    new Array(questionData.length).fill("Boş")
  );
  const [showResult, setShowResult] = useState(false);
  const [start, setStart] = useState(false);

  // Wrapping the children components with the DataContext.Provider, providing access to the state values
  return (
    <DataContext.Provider
      value={{
        questionData,
        setQuestionData,
        currentQuestion,
        setCurrentQuestion,
        userAnswers,
        setUserAnswers,
        showResult,
        setShowResult,
        start,
        setStart,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

// Exporting the DataContext and DataProvider for use in other parts of the application
export { DataContext, DataProvider };
