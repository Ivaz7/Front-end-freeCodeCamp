import { useSelector, useDispatch } from 'react-redux';
import { fetchQuote } from '../statesRedux/fetchQuoteSlice';

const Main = () => {
  const { quote, author, loading, error } = useSelector((state) => state.quote);  
  const dispatch = useDispatch();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <main className="d-flex flex-column justify-content-center align-items-center text-center" id="quote-box">
        <div className="container-quote d-flex flex-column gap-2 bg-light rounded">
          <div>
            <h5 id="text">
              {quote || "No quote available yet."}
            </h5>

            <p className='text-end' id="author">
              - {author || "Unknown"}
            </p>
          </div>

          <div className="d-flex justify-content-between">
            <a
              className="align-self-center py-1 px-2 rounded"
              href="https://twitter.com/intent/tweet"
              target="_blank"
              rel="noopener noreferrer"
              id="tweet-quote"
            >
              <i className="text-light fa-brands fa-twitter"></i>
            </a>

            <button
              onClick={() => dispatch(fetchQuote())}
              className="py-1 px-2 border-0 rounded text-light"
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
