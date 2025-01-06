import { useState } from "react";
import DrumPad from "./drumPad";
import DrumSetting from "./drumSetting";

const Main = () => {
  const [volume, setVolume] = useState(0.5)
  const [isChanging, setIsChanging] = useState(false)

  return (
    <main id="drum-machine">
      <div className="
        containerDrum
        d-flex
        justify-content-center
        align-items-center
        gap-2
        p-3
        rounded
      ">
        <DrumPad volume={volume} isChanging={isChanging} setIsChanging={setIsChanging} />
        <DrumSetting volume={volume} setVolume={setVolume} isChanging={isChanging} setIsChanging={setIsChanging} />
      </div>
    </main>
  )
}

export default Main;