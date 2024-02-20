import React, { useState, useEffect, useRef,useContext } from "react";
import { DataContext } from "../contexts/DataContext";
function Countdown() {

  const { questionData, currentQuestion, setCurrentQuestion, userAnswers, setUserAnswers, showResult, setShowResult, start, setStart } = useContext(DataContext);
  let refInstance = useRef(null);
  let [counter, setCountdown] = useState("00:00:00");
  let getCounter = (e) => {
    let all = Date.parse(e) - Date.parse(new Date());
    let s = Math.floor((all / 1000) % 60);
    return {
      all,
      s,
    };
  };
  let initCounter = (e) => {
    let { all, s } = getCounter(e);
    if (all >= 0) {
      setCountdown(     
          (s > 9 ? s : "0" + s),
      );
    }
  };
  let reset = (e) => {
    setCountdown("30");
    if (refInstance.current) clearInterval(refInstance.current);
    let id = setInterval(() => {
      initCounter(e);
    }, 1000);
    refInstance.current = id;
  };
  let voidTime = () => {
    let voidZone = new Date();
    voidZone.setSeconds(voidZone.getSeconds() + 30);
    return voidZone;
  };
  useEffect(() => {
    reset(voidTime());
  }, [currentQuestion]);
  return (
    <>
      <h2 className="">{counter}</h2>
    </>
  );
}
export default Countdown;