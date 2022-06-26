import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from '../components/UI/loader/Loader';
import { PostInfo } from '../components/UI/post-info/PostInfo';

const PostPage = () => {
  const { id } = useParams();

  const [post, setPost] = useState({})
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(id);
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(id)
  }, [])

  console.log(post);

  return (
      <div>
        <h1>Пост: № {id}</h1>
        {
          isLoading
          ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}> <Loader/> </div>
          : <PostInfo Id={post.id} title={post.title} body={post.body}/>
        }
      </div>
  );
};

export default PostPage;