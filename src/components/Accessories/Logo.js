import React, { Component } from 'react'
import { siteTitle } from '../../data/SiteConfig'
import siteLogo from '../../assets/images/logo.svg'

class Logo extends Component {

    render() {
        return (
            <figure className={`logo__image ${this.props.classList}`} >
                <div src={siteLogo} alt={`Logo | ${siteTitle}`}><span>{siteTitle}</span></div>
            </figure>
        )
    }
}

export default Logo