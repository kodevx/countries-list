'use client'
import React from 'react';
import Image from 'next/image';
import Carousel  from "react-bootstrap/Carousel";

const Slider = props => {

    const { 
        images
    } = props;

    if(images && images.length === 0) {
        return null;
    }

    return (
        <Carousel>
            {images.map(image => (
                <Carousel.Item key={image.name}>
                    <Image 
                        className="d-block w-100" 
                        src={image.link} 
                        height={550} 
                        width={450} 
                        alt={`${image.name}-slide`} 
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider;
