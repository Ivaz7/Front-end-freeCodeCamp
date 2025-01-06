const DrumPad = () => {


  return (
    <section id="display" className="drum-pad">
      <h2>Drum Pad</h2>
      <div className="padTile">
        <button id="crashSymbal">q</button>
        <button id="tom-1">w</button>
        <button id="tom2">e</button>
        <button id="hiHatClosed">a</button>
        <button id="hitHatOpen">s</button>
        <button id="kickMuted">d</button>
        <button id="kickOpen">z</button>
        <button id="snareMuted">x</button>
        <button id="snareOpen">c</button>
      </div>
    </section>
  )
}

export default DrumPad;