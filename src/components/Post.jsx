import React from 'react';

const Post = (props) => {
  return (
      <div className="post">
        <div className="post__content">
          <strong>{props.post.id}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <button>Удалить</button>
      </div>
  );
};

export default Post;