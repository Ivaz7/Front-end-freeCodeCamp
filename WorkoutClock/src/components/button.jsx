const Button = () => {
  return (
    <section>
      <button id="time-left">
        <i className="fa-solid fa-play"></i>
      </button>

      <button id="start_stop">
        <i className="fa-solid fa-pause"></i>
      </button>

      <button>
        <i className="fa-solid fa-forward"></i>
      </button>

      <button id="reset">
        <i className="fa-solid fa-clock-rotate-left"></i>      
      </button>
    </section>
  )
}

export default Button;