import { useSelector, useDispatch } from 'react-redux';
import { Howl } from "howler";
import { useEffect } from 'react';
import { changeShortCut, changePicked } from '../stateRedux/drumPadSlice';

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
    const sound = new Howl({
      src: [`sound/${type}.mp3`],
      volume: prop.volume
    });
    sound.play();
  };

  const clickChangeShortCut = (name) => {
    dispatch(changePicked({ stateInx: name }));
  
    const handleNewKey = (e) => {
      dispatch(changeShortCut({ stateInx: name, newKey: e.key }));
      window.removeEventListener("keydown", handleNewKey);
      dispatch(changePicked({ stateInx: name }));
    };
  
    window.addEventListener("keydown", handleNewKey);
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
      onClick={prop.isChanging ? () => clickChangeShortCut(drum.name) : () => clickMakeSound(drum.type)} 
      disabled={drum.picked}
      className={drum.picked ? "disabledClass" : ""}
      tabIndex="0"
    > 
      <div className='padbutton'>
        <div className='padName'>{prop.isChanging ? drum.key : drum.name}</div>
        <div className='padKey'>({prop.isChanging ? drum.type : drum.key})</div>
      </div>
    </button>
  ));

  return (
    <section id="display" className="
      drum-pad
      d-flex
      flex-column
      align-items-center
    ">
      <h2 className='text-center'>Drum Pad</h2>
      <div className="padTile">
        {renderDrumOad}
      </div>
    </section>
  );
}

export default DrumPad;
