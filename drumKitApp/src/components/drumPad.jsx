import { useSelector } from 'react-redux';
import { Howl } from "howler";

const DrumPad = () => {
  const { 
    crashSymbal,
    hitHatMuted,
    hitHatOpen,
    kickMuted,
    kickOpen,
    snareMuted,
    snareOpen,
    tom1,
    tom2,
    volume
  } = useSelector((state) => state.drumPad);

  const clickMakeSound = (type) => {
    const sound = new Howl({
      src: [`sound/${type}.mp3`],
      volume: volume
    })
    sound.play();
  }

  return (
    <section id="display" className="drum-pad">
      <h2>Drum Pad</h2>
      <div className="padTile">
        <button onClick={() => clickMakeSound(crashSymbal.type)} id="crashSymbal">
          {crashSymbal.key}
        </button>
        <button onClick={() => clickMakeSound(hitHatMuted.type)} id="tom-1">
          {hitHatMuted.key}
        </button>
        <button onClick={() => clickMakeSound(hitHatOpen.type)} id="tom2">
          {hitHatOpen.key}
        </button>
        <button onClick={() => clickMakeSound(kickMuted.type)} id="hiHatClosed">
          {kickMuted.key}
        </button>
        <button onClick={() => clickMakeSound(kickOpen.type)} id="hitHatOpen">
          {kickOpen.key}
        </button>
        <button onClick={() => clickMakeSound(snareMuted.type)} id="kickMuted">
          {snareMuted.key}
        </button>
        <button onClick={() => clickMakeSound(snareOpen.type)} id="kickOpen">
          {snareOpen.key}
        </button>
        <button onClick={() => clickMakeSound(tom1.type)} id="snareMuted">
          {tom1.key}
        </button>
        <button onClick={() => clickMakeSound(tom2.type)} id="snareOpen">
          {tom2.key}
        </button>
      </div>
    </section>
  )
}

export default DrumPad;