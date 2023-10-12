import { useLocation } from "react-router-dom";
import QuestionsContainer from '../components/Questions/QuestionsContainer'

function QuizPage() {
  window.scrollTo(0, 0)
  //Getting info from selected card
  const location = useLocation();
  const data = location.state.Info;
  let quizTitle = data.title;
  let quizDescription = data.text;
  let quizID = data.id;

  let modeSelected = location.state.Mode;
  

  //Returning Base Quiz Page that includes "Header" and "Text"
  return (
    <div className="QuizPage">
      <div
        className="quizPageHeader"
        style={{ textAlign: "center", color: "white" }}
      >
        <h1>{quizTitle}</h1>
        <h3 style={{ fontSize: "18px" }}>{quizDescription}</h3>
      </div>
      <QuestionsContainer quizID={quizID} quizMode={modeSelected}/>
    </div>
  );
}

export default QuizPage;
