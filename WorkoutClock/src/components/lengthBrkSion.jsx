import { useSelector, useDispatch } from 'react-redux';
import { incremenetBreak, incremenetSession, decrementBreak, decrementSession } from '../statesRedux/lengthSlice';
import { useEffect } from 'react';
import { setSessionTime, setBreakTime } from '../statesRedux/timeCountSlice';

const LengthBreakSession = (prop) => {
  const { sessionLgth, breakLgth } = useSelector((state) => state.length);
  const { isRunning } = useSelector((state) => state.timeCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSessionTime(sessionLgth));
    dispatch(setBreakTime(breakLgth));
  }, [prop, dispatch, sessionLgth, breakLgth]);

  return (
    <section 
      className="
        lengthBrkSion
        d-flex
        flex-row
        justify-content-between
        gap-2
        gap-sm-5
        text-center
        p-1
        p-sm-2
      "
    >
      <div 
        className="
          lengthDiv
          d-flex
          flex-column
          align-items-center
          gap-1
          gap-sm-2
        "
      >
        <h4 id="break-label">Break Length</h4>

        <div
          className="
            lengthBtn
            d-flex
            gap-1
            flex-row
            align-items-center
            justify-content-between
          "
        >
          <button disabled={isRunning} onClick={isRunning ? null : () => dispatch(decrementBreak())} id="break-decrement">
            <i className="fa-solid fa-arrow-down"></i>
          </button>

          <h5 id="break-length">{breakLgth} min</h5>

          <button disabled={isRunning} onClick={isRunning ? null : () => dispatch(incremenetBreak())} id="break-increment">
           <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>

      <div 
        className="
          lengthDiv
          d-flex
          flex-column
          align-items-center
          gap-1
          gap-sm-2
        "
      >
        <h4 id="session-label">Session Length</h4>

        <div
          className="
            lengthBtn
            d-flex
            gap-1
            flex-row
            align-items-center
            justify-content-between
          "
        >
          <button disabled={isRunning} onClick={isRunning ? null : () => dispatch(decrementSession())} id="session-decrement">
            <i className="fa-solid fa-arrow-down"></i>
          </button>

          <h5 id="session-length">{sessionLgth} min</h5>

          <button disabled={isRunning} onClick={isRunning ? null : () => dispatch(incremenetSession())} id="session-increment">
           <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LengthBreakSession;