import { useSelector, useDispatch } from 'react-redux';
import { changeInput } from '../statesRedux/inputSlice';

const Main = () => {
  const preview = useSelector((state) => state.input.preview);
  const rawInput = useSelector((state) => state.input.rawInput); 
  const dispatch = useDispatch();

  return (
    <main className='
      d-flex
      flex-column
      justify-content-start
      align-items-center
      pt-2
      gap-1
      pt-sm-4
      gap-sm-3
    '>
      <section className='editor'>
        <div className='
          sectionHead
          d-flex
          flex-row
          gap-1
          p-1
          p-sm-2
          align-items-center
        '>
          <i className="fa-solid fa-keyboard"></i>
          <h3>Editor</h3>        
        </div>
        <textarea
          className='sectionBody p-2'
          value={rawInput}
          onChange={(e) => dispatch(changeInput(e.target.value))}
          name="input"
          id="editor"
        ></textarea>
      </section>
      
      <section className='previewer'>
        <div className='
          sectionHead
          d-flex
          flex-row
          gap-1
          p-1
          p-sm-2
          align-items-center
        '>
          <i className="fa-solid fa-eye"></i>
          <h3>Previewer</h3>
        </div>
        <div
          className='sectionBody p-2'
          id="preview"
          dangerouslySetInnerHTML={{ __html: preview }}
        ></div>
      </section>
    </main>
  );
};

export default Main;
