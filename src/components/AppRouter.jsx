import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";

const AppRouter = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route exact path='/posts' element={<Posts/>}/>
          <Route exact path='/posts/:id' element={<PostPage/>}/>
        </Routes>
      </div>
  );
};

export default AppRouter;