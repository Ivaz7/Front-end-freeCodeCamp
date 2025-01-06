import DrumPad from "./drumPad";
import DrumSetting from "./drumSetting";

const Main = () => {
  return (
    <main id="drum-machine">
      <div className="
        containerDrum
        d-flex
        justify-content-center
        align-items-center
        gap-4
        p-3
        rounded
      ">
        <DrumPad />
        <DrumSetting />
      </div>
    </main>
  )
}

export default Main;