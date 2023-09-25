import React, { useContext, useEffect, useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { MyContext } from "../context/Context";
import { useNavigate } from "react-router-dom";
import Navbarfront from "./Navbar";

export default function Cart() {
  const { cart, setcart } = useContext(MyContext);
  const navigate = useNavigate();
  const [total,setTotal]=useState(0)

  const handleBackToShopping = () => {
    navigate("/");
  };

  const removeItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setcart(updatedCart);
  };

  const [count, setCount] = useState(1);

  const increaseCount = (itemId = null) => {
    if(itemId) {
    let cartItem = cart.filter(item => item?.id == itemId)[0];
    const itemIndex=cart.findIndex(i => i?.id == itemId)
    cart.splice(itemIndex, 1, {...cartItem, count: cartItem?.count+1});
    setcart(() =>[...cart]);
    }
   
  };

  const decreaseCount = (itemId = null) => {
      if(itemId) {
        let cartItem = cart.filter(item => item?.id == itemId)[0];
        const itemIndex=cart.findIndex(i => i?.id == itemId)
        if(cartItem.count>1){
        cart.splice(itemIndex, 1, {...cartItem, count: cartItem?.count-1});
        setcart(() =>[...cart]);
        }
        else{
        cart.splice(itemIndex, 1);
          setcart(()=>[...cart])
        }
        }
  };
  const calculateTotal = () => {
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.count;
    });

    setTotal(total);
  };

  useEffect(() => {
    calculateTotal()
  }, [cart])


  return (
    <>
    <Navbarfront/>
    <section className="h-100 h-custom" style={{ backgroundColor: "#ffff", maxHeight: "50%" }}>
      <MDBContainer className="h-100 py-5">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol>
            <MDBCard className="shopping-cart" style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-black">
                <MDBRow>
                  <MDBCol lg="7" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Your products
                    </MDBTypography>

                    {cart.map((item) => (
                      <div
                        className="d-flex align-items-center mb-5"
                        key={item.id}
                      >
                        <div className="flex-shrink-0">
                          <MDBCardImage
                            src={item.src}
                            fluid
                            style={{ width: "150px" }}
                            alt={item.name}
                          />
                        </div>

                        <div className="flex-grow-1 ms-3">
                          <a
                            href="#!"
                            className="float-end text-black"
                            onClick={() => removeItem(item.id)}
                          >
                            <MDBIcon fas icon="times" />
                          </a>
                          <MDBTypography tag="h5" className="text-primary">
                            {item.name}
                          </MDBTypography>
                          <MDBTypography tag="h6" style={{ color: "#9e9e9e" }}>
                            Color: {item.color}
                          </MDBTypography>

                          <div className="d-flex align-items-center">
                            <p className="fw-bold mb-0 me-5 pe-3">
                              {item.price}$
                            </p>

                            <div className="def-number-input number-input safari_only">
                              <button
                                style={{ border: "1px" }}
                                className="minus mx-2 "
                                onClick={() => decreaseCount(item.id)}
                              >
                                {" "}
                                -
                              </button>
                              <span>{item?.count} </span>
                              <button
                                className="plus"
                                style={{ border: "1px" }}
                                onClick={() => {
                                  console.log(item)
                                  increaseCount(item.id)}
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <MDBTypography tag="h5" className="fw-bold  mx-5">
                            Total:{item?.count}
                          </MDBTypography>
                          <MDBTypography
                            tag="h5"
                            style={{ width: "100px" }}
                            className="fw-bold mx-5 "
                          >
                            {(item.price * item?.count).toFixed(2)}$
                          </MDBTypography>
                        </div>
                      </div>
                    )
                    )}
                    {cart.length ? (<span
                            tag="h5"
                            style={{ width: "100%" }}
                            className="fw-bold mx-5 text-right"
                          >
                            Grand Total: {total?.toFixed(2)}$
                          </span>) : null}
                  </MDBCol>
                  <MDBCol lg="5" className="px-5 py-4">
                    <MDBTypography
                      tag="h3"
                      className="mb-5 pt-2 text-center fw-bold text-uppercase"
                    >
                      Payment
                    </MDBTypography>

                    <form className="mb-5">
                      <MDBInput
                        className="mb-5"
                        label="Card number"
                        type="text"
                        size="lg"
                        defaultValue="1234 5678 9012 3457"
                      />

                      <MDBInput
                        className="mb-5"
                        label="Name on card"
                        type="text"
                        size="lg"
                        defaultValue="John Smith"
                      />

                      <MDBRow>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Expiration"
                            type="text"
                            size="lg"
                            minLength="7"
                            maxLength="7"
                            defaultValue="01/22"
                            placeholder="MM/YYYY"
                          />
                        </MDBCol>
                        <MDBCol md="6" className="mb-5">
                          <MDBInput
                            className="mb-4"
                            label="Cvv"
                            type="text"
                            size="lg"
                            minLength="3"
                            maxLength="3"
                            placeholder="&#9679;&#9679;&#9679;"
                            defaultValue="&#9679;&#9679;&#9679;"
                          />
                        </MDBCol>
                      </MDBRow>

                      <p className="mb-5">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit
                        <a href="#!"> obcaecati sapiente</a>.
                      </p>

                      <MDBBtn block size="lg">
                        Buy now
                      </MDBBtn>
                      

                      <MDBTypography
                        tag="h5"
                        className="fw-bold mb-5"
                        style={{ position: "absolute", bottom: "0" }}
                      >
                        <a href="#!" onClick={handleBackToShopping}>
                          <MDBIcon fas icon="angle-left me-2" />
                          Back to shopping
                        </a>
                      </MDBTypography>
                    </form>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    </>
  );
}


