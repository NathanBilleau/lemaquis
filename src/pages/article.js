import React from "react"
/*import { graphql } from "gatsby"*/

import Layout from "../components/layout"
import SEO from "../components/seo"


export default function ArticlePage ()  {
/*  const { markdownRemark: artist} = data*/

    return (
      <Layout>
        <SEO title={"succès pour “Corps et sensation”"} keywords={[`gatsby`, `application`, `react`]} />
        <div className="Article">

        <div className="articlePic" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1458240598330-ccda17524e5c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80)'}}></div>      

          <div className="content">
            <h1>succès pour “Corps et sensation”</h1>
            <div className="catDate">
              <h2>
                Exposition
              </h2>
              <h3>
                9 mars 2019
              </h3>
            </div>            
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed  quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
          </div>
              

        </div>
        
      </Layout>
    )
}

/*export const query = graphql`
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
` */


