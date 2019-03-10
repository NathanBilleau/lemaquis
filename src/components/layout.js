/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "../styles/style.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />

        <div>
        <aside>
              <a target="_blank" href="https://www.instagram.com/le_maquis_art/">
                instagram
              </a>
              
              <a target="_blank" href="https://twitter.com/lemaquislemans">
                twitter
              </a>
        </aside>
        <main>{children}</main>
        <footer>
           © {new Date().getFullYear()}, Built with
           {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
