import './styles/App.css'
import * as React from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Posts from "./pages/Posts.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <Link className="navbar__item" to="/posts">Posts</Link>
        <Link className="navbar__item" to="/">Main</Link>
      </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/posts' element={<Posts/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
