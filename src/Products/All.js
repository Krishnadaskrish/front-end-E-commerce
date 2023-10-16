import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import { Button } from "react-bootstrap";
import Navbarfront from "../components/Navbar";
import Footer from '../components/Footer';

const All = () => {
  const { pro,setpro } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    
 
    <>
    <Navbarfront/>
    
    
   
      <section id="all" style={{ backgroundColor: "#faf3dd" }}>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
            {pro.map((pro, i) => (
              <div className="col" key={i}>
                <div className="card shadow-sm h-100">
                  <div className="d-flex justify-content-between p-3">
                    <div
                      id="animated-div"
                      className="rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                      style={{
                        width: "80px",
                        height: "30px",
                        marginBottom: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <p className="text-white mb-0 small">In Offer</p>
                    </div>
                  </div>
                  <img
                    src={pro.src}
                    style={{ width: "200px", height: "150px" }}
                    className="card-img-top d-flex align-items-center justify-content-center"
                    alt={pro.name}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <h2 className="small">{pro.name}</h2>
                      <p className="small text-danger">
                        <s>{pro.price}</s>
                      </p>
                    </div>

                    <div className="mb-3">
                      <h5 className="text-dark mb-0">${pro.price2}</h5>
                    </div>

                    <Button
                      variant="primary"
                      className="ms-1 card-container"
                      onClick={() => navigate(`/displayProduct/${pro.id}`)}
                      type="submit"
                    >
                      View Details <i className="fas fa-shopping-cart ms-1"></i>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </>
  );
};

export default All;