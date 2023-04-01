import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainPage from "./components/home/MainPage.jsx";
import DailyAnalysis from "./components/dailyanalysis/DailyAnalysis.jsx";
import WeeklyAnalysis from "./components/weeklyanalysis/WeeklyAnalysis.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav.jsx";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [usersSelections, setUsersSelections] = useState([]);
  const [caffeine, setCaffeine] = useState(0);
  const [emoji, setEmoji] = useState("☕")
  const [emojiMeaning, setEmojiMeaning] = useState("Coffee!")
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    const caffeine = usersSelections.reduce((acc, curr) => {
      return acc + curr.caffeine;
    }, 0);
    setCaffeine(caffeine);
    localStorage.setItem("caffeine", JSON.stringify(caffeine));
    if (caffeine <= 200){
      setEmojiMeaning("You need more caffeine!")
      setEmoji("😴")
    } else if (caffeine <= 500 && caffeine > 200){
      setEmojiMeaning("You are doing great!")
      setEmoji("😖")
    } else if (caffeine <= 700 && caffeine > 500){
      setEmojiMeaning("You are around the recommended amount!")
      setEmoji("😁")
    } else if (caffeine <= 1000 && caffeine > 700){
      setEmojiMeaning("You are over the recommended amount!")
      setEmoji("😵")
    } else if(caffeine > 1000){
      setEmojiMeaning("TOO MUCH CAFFEINE!")
      setEmoji("☠️")
    }
  }, [usersSelections])

  useEffect(() => {
    const usersSelections = JSON.parse(localStorage.getItem("usersSelections"));
    if (usersSelections) {
      setUsersSelections(usersSelections);
    }
  }, []);

  const addProduct = (product) => {
    toast(`${product.drink} added to your daily selections!`, {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 2000
    });
    const copy = [...usersSelections];
    copy.push(product);
    setUsersSelections([...copy]);
    localStorage.setItem("usersSelections", JSON.stringify(copy));
    const weeklySelections = JSON.parse(
      localStorage.getItem("weeklySelections")
    );
    if (weeklySelections) {
      weeklySelections[days[new Date().getDay()]] = copy;
      localStorage.setItem(
        "weeklySelections",
        JSON.stringify(weeklySelections)
      );
    } else {
      const newWeeklySelections = {};
      newWeeklySelections[days[new Date().getDay()]] = copy;
      localStorage.setItem(
        "weeklySelections",
        JSON.stringify(newWeeklySelections)
      );
    }
    console.log("caffeine in app", caffeine);
  };

  const clearSelections = () => {
    setUsersSelections([]);
    localStorage.setItem("usersSelections", JSON.stringify([]));
    const weeklySelections = JSON.parse(
      localStorage.getItem("weeklySelections")
    );
    if (weeklySelections) {
      weeklySelections[days[new Date().getDay()]] = [];
      localStorage.setItem(
        "weeklySelections",
        JSON.stringify(weeklySelections)
      );
    }
  };

  const clearWeeklySelections = () => {
    localStorage.setItem("weeklySelections", JSON.stringify({}));
  };

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <ToastContainer progressClassName="toastProgress"bodyClassName="toastBody"/>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <MainPage
                usersSelections={usersSelections}
                clearSelections={clearSelections}
                addProduct={addProduct}
                caffeine={caffeine}
              />
            }
          />
          <Route
            exact
            path="/DailyAnalysis"
            element={
              <DailyAnalysis
                usersSelections={usersSelections}
                caffeine={caffeine}
                emoji={emoji}
                emojiMeaning={emojiMeaning}
              />
            }
          />
          <Route
            exact
            path="/WeeklyAnalysis"
            element={<WeeklyAnalysis usersSelections={usersSelections} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
