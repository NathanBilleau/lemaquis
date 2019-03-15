import React from "react"
import { Link } from "gatsby"

import "../styles/artistComponent.scss"

const BlogPage = () => (
	<Link to="/artiste/fauve">
		<div style={{backgroundImage:'url(https://images.unsplash.com/photo-1552084007-76f5feb8d22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}>
	        <div className="infos">
	            <h1>Banksy</h1>
	            <h2>Street Art <br /> Photographie <br /> Peinture</h2>          
	        </div>
	    </div>
	</Link>
    
)

export default BlogPage
