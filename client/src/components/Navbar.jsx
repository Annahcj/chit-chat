import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { isAuthenticated, logout, loginWithRedirect } = useAuth0();

  const handleLogout = () => {
    logout()
  }

  const handleLogin = () => {
    loginWithRedirect()
  }


  return (
    <div className="nav">
      <h1>ChitChat</h1>
      <Link to="/">
        <button className="btn">Home</button>
      </Link>
      {isAuthenticated ? (
        <button className="btn logout-button" onClick={handleLogout}>Logout</button>
      ) : (
        <>
          <button className="btn login-button" onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  )
}

export default Navbar
