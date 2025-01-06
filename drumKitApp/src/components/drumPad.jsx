import { useSelector } from 'react-redux';
import { Howl } from "howler";
import { useEffect } from 'react';

const DrumPad = (prop) => {
  const { 
    crashSymbal,
    hitHatMuted,
    hitHatOpen,
    kickMuted,
    kickOpen,
    snareMuted,
    snareOpen,
    tom1,
    tom2
  } = useSelector((state) => state.drumPad);

  const drumPad = [
    crashSymbal,
    hitHatMuted,
    hitHatOpen,
    kickMuted,
    kickOpen,
    snareMuted,
    snareOpen,
    tom1,
    tom2,
  ];

  const clickMakeSound = (type) => {
    const sound = new Howl({
      src: [`sound/${type}.mp3`],
      volume: prop.volume
    })
    sound.play();
  }

  const handleKeyDown = (e) => {
    drumPad.forEach(drum => {
      if (drum.key === e.key) {
        clickMakeSound(drum.type)
      }
    })
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  })

  const renderDrumOad = drumPad.map(drum => (
    <button 
      key={drum.type} 
      id={drum.type}
      onClick={
        () => clickMakeSound(drum.type)
      } 
      tabIndex="0"
    >
      <div>{drum.name}</div>
      <div>{drum.key}</div>
    </button>
  ))

  return (
    <section id="display" className="drum-pad">
      <h2>Drum Pad</h2>
      <div className="padTile">
        {renderDrumOad}
      </div>
    </section>
  )
}

export default DrumPad;