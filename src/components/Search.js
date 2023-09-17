import React from 'react'
import { MDBBtn,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
    MDBCard,
    MDBCol,
    MDBRow


} from 'mdb-react-ui-kit';

import { useNavigate } from 'react-router-dom';
import { product } from '../Products/Product';



const Search = ({searchTerm}) => {
    const ab = useNavigate();
    
  return (
    <>
    
            {searchTerm ? (
  <div className="container mx-5">
    <MDBRow>
      {product &&
  product.filter((val) => {
        if (searchTerm === "") {
          return true; // Return true to include all items when the search term is empty
        } else if (
          val.name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return true; // Return true to include items that match the search term
        }
        return false; // Return false to exclude items that don't match the search term
      }).map((val) => (
        <MDBCol md="4" key={val.id}>
          <MDBCard className="mt-3">
            <MDBCardImage src={val.src} position="top" alt="..." />
            <MDBCardBody>
              <MDBCardTitle>{val.name} </MDBCardTitle>
              <MDBCardTitle>₹{val.price} </MDBCardTitle>
              <MDBBtn  onClick={()=>ab(`/displayProduct/${val.id}`)}>View</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      ))}
    </MDBRow>
  </div>
) : (
  ""
)}
          
      
    
    </>
  )
}

export default Search
