import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Articles from "./components/Articles";
import Article from "./components/Article";
import ArticleComments from "./components/ArticleComments"; 

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles/>} />
        <Route path="/articles/:article_id" element={<Article/>} />
        <Route path="/articles/:article_id/comments" element={<ArticleComments/>} />
      </Routes>
    </div>
  );
}

export default App;
