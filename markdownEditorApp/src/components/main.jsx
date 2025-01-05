import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../statesRedux/inputSlice';

const Main = () => {
  const preview = useSelector((state) => state.input.preview);
  const rawInput = useSelector((state) => state.input.rawInput); 
  const dispatch = useDispatch();

  return (
    <main>
      <textarea
        value={rawInput}
        onChange={(e) => dispatch(changeInput(e.target.value))}
        name="input"
        id="editor"
      ></textarea>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: preview }}
      ></div>
    </main>
  );
};

export default Main;
