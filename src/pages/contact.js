import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
            <h1>Contact</h1>

            <form className="contactForm" name="contact" netlify>
              <input type="text" name="Nom" placeholder="Nom" />             
              <input type="text" name="Objet" placeholder="Objet" />
              <textarea name="Message" placeholder="Votre message"></textarea>             
              <button type="submit">Envoyer</button>
            </form>


    </div>
    
  </Layout>
)

export default ContactPage
