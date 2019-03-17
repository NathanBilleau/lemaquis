import React from "react"
import { graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"





export default function EvenementPage ({data})  {
  const { markdownRemark: event} = data

  return (
    <Layout>
      <SEO title={"succès pour “Corps et sensation”"} keywords={[`gatsby`, `application`, `react`]} />
      <div className="Evenement">
      
        <div className="content">
          <h1>{event.frontmatter.title}</h1>
           <div className="locDate">
            <h2>
              {event.frontmatter.place}
            </h2>
            <h3>
              {event.frontmatter.date}
            </h3>
          </div>

          <div dangerouslySetInnerHTML={{__html: event.html}}></div> 

          <div className="map" style={{overflow:"hidden", maxWidth:"100%", width:500+"px", height:500+'px'}}>
            <div id="googlemaps-display" style={{height: "100%", width: "100%", maxWidth: "100%"}}>
              <iframe key="map" style={{height: "100%", width: "100%", border:"0"}} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Place+de+la+république,+Le+Mans&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
            </div>          
          </div>
        </div>             

        </div>
        
      </Layout>)
}

export const query = graphql`
  query EventQuery ($path: String!){
    markdownRemark (fields:{ slug: {eq: $path}}) {
      id
      fields {
        slug
      }
      frontmatter {
        title   
        place
        date
      }
      html
    }
  }
` 


