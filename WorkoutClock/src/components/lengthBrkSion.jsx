const LengthBreakSession = () => {
  return (
    <section 
      className="
        lengthBrkSion
        d-flex
        flex-row
        gap-5
        text-center
      "
    >
      <div 
        className="
          break
          d-flex
          flex-column
          gap-2
        "
      >
        <h4>Break Length</h4>

        <div
          className="
            breakBtn
            d-flex
            flex-row
            gap-2
            align-items-center
            justify-content-center
          "
        >
          <i className="fa-solid fa-arrow-up"></i>
          <h5>5 min</h5>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>

      <div 
        className="
          session
          d-flex
          flex-column
          gap-2
        "
      >
        <h4>Session Length</h4>

        <div
          className="
            sessionBtn
            d-flex
            flex-row
            gap-2
            align-items-center
            justify-content-center
          "
        >
          <i className="fa-solid fa-arrow-up"></i>
          <h5>25 min</h5>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
    </section>
  )
}

export default LengthBreakSession;