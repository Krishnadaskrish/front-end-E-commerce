import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://theayurvedaco.com/cdn/shop/files/Baby_Care_Banner_copy.jpg?v=1680953662&width=1800"
          alt="First slide"
       
          
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          src='https://www.mommypure.com/cdn/shop/collections/Category_Banner-_Combos.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Babees</h5>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://theayurvedaco.com/cdn/shop/files/Baby_Care_Banner_copy.jpg?v=1680953662&width=1800"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Babees</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;