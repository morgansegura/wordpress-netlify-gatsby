import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'

class Pages extends Component {
    render() {
        const data = this.props.data

        return (
            <Layout>
                <section className="container section">
                    <h1>Pages</h1>
                    {data.allWordpressPage.edges.map(({ node }) => (
                        <div key={node.slug}>
                            <Link to={node.slug} css={{ textDecoration: `none` }}>
                                <h3>{node.title}</h3>
                            </Link>
                            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            <p><span className="mdi mdi-clock"> </span>{node.date}</p>
                        </div>
                    ))}
                </section>
            </Layout>
        )
    }
}

export default Pages

// Set here the ID of the home page.
export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`