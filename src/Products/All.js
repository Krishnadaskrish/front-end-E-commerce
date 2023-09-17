import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../context/Context";
import { Button } from "react-bootstrap";

const All = () => {
  const { product } = useContext(MyContext);
  const navigate = useNavigate();

  return (
    <>
      <section id="all" style={{ backgroundColor: " #FFFFA7" }}>
        <div className="container py-5">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
            {product.map((product, i) => (
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
                    src={product.src}
                    style={{ width: "200px", height: "150px" }}
                    className="card-img-top d-flex align-items-center justify-content-center"
                    alt={product.name}
                  />

                  <div className="card-body">
                    <div className="d-flex justify-content-center">
                      <h2 className="small">{product.name}</h2>
                      <p className="small text-danger">
                        <s>{product.price}</s>
                      </p>
                    </div>

                    <div className="mb-3">
                      <h5 className="text-dark mb-0">${product.price2}</h5>
                    </div>

                    <Button
                      variant="primary"
                      className="ms-1 card-container"
                      onClick={() => navigate(`/displayProduct/${product.id}`)}
                      type="submit"
                    >
                      Add to cart <i className="fas fa-shopping-cart ms-1"></i>
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