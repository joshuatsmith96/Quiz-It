import Card from "react-bootstrap/Card";
import quizData from "../../quizData.json";
import { Link } from "react-router-dom";

interface Props {
  mode: String;
}

function Cards(props: Props) {
  let modeSelected = props.mode;

  let num = 0;
  const DisplayData = quizData.map((info) => {
    let storageIdentifier = "IS" + num;
    let score = localStorage.getItem(storageIdentifier)?.toString();
    num++;
    return (
      <Card key={info.id} className="Cards square border border-0" >
        <Card.Img variant="top" src={info.imgURL} style={{height:"200px"}}/>
        <Card.Body className="CardBody" style={{height:"300px"}}>
          <Card.Title className="CardTitle">{info.title}</Card.Title>
          <Card.Text style={{height:"80px"}}>{info.text}</Card.Text>
          <Card.Text>Most Recent Score: {score}</Card.Text>
          {/* onClick={() => {{quizQuestions = info.quizQuestions} console.log(quizQuestions)}} */}
          {/* <Link className="linkButton" to="/quiz" state={info}>Go To Quiz</Link> */}
          <Link
            className="linkButton"
            to="/quiz"
            state={{ Info: info, Mode: modeSelected }}
          >
            Go To Quiz
          </Link>
        </Card.Body>
      </Card>
    );
  });

  return <div className="CardContainer">{DisplayData}</div>;
}

export default Cards;
