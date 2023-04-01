import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/home/MainPage.jsx"
import Analysis from "./components/analysis/Analysis.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav.jsx";

function App() {

  const [usersSelections, setUsersSelections] = useState([]);
  const [caffeine, setCaffeine] = useState(0);
  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  useEffect(() => {
    const caffeine = usersSelections.reduce((acc, curr) => {
      return acc + curr.caffeine;
    }, 0);
    setCaffeine(caffeine);
  }, [usersSelections])

  useEffect(() => {
    const usersSelections = JSON.parse(localStorage.getItem("usersSelections"));
    if (usersSelections) {
      setUsersSelections(usersSelections);
    }

    // const storeDay = localStorage.getItem("day");
    // if(storeDay === null) {
    //   localStorage.setItem("day", days[new Date().getDay()]);
    // } else if (storeDay !== days[new Date().getDay()]) {
    //   localStorage.setItem("day", days[new Date().getDay()]);
    // }
  }, []);

  const addProduct = (product) => {
    const copy = [...usersSelections];
    copy.push(product);
    setUsersSelections([...copy]);
    localStorage.setItem("usersSelections", JSON.stringify(copy));
    const weeklySelections = JSON.parse(localStorage.getItem("weeklySelections"));
    if(weeklySelections) {
      weeklySelections[days[new Date().getDay()]] = copy;
      localStorage.setItem("weeklySelections", JSON.stringify(weeklySelections));
    } else {
      const newWeeklySelections = {};
      newWeeklySelections[days[new Date().getDay()]] = copy;
      localStorage.setItem("weeklySelections", JSON.stringify(newWeeklySelections));
    }
  } 

  const clearSelections = () => {
    setUsersSelections([]);
    localStorage.setItem("usersSelections", JSON.stringify([]));
    const weeklySelections = JSON.parse(localStorage.getItem("weeklySelections"));
    if(weeklySelections) {
      weeklySelections[days[new Date().getDay()]] = [];
      localStorage.setItem("weeklySelections", JSON.stringify(weeklySelections));
    }
  }

  const clearWeeklySelections = () => {
    localStorage.setItem("weeklySelections", JSON.stringify({}));
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<MainPage usersSelections={usersSelections} clearSelections={clearSelections} addProduct={addProduct} />} />
          <Route exact path="/Analysis" element={<Analysis/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
