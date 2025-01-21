import Button from "./button";
import LengthBreakSession from "./lengthBrkSion";
import TimeRender from "./timeRender";

const Main = () => {
  return (
    <main
      className="
        d-flex
        flex-column
        gap-3
        gap-sm-4
        align-items-center
        p-2
        p-sm-3
      "  
    >
      <LengthBreakSession />
      <TimeRender />
      <Button />
    </main>
  )
}

export default Main;