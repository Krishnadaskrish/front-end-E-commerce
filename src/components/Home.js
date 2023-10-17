import React from 'react'
import Productcart from '../Products/Productcart'
import Footer from './Footer'
import DarkVariantExample from './Mainhome'
import Navbarfront from './Navbar'
import Adspambers from './Adspambers'
import Card from 'react-bootstrap/Card';






function Home() {
  return (
  

    <div className='home-container'>
      <Navbarfront/>
   
      
    
      <DarkVariantExample/>
  
      
      <Card className="w-100" >
      <Card.Img src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/summer02_desktop_essentials_090523_01.jpg" alt="Card image" />
  
    </Card>
    
       
      
        <Productcart/>
        
        
        <Card className="w-100" >
      <Card.Img src="https://theayurvedaco.com/cdn/shop/articles/Thumbnail_769added-e5ef-41cb-aa04-43702d751e65_1024x1024.jpg?v=1668601569" alt="Card image" />
  
    </Card>
        
        
        
       
    

        <Adspambers/>
        

        <img src='https://images-eu.ssl-images-amazon.com/images/G/31/img2022/ThemeStore/1500X300.jpg' class="img-thumbnail" alt="Cinque Terre"/>
       
       
        <Footer/>
        <img src='https://cdn.fcglcdn.com/brainbees/banners/brandstrip1208-3-new-19-08-19.jpg' class="img-thumbnail" alt="Cinque Terre"/>
      
    </div>
  )
}

export default Home

