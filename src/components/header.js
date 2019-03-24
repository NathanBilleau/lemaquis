import { Link } from "gatsby"
import React from "react"

import "../styles/header.scss"
import Logo from "../images/logo.svg"

import { MenuContext } from './context'

const Header = () => (
	<MenuContext.Consumer>
        {({ active, toggleMenu }) => (
		  <header>
		  	<Link to="/">
		    	<img className="logo" src={Logo} alt="logo" />
		  	</Link>
		    <div className="icons">
		      {/*<i className="fa fa-search"></i>*/}
		      <i className="fa fa-bars" onClick={toggleMenu}></i>
		    </div>
		  </header>
    	)}
    </MenuContext.Consumer>
)


export default Header
