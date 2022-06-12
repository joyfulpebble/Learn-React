import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
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
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {
        posts.length !== 0
        ?
          <PostList remove={removePost} posts={posts} title={'Список постов 1'}/>
        :
          <h1 style={{textAlign: 'center'}}>Упс! Постов нет :(</h1>
      }

    </div>
  );
}

export default App;
