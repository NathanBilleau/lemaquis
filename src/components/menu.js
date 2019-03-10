import React from "react"
import { Link } from "gatsby"

import "../styles/menu.scss"
import { MenuContext } from './context'


const Menu = () => (
    <MenuContext.Consumer>
        {({ active, toggleMenu }) => (
            <div className={active ? 'menu active' : 'menu'}>
            	<i className="fa fa-times close" onClick={toggleMenu}/>

            	<nav>
            		<Link to="/" activeClassName="active">
            			home
            		</Link>

            		<Link to="/blog" activeClassName="active">
            			blog
            		</Link>

            		<Link to="/evenements" activeClassName="active">
            			évenements
            		</Link>

            		<Link to="/artistes" activeClassName="active">
            			artistes
            		</Link>

            		<Link to="/contact" activeClassName="active">
            			contact
            		</Link>
            	</nav>

            </div>
        )}
    </MenuContext.Consumer>
)

export default Menu
