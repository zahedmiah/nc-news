import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles/:article_id" element={<Article/>} />
      </Routes>
    </div>
  );
}

export default App;
