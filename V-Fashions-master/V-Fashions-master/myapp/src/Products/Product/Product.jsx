import React from 'react'
import "./Product.scss"
import { hoodie1 } from '../../assets'


const Product = ({productt}) => {

  return (
<div className='product-card'>
  <div className="thumbnail">
     <img className="img" src={hoodie1}></img>
  </div>
  <div className="prod-details">
    <span className="name">OVER SIZED HOODIE</span>
    <span className="price">₹799</span>
  </div>
</div>
  

     
        
      
  )
}

export default Product
