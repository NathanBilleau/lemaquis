import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeEvent from "../components/homeEvent"

import ArtistComponent from '../components/artistComponent'

const ArtistsPage = () => (
  <Layout>
    <SEO title="Artistes" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
            <h1>Artistes</h1>
            <h2>20 artistes</h2>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Chercher un artiste..." />
            </div>

            <div className="artistsContainer">
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
              <ArtistComponent />                    
            </div>



    </div>
    
  </Layout>
)

export default ArtistsPage
