import React from 'react';
import { Carousel} from 'react-bootstrap';
import Image1 from '../Pictures/one.jpg';
import Image2 from '../Pictures/two.jpg';
import Image3 from '../Pictures/three.jpg';

function Para() {
return (

<Carousel >
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={Image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={Image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img height={500}
      className="d-block w-100"
      src={Image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel> 
                  
);
}

export default  Para;