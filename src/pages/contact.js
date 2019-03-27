import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`contact`, `mail`, `le maquis`, `le mans`, `art`, `collectif`]} />
    <div className="Page1">
            <h1>Contact</h1>

            <form className="contactForm" name="ContactForm" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="ContactForm" />
              <input type="text" name="name" placeholder="Nom" />             
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Votre message"></textarea>             
              <button type="submit">Envoyer</button>
            </form>


    </div>
    
  </Layout>
)

export default ContactPage
