import quizData from '../../quizData.json';
import { useLocation, Link } from "react-router-dom";

function ResultsPage(){
    //Add logic that will compare the stored answers to the actual answers
    const location = useLocation();
    const id = parseInt(location.state.id) - 1;
    let storedAnswers = JSON.parse(localStorage.getItem("answers")!)
    let actualAnswers = quizData[id].Answers[0]


    let correctAnswers = 0;
    let rawPercentage;
    let percentage = "";
    for(let i = 0; i<storedAnswers.length; i++){
        if(storedAnswers[i] === actualAnswers[i]){
            correctAnswers++;
        }
        rawPercentage = correctAnswers / storedAnswers.length
        percentage = (rawPercentage * 100).toString() + "%"
        let storageIdentifier = "IS" + id;
        localStorage.setItem(storageIdentifier, percentage)
    }




    return(
        <div className="ResultsPage">
            <h1>Results</h1>
            <p>You got {correctAnswers} out of {storedAnswers.length} questions correct</p>
            <p>Final Score: {percentage}</p>
            <Link className="linkButton" to="/Quiz-It">Back To Categories</Link>
        </div>
    )
}

export default ResultsPage;