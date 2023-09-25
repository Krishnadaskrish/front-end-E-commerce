// import React, { useContext, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { MyContext } from '../../context/Context';

// export default function AdminEdit() {
//     const { id } = useParams();
//     const { pro, setpro } = useContext(MyContext);
//     const viewproduct = pro.find((item) => item.id === parseInt(id));
//     const [name, setName] = useState(viewproduct.name || ''); 
//     const [type, setType] = useState(viewproduct.type || ''); 
//     const [price, setPrice] = useState(viewproduct.price || ''); 
//     const [offer, setoffer] = useState(viewproduct.price2 || '');
//     const [description, setDescription] = useState(viewproduct.description || '');   
//     const [image, setImage] = useState(viewproduct.src); 

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
        
//         const updatedProduct = {
//             id: parseInt(id), 
//             name,
//             type,
//             price,
//             offer,
//             description,
//             image,
//         };

//         const updatedProducts = pro.map((product) =>
//             product.id === updatedProduct.id ? updatedProduct : product
//         ); 

//         setpro(updatedProducts);

//         alert("Item edited successfully");
        
//         navigate('/admin');
//     }

//     return (
//         <section>
//             <div className="container mt-5">
//                 <div className="row">
//                     <div className="col-md-6">
//                         <h2 className="text-center">Edit Product</h2>
//                         <form onSubmit={handleSubmit} encType="multipart/form-data">
//                             <label htmlFor="Name">Name</label>
//                             <input type="text" name="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />

//                             <label htmlFor="Category">Category</label>
//                             <input type="text" name="Category" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />

//                             <label htmlFor="Price">Price</label>
//                             <input type="text" name="Price" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
//                             <label htmlFor="Price2">offer</label>
//                             <input type="text" name="Price2" className="form-control" value={offer} onChange={(e) => setoffer(e.target.value)} />

//                             <label htmlFor="Description">Description</label>
//                             <input type="text" name="Description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />

//                             <label htmlFor="src">Image</label>
//                             <input type="text" name="src" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />

//                             <button type="submit" className="btn btn-black mt-4">Submit</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }



import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyContext } from '../../context/Context';


function AdminEdit() {
  const { pro,setpro } = useContext(MyContext);
  const { id } = useParams();
  const navigate = useNavigate();

 
  const editProduct = pro.find((product) => product.id === parseInt(id)) || {
    id: '',
    name: '',
    image: '',
    type: '',
    price: '',
    offerPrice: ''
  };

  const [ids] = useState(editProduct.id.toString());
  const [name, setName] = useState(editProduct.name);
  const [image, setImage] = useState(editProduct.src);
  const [type, setType] = useState(editProduct.type);
  const [price, setPrice] = useState(editProduct.price.toString());
  const [offer, setOffer] = useState(editProduct.price2.toString());

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProducts = {
      id: parseInt(ids),
      name,
      image,
      type,
      price: parseFloat(price),
      offerPrice: parseFloat(offer),
    };

    const updatedProductList = pro.map((item) =>
      item.id === updatedProducts.id ? updatedProducts : item
    );

    setpro(updatedProductList);

    navigate('/admin');
  };

  return (
    <div className='mainEditDiv container'>
      <h1 className='editH1'>Edit Products</h1>
      <label htmlFor="name" className='labelEdit'>Name</label><br />
      <input
      className='inputEdit'
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      /><br />
      <label htmlFor="image" className='labelEdit'>Image</label><br />
      <input
      className='inputEdit'
        type="text"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      /><br />
      <label htmlFor="type" className='labelEdit'>Type</label><br />
      <input
      className='inputEdit'
        type="text"
        id="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
        required
      /><br />
      <label htmlFor="price" className='labelEdit'>Price</label><br />
      <input
      className='inputEdit'
        type="text"
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      /><br />
      <label htmlFor="offer" className='labelEdit'>Offer Price</label><br />
      <input
      className='inputEdit'
        type="text"
        id="offer"
        value={offer}
        onChange={(e) => setOffer(e.target.value)}
      /><br /><br />
      <button onClick={handleSubmit}>Edit</button>
    </div>
  );
}

export default AdminEdit;