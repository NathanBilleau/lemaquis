import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function ArtistPage ({data})  {
  const { markdownRemark: artist} = data

    return (
      <Layout>
        <SEO title={artist.frontmatter.title} keywords={[artist.frontmatter.title, `artiste`, `le maquis`, `le mans`, `art`, `collectif`]} />
        <div className="Artist">
          <div className="content">
            <h1>{ artist.frontmatter.title }</h1>
            <h2>
              {artist.frontmatter.styles.join(' | ')}
            </h2>
            <div dangerouslySetInnerHTML={{__html: artist.html}}></div>
          </div>
          <div className="artistPic" style={{backgroundImage: 'url(' + artist.frontmatter.pic + ')'}}>
            <ul className="social">

            { 
              artist.frontmatter.facebook != null ? 
                <li>
                  <a href={artist.frontmatter.facebook}>
                    <i className="fab fa-facebook" />
                  </a>
                </li>
                :
                null
            }

            { 
              artist.frontmatter.twitter != null ? 
                <li>
                  <a href={artist.frontmatter.twitter}>
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                :
                null
            }

            { 
              artist.frontmatter.instagram != null ? 
                <li>
                  <a href={artist.frontmatter.instagram}>
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                :
                null
            }

            { 
              artist.frontmatter.youtube != null ? 
                <li>
                  <a href={artist.frontmatter.youtube}>
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                :
                null
            }

            { 
              artist.frontmatter.soundcloud != null ? 
                <li>
                  <a href={artist.frontmatter.soundcloud}>
                    <i className="fab fa-soundcloud" />
                  </a>
                </li>
                :
                null
            }
               

                            

            </ul>
          </div>          

        </div>
        
      </Layout>
    )
}

export const query = graphql`
  query ArtistQuery ($path: String!){
    markdownRemark (fields:{ slug: {eq: $path}}) {
      id
      fields {
        slug
      }
      frontmatter {
        title
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


