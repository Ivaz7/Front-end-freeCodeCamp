import { Howler } from "howler";

const DrumSetting = (prop) => {
  return (
    <section id="display" className="drum-setting">
      <h2>Drum Setting</h2>
      <div className="settingButton">
        <input 
          value={prop.value} 
          onChange={(e) => prop.setVolume(e.target.value / 100)} 
          type="range"  min="0" max="100" 
        />
        <button onClick={() => Howler.stop()} className="silince">Silince</button>
        <button className="changeDrumPad">Change Sortcut</button>
      </div>
    </section>
  )
}

export default DrumSetting;