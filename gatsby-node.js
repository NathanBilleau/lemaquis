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
	const articleTemplate = path.resolve('src/templates/article.js')
	var template

	return graphql(`
		{
			allMarkdownRemark {
			    edges {
			      node {
			        id
			        fileAbsolutePath
			        html
			        fields {
			        	slug
			        }
			        frontmatter {
			          title
			          styles
			          pic
			          facebook
			          twitter
			          instagram
			          youtube
			          soundcloud
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

				if (node.fileAbsolutePath.includes('/artistes/')) template = artistTemplate
				if (node.fileAbsolutePath.includes('/blog/')) template = articleTemplate

				createPage({
					path: node.fields.slug,
					component: template
				})
			})
		})
}