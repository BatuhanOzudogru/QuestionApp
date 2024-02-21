import React from "react";
import "./result.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
const ResultComponent = () => {
  const {
    questionData,
    currentQuestion,
    setCurrentQuestion,
    userAnswers,
    setUserAnswers,
    showResult,
    setShowResult,
    start,
    setStart,
  } = useContext(DataContext);

  const handleStartTest = () => {
    setShowResult(false);
    setUserAnswers(new Array(questionData.length).fill("Boş"));
    setStart(true);
    setCurrentQuestion(0);
  };

  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === questionData[index].answer
  ).length;
  const emptyAnswers = userAnswers.filter((answer) => answer === "Boş").length;
  const wrongAnswers = questionData.length - correctAnswers - emptyAnswers;

  return (
    <div className="row mt-2" style={{ visibility: showResult ? "visible" : "hidden" }}>
  <div className="col-2"></div>

  <div className="col-8 row justify-content-center">
    <div className="col-6 align-self-center">
      <img className="mw-100" src="src/assets/pictures/logoQuizApp.png" alt="" />
    </div>

    <div className="col-6 row align-self-center">
      <div className="col-4 text-light text-center">
        <h4>Doğru</h4>
        <hr />
        <h3>{correctAnswers}</h3>
      </div>

      <div className="col-4 text-light text-center">
        <h4>Yanlış</h4>
        <hr />
        <h3>{wrongAnswers}</h3>
      </div>

      <div className="col-4 text-light text-center">
        <h4>Boş</h4>
        <hr />
        <h3>{emptyAnswers}</h3>
      </div>
    </div>

    <div className="col-4"></div>
    <div className="col-4 text-light mb-4 fs-2 text-center">
      <p className="ps-4">SONUÇLAR</p>
    </div>
    <div className="col-4"></div>
    <div>
    <div className="row justify-content-center mb-1"
    style={{marginLeft : '8px'}}>
    
            {questionData.map((question, index) => (
                <div
                 key={index} 
                 className="col-2 d-flex justify-content-center"
                 style={{margin : '5px'}}
                 >
                    <div className="rounded-circle"
                    style={{ color: 'white', width:'60px', height:'60px', backgroundColor: userAnswers[index] === 'Boş' ? '#6495ED' : (userAnswers[index] === question.answer ? '#006400' : '#8B0000') }}>
                    <p className="text-center pt-1 fs-2 result-p">
                      {index + 1}
                    </p>
                    </div>
                </div>
            ))}
           
        </div>
    </div>
    
    <button className="btn btn-outline-secondary mt-5 start-btn col-3 ms-3" id="restart" onClick={handleStartTest}>Tekrar Çöz</button>
    
    
  </div>
   
  <div className="col-2"></div>



      
        

      
    </div>
  );
};

export default ResultComponent;
