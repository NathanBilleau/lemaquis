import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import ArtistComponent from '../components/artistComponent'

class ArtistsPage extends React.Component { 
   constructor( props, {data}) {
    super (props)
    this.state = {
      search: ''
    }
   }

   render () {
    const { allMarkdownRemark } = this.props.data
    var artistsCount = 0
    var artists = null

    if (allMarkdownRemark !== null) {
      artists = allMarkdownRemark.edges.map(artist =>  {
        if (artist.node.frontmatter.title.toUpperCase().includes(this.state.search.toUpperCase()) ){
          artistsCount += 1
          return <ArtistComponent slug={artist.node.fields.slug} frontmatter={artist.node.frontmatter} key={artist.node.id} />
        }
        else return null
      })

    }
    


    
    return (
      <Layout>
      <SEO title="Artistes" keywords={[`artistes`, `le maquis`, `le mans`, `art`, `collectif`]} />
      <div className="Page1">
        <h1>Artistes</h1>
        <h2>{artistsCount} {artistsCount > 1 ? "artistes" : "artiste"}</h2>
        <div className="searchContainer">
          <input onChange={(e) => this.setState({search: e.target.value})} type="text" className="searchInput" placeholder="Chercher un artiste..." />
        </div>

        <div className="flexContainer">
          { 
            artists
          }
        </div>

      </div>
      
    </Layout>)

   }



}



export const query = graphql`
  {
  allMarkdownRemark (filter: {frontmatter: {template: {eq: "artist"}}}) {
    edges {
      node {
        id
        fileAbsolutePath
        fields {
          slug
        }
        frontmatter {
          title
          styles
          pic
        }
      }
    }
  }
}
`


export default ArtistsPage
