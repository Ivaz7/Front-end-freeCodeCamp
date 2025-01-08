import LengthBreakSession from "./lengthBrkSion";
import TimeRender from "./timeRender";

const Main = () => {
  return (
    <main
      className="
        d-flex
        flex-column
        gap-4
        align-items-center
      "  
    >
      <LengthBreakSession />
      <TimeRender />
    </main>
  )
}

export default Main;