import { useDispatch, useSelector } from "react-redux";
import { startSessionTime, setBreakTime, setSessionTime, startBreakTime, startRunning, pauseRunning, changeStatus, reset } from "../statesRedux/timeCountSlice";
import { useEffect, useRef } from "react";

const Button = () => {
  const { isRunning, sessionOnOrBreak, sessionTime, breakTime } = useSelector((state) => state.timeCount);
  const { sessionLgth, breakLgth } = useSelector((state) => state.length);
  const dispatch = useDispatch();
  let intervalId = useRef(0);

  useEffect(() => {
    const clearCurrentInterval = () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
        intervalId.current = 0;
      }
    };
  
    if (isRunning) {
      if (sessionTime === 0 && sessionOnOrBreak) {
        clearCurrentInterval();
        dispatch(changeStatus()); 
        dispatch(setBreakTime(sessionLgth)); 
      } else if (breakTime === 0 && !sessionOnOrBreak) {
        clearCurrentInterval();
        dispatch(changeStatus());
        dispatch(setSessionTime(breakLgth)); 
      }
  
      clearCurrentInterval(); 
      intervalId.current = setInterval(() => {
        if (sessionOnOrBreak) {
          dispatch(startSessionTime());
        } else {
          dispatch(startBreakTime());
        }
      }, 1000);
    }
  
    return () => {
      clearCurrentInterval(); 
    };
  }, [dispatch, isRunning, sessionOnOrBreak, sessionTime, breakTime, sessionLgth, breakLgth]);
  
  

  const runningOn = () => {
    dispatch(startRunning());
  }

  const runningOff = () => {
    dispatch(pauseRunning());
  }

  const resetAll = () => {
    dispatch(reset());
  }

  return (
    <section>
      <button onClick={runningOn} id="time-left">
        <i className="fa-solid fa-play"></i>
      </button>

      <button onClick={runningOff} id="start_stop">
        <i className="fa-solid fa-pause"></i>
      </button>

      <button>
        <i className="fa-solid fa-forward"></i>
      </button>

      <button onClick={resetAll} id="reset">
        <i className="fa-solid fa-clock-rotate-left"></i>      
      </button>
    </section>
  )
}

export default Button;