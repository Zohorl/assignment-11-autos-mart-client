import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import banner1 from '../../images/banner/banner-1 (1).png';
import banner2 from '../../images/banner/banner-2 (1).png';
import banner3 from '../../images/banner/banner-3 (1).png';

const Banner = () => {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, event) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
            <Carousel className='mb-5' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        height={400}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1 fw-bold'>Provide Professional Health Coach</h3>
                        <div className='fw-bold'>
                            <p>Health coach provide world class health,Yoga,fitness and nutrition</p>
                            <p>Certification programs to world class professionals</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={400}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='fs-1 fw-bold'>Certified Personal Trainers</h3>
                        <div className='fw-bold'>
                            <p>Health coach provide world class health,Yoga,fitness and nutrition</p>
                            <p>Certification programs to world class professionals</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        height={400}
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className='fs-1 fw-bold'>We support to find a healthy life</h3>
                        <div className='fw-bold'>
                            <p>Health coach provide world class health,Yoga,fitness and nutrition</p>
                            <p>Certification programs to world class professionals</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;