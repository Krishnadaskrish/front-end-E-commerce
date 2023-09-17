import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import { Card } from 'react-bootstrap';


const Toy = () => {
  const navigate = useNavigate();
  const { product } = useContext(MyContext);
  const filteredProducts = product.filter((p) => p.type.toLowerCase() === 'toy');

  return (
    <div>
      <header className='sticky-top'>
        
      </header>
      <br />
      <div className='container py-5'>
        <div className='row'>
          <div className='d-flex flex-wrap justify-content-center '>
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                style={{ width: '20%', marginBottom: '10px', marginRight: '10px' }}
                onClick={() => navigate(`/displayProduct/${product.id}`)}
                className='card-container'
              >
                <Card.Img className='card-img-top' src={product.src} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Toy;