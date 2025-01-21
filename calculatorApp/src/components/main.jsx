import AnswerSection from "./answerSection";
import ButtonCal from "./buttonCal";

const Main = () => {
  return (
    <main 
      className="
        d-flex
        flex-column
        align-items-end
        p-sm-2
        p-1
        gap-3
      "
    >
      <AnswerSection />
      <ButtonCal />
    </main>
  )
}

export default Main;