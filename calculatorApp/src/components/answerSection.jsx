import { useSelector } from 'react-redux';

const AnswerSection = () => {
  const { value, answer, equation } = useSelector((state) => state.answer)

  return (
    <section 
      className="
        answerContainer
        d-flex
        flex-column
        gap-sm-2
        align-items-end
        pe-sm-3
        gap-1
        pe-1
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