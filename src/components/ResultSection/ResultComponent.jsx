import React, { useState } from "react";
import "./result.css";
import { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import logo from "/public/pictures/logoQuizApp.png";

const ResultComponent = () => {
  const {
    questionData,
    userAnswers,
    showResult,
    setUserAnswers,
    setStart,
    setCurrentQuestion,
    setShowResult,
  } = useContext(DataContext);

  const [hoveredIndex, setHoveredIndex] = useState(0);

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
    <div
      className="row mt-1"
      style={{ visibility: showResult ? "visible" : "hidden" }}
    >
      <div className="col-2"></div>

      <div className="col-8 row justify-content-center">
        {/* Logo and result summary */}
        <div className="col-6 align-self-center">
          <img className="mw-100" src={logo} alt="" />
        </div>

        <div className="col-6 row align-self-center">
          {/* Display correct, wrong, and empty answers */}
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

          <div className="col-4 text-light text-center text-light">
            <h4>Boş</h4>
            <hr />
            <h3>{emptyAnswers}</h3>
          </div>
        </div>

        <div className="col-4 user-answer text-center text-light">
          {/* User's Answer Section */}
          <p>
            Yanıtınız <hr />
            {userAnswers[hoveredIndex]}
          </p>
        </div>

        <div className="col-4 text-light mb-4 fs-2 text-center">
          {/* Results Section */}
          <p className="ps-4">SONUÇLAR</p>
        </div>

        <div className="col-4 correct-answer text-center text-light">
          {/* Correct Answer Section */}
          <p className="ps-5">
            Doğru Yanıt <hr />
            {questionData[hoveredIndex].answer}
          </p>
        </div>

        {/* Display result circles for each question */}
        <div>
          <div
            className="row justify-content-center mb-1"
            style={{ marginLeft: "8px" }}
          >
            {questionData.map((question, index) => (
              <div
                key={index}
                className="col-2 d-flex justify-content-center answers"
                style={{ margin: "5px", position: "relative" }}
              >
                <div
                  className="rounded-circle asd"
                  style={{
                    color: "white",
                    width: "60px",
                    height: "60px",
                    backgroundColor:
                      userAnswers[index] === "Boş"
                        ? "#6495ED"
                        : userAnswers[index] === question.answer
                        ? "#006400"
                        : "#8B0000",
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                >
                  <p className="text-center pt-1 fs-2 result-p">{index + 1}</p>
                </div>
                {/* Display details popup if hovered */}
              </div>
            ))}
          </div>
        </div>
        {/* Button to restart the quiz */}
        <button
          className="btn btn-outline-secondary mt-5 start-btn col-3 ms-3"
          id="restart"
          onClick={handleStartTest}
        >
          Tekrar Çöz
        </button>
      </div>
    </div>
  );
};

export default ResultComponent;
