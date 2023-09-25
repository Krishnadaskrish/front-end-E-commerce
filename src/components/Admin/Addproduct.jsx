import React, { useContext, useState } from 'react';
import { MyContext } from '../../context/Context';
import { useNavigate } from 'react-router';


const AddProduct = () => {
  const {pro,setpro}=useContext(MyContext)
  const [ quantity]=useState(1)
 const handleInputChange = (product) => {
    product.preventDefault();
    const productname = product.target.name.value;
    const productimage = product.target.src.value;
    const productprice1 = product.target.price.value;
    const productprice2 = product.target.price2.value;
    const productdescription = product.target.description.value;
    
  
  setpro([...pro,{ name:productname ,src:productimage,price:productprice1,price2:productprice2,Discription:productdescription,id:pro.length+3,quantity:parseInt(quantity)}])
 product.target.reset()

  console.log(pro);

 }  
 const nav=useNavigate()

  return (
    <>
    
    
    <div className="container" >
      <h1>Add Product</h1>
      <form onSubmit={handleInputChange}>

        
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name"  required />
        </div>
      
        
        
    <br></br>


    
        <div className="mb-3">
          <label htmlFor="src" className="form-label">Image:</label>
          <input type="text" className="form-control" id="src"  required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input type="text" className="form-control" id="price"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="price2" className="form-label">Price 2:</label>
          <input type="text" className="form-control" id="price2"   required />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <textarea className="form-control" id="description"   required />
        </div>
        <button  className="btn btn-primary"  >Add Product</button>
        <br/>
        <br/>
        <button  className="btn btn-success"  onClick={()=>nav('/admin')} >Back To All Product</button>
      </form>
    </div>
    </>
  );
};

export default AddProduct;