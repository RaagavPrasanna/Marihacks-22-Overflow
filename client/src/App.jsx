import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/home/MainPage.jsx"
import Analysis from "./components/analysis/Analysis.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav.jsx";

function App() {

  const [usersSelections, setUsersSelections] = useState([]);

  const addProduct = (product) => {
    const copy = [...usersSelections];
    copy.push(product);
    setUsersSelections([...copy]);
  } 

  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route exact path="/" element={<MainPage usersSelections={usersSelections} addProduct={addProduct}/>} />
          <Route exact path="/Analysis" element={<Analysis/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
