import { useState } from "react";
import DrumPad from "./drumPad";
import DrumSetting from "./drumSetting";

const Main = () => {
  const [volume, setVolume] = useState(0.5)

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
        <DrumPad volume={volume} />
        <DrumSetting volume={volume} setVolume={setVolume} />
      </div>
    </main>
  )
}

export default Main;