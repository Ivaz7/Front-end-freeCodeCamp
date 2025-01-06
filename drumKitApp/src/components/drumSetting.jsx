import { Howler } from "howler";

const DrumSetting = (prop) => {
  return (
    <section id="display" className="drum-setting">
      <h2 className="text-center">Drum Setting</h2>
      <div className="settingButton">
        <div className="
          volumeButton
          d-flex
          flex-column
          gap-2
          align-items-center
        ">
          <div>Volume</div>
          <input 
            value={prop.value} 
            onChange={(e) => prop.setVolume(e.target.value / 100)} 
            type="range"  min="0" max="100" 
          />
        </div>
        <button onClick={() => Howler.stop()} className="silince">Silince</button>
        <button onClick={() => prop.setIsChanging(prev => !prev)} className="changeDrumPad">{prop.isChanging ? "Save" : "Change Shortcut"}</button>
      </div>
    </section>
  )
}

export default DrumSetting;