import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../contexts/DataContext'
const ResultComponent = () => {
    const {questionData, currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers,showResult, setShowResult,start,setStart} = useContext(DataContext);
   

    const handleStartTest = () => {
      setShowResult(false);
      setUserAnswers(new Array(questionData.length).fill('Boş'));
      setStart(true);
      setCurrentQuestion(0);
    }

    const correctAnswers = userAnswers.filter((answer, index) => answer === questionData[index].answer).length;
    const emptyAnswers = userAnswers.filter((answer) => answer === 'Boş').length;
    const wrongAnswers = questionData.length - correctAnswers - emptyAnswers;

  return (
    
    

    <div>
    <div style={{ display: showResult ? 'block' : 'none' }}>
        <h1>Results</h1>
        <h4>Doğru: {correctAnswers}</h4>
        <h4>Yanlış: {wrongAnswers}</h4>
        <h4>Boş: {emptyAnswers}</h4>
        <div style={{justifyContent:'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {questionData.map((question, index) => (
                <div key={index} style={{ borderRadius: '20px', width: '18%', color: 'white', margin: '5px', backgroundColor: userAnswers[index] === 'Boş' ? 'blue' : (userAnswers[index] === question.answer ? 'green' : 'red') }}>
                    <p>   {index + 1}. Soru {userAnswers[index] === 'Boş' ? 'Boş' : (userAnswers[index] === question.answer ? 'Doğru' : 'Yanlış')}</p>
                </div>
            ))}
        </div>
        <button id="restart" onClick={handleStartTest}>Tekrar Çöz</button>
    </div>
</div>

  )
}

export default ResultComponent