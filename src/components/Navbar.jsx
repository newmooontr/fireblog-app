import React from 'react'
import { IconDiv, IconList, NavbarCon } from "../styled/NavbarStyled"




const Navbar = () => {
  return (
    <div>
       <NavbarCon>
            <img src="images/cw.jpeg" alt="" />
            <h1>{"<WeAreBored/> Blog"}</h1>

            <IconList>
            <IconDiv/>
            <ul>
              <li>New Blog</li>
              <li>About</li>
              <li>Profile</li>
              <li>Logout</li>
            </ul>
            </IconList>
        </NavbarCon>
            
    </div>
  )
}

export default Navbar