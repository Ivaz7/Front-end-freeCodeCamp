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
        gap-sm-3
        p-1
        gap-1
      "
    >
      <AnswerSection />
      <ButtonCal />
    </main>
  )
}

export default Main;