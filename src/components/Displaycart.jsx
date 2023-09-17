import React,{useContext,useState} from "react";
import { useNavigate,useParams } from "react-router";
import { MyContext } from "../context/Context";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";


  export default function Displaycart(){
    const {id}=useParams()
    const { product, cart, setcart }=useContext(MyContext);
    const[count,setcount]=useState(1);
    const navigate=useNavigate();
  const viewProduct=product.filter((product)=>product.id===parseInt(id));

   if(!viewProduct){
    //product is found
    return <h1 style={{ textAlign: "center" }}>Product not found</h1>;}

    const incresecount = () => {
        setcount(count + 1);
      };
    
      const decresecount = () => {
        if (count > 1) {
            setcount(count - 1);
        }
      };
    
   
    const handleAddToCart=()=>{
  console.log(cart);
      let cartItem = cart.filter(item => item?.id == id)[0];
      const itemIndex=cart.findIndex(i => i?.id == id)
      console.log(cartItem, itemIndex);
      if(cartItem) {
      cart.splice(itemIndex, 1, {...cartItem, count: cartItem?.count + count});
      } else {
      cart.push({...viewProduct[0], count: viewProduct[0]?.count + count});
      }
      setcart(() =>[...cart]);

        alert('product successfully added to the cart')
        navigate('/Cart')

        };
        const handleBuyNow = () => {
            navigate('/Cart');
      };

          
        return (
    <div className="container mt-5">
           {viewProduct.map((item) => (
            
      <MDBRow key={item.id}>
        <MDBCol md="6">
            <MDBCard>
            <MDBCardImage src={item.src} alt={viewProduct.name} />
          </MDBCard>
        </MDBCol>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>{item.name}</MDBCardTitle>
              <MDBCardText>{item.description}</MDBCardText>
              <MDBCardText>
                <strong>Price:</strong> ₹{item.price}
              </MDBCardText>
              <div className="d-flex align-items-center">
                <MDBBtn color="primary" className="me-2" onClick={decresecount}>
                  -
                </MDBBtn>
                <span className="me-2">{count}</span>
                <MDBBtn color="primary" onClick={incresecount}>
                +
                </MDBBtn>
              </div>
              <p className="mt-3">
                <strong>Total:</strong> ₹{item.price*count}
              </p>

              <MDBBtn className="mx-2" color="primary" onClick={handleAddToCart}>
                Add to Cart
              </MDBBtn>
              <MDBBtn color="success" onClick={handleBuyNow}>
                Buy Now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          
        </MDBCol>
      </MDBRow>
           ))}
    </div>
  );

        
        


        




    } 







  
  