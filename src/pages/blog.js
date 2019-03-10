import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeEvent from "../components/homeEvent"

import BlogPost from '../components/blogPost'

const BlogPage = () => (
  <Layout>
    <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Page1">
            <h1>Blog</h1>
            <h2>13 articles</h2>
            <div className="searchContainer">
                <input type="text" className="searchInput" placeholder="Chercher un article..." />
            </div>

           <BlogPost />
           <BlogPost />
           <BlogPost />
           <BlogPost />
           <BlogPost />
           <BlogPost />


    </div>
    
  </Layout>
)

export default BlogPage
