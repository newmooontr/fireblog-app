import React from 'react'
import { IconDiv, NavbarCon } from "../styled/NavbarStyled"




const Navbar = () => {
  return (
    <div>
       <NavbarCon>
            <img src="images/cw.jpeg" alt="" />
            <h1>{"<WeAreBored/> Blog"}</h1>
            <IconDiv/>
        </NavbarCon>
            
    </div>
  )
}

export default Navbar