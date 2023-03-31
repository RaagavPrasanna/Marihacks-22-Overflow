import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from "./MainPage.jsx"
import Analysis from "./Analysis.jsx"
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<MainPage/>} />
          <Route exact path="/Analysis" element={<Analysis/>} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App
