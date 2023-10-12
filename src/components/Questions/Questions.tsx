//CHILD COMPONENT

import quizData from "../../../quizData.json";

interface Props {
  quizID: string;
  modeSelected: string;
}

function Questions(props: Props) {
  //Function that will get and submit answers
  let modeSelected = props.modeSelected;

  //Getting Specific Quiz
  let index = parseInt(props.quizID) - 1;
  let quizQuestions = quizData[index].quizQuestions;

  let questionNumber = 0;

  // Setting up new object that will store answers
  let Answers: string[] = [];

  //Getting Questions
  const questions = quizQuestions.map((question) => {
    let choice = quizData[index].Choices[questionNumber];

    //Getting Choices
    let identifier = 0;
    const Choices = choice.map((C) => {
      identifier++;
      return (
        <div className="choicesDisplay">
          <input
            type="radio"
            value={C} //Gets the name of the answer so we can check with the answer key
            name={questionNumber.toString()} //Gets the question number being clicked on
            //Gets the clicked value and stores it for review later
            onClick={(e) => {
              let questionNumber = Number((e.target as HTMLInputElement).name);
              let answerKey = quizData[index].Answers[0][questionNumber];
              let element = document.getElementById(C);

              if (modeSelected === "1") {
                //Store selection in array at index of question
                Answers[questionNumber] = C;
                localStorage.setItem("answers", JSON.stringify(Answers))
              } else {
                //PRACTICE MODE
                if ((e.target as HTMLInputElement).value === answerKey) {
                  element!.setAttribute("style", "color:green;");
                } else {
                  element!.setAttribute("style", "color:red;");
                }
              }
            }}
          />
          <label className="bold" id={C}>{C}</label>
        </div>
      );
    });

    questionNumber++;
    return (
      <div className="Questions">
        <h4 className="text-gray">
          {questionNumber}: {question}
        </h4>
        {Choices}
      </div>
    );
  });

  return <div className="QuestionsContainer">{questions}</div>;
}

export default Questions;
