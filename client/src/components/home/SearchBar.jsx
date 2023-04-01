import React, { useState, useRef, useEffect } from "react";
import "./SearchBar.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import CoffeeIcon from "@mui/icons-material/Coffee";
import BoltIcon from "@mui/icons-material/Bolt";
import MedicationIcon from "@mui/icons-material/Medication";
import SpaIcon from "@mui/icons-material/Spa";
import WaterIcon from "@mui/icons-material/Water";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";

function SearchBar({ placeholder, data, addProduct }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleFilter = (event) => {
    setIsOpen(true);
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.drink.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  const getPic = (type) => {
    if (type === "Coffee") {
      return <CoffeeIcon style={{ marginRight: "20px" }} />;
    } else if (type === "Energy Drinks") {
      return <BoltIcon style={{ marginRight: "20px" }} />;
    } else if (type === "Energy Shots") {
      return <MedicationIcon style={{ marginRight: "20px" }} />;
    } else if (type === "Soft Drinks") {
      return <BubbleChartIcon style={{ marginRight: "20px" }} />;
    } else if (type === "Tea") {
      return <SpaIcon style={{ marginRight: "20px" }} />;
    } else if (type === "Water") {
      return <WaterIcon style={{ marginRight: "20px" }} />;
    } else if (type === "PreWorkout") {
      return <FitnessCenterIcon style={{ marginRight: "20px" }} />;
    } else {
      return <MoreHorizIcon style={{ marginRight: "20px" }} />;
    }
  };

  const searchRef = useRef(null);

  useEffect(() => {
    function handler(event) {
      if (!searchRef.current?.contains(event.target)) {
        console.log("clicked outside of search bar");
        setIsOpen(false);
        clearInput();
      }
    }
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
  }, []);

  return (
    <div className="search">
      <div className="searchInputs" ref={searchRef}>
        <input
          id="inputElement"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div
                className="dropDown"
                key={key}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
                onClick={() => {
                  addProduct(value);
                  clearInput();
                }}
              >
                {getPic(value.type)}
                <p
                  style={{ marginLeft: "20px" }}
                  className="dataItem"
                  key={key}
                  onClick={() => console.log(value)}
                >
                  {value.drink}{" "}
                </p>
                <p style={{ marginLeft: "20px" }} className="dataItem">
                  {value.caffeine}mg
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
