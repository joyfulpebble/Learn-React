import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import CustomButton from "./components/UI/buton/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const bodyInputRef = useRef()

  const [posts, setPosts] = useState([
    {id: 1, title: 'Пример заголовка', body: 'Пример информации о посте'},
  ]);
  const [post, setPost] = useState({title: '', body: ''});

  function addNewPost(e) {
    e.preventDefault()
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <form>
        {/*Управляемый эелемент*/}
        <CustomInput
            value={post.title}
            onChange= {e => setPost({...post, title: e.target.value})}
            type="text"
            placeholder={'Название поста'}
        />
        <CustomInput
            value={post.body}
            onChange= {e => setPost({...post, body: e.target.value})}
            type="text"
            placeholder={'Описание поста'}
        />
        {/*Неуправляемый эелемент*/}
        {/*<CustomInput
            ref={bodyInputRef}
            type="text"
            placeholder={'Описание поста'}
        />*/}
        <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
      </form>
      
      <PostList posts={posts} title={'Список постов 1'}/>
    </div>
  );
}

export default App;
