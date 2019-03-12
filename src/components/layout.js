import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Menu from "./menu"
import "../styles/style.scss"

import { MenuContext } from './context'
 
class Layout extends React.Component {

  constructor (props) {
    super(props)
    
    this.state = {
      active: false,
      search: false,
      toggleMenu: this.toggleMenu
    }
  }

  toggleMenu = () => {
   this.setState({
    active: !this.state.active
   })
 }

 toggleSearch = () => {
   this.setState({
     search: !this.state.search
   })
 }


  render () {
    return (
      <MenuContext.Provider value={this.state}>
      <div>
          <Header />
          <Menu />

          <div>
            <aside>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/le_maquis_art/">
                instagram
              </a>
                  
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/lemaquislemans">
                twitter
              </a>
            </aside>
          <main>{this.props.children}</main>

          <footer>
            Le Maquis - Site réalisé par Nathan Billeau
          </footer>

          </div>
      </div> 
      </MenuContext.Provider>
    )
  }

}



Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
