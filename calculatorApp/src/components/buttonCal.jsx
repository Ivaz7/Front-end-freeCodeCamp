import { useSelector, useDispatch } from 'react-redux';
import { changeVal, changeAswer, addValue, reset } from '../statesRedux/answerSlice';

const ButtonCal = () => {
  const stateArr = useSelector((state) => state.buttonCal)
  const dispatch = useDispatch();

  const ChangeOnClick = (val, op) => {
    if (val === "=") {
      return () => dispatch(changeAswer());
    }
  
    if (val === "AC") {
      return () => dispatch(reset());
    }
  
    return () => {
      dispatch(addValue({ val }));
      dispatch(changeVal({ val, op }));
    };
  };
  
  const renderBtn = stateArr.map((state, index) => (
    <button 
      key={index}
      className={state.name} 
      id={state.name}
      onClick={() => ChangeOnClick(state.value, state.operator)()} 
    >
      {state.value === "*" ? state.name : state.value}
    </button>
  ));
  

  return (
    <section className="buttonCal">
      <div className="grid-tile">
        {renderBtn}
      </div>
    </section>
  )
}

export default ButtonCal;