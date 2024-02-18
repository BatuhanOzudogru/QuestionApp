//context api   
import React, { createContext, useEffect, useState } from 'react';
import questions from '../assets/questions';

const DataContext = createContext();

const DataProvider = ({children}) => {
    const [questionData, setQuestionData] = useState(questions);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(new Array(questionData.length).fill('Boş'));
    const [showResult, setShowResult] = useState(false);
    const [start,setStart]=useState(false);
   


    
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
            setStart
        }}
        >
        {children}
        </DataContext.Provider>
    );
    };

    export {DataContext, DataProvider};
       