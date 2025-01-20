import { useSelector } from "react-redux";

const TimeRender = () => {
  const { sessionTime, breakTime, sessionOnOrBreak } = useSelector((state) => state.timeCount);

  const formatTime = (time) => {
    let minutes = Math.floor(time / (1000 * 60) % 60);
    let seconds = Math.floor(time / (1000) % 60);

    return (<>{padZero(minutes)}:{padZero(seconds)}</>);
  }

  const padZero = (num) => {
    return (num < 10 ? "0" : "") + num; 
  }

  return (
    <section
      className="
        timeRender
        d-flex
        flex-column
        align-items-center
        gap-2
      "
    >
      <h4 id="beep">{sessionOnOrBreak ? "Session Time" : "Break Time"}</h4>
      <h1 id="timer-label">{sessionOnOrBreak ? formatTime(sessionTime) : formatTime(breakTime)}</h1>
    </section>

    // testing
  )
}

export default TimeRender;