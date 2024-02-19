import React from 'react'
import { useContext, useState } from 'react'
import { DataContext } from '../contexts/DataContext'

const IntroComponent = () => {
    const {questionData, 
        currentQuestion,
        setCurrentQuestion, 
        userAnswers, 
        setUserAnswers,
        showResult, 
        setShowResult,
        start,
        setStart} = useContext(DataContext);

        
   const handleStartTest = () => {
    setStart(true);
   }
   if(start){
         return null;
   }
  return (
    <div>
        <div className="start-screen">
        <h1>Teste Başla</h1>
        <p>Merhaba ve hoş geldiniz!

Bu test, toplamda 10 sorudan oluşmaktadır ve her bir soruyu cevaplamak için 30 saniyeniz bulunmaktadır. Ancak unutmayın, ilk 10 saniye boyunca cevap şıkları görünmeyecek, bu süreçte sadece soruyu inceleyebileceksiniz.

Her bir soruda, cevap şıklarından birini seçtikten sonra ya da 30 saniye dolunca otomatik olarak bir sonraki soruya geçilecektir. Bu şekilde, her soruya eşit süre ayırarak testi tamamlayabilirsiniz.

Önemli bir not: Geçmiş sorulara dönme imkanınız bulunmamaktadır. Bu nedenle, her soruyu dikkatlice okuyup cevaplamak önemlidir.

Hazır mısınız? O zaman başlayalım! İyi şanslar!</p>
        <button id="start" onClick={handleStartTest}>Teste Başla</button>
      </div>
    </div>
  )
}

export default IntroComponent

