import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/home/MainPage.jsx"
import DailyAnalysis from "./components/dailyanalysis/DailyAnalysis.jsx"
import WeeklyAnalysis from "./components/weeklyanalysis/WeeklyAnalysis.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav.jsx";

function App() {

  const [usersSelections, setUsersSelections] = useState([]);
  const [caffeine, setCaffeine] = useState(0);

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
  }, []);

  const addProduct = (product) => {
    const copy = [...usersSelections];
    copy.push(product);
    setUsersSelections([...copy]);
    localStorage.setItem("usersSelections", JSON.stringify(copy));
  } 

  const clearSelections = () => {
    setUsersSelections([]);
    localStorage.setItem("usersSelections", JSON.stringify([]));
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<MainPage usersSelections={usersSelections} clearSelections={clearSelections} addProduct={addProduct}/>} />
          <Route exact path="/DailyAnalysis" element={<DailyAnalysis usersSelections={usersSelections} caffeine={caffeine}/>} />
          <Route exact path="/WeeklyAnalysis" element={<WeeklyAnalysis usersSelections={usersSelections}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
