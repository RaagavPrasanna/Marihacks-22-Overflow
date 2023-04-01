import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from "./components/nav/Nav.jsx";
import Analysis from "./components/analysis/Analysis.jsx"
import MainPage from "./components/home/MainPage.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <Routes>
//           <Route exact path="/" element={<MainPage/>} />
//           <Route exact path="/Analysis" element={<Analysis/>} />
//         </Routes>
//         <App />
//       </BrowserRouter>
//   </React.StrictMode>,
// )
