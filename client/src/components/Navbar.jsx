import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="nav">
      <h1>ChitChat</h1>
      <Link to="/"><button className="btn">Home</button></Link>
    </div>
  )
}

export default Navbar;