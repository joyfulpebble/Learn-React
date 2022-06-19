import React from 'react';
import CustomButton from "./UI/buton/CustomButton";

const Post = (props) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id} {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <CustomButton onClick={ () => {props.remove(props.post)}}>Удалить</CustomButton>
      </div>
  );
};

export default Post;