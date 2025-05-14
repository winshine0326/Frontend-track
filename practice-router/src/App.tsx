//App.tsx
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Router from './Router';
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";
import Detail from "./components/Detail.js";
import DetailTab from "./components/DetailTab.js";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/card" element={<Card />} />
        <Route
          path="/detail/:id"
          element={
            <DetailTab/>
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>

  );

}