import React from 'react'
import Productcart from '../Products/Productcart'
import Footer from './Footer'
import All from '../Products/All'
import DarkVariantExample from './Mainhome'
import Navbarfront from './Navbar'




function Home() {
  return (
  

    <div className='home-container'>
      <Navbarfront/>
   
      
    
      <DarkVariantExample/>
  
      
      <img src='https://sslimages.shoppersstop.com/sys-master/root/h46/hda/30677181857822/best-of-bargain-web_bg-23.jpg' class="img-thumbnail" alt="Cinque Terre"/> 
      
        <Productcart/>

        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/kmargso/Baby/Medela_1500x300.jpg' class="img-thumbnail" alt="Cinque Terre"/> 
        <All/>

        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2022/ThemeStore/1500X300.jpg' class="img-thumbnail" alt="Cinque Terre"/>
       
        <Footer/>
      
    </div>
  )
}

export default Home

