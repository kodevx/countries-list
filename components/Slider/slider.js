import React from 'react';
import Image from 'next/image';

const Slider = props => {

    const { 
        images
    } = props;

    if(images && images.length) {
        return null;
    }

    return (
        <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselIndicators" data-slide-to="1"></li>
            </ol>
            <div class="carousel-inner" role="listbox">
                {images.map((image, index) => (
                    <>
                        <div className={`carousel-item ${index === 1 ? 'active' : ''}`}>
                            <Image className="d-block w-100" src={image.link} alt={`${image.name}-slide`} />
                        </div>
                    </>
                ))}
            </div>
            <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="false"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider;
