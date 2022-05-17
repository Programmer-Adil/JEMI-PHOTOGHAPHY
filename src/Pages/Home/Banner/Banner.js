import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import slider1 from '../../../img/slider-img-1.jpg'
import slider2 from '../../../img/slider-img-2.jpg'
import slider3 from '../../../img/slider-img-3.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='slider-title'>One-hour photo shoots @ only $100</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='slider-overlay'>
                <img
                    className="d-block w-100"
                    src={slider2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-title'>Half-day photo shoots @ only $200</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='slider-title'>Full-day photo shoots @ only $500</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;