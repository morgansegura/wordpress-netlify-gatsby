import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import config from '../data/siteConfig'

class Pages extends Component {
  render() {
    const data = this.props.data
    console.log(data)
    return (
      <Layout>
        <section className="container section">
          <h1>Welcome to the Home page of {config.siteTitle}</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            !!node.slug && node.slug === 'home' ? 
              <div key={node.slug}>

                <Link to={node.slug}>
                  <h3>{node.title}</h3>
                </Link>

                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />

                <div dangerouslySetInnerHTML={{ __html: node.content }} />

                <p><span className="mdi mdi-clock"> </span>{node.date}</p>

                {!!node.acf.hero && node.acf.hero.length ? 
                  node.acf.hero.map(({ image }, i) => (
                  <PreviewCompatibleImage key={i} imageInfo={image.localFile} />
                  )) 
                : null }
              </div>
            : null
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
          content
          excerpt
          slug
          acf {
            hero_boolean
            hero {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1920) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }                
                }
              }
              link_boolean
              link {
                title
                url
                target
              }
              alt
              caption
            }
          }
        }
      }
    }
  }
`