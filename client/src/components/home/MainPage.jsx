import { useState } from "react";
import SearchBar from "./SearchBar.jsx";
import data from "../../../../server/data/data.js";
import Selections from "./Selections.jsx";
import Cup from "../cup/cup.jsx";
import "./mainPage.css";

function MainPage({ usersSelections, clearSelections, addProduct }) {
  return (
    <div className="main">
      <div className="left">
        <SearchBar
          addProduct={addProduct}
          placeholder="Enter product name"
          data={data}
        />
        <Selections usersSelections={usersSelections} />
      </div>
      <button
        onClick={() => {
          clearSelections();
        }}
      >
        CLEAR
      </button>
      <Cup />
    </div>
  );
}

export default MainPage;
