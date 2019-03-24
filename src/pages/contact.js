import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`, `mail`, `le maquis`, `le mans`, `art`, `collectif`]} />
    <div className="Page1">
            <h1>Contact</h1>

            <form className="contactForm" name="MailContact" method="POST" data-netlify="true">
              <input type="text" name="Nom" placeholder="Nom" />             
              <input type="email" name="email" placeholder="Email" />             
              <input type="text" name="Objet" placeholder="Objet" />
              <textarea name="Message" placeholder="Votre message"></textarea>             
              <button type="submit">Envoyer</button>
            </form>


    </div>
    
  </Layout>
)

export default ContactPage
