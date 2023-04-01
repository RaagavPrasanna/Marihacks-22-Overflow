import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./components/home/MainPage.jsx"
import Analysis from "./components/analysis/Analysis.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav.jsx";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
    </div>
  )
}

export default App
