import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import "../styles/blogPost.scss"

class BlogPost extends React.Component {

	render () {
		return (
			<Link to={this.props.slug}>
				<article>
			        <div className="thumbnail" style={{backgroundImage:'url(' + this.props.frontmatter.pic + ')'}}></div>
			        <div className="infos">
			            <h1>{this.props.frontmatter.title}</h1>
			            <h2>{this.props.frontmatter.categories.join(' | ')} - <span>{moment(this.props.frontmatter.date).format("DD/MM/YYYY")}</span></h2>          
			            <p>{this.props.content}</p>
			        </div>
			    </article>
			</Link>	
		)
	}
    
}

export default BlogPost
