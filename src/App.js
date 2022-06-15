import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import CustomInput from "./components/UI/input/CustomInput";
import PostFilter from "./components/PostFilter";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([
    {id: 1, title: 'Пример заголовка', body: 'Пример информации о посте'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortedPosts = useMemo(() => {
    console.log('ok')
    if (filter.sort){
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);
  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  return (
    <div className="App">
      <PostForm create={createPost}/>
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
