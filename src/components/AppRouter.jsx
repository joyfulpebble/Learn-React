import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/posts' element={<Posts/>}/>
        </Routes>
      </div>
  );
};

export default AppRouter;