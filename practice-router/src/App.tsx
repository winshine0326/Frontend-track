//App.tsx
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";
import DetailTab from "./components/DetailTab.js";
import React, { useCallback, useState } from "react";
import Board from "./components/Board.js";

export let Context1 = React.createContext<{ theme: string; toggleTheme: () => void }>({
  theme: "light",
  toggleTheme: () => {}
}); //2-1. context생성

export default function App() {

  const [users, setUsers] = useState(["user1", "user2", "user3"]);

  //2-2.context값에 들어갈 변수 정의

  const [theme, setTheme] = useState("light"); //2-2

  const toggleTheme = useCallback(() => {//2-3. context값에 들어갈 함수 정의

    setTheme(theme === "light" ? "dark" : "light");

  }, [theme]);

    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cardList" element={<CardList />} />
          <Route path="/card" element={<Card />} />
          <Route path="/board" element={<Board />} />
          <Route

            path="/detail/:id"

            element={
              <Context1.Provider value={{ theme, toggleTheme }}>
                <DetailTab />
              </Context1.Provider>
            }

          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

    );

  }
