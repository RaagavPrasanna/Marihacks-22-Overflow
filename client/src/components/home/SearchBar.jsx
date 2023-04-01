import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import CoffeeIcon from '@mui/icons-material/Coffee';
import BoltIcon from '@mui/icons-material/Bolt';
import MedicationIcon from '@mui/icons-material/Medication';
import SpaIcon from '@mui/icons-material/Spa';
import WaterIcon from '@mui/icons-material/Water';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function SearchBar({ placeholder, data , addProduct}) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
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
    if(type === "Coffee") {
      return (
        <CoffeeIcon style={{marginRight: "20px"}}/>
      )
    } else if(type === "Energy Drinks") {
      return (
        <BoltIcon style={{marginRight: "20px"}}/>
      )
    } else if(type === "Energy Shots") {
      return (
        <MedicationIcon style={{marginRight: "20px"}}/>
      )
    } else if(type === "Tea") {
      return (
        <SpaIcon style={{marginRight: "20px"}}/>
      )
    } else if(type === "Water") {
      return (
        <WaterIcon style={{marginRight: "20px"}}/>
      )
    } else if(type === "PreWorkout") {
      return (
        <FitnessCenterIcon style={{marginRight: "20px"}}/>
      )
    } else {
      return (
        <MoreHorizIcon style={{marginRight: "20px"}}/>
      )
    }
  }

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput}/>
          )}
        </div>
      </div>
      {filteredData.length != 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <div key={key} style={{display: "flex", alignItems: "center"}} onClick={() => addProduct(value)}>
                {getPic(value.type)}
                <p style={{marginLeft: "20px"}}className="dataItem" key={key} onClick={() => console.log(value)}>{value.drink} </p>
                <p style={{marginLeft: "20px"}} className="dataItem">{value.caffeine}mg</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;