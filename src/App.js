import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import CustomButton from "./components/UI/buton/CustomButton";
import {usePost} from "./hooks/usePost";

function App() {
  const [title, setTitle]   = useState('');
  const [body, setBody]     = useState('');
  const [posts, setPosts]   = useState([
    {id: 1, title: 'Пример заголовка', body: 'Пример информации о посте'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal]   = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const searchedAndSortedPosts = usePost(posts, filter.sort, filter.query)

  return (
    <div className="App">
      <CustomButton style={{marginLeft: 240, marginTop: 10}} onClick={() => setModal(true)}>
        Создать пост
      </CustomButton>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </Modal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {
        searchedAndSortedPosts.length !== 0
        ?
          <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Список постов 1'}/>
        :
          <h1 style={{textAlign: 'center'}}>Упс! Постов нет :(</h1>
      }
    </div>
  );
}

export default App;
