import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Modal from "./components/UI/modal/Modal";
import CustomButton from "./components/UI/buton/CustomButton";
import {usePost} from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import {useFetching} from "./hooks/useFetching";

function App() {
  const [title, setTitle]   = useState('');
  const [body, setBody]     = useState('');
  const [posts, setPosts]   = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal]   = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const loadPosts  = () => {
    const load = isPostsLoading
      ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
      : <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Список постов 1'}/>;

    return load;
  };
  const errorPosts = () => {
    return postError && <h1>Ошибка: ${postError}</h1>
  };

  const searchedAndSortedPosts = usePost(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

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
      {loadPosts()}
      {errorPosts()}
    </div>
  );
}

export default App;
