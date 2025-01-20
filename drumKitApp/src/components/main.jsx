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
        flex-sm-row
        flex-column
        justify-content-center
        align-items-center
        gap-sm-2
        p-sm-3
        gap-1
        p-1
        mt-sm-0
        mt-2
        rounded
      ">
        <DrumPad volume={volume} isChanging={isChanging} setIsChanging={setIsChanging} />
        <DrumSetting volume={volume} setVolume={setVolume} isChanging={isChanging} setIsChanging={setIsChanging} />
      </div>
    </main>
  )
}

export default Main;