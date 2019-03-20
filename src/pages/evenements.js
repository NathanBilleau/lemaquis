import React from "react"
import { graphql } from "gatsby" 

import Layout from "../components/layout"
import SEO from "../components/seo"

import EventComponent from '../components/eventComponent'


class EventPage extends React.Component { 
   constructor( props, {data}) {
    super (props)
    this.state = {
      search: ''
    }
   }

   render () {
    const { allMarkdownRemark } = this.props.data
    var eventCount = 0


    var events = allMarkdownRemark.edges.map(event =>  {
      if (event.node.frontmatter.title.toUpperCase().includes(this.state.search.toUpperCase()) ){
        eventCount += 1
        return <EventComponent slug={event.node.fields.slug} frontmatter={event.node.frontmatter} key={event.node.id} />
      }
      else return null
    })

    return(
      <Layout>
    <SEO title="Évenements" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
            <h1>Évenements</h1>
            <h2>{eventCount} {eventCount > 1 ? "évenements" : "évenement"}</h2>
            <div className="searchContainer">
                <input onChange={(e) => {this.setState({search: e.target.value})}} type="text" className="searchInput" placeholder="Chercher un évenement..." />
            </div>


          <div className="flexContainer">
             {
              events
             }
          </div>


    </div>
    
  </Layout>
      )

  
}
}



export const query = graphql`
  {
  allMarkdownRemark (sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {template: {eq: "event"}}}) {
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


export default EventPage
