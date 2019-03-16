import React from "react"
import { Link } from "gatsby"

import "../styles/blogPost.scss"

class BlogPost extends React.Component {

	render () {
		return (
			<Link to={this.props.slug}>
				<article>
			        <div className="thumbnail" style={{backgroundImage:'url(' + this.props.frontmatter.pic + ')'}}></div>
			        <div className="infos">
			            <h1>{this.props.frontmatter.title}</h1>
			            <h2>{this.props.frontmatter.categories.join(' | ')} - <span>{this.props.frontmatter.date}</span></h2>          
			            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			        </div>
			    </article>
			</Link>	
		)
	}
    
}

export default BlogPost
