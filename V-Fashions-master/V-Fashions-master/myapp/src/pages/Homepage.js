import React, { useEffect,useState } from 'react'
import "./Homepage.scss"

import Banner from '../components/Banner'

import { useLoaderData,createBrowserRouter,Outlet,RouterProvider,ScrollRestoration } from 'react-router-dom'

import Products from '../Products/Products'
import Category from '../components/category/Category'



const Homepage = () => {
  

 

  return (
    <div>
      <Banner />
      <div className='main-content'>
        <div className='layout'>

          <Category />
          

        </div>
      </div>
     
      <Products />
      
      
      

    
      
      
    </div>

   
  )
}

export default Homepage