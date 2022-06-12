import React from "react";
import './styles/App.css'
import Post from "./components/Post";

function App() {


  return (
  <div className="App">
    <Post post={{id: 1, title: 'Заголовок', body: 'Daggers rise with courage!'}}/>
  </div>
  );
}

export default App;
