const Main = () => {
  return (
    <main 
      className="
        d-flex
        flex-column
        align-items-end
        p-2
        gap-3
      "
    >
      <section 
        className="
          answerContainer
          d-flex
          flex-column
          gap-1
          align-items-end
          pe-3
        "
      >
        <div>
          answer
        </div>

        <div>
          0
        </div>
      </section>

      <section className="buttonCal">
        <div className="grid-tile">
          <button className="AC">AC</button>
          <button className="/">/</button>
          <button className="X">X</button>
          <button className="7">7</button>
          <button className="8">8</button>
          <button className="9">9</button>
          <button className="-">-</button>
          <button className="4">4</button>
          <button className="5">5</button>
          <button className="6">6</button>
          <button className="+">+</button>
          <button className="1">1</button>
          <button className="2">2</button>
          <button className="3">3</button>
          <button className="zero">0</button>
          <button className="poin">.</button>
          <button className="equal">=</button>
        </div>
      </section>

    </main>
  )
}

export default Main;