import React, { Component } from 'react';
import { Link } from 'gatsby';
import Navbar from './Navbar'
import Logo from './Accessories/Logo'


class Header extends Component {    
    render() {

        const menuStyle = 'drawer'
        console.log(this.props)
        return (
            <header className="header">
                <div className="container">
                    <div className={`header__inner center ${menuStyle}`}>
                        <Link className="logo" to="/" title="">
                            <div className="logo__text">
                                <div className="logo__text--inner">
                                    {!!Logo ?
                                        <Logo classList={`logo__header logo--cta`} />
                                    : 
                                        <h2 className="title">{this.props.siteTitle}</h2>
                                    }
                                </div>
                            </div>
                        </Link>
                        <Navbar menuStyle={menuStyle} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;