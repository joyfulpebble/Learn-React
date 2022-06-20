import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <div className="navbar">
        <Link className="navbar__item" to="/posts">Posts</Link>
        <Link className="navbar__item" to="/">Main</Link>
      </div>
  );
};

export default Navbar;