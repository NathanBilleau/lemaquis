import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import EventComponent from '../components/eventComponent'

const EventPage = () => (
  <Layout>
    <SEO title="Évenements" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
            <h1>Évenements</h1>
            <h2>13 évenements</h2>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Chercher un article..." />
            </div>


          <div className="flexContainer">
             <EventComponent />
             <EventComponent />
             <EventComponent />
             <EventComponent />
             <EventComponent />
          </div>


    </div>
    
  </Layout>
)

export default EventPage
