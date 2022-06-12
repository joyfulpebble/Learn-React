import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";

function App() {
  const [posts, setPost] = useState([
    {id: 1, title: 'Заголовок 1.1', body: 'Daggers rise with courage!'},
    {id: 2, title: 'Заголовок 2.1', body: 'Daggers rise with courage!'},
    {id: 3, title: 'Заголовок 3.1', body: 'Daggers rise with courage!'}
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
