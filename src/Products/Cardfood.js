import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import { Card } from 'react-bootstrap';
import Navbarfront from '../components/Navbar';
// 

const Food = () => {
  const navigate = useNavigate();
  const { pro } = useContext(MyContext);
  const filteredProducts = pro.filter((p) => p.type.toLowerCase() === 'food');

  return (
    <>
    <Navbarfront/>
    <div>
      <header className='sticky-top'>      
      </header>
      <br />
      <div className='container py-5'>
        <div className='row'>
          <div className='d-flex flex-wrap justify-content-center '>
            {filteredProducts.map((pro) => (
              <Card
                key={pro.id}
                style={{ width: '20%', marginBottom: '10px', marginRight: '10px' }}
                onClick={() => navigate(`/displayProduct/${pro.id}`)}
                className='card-container'
              >
                <Card.Img className='card-img-top' src={pro.src} />
                <Card.Body>
                  <Card.Title>{pro.name}</Card.Title>
                  <Card.Text>{pro.price}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Food;