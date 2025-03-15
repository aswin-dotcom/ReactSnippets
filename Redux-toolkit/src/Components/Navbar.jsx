import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <Link to="/">Home</Link>
         <Link to="/user">User</Link>
         <Link to="/users">Users</Link>
    </>

  )
}

export default Navbar