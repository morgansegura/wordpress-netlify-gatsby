import React, { Component } from 'react'
import Helmet from 'react-helmet'
import config from '../../data/SiteConfig'
import Header from './Header'
import Footer from './Footer'
import ContactModal from './Forms/ContactForm'

import '../assets/css/styles.css'

// const locationPathName = location.pathname

class TemplateWrapper extends Component {

  render() {

    const { children } = this.props;
      // console.log(this.props)
      return (  
        <div id="wrapper" className="wrapper is--mobile-nav">
          <Helmet>
            <title>{`${children.title} | ${config.siteTitle}`}</title>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          <Header config={config} />
          <main className="main">
            {children}
          </main>
          <Footer />
          <ContactModal />
        </div>
      );
    }
}

export default TemplateWrapper