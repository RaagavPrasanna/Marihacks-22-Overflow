import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import data from "../../../../server/data/data.js";
import Selections from "./Selections.jsx";
import Cup from "../cup/cup.jsx";
import "./mainPage.css";
import { Button } from "@mui/material";

function MainPage({ usersSelections, clearSelections, addProduct, caffeine }) {
  return (
    <div className="main">
      <div className="left">
        <SearchBar
          addProduct={addProduct}
          placeholder="Enter product name"
          data={data}
        />
        {/* <Selections usersSelections={usersSelections} /> */}
      </div>
      <Button className="clearButton"
        onClick={() => {
          clearSelections();
        }}
        variant="contained"
      >
        CLEAR
      </Button>

      <Cup className="Cup" caffeine={caffeine} />
    </div>
  );
}

export default MainPage;
