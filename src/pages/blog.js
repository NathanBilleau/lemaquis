import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogPost from '../components/blogPost'

const BlogPage = ({data}) => {

  const { allMarkdownRemark } = data

  return (<Layout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <div className="Page1">
              <h1>Blog</h1>
              <h2>13 articles</h2>
              <div className="searchContainer">
                  <input type="text" className="searchInput" placeholder="Chercher un article..." />
              </div>
  
             {
              allMarkdownRemark.edges.map(article => {
                if (article.node.fileAbsolutePath.includes('/blog/')) {
                  return <BlogPost key={article.node.id} slug={article.node.fields.slug} frontmatter={article.node.frontmatter} />
                }
              })
             }
  
  
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
          title
          categories
          date
          pic
        }
        html
      }
    }
  }
}
`

export default BlogPage
