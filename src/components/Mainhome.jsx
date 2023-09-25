import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://img.freepik.com/premium-photo/studio-portrait-lovely-baby-wearing-summer-dress-large-yellow-bow-her-head-against-gray-backdrop-with-room-text_176841-22624.jpg?w=1380"
          alt="First slide"
       
          
        />
        <Carousel.Caption>
          <h5>Babees</h5>
          <p>"We've Got Your Baby Needs Covered - Shop Now!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
         
          src='https://media.istockphoto.com/id/1203988587/photo/accessories-for-newborns-on-a-yellow-background-selective-focus.jpg?s=170667a&w=0&k=20&c=pOll8HIHkuv5TePE2OxHPj-zEy94JrVYEi0_MJMNr3c='
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Babees</h5>
          <p>"We've Got Your Baby Needs Covered - Shop Now!.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/newborn-yellow-background_905829-4486.jpg?w=1380"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Babees</h5>
          <p>
          "We've Got Your Baby Needs Covered - Shop Now!.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;