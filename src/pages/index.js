import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeEvent from "../components/homeEvent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">    	
    	<h1>Le Maquis</h1>
    	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>

    	<div className="nextEventContainer">
    		<h3>
	    		Prochain évenement
	    	</h3>
	    	<HomeEvent />
    	</div>    	
    </div>
    
  </Layout>
)

export default IndexPage
