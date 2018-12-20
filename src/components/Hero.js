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
            <div className="hero hero__main theme--ol">                
                {!!node && this.props.heroImage === true ?
                <div className="hero__inner"> 
                    <div className="hero__image-container">
                        <PreviewCompatibleImage className="hello" imageInfo={node.image.localFile} />              
                    </div>
                    <div className="hero__meta-container top right">
                        <h4 className="hero__title">{node.title}</h4>
                        <p className="hero__caption">{node.title}</p>
                        <div className="btn__block left">
                            <a className="hero__link btn btn--sm btn__white btn__round" href={node.link.url} title={node.link.title}>
                                {node.link.title}
                            </a>
                        </div>
                    </div>     
                </div>                 
                : null }

                {!!node && this.props.heroCarousel === true ?
                <div className="hero__inner"> 
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
                </div>
                : null}            
            </div>            
        );
    }
};

export default Hero;

