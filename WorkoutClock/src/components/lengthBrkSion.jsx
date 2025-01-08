const LengthBreakSession = () => {
  return (
    <section 
      className="
        lengthBrkSion
        d-flex
        flex-row
        gap-5
        text-center
        p-2
      "
    >
      <div 
        className="
          lengthDiv
          d-flex
          flex-column
          gap-2
        "
      >
        <h4 id="break-label">Break Length</h4>

        <div
          className="
            lengthBtn
            d-flex
            flex-row
            gap-2
            align-items-center
            justify-content-center
          "
        >
          <button id="break-increment">
           <i className="fa-solid fa-arrow-up"></i>
          </button>

          <h5 id="break-length">5 min</h5>

          <button id="break-decrement">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>

      <div 
        className="
          lengthDiv
          d-flex
          flex-column
          gap-2
        "
      >
        <h4 id="session-label">Session Length</h4>

        <div
          className="
            lengthBtn
            d-flex
            flex-row
            gap-2
            align-items-center
            justify-content-center
          "
        >
          <button id="session-increment">
           <i className="fa-solid fa-arrow-up"></i>
          </button>

          <h5 id="session-length">25 min</h5>

          <button id="session-decrement">
            <i className="fa-solid fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </section>
  )
}

export default LengthBreakSession;