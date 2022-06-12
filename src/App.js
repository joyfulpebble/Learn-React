import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import CustomButton from "./components/UI/buton/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const bodyInputRef = useRef()

  const [posts, setPosts] = useState([
    {id: 1, title: 'Пример заголовка', body: 'Пример информации о посте'},
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
