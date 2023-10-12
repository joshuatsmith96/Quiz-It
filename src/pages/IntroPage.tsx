import Cards from "../components/Cards";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function IntroPage() {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Quiz Mode", value: "1" },
    { name: "Practice Mode", value: "2" },
  ];

  window.scrollTo(0, 0);

  return (
    <>
      <div className="Intro">
        <h1>Quiz-It!</h1>
        <p>
          Welcome to Quiz-It! Select from a list of topics to quiz your
          knowledge!
        </p>
        <h5 className="text-white">Select a Mode:</h5>
        <ButtonGroup className="ModeToggle">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={idx % 2 ? "outline-warning" : "outline-success"}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => {
                setRadioValue(e.currentTarget.value);
              }}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Cards mode={radioValue} />
      </div>
    </>
  );
}

export default IntroPage;
