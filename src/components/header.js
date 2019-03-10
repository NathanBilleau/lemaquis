import { Link } from "gatsby"
import React from "react"

import "../styles/header.scss"
import Logo from "../images/logo.png"

const Header = () => (
  <header>
  	<Link to="/">
    	<img className="logo" src={Logo} alt="logo" />
  	</Link>
    <div className="icons">
      <i className="fa fa-search"></i>
      <i className="fa fa-bars"></i>
    </div>
  </header>
)


export default Header
