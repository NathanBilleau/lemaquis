import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function ArtistPage ({data})  {
  const { markdownRemark: artist} = data

    return (
      <Layout>
        <SEO title={artist.frontmatter.name} keywords={[`gatsby`, `application`, `react`]} />
        <div className="Artist">
          <div className="content">
            <h1>{ artist.frontmatter.name }</h1>
            <h2>
              {artist.frontmatter.styles.join(' | ')}
            </h2>
            <div dangerouslySetInnerHTML={{__html: artist.html}}></div>
          </div>
          <div className="artistPic" style={{backgroundImage: 'url(' + artist.frontmatter.pic + ')'}}>

          </div>          

        </div>
        
      </Layout>
    )
}

export const query = graphql`
  query myQuery ($path: String!){
    markdownRemark (fields:{ slug: {eq: $path}}) {
      id
      fields {
        slug
      }
      frontmatter {
        name
        pic
        styles
        facebook
        twitter
        instagram
        youtube
        soundcloud
      }
      html
    }
  }
` 


