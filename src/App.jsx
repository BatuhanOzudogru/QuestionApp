import { useState,useContext } from 'react'
import './App.css'
import { DataProvider } from './contexts/DataContext' 
import questions from './assets/questions';
import QuestionComponent from './components/QuestionComponent';
import ResultComponent from './components/ResultComponent';
import IntroComponent from './components/IntroComponent';



function App() {
 
  return (
    <DataProvider>
      <IntroComponent />
      <QuestionComponent />
      <ResultComponent />
    </DataProvider>
  );
}

export default App;
