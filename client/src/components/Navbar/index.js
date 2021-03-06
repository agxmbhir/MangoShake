import React from "react"

// Logo 
import Logo from '../../images/mango.png'
// styles
import {Wrapper , Button , Buttons , MangoLogo , User} from './navbar.styles'

const Nav = (props) => (
      <Wrapper>
         <MangoLogo src={Logo}/>
         <Buttons>
             <Button><span>Home</span></Button> 
             <Button><span>Create a fundraiser</span></Button>
             <Button><span>Documentation</span></Button>
        </Buttons>
        <User>{props.UserAddress}</User>
     </Wrapper>
)

export default Nav;