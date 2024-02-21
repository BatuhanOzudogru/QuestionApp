// Importing necessary dependencies and components from React and custom contexts
import React from "react";
import "./intro.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import logo from "/public/pictures/logoQuizApp.png";

// Functional component for the introductory screen of the quiz
const IntroComponent = () => {
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
    setStart,
  } = useContext(DataContext);

  // Function to handle the start of the quiz when the button is clicked
  const handleStartTest = () => {
    setStart(true);
  };

  // If the quiz has already started, return null to hide the introductory screen
  if (start) {
    return null;
  }

  // JSX for the introductory screen
  return (
    <div className="container-fluid row justify-content-center mt-2">
      <div className="col-8 text-center mt-3">
        {/* Logo for the quiz application */}
        <img
          className="w-50"
          src={logo}
          alt=""
        />
      </div>
      <div className="start-screen col-8 d-flex flex-column justify-content-center align-items-center mt-4">
        {/* Introduction text for the quiz */}
        <p className="text-center intro-p">
          Merhaba ve hoş geldiniz! Bu test, toplamda 10 sorudan oluşmaktadır ve
          her bir soruyu cevaplamak için 30 saniyeniz bulunmaktadır. Ancak
          unutmayın, ilk 10 saniye boyunca cevap şıkları görünmeyecek, bu
          süreçte sadece soruyu inceleyebileceksiniz. Her bir soruda, cevap
          şıklarından birini seçtikten sonra ya da 30 saniye dolunca otomatik
          olarak bir sonraki soruya geçilecektir. Bu şekilde, her soruya eşit
          süre ayırarak testi tamamlayabilirsiniz. Önemli bir not: Geçmiş
          sorulara dönme imkanınız bulunmamaktadır. <br /> Bu nedenle, her
          soruyu dikkatlice okuyup cevaplamak önemlidir. <br />
          Hazır mısınız? O zaman başlayalım! <br /> İyi şanslar!
        </p>
        {/* Button to start the quiz */}
        <button
          id="start"
          type="button"
          className="btn btn-outline-secondary mt-4 start-btn"
          onClick={handleStartTest}
        >
          Teste Başla
        </button>
      </div>
    </div>
  );
};

// Exporting the IntroComponent for use in other parts of the application
export default IntroComponent;
