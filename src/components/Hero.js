import React, { Component } from 'react';
import Glide from '@glidejs/glide'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class Hero extends Component{

    componentDidMount() {
        // Only if the Hero Carousel option is true
        if (this.props.node.heroCarousel === true) {
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
    }
    render() {
        const node = this.props.node
        console.log(this.props)
        console.log(!!node)
        return (        
            <div className="hero hero__main">                               
                <div className="hero__inner"> 
                    {!!node && this.props.heroImage === true ?
                    <div className="hero__image-container">
                        <PreviewCompatibleImage imageInfo={node.image.localFile} />
                        <h4 className="hero__cation">{node.caption}</h4>
                        <a href={node.link.url} title={node.link.title}>
                            {node.link.title}
                        </a>                   
                    </div>
                    : null }

                    {!!node && this.props.heroCarousel === true ?
                    <div className="hero-glide">
                        <div data-glide-el="track" className="glide__track">
                            <div className="glide__slides">
                                {node.map(({ image }, i) => (
                                    <div key={i} className="glide__slide">
                                        <PreviewCompatibleImage imageInfo={image.localFile} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<"><span className="mdi mdi-arrow-left-bold-hexagon-outline"></span></button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">"><span className="mdi mdi-arrow-right-bold-hexagon-outline"></span></button>
                        </div>
                    </div>
                    : null}                    
                </div>                
            </div>            
        );
    }
};

export default Hero;

