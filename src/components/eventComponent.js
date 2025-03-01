import React from "react"
import { Link } from "gatsby"
import moment from "moment"

import "../styles/eventComponent.scss"

class EventComponent extends React.Component {

	render() {
		var state = ""

		if (moment(this.props.frontmatter.date).isBefore(moment())) {
			state = "(passé)"
		}

		return (
		 	<div className="eventComponent">    	
		        <h1>{this.props.frontmatter.title}</h1>
		        <h2>{this.props.frontmatter.place}</h2>
		        <h3>{moment(this.props.frontmatter.date).format('DD/MM/YYYY')} {state}</h3>
		        <Link to={this.props.slug}>Lire Plus</Link>
		    </div>
		)
	}
   
}

export default EventComponent
