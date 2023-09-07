import React from 'react'
import space from "../../src/space.png"
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
     <nav class="navbar navbar-expand-lg navbar" style={{backgroundColor:"#000000"}}>
  <a class="navbar-brand" href="#"><img src={space}/></a>  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item ">
        <NavLink className="nav-link" to={"/"}>Home <span class="sr-only">(current)</span></NavLink>
      </li>
      <li class="nav-item">
      <NavLink className="nav-link" to={"/rocket"}>Rocket</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link" to={"/capsules"}>Capsules</NavLink>
      </li>
      <li class="nav-item">
        <NavLink className="nav-link " to={"/launches"}>Launches</NavLink>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Header