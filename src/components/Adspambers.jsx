import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarfront from "../components/Navbar";
import Footer from '../components/Footer';
import { MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

const Card = ({ imageSrc, title }) => {

  return (
   
    <div className="card"  >
      <img src={imageSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
      </div>
    </div>
  );
};

const Adspambers = () => {
 
  return (
    <>
    
   
    <div style={{ backgroundColor: "#C6E6FB" }}>
    <div className="container" id='cat'  >
      <br/>
      <br/>
    <h2>Baby Diapers</h2>
    <br></br>
      <div className="row" >
        <div className="col-md-3">
          <div className="card-container" >
            <Card 
              imageSrc= "https://i.pinimg.com/564x/97/90/e8/9790e861fdd8c4bef88a8f6c201dd599.jpg"
             
              
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container"  >
            <Card 
              imageSrc="https://i.pinimg.com/564x/60/e5/1a/60e51a9e72542523eda296b906dd7677.jpg"
              
              
            />
          </div>
        </div>




        <div className="col-md-3">
          <div className="card-container"  >
            <Card
              imageSrc="https://i.pinimg.com/564x/40/ae/c3/40aec3726b884065938ce8204bfdcdd9.jpg"
             
            />
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-container"  >
            <Card
              imageSrc="https://i.pinimg.com/564x/d3/fa/0a/d3fa0a443c3968ee00071388b884143e.jpg"
              
            />
          </div>
        </div>
      </div>
    </div>
         



 
    <MDBTypography note noteColor='primary'>
        <strong>Note success:</strong> Baby diapers are a type of absorbent underwear designed to help keep babies and infants dry and comfortable. They are a crucial part of baby care, especially during the early months and years of a child's life. Here are some key points about baby diapers:
        
        
      </MDBTypography>
 
    </div>
  
    </>
  );
};

export default Adspambers;