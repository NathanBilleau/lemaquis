import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ArtistComponent from '../components/artistComponent'

const ArtistsPage = ({data}) => {

  const { allMarkdownRemark } = data

  return (<Layout>
    <SEO title="Artistes" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
      <h1>Artistes</h1>
      <h2>{allMarkdownRemark.edges.length} {allMarkdownRemark.edges.length > 1 ? "artistes" : "artiste"}</h2>
      <div className="searchContainer">
        <input type="text" className="searchInput" placeholder="Chercher un artiste..." />
      </div>

      <div className="flexContainer">
        { 
          allMarkdownRemark.edges.map(artist =>  {
            if (artist.node.fileAbsolutePath.includes('/artistes/')) {
              return <ArtistComponent slug={artist.node.fields.slug} frontmatter={artist.node.frontmatter} key={artist.node.id} />
            }
          })
        }
      </div>

    </div>
    
  </Layout>)
}



export const query = graphql`
  {
  allMarkdownRemark {
    edges {
      node {
        id
        fileAbsolutePath
        fields {
          slug
        }
        frontmatter {
          name
          styles
          pic
        }
      }
    }
  }
}
`


export default ArtistsPage
