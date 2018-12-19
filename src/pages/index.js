import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import config from '../data/siteConfig'

// Libs
import Glide from '@glidejs/glide'

class Pages extends Component {

  componentDidMount() {

    const HeroGlide = new Glide('.hero-glide',
      {
        type: 'carousel',
        rewind: false,
        perView: 1,
        perTouch: 1,
        hoverPause: true,
        // autoplay: 12000,
        animationDuration: 1000
      })
    HeroGlide.mount()
  }

  render() {
    const data = this.props.data
    console.log(data)
    return (
      <Layout>
        <section className="section">

          {data.allWordpressPage.edges.map(({ node }) => (
            !!node.slug && node.slug === 'home' ?
            <div className="hero hero__main" key={node.slug}>
              <div className="hero__inner">
                <div className="hero-glide">
                  <div data-glide-el="track" className="glide__track">
                    <div className="glide__slides">            

                      {!!node.acf.hero_boolean === true && node.acf.hero.length ?
                        node.acf.hero.map(({ image }, i) => (
                          <div key={i} className="glide__slide">  
                          <PreviewCompatibleImage imageInfo={image.localFile} />
                          </div>
                        ))
                        : null}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              : null
          ))}
        <div className="container">
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

                </div>
                : null
            ))}        
        </div>
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