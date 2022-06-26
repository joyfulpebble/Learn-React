import React, {useEffect, useState} from "react";
import '../styles/App.css'
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import Modal from "../components/UI/modal/Modal";
import CustomButton from "../components/UI/buton/CustomButton";
import {usePost, useSortedPosts} from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {usePagination} from "../hooks/usePagination";
import Pagination from "../components/Pagination.jsx"
import { useRef } from "react";

function Posts() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef(null);
  let observer = useRef();
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit))
  });

  const pagesArray = usePagination(totalPages);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const searchedAndSortedPosts = usePost(posts, filter.sort, filter.query);

  useEffect(() => {   
    if( isPostsLoading ) return;
    const last = lastElement.current;
    
    let callback = function(entries, observer) {
      if(entries[0].isIntersecting && page < totalPages){
        setPage(page + 1);
      }
    }
    
    observer = new IntersectionObserver(callback);
    if( last ) observer.observe(last);
    return () => {
      if( last ) observer.unobserve(last);
    }
  }, [isPostsLoading])

  useEffect(() => {
    fetchPosts();
  }, [page]);

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

        <PostList remove={removePost} posts={searchedAndSortedPosts} title={'Список постов'}/>
        <div ref={lastElement}/>
        {
          isPostsLoading  &&
             <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
        }

        {
            postError
            && <h1>Ошибка: ${postError}</h1>
        }
        
        <Pagination pages={pagesArray} page={page} setPage={setPage}/>

      </div>
  );
}

export default Posts;
