import { useSelector, useDispatch } from 'react-redux';
import { changeVal, changeAswer, addValue, reset } from '../statesRedux/answerSlice';

const ButtonCal = () => {
  const stateArr = useSelector((state) => state.buttonCal)
  const dispatch = useDispatch();

  const ChangeOnClick = (val) => {
    if (val === "=") {
      return () => dispatch(changeAswer());
    }
  
    if (val === "AC") {
      return () => dispatch(reset());
    }
  
    return () => {
      dispatch(changeVal(val));
      dispatch(addValue(val));
    };
  };
  
  const renderBtn = stateArr.map((state, index) => (
    <button 
      className={state.name} 
      key={index}
      onClick={() => ChangeOnClick(state.value)()} 
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