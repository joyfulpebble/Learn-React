import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";

const PostPage = () => {
  const params = useParams();
  console.log(params);

  const [post, setPost] = useState(null)
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
  })

  return (
      <div>
        <h1>Пост открыт {params.id}</h1>
        <div>
          {post.title}
        </div>
      </div>
  );
};

export default PostPage;