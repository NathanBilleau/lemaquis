import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function ArticlePage ({data})  {
  const { markdownRemark: article} = data

    return (
      <Layout>
        <SEO title={"succès pour “Corps et sensation”"} keywords={[`gatsby`, `application`, `react`]} />
        <div className="Article">

        <div className="articlePic" style={{backgroundImage: 'url(' + article.frontmatter.pic + ')'}}></div>      

          <div className="content">
            <h1>{article.frontmatter.title}</h1>
            <div className="catDate">
              <h2>
                {article.frontmatter.categories.join(' | ')}
              </h2>
              <h3>
                {article.frontmatter.date}
              </h3>
            </div>            
            <div dangerouslySetInnerHTML={{__html: article.html}}></div>
          </div>
              

        </div>
        
      </Layout>
    )
}

export const query = graphql`
  query ArticleQuery ($path: String!){
    markdownRemark (fields:{ slug: {eq: $path}}) {
      id
      fields {
        slug
      }
      frontmatter {
        title   
        categories    
        pic
        date
      }
      html
    }
  }
` 


