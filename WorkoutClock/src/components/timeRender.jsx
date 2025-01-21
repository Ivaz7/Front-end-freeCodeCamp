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

  const redTime = () => {
    if (sessionTime) {
      return sessionTime < 60000 ? "red" : "";
    }

    if (breakTime) {
      return breakTime < 60000 ? "red" : "";
    }
  }

  const clickMakeSound = () => {
    const sound = new Audio('notification.mp3')
    sound.play();
  };

  if (sessionOnOrBreak && sessionTime === 1000) {
    clickMakeSound();
  }

  if (!sessionOnOrBreak && breakTime === 1000) {
    clickMakeSound();
  }

  return (
    <section
      className="
        timeRender
        d-flex
        flex-column
        align-items-center
        gap-1
        gap-sm-2
      "
    >
      <h4 className={redTime()} id="beep">{sessionOnOrBreak ? "Session Time" : "Break Time"}</h4>
      <h1 className={redTime()} id="timer-label">{sessionOnOrBreak ? formatTime(sessionTime) : formatTime(breakTime)}</h1>
    </section>
  )
}

export default TimeRender;