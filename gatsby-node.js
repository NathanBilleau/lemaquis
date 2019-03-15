const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}




exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions

	const artistTemplate = path.resolve('src/templates/artiste.js')

	return graphql(`
		{
			allMarkdownRemark {
			    edges {
			      node {
			        id
			        html
			        fields {
			        	slug
			        }
			        frontmatter {
			          name
			          styles
			        }
			      }
			    }
			  }
		}
		`).then(result => {
			if( result.errors ) {
				return Promise.reject(result.errors)
			}

			result.data.allMarkdownRemark.edges.forEach(({node}) => {
				createPage({
					path: node.fields.slug,
					component: artistTemplate
				})
			})
		})
}