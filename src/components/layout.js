import React from "react"
import { graphql, StaticQuery } from "gatsby"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Header from "./header"
import Menu from "./menu"

import { MenuContext } from './context'


class Layout extends React.Component { 
   constructor( props, {data}) {
    super (props)
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

     return null
   }

   toggleSearch = () => {
     this.setState({
       search: !this.state.search
     })

     return null
   }


    render() {


    return (
      <MenuContext.Provider value={this.state}>
        <div>
            <Header />
            <Menu />

            <div>

            <StaticQuery
              query={graphql`
                {
                  markdownRemark (frontmatter: {title: {eq: "Le Maquis"}}){
                    id
                    frontmatter {
                      title
                      twitter
                      instagram
                    }
                  }
                }
              `}
              render={data => (
                  <aside>
                    <a target="_blank" rel="noopener noreferrer" href={data.markdownRemark.frontmatter.instagram}>
                      instagram
                    </a>
                        
                    <a target="_blank" rel="noopener noreferrer" href={data.markdownRemark.frontmatter.twitter}>
                      twitter
                    </a>
                  </aside>
                  )}

               />
              
            <main>{this.props.children}</main>

            <footer>
              <Link to="/">Le Maquis</Link> - <Link to="/politique-de-confidentialite">Politique de confidentialité</Link> - Site réalisé par Nathan Billeau
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


export const query = graphql`
{
  allMarkdownRemark (filter: {frontmatter: {title: {eq: "Le Maquis"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          twitter
          instagram
        }
      }
    }
  }
}
`

export default Layout


