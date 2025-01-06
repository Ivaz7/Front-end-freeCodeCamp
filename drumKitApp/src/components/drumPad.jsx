import { useSelector, useDispatch } from 'react-redux';
import { Howl } from "howler";
import { useEffect } from 'react';
import { changeShortCut } from '../stateRedux/drumPadSlice';

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

  const dispatch = useDispatch();

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
    if (!prop.isChanging) {
      const sound = new Howl({
        src: [`sound/${type}.mp3`],
        volume: prop.volume
      });
      sound.play();
    } else {
      const handleKeyDownChange = (event) => {
        const drumIndex = drumPad.findIndex(drum => drum.type === type);
        if (drumIndex !== -1) {
          dispatch(changeShortCut({ stateInx: drumIndex, newKey: event.key }));
        }
      };

      window.addEventListener("keydown", handleKeyDownChange);

      return () => {
        window.removeEventListener("keydown", handleKeyDownChange);
      };
    }
  };

  const handleKeyDown = (e) => {
    drumPad.forEach(drum => {
      if (drum.key === e.key) {
        clickMakeSound(drum.type);
      }
    });
  };

  useEffect(() => {
    if (!prop.isChanging) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const renderDrumOad = drumPad.map(drum => (
    <button 
      key={drum.type} 
      id={drum.type}
      onClick={() => clickMakeSound(drum.type)} 
      tabIndex="0"
    > 
      <div className='padbutton'>
        <div className='padName'>{prop.isChanging ? drum.key : drum.name}</div>
        <div className='padKey'>({prop.isChanging ? drum.type : drum.key})</div>
      </div>
    </button>
  ));

  return (
    <section id="display" className="drum-pad">
      <h2 className='text-center'>Drum Pad</h2>
      <div className="padTile">
        {renderDrumOad}
      </div>
    </section>
  );
}

export default DrumPad;
