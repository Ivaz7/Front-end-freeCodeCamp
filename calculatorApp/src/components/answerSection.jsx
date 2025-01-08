import { useSelector } from 'react-redux';

const AnswerSection = () => {
  const { value, answer, equation } = useSelector((state) => state.answer)

  return (
    <section 
      className="
        answerContainer
        d-flex
        flex-column
        gap-2
        align-items-end
        pe-3
      "
    >
      <div>
        {equation.length === 0 ? answer : equation}
      </div>

      <div>
        {value}
      </div>
    </section>
  )
}

export default AnswerSection;