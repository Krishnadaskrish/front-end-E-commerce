import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarfront from "../components/Navbar";
import Footer from '../components/Footer';
const Card = ({ imageSrc, title }) => {
  
  return (
   
    <div className="card"  >
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Some text describing the category...</p>
      </div>
    </div>
  );
};

const Productcart = () => {
  const ab=useNavigate()
  return (
    <>
    
   
    <div style={{ backgroundColor: " #f4c430" }}>
    <div className="container" id='cat'  >
      <br/>
      <br/>
    <h2>PRODUCT CATEGORY</h2>
    <br></br>
      <div className="row" >
        <div className="col-md-3">
          <div className="card-container" onClick={()=>ab('/cloth')}>
            <Card 
              imageSrc= "https://i.pinimg.com/736x/1d/1b/87/1d1b87733d3234d241e89a1a016c22e6.jpg "
              title="Clothing"
              
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container" onClick={()=>ab('/toy')}>
            <Card
              imageSrc="https://i.pinimg.com/1200x/5c/6c/a6/5c6ca69f01924071d8600cb04744830b.jpg"
              title="Toys"
            />
          </div>
        </div>




        <div className="col-md-3">
          <div className="card-container"  onClick={()=>ab('/card')}>
            <Card
              imageSrc="https://staranddaisy.in/wp-content/uploads/2022/09/spoonultrasoft_19.png"
              title="Feeding"
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container"  onClick={()=>ab('/others')}>
            <Card
              imageSrc="https://img.freepik.com/free-photo/beauty-concept-with-basket_23-2147817623.jpg"
              title="Daily Care"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  
    </>
  );
};

export default Productcart;