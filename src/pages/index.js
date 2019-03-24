import React from "react"
import moment from "moment"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventComponent from "../components/eventComponent"

export default function IndexPage ({data}) {
    const { allMarkdownRemark } = data
    const { markdownRemark } = data
    var eventIsAfter
    var NextEvent = null

    if (allMarkdownRemark !== null) {/**/
      for (let event of allMarkdownRemark.edges) {
        eventIsAfter = moment(event.node.frontmatter.date).isAfter(moment())
        if (eventIsAfter) {
          console.log(event.node.frontmatter.title)
          NextEvent = (<div className="nextEventContainer">
                                  <h3>
                                    Prochain évenement
                                  </h3>
                                  <EventComponent key={event.node.id} slug={event.node.fields.slug} frontmatter={event.node.frontmatter}/>
                                </div>)
          break
        }
      }
    }

  

   

    return (
      <Layout>
        <SEO title="Home" keywords={[`le maquis`, `le mans`, `art`, `collectif`, `lycéens`, `lycée`, `sarthe`]} />
        <div className="Page1">     
          <h1>Le Maquis</h1>
          <div dangerouslySetInnerHTML={{__html: markdownRemark.html}}></div>

         
                {NextEvent}
              
        </div>
        
      </Layout>
    )
}


export const query = graphql`
  
  {
  allMarkdownRemark (sort: {fields: [frontmatter___date], order: ASC}, filter: {frontmatter: {template: {eq: "event"}}}) {
    edges {
      node {
        id
        fileAbsolutePath
        fields {
          slug
        }
        frontmatter {
          title
          place
          date
        }
      }
    }
  }



  markdownRemark (frontmatter: {title: {eq: "Le Maquis"}}){
    id
    html
  }
}

`

