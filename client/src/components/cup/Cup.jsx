import "./cup.css";
import * as React from "react";
import Button from "@mui/material/Button";
import { TextField, Slider } from "@mui/material";

const Cup = () => {
  const maxLevel = 1000;
  const [level, setLevel] = React.useState(0);

  const handleLevelChange = (levelType) => {
    const water = document.querySelector(".water");

    switch (levelType) {
      case "first":
        water.className = "water";
        console.log("setting first");
        console.log(water.classList);
        water.classList.add("first");
        break;
      case "second":
        water.className = "water";
        console.log("setting second");

        console.log(water.classList);

        water.classList.add("second");
        break;
      case "third":
        water.className = "water";
        water.classList.add("third");
        break;
      case "fourth":
        water.className = "water";
        water.classList.add("fourth");
        break;
      case "fifth":
        water.className = "water";
        water.classList.add("fifth");
        break;
      case "sixth":
        water.className = "water";
        water.classList.add("sixth");
        break;
      case "seventh":
        water.className = "water";
        water.classList.add("seventh");
        break;
      case "eighth":
        water.className = "water";
        water.classList.add("eighth");
        break;
      case "ninth":
        water.className = "water";
        water.classList.add("ninth");
        break;
      case "tenth":
        water.className = "water";
        water.classList.add("tenth");
        break;
    }
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setLevel(e.target.value);
    let caffeine = e.target.value;
    switch (true) {
      case caffeine > 0 && caffeine < 100:
        console.log("first");
        handleLevelChange("first");
        break;
      case caffeine > 100 && caffeine < 200:
        console.log("second");

        handleLevelChange("second");
        break;
      case caffeine > 200 && caffeine < 300:
        handleLevelChange("third");
        break;
      case caffeine > 300 && caffeine < 400:
        handleLevelChange("fourth");
        break;
      case caffeine > 400 && caffeine < 500:
        handleLevelChange("fifth");
        break;
      case caffeine > 500 && caffeine < 600:
        handleLevelChange("sixth");
        break;
      case caffeine > 600 && caffeine < 700:
        handleLevelChange("seventh");
        break;
      case caffeine > 700 && caffeine < 800:
        handleLevelChange("eighth");
        break;
      case caffeine > 800 && caffeine < 900:
        handleLevelChange("ninth");
        break;
      case caffeine > 900 && caffeine < maxLevel:
        handleLevelChange("tenth");
        break;
    }
  };

  return (
    <>
      <div className="container">
        <div className="glass-ctr">
          <div className="caffeine-number">
            <h1>{level}</h1>
          </div>

          <div className="glass"></div>
          <div className="water-ctr">
            <div className="water"></div>
          </div>
        </div>
      </div>
      <TextField
        variant={"filled"}
        sx={{ color: "white" }}
        inputProps={{ inputMode: "numeric", pattern: "[0-9]" }}
        onChange={handleInput}
      />
      <Slider
        defaultValue={0}
        step={10}
        marks
        min={10}
        max={1000}
        onChange={handleInput}
      />
    </>
  );
};

export default Cup;
