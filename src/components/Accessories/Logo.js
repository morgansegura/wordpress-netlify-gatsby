import React, { Component } from 'react'
import siteLogo from '../../assets/images/logo.svg'

import config from '../../data/siteConfig'


class Logo extends Component {

    render() {
        return (
            <figure className={`logo__image ${this.props.classList}`} >
                <div src={siteLogo} alt={`Logo | ${config.siteTitle}`}><span>{config.siteTitle}</span></div>
            </figure>
        )
    }
}

export default Logo