import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  
  return (
    <div className="nav">
      <h1>ChitChat</h1>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      {isAuthenticated ? (
        <button className="btn logout-button">Logout</button>
      ) : (
        <>
          <button className="btn login-button">Login</button>
          <button className="btn signup-button">Sign Up</button>
        </>
      )}
    </div>
  )
}

export default Navbar
