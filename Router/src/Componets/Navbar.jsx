import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate =  useNavigate();
  function handleroute(){
     //api calll
     navigate("/users")

  }
  return (
    <div>
        <Link to="/">Home</Link>
        {/* <Link to="/users">Users</Link> */}
        <li onClick={handleroute}>Users</li>
    </div>
  )
}

export default Navbar