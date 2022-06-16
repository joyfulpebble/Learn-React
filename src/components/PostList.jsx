import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {
  return (
      <div>
        <h1 style={{textAlign: "center"}}>
          {title}
        </h1>
        <TransitionGroup>
          {posts.map( (elem, index) =>
              <CSSTransition
                  key={elem.id}
                  timeout={500}
                  classNames='post'
              >
                <Post remove={remove} index={index + 1} post={elem} />
              </CSSTransition>
          )}
        </TransitionGroup>
      </div>
  );
};

export default PostList;