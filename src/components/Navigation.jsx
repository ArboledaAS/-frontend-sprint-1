import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const Navigation = () => {
    const navigate = useNavigate()
  return (
    <div>
        {/* <button onClick={()=>{navigate("/logo")}}></button> */}
        <ul>
            
            <li><Link to="/welcome">Welcome</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="login">Login</Link></li>
            <li><Link to="maindisplay">maindisplay</Link></li>
        </ul>
    </div>
  )
}

export default Navigation