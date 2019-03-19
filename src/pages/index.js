import React from "react"
import moment from "moment"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EventComponent from "../components/eventComponent"

export default function IndexPage ({data}) {
    const { allMarkdownRemark } = data
    var eventIsAfter
    var eventName

    allMarkdownRemark.edges.map(event => {
      eventName = event.node.frontmatter.title
      eventIsAfter = moment(event.node.frontmatter.date, "DD MMMM YYYY").isAfter(moment())
      if (eventIsAfter) {
        console.log(eventName + "est le prochain evenement")
      }
      return null
    })

    return (
<Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">     
      <h1>Le Maquis</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

      <div className="nextEventContainer">
        <h3>
          Prochain évenement
        </h3>
        {/*<EventComponent slug={}/>*/}
      </div>      
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
}
`

