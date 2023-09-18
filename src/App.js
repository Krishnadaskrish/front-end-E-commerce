
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import { Route, Routes } from 'react-router';
import Login from './components/Login';
import Navbarfront from './components/Navbar';
import Reg from './components/Reg';
import Productcart from './Products/Productcart';
import {product} from './Products/Product';
import { MyContext } from './context/Context';
import All from './Products/All';
import  Cardfood  from './Products/Cardfood';
import Footer from './components/Footer';
import Toy from './Products/Cardtoy';
import Cloths from './Products/Cardcloth';
import Others from './Products/Others';
import Search from './components/Search';
import Displaycart from './components/Displaycart';
import { useState } from 'react';
import Cart from './components/Cart';






function App() {

  const[cart,setcart]=useState([])
  const[pro,setpro]=useState(product)

  

  
 
  return (
    <>
    
     <Navbarfront/>
     <MyContext.Provider value={{cart,setcart,pro}}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/log' element={<Login/>}/>
        <Route path='/reg' element={<Reg/>}/>
        <Route path ='/product' element={<Productcart/>}/>
        <Route path ='/All' element={<All/>}/>
        <Route path ='/card' element={<Cardfood/>}/>
        <Route path ='/toy' element={<Toy/>}/>
        <Route path ='/cloth' element={<Cloths/>}/>
        <Route path ='/others' element={<Others/>}/>
        <Route path ='/search' element={<Search/>}/>
        <Route path ='/displayProduct/:id' element={<Displaycart/>}/>
        <Route path ='/Cart' element={<Cart/>}/>
        
        
     

      </Routes>
      
      </MyContext.Provider>
      <Footer/>

   
     
    </>
  );
}

export default App;
