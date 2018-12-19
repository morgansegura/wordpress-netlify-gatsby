import React, { Component } from 'react';
import Glide from '@glidejs/glide'
import { Parallax } from 'react-parallax';
// import PreviewCompatibleImage from './PreviewCompatibleImage'
// import {Link} from 'gatsby';

class Hero extends Component{

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
        return (        
            <div className="hero hero__main">                               
                <div className="hero__inner">                    
                    <div className="hero-glide">                 
                        <div data-glide-el="track" className="glide__track">
                            <div className="glide__slides">                        
                                {!!this.props.images ?
                                    this.props.images.map((image, i) => (
                                    <div key={i} className="glide__slide">                                       
                                        <Parallax 
                                            className="parallax"
                                            bgImage={image.node.childImageSharp.fluid.src} 
                                            strength={400}
                                        >
                                            <div className="hero-title__block">
                                                <h1 className="title">
                                                    A title to save them all.
                                                </h1>
                                                <p className="subtitle">
                                                    
                                                </p>
                                                <div className="buffer"></div>
                                            </div>                                         
                                        </Parallax>   
                                    </div>
                                    )) 
                                : null}                                
                            </div>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            {!!this.props.images ?
                                this.props.images.map((image, i) => ( 
                                    <button key={i} className="glide__bullet" data-glide-dir={`=${i}`}></button>
                                ))
                            : null}                                
                        </div>
                    </div>                   
                </div>                
            </div>            
        );
    }
};

export default Hero;

