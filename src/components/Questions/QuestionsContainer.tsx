//PARENT COMPONENT

import Questions from "./Questions";
import { Link } from "react-router-dom";

interface Props {
  quizID: string;
  quizMode: string;
}

let buttonText = "";
let linkLocation = "";

function QuestionsContainer(props: Props) {

  window.scrollTo(0, 0);
  let modeSelected = props.quizMode;

  if(modeSelected === "1"){
    buttonText = "Submit Quiz"
    linkLocation = "/results"
  } else {
    buttonText = "Back To Categories"
    linkLocation = "/"
  }

  let quizID = props.quizID;

  return (
    <div className="QuestionsContainer">
      <Questions quizID={quizID} modeSelected={modeSelected}/>
      <div className="center">
        <Link className="linkButton blue" to={linkLocation} state={{id: quizID}}>
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default QuestionsContainer;
