//App.tsx
import "./styles.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Router from './Router';
import Card from "./components/Card";
import NoPage from "./components/NoPage.jsx";
import CardList from "./CardList";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cardList" element={<CardList />} />
        <Route path="/card" element={<Card />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>

  );

}