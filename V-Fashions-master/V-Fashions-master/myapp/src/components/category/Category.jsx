import React from 'react'
import "./Category.scss"
import "../../Products/Products"
import Products from '../../Products/Products'
import Card from '../Card/Card'
import { oversized,oversized1,floral,floral1,denim,denim1,corgo,corgo1 } from '../../assets'


const Category = () => {




  const data = [
    {
      _id:1,
      img:oversized,
      img2:oversized1,
      title:"OVER-SIZED T-SHIRT",
      isNew:true,
      oldPrice: 1299,
      price: 799,
      description:"terhfe etefmwegf uefkuebfkdshf ujegf",
    },
    {
      _id:2,
      img:floral,
      img2:floral1,
      title:"PRINTED HALF SHIRT",
      isNew:true,
      oldPrice: 1299,
      price: 799,
      description:"sahgu3g  yd  wjdbqwhygfrjw",
    },
    {
      _id:3,
      img:denim,
      img2:denim1,
      title:"DENIM JACKET",
      isNew:true,
      oldPrice: 1299,
      price: 799,
      description:"sahgu3g  yd  wjdbqwhygfrefWSw",

    },
    {
      _id:4,
      img:corgo,
      img2:corgo1,
      title:"CORGO PANT",
      isNew:true,
      oldPrice: 1299,
      price: 799,
      description:"sahgu3g  yd EFFASQ3 wjdbqwhygfrjw",
    },
  ]






  return (


    <div className="ftproducts">
    <div className="top">
      <h1 className='sec-heading'>LATEST TRENDS</h1>
      <p>

      With our new men's collection, we're dedicated to helping you express your style, elevate your fashion game, and create unforgettable moments. Explore our latest arrivals and stay on top of the fashion game with our premium selection. Shop now to experience the perfect fusion of style, comfort, and quality.
 
      </p>
    </div>
    <div className="bottom">
        {data.map((item) => 
          <div className="ftcard"><Card item={item} key={item._id} /></div>
        )}
    </div>
  </div>


    
    
  )
}

export default Category