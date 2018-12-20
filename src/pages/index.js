import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import config from '../data/siteConfig'

class Pages extends Component {

  state = {
    
  }

  componentDidMount() {

  }

  render() {
    const data = this.props.data.wordpressPage
    console.log(data)  
    return (
      <Layout>
        <section className="section">

          {!!data.acf.hero_billboard_boolean 
            && data.acf.hero_billboard_boolean === true ?
            <Hero heroImage={data.acf.hero_billboard_boolean} node={data.acf.hero_billboard} />
          : null }
          
          {!!data.hero_boolean
            && data.acf.hero_boolean === true ?
            data.acf.hero.map(({image}, i ) => (
              <Hero key={i} heroCarousel={data.acf.hero_boolean} node={image} />
            ))
          : null }

          <article className="container">
              <header className="py-40 conatiner container--md title__block">
                <h1 className="title">
                  Welcome to the {data.title} page of {config.siteTitle}                    
                </h1>
                <h2 className="subtitle">
                  {data.title}
                </h2>
              </header>

              <div dangerouslySetInnerHTML={{ __html: data.excerpt }} />

              <div dangerouslySetInnerHTML={{ __html: data.content }} />

          </article>
        </section>
      </Layout>
    )
  }
}

export default Pages

// Set here the ID of the home page.
export const pageQuery = graphql`
  query  {
    wordpressPage(slug: { eq: "home"})  {
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
                fluid(maxWidth: 1920, maxHeight: 1270) {
                  ...GatsbyImageSharpFluid
                }
              }                
            }
          }
          link {
            title
            url
            target
          }
          alt
          title
          caption
        }
        hero_billboard_boolean
        hero_billboard {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 1270) {
                  ...GatsbyImageSharpFluid
                }
              }                
            }
          }
          link {
            title
            url
            target
          }
          alt
          title
          caption
        }
      }    
    }

  }
`