import React from 'react';
import CustomButton from "./UI/buton/CustomButton";
import '../styles/App.css';
import { useNavigate } from "react-router-dom";

const Post = (props) => {
  let navigate = useNavigate();

  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <CustomButton onClick={ () => navigate(`/posts/${props.post.id}`)}>Открыть</CustomButton>
          <CustomButton onClick={ () => {props.remove(props.post)}}>Удалить</CustomButton>
        </div>
      </div>
  );
};

export default Post;