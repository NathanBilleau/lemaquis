import React from "react"
import { Link } from "gatsby"

import "../styles/artistComponent.scss"

class artistComponent extends React.Component {


	render () {
		return (
				<Link to={this.props.slug}>
		<div style={{backgroundImage:'url(' + this.props.frontmatter.pic + ')'}}>
	        <div className="infos">
	            <h1>{this.props.frontmatter.title}</h1>
	            <h2>{this.props.frontmatter.styles.join(' | ')}</h2>          
	        </div>
	    </div>
	</Link>
			)
	
	}
	
    
}

export default artistComponent
