// Importing necessary dependencies and components from React and custom contexts
import React, { useState, useEffect, useRef, useContext } from "react";
import { DataContext } from "../contexts/DataContext";

// Countdown component for displaying and managing the timer
function Countdown() {
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

  // Ref to store the interval ID for the timer
  let refInstance = useRef(null);

  // State to manage the countdown display
  let [counter, setCountdown] = useState("00");

  // Function to calculate the remaining time
  let getCounter = (endTime) => {
    let all = Date.parse(endTime) - Date.parse(new Date());
    let seconds = Math.floor((all / 1000) % 60);
    return {
      all,
      seconds,
    };
  };

  // Function to initialize the countdown
  let initCounter = (endTime) => {
    let { all, seconds } = getCounter(endTime);
    if (all >= 0) {
      setCountdown(seconds > 9 ? seconds : "0" + seconds);
    }
  };

  // Function to reset the countdown and start the timer
  let reset = (endTime) => {
    setCountdown("30"); // Set initial countdown display to 30 seconds
    if (refInstance.current) clearInterval(refInstance.current); // Clear existing interval if any
    let id = setInterval(() => {
      initCounter(endTime);
    }, 1000);
    refInstance.current = id; // Store the interval ID in the ref
  };

  // Function to calculate the end time for the timer (30 seconds from the current time)
  let voidTime = () => {
    let voidZone = new Date();
    voidZone.setSeconds(voidZone.getSeconds() + 30);
    return voidZone;
  };

  // Effect to reset and start the timer whenever the current question changes
  useEffect(() => {
    reset(voidTime());
  }, [currentQuestion]);

  // JSX for rendering the countdown display
  return (
    <>
      <h2 className="">{counter}</h2>
    </>
  );
}

// Exporting the Countdown component for use in other parts of the application
export default Countdown;
