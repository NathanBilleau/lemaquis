import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeEvent from "../components/homeEvent"

import "../styles/blogPost.scss"

const BlogPage = () => (
	<Link to="/blog">
		<article>
	        <div className="thumbnail" style={{backgroundImage:'url(https://images.unsplash.com/photo-1552084007-76f5feb8d22a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)'}}></div>
	        <div className="infos">
	            <h1>succès pour“Corps et sensation”</h1>
	            <h2>Exposition - <span>8 mars</span></h2>          
	            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
	        </div>
	    </article>
	</Link>
    
)

export default BlogPage
