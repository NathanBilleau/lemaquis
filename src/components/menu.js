import React from "react"
import { Link } from "gatsby"

import "../styles/menu.scss"

const Menu = () => (
    <div className="menu active">
    	<i className="fa fa-times close"/>

    	<nav>
    		<Link to="/" className="active">
    			home
    		</Link>

    		<Link to="/blog">
    			blog
    		</Link>

    		<Link to="/evenements">
    			évenements
    		</Link>

    		<Link to="/artistes">
    			artistes
    		</Link>

    		<Link to="/contact">
    			contact
    		</Link>

    	</nav>
    </div>
)

export default Menu
