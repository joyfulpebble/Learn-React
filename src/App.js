import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import CustomInput from "./components/UI/input/CustomInput";

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([
    {id: 1, title: 'Пример заголовка', body: 'Пример информации о посте'},
  ]);
  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };
  const sortPosts  = (sort) => {
    setSelectedSort(sort);
  };

  const sortedPosts = useMemo(() => {
    console.log('ok')
    if (selectedSort){
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts;
  }, [selectedSort, posts]);
  const searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <CustomInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Поиск...'
        />
        <Select
            value={selectedSort}
            onChange={sortPosts}
            defaultValue={'Сортировка'}
            options={[
              {value: 'title', name: 'По названию'},
              {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
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
