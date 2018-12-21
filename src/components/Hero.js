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
        console.log(node)
        return (        
            <div className="hero hero__main theme--od">                
                {!!node && this.props.heroImage === true ?
                <div className="hero__inner"> 
                    <div className="hero__image-container">
                        <PreviewCompatibleImage className="hello" imageInfo={this.props.node.image.localFile} />              
                    </div>
                    <div className="hero__meta-container bottom right">
                    {!!node.title && node.title !== '' ?
                        <h4 className="hero__title h1">{node.title}</h4>
                    : null }
                    {!!node.caption && node.caption !== '' ?
                        <p className="hero__caption">{node.caption}</p>
                    : null }
                    {!!node.link.button && node.link.button !== '' ?
                        node.link.options === true ?
                        <div className={`list__block ${node.link.halign.toLowerCase()} ${node.link.valign.toLowerCase()}`}
                        >
                            <a className={`hero__link btn btn--sm ${node.link.corners.toLowerCase()}`}
                                style={{
                                    backgroundColor: node.link.bg_color,
                                    color: node.link.color
                                }}
                                href={node.link.button.url} title={node.link.button.title}>
                                {node.link.button.title}
                            </a>
                        </div>                        
                        : 
                        <div className="list__block middle right">
                            <a className="hero__link btn btn--sm btn__white" href={node.link.button.url} title={node.link.button.title}>
                                {node.link.button.title}
                            </a>
                        </div>

                    : null }
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

