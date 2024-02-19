import { useState,useContext } from 'react'
import './App.css'
import questions from './assets/questions';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import IntroComponent from './components/IntroComponent';
import Countdown from './components/CountdownComponent';


function App() {
 
  return (   
      <>
      <IntroComponent />
      <QuestionComponent />
      <ResultComponent />
      </>
  );
}

export default App;
