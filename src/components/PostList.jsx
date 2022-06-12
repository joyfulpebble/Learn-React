import React from 'react';
import Post from "./Post";

const PostList = ({posts, title}) => {
  return (
      <div>
        <h1 style={{textAlign: "center"}}>
          {title}
        </h1>
        {posts.map( (elem) =>
            <Post post={elem} key={elem.id}/>
        )}
      </div>
  );
};

export default PostList;