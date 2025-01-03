import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../statesRedux/fetchQuoteSlice';
import { ColorRing } from 'react-loader-spinner';
import { changeColor } from '../statesRedux/bgTextSlice';

const Main = () => {
  const { quote, author, loading, error } = useSelector((state) => state.quote);  
  const { bgColor, color } = useSelector((state) => state.bgText)
  const dispatch = useDispatch();

  console.log(bgColor)

  const bgColorIndeex = ['redBg', 'blueBg', 'orangeBg', 'yellowBg', 'greenBg', 'indigoBg', 'violetBg'];
  const colorTxtIndex = ['redText', 'blueText', 'orangeText', 'yellowText', 'greenText', 'indigoText', 'violetText'];

  return (
    <>
      <main className={`${bgColorIndeex[bgColor]} d-flex flex-column justify-content-center align-items-center text-center`} id="quote-box">
        <div className="container-quote d-flex flex-column gap-2 bg-light rounded">
          <div>
            <h5 className={`${colorTxtIndex[color]}`} id="text">
              {error ? error : (loading ? <ColorRing /> : quote || "No quote available yet.")}
            </h5>

            <p className={`${colorTxtIndex[color]} text-end`} id="author">
              {loading ? null : ("- " + author || "Unknown")}
            </p>
          </div>

          <div className="d-flex justify-content-between">
            <a
              className={`${bgColorIndeex[bgColor]} align-self-center py-1 px-2 rounded`}
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              <i className="text-light fa-brands fa-twitter"></i>
            </a>

            <button
              onClick={() => {dispatch(fetchQuote()); dispatch(changeColor())}}
              className={`${bgColorIndeex[bgColor]} py-1 px-2 border-0 rounded text-light`}
              id="new-quote"
            >
              New Quote
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
