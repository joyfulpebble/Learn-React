import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import CustomButton from "./components/UI/buton/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  // const bodyInputRef = useRef()

  const [posts, setPost] = useState([
    {id: 1, title: 'Заголовок 1.1', body: 'Daggers rise with courage!'},
    {id: 2, title: 'Заголовок 2.1', body: 'Daggers rise with courage!'},
    {id: 3, title: 'Заголовок 3.1', body: 'Daggers rise with courage!'}
  ]);

  function addNewPost(e) {
    e.preventDefault()

  }

  return (
    <div className="App">
      <form>
        {/*Управляемый эелемент*/}
        <CustomInput
            value={title}
            onChange= {e => setTitle(e.target.value)}
            type="text"
            placeholder={'Название поста'}
        />
        <CustomInput
            value={body}
            onChange= {e => setBody(e.target.value)}
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
