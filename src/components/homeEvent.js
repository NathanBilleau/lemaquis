import React from "react"
import { Link } from "gatsby"

import "../styles/homeEvent.scss"

const HomeEvent = () => (
    <div className="homeEvent">    	
        <h1>Salon des jeunes créateurs</h1>
        <h2>Le Mans, place de la république</h2>
        <h3>4 mai 2019</h3>
        <Link to="/">Lire Plus</Link>
    </div>
)

export default HomeEvent
