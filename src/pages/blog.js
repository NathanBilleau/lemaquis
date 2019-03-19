import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import BlogPost from '../components/blogPost'


class BlogPage extends React.Component { 
   constructor( props, {data}) {
    super (props)
    this.state = {
      search: ''
    }
   }

   render () {
   
     const { allMarkdownRemark } = this.props.data
     var articlesCount = 0
   
     var articles = allMarkdownRemark.edges.map(article => {
       if (article.node.frontmatter.title.toUpperCase().includes(this.state.search.toUpperCase())) {
         articlesCount += 1
         return <BlogPost key={article.node.id} slug={article.node.fields.slug} frontmatter={article.node.frontmatter} />
       }
        else return null   
     })
   
     return (
       <Layout>
         <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
         <div className="Page1">
           <h1>Blog</h1>
           <h2>{articlesCount} {articlesCount > 1 ? "articles" : "article"}</h2>
           <div className="searchContainer">
             <input onChange={(e) => this.setState({search: e.target.value})} type="text" className="searchInput" placeholder="Chercher un article..." />
           </div>
     
             {
               articles 
             }
     
     
         </div>
         
       </Layout>)}
}


export const query = graphql`
  {
  allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC},filter: {frontmatter: {template: {eq: "article"}}}) {
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
