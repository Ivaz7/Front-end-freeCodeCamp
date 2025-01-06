const DrumSetting = () => {


  return (
    <section id="display" className="drum-setting">
      <button className="changeDrumPad">Change Sortcut</button>
      <button className="silince">Silince</button>
      <input type="range"  min="0" max="100" />
    </section>
  )
}

export default DrumSetting;