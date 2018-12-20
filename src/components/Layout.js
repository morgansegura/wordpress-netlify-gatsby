import React, { Component } from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import ContactModal from './Forms/ContactForm'

import config from '../data/siteConfig'
import '../assets/css/styles.css'

class TemplateWrapper extends Component {

  render() {
    const { children } = this.props;
      // console.log(this.props)
      return (  
        <div id="wrapper" className="wrapper is--mobile-nav">
          <Helmet>
            <title>{config.siteTitleAlt}</title>
            <meta name="description" content={config.siteDescription} />
            <meta name="u2f-support" content="true" />
            <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
            <link rel="manifest" href="/img/site.webmanifest" />
            <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5bbad5" />
            <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
            <meta name="msapplication-TileColor" content="#da532c" />
            <meta name="theme-color" content="#ffffff" />
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