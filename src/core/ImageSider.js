import React, { useState } from 'react'

import Carousel from 'react-bootstrap/Carousel'

function ImageSider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container-fluid text-center">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img width={900} height={400}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width={900} height={400}
                        style={{ minHeight: 100 }}
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        style={{ minHeight: 100 }}
                        className="d-block w-100"
                        src="../../images/banner/Banner_2.webp"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );

}

export default ImageSider
