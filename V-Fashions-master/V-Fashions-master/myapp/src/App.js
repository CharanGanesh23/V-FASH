import React from "react";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import {createBrowserRouter,Outlet,RouterProvider,ScrollRestoration}from "react-router-dom"
import Cart from "./pages/Cart";
import Category from "./components/category/Category";
import Products from "./Products/Products";
import "./App.scss"

import Productt from "./components/Productt";

const Layout =()=>{
   return(<div>
    <Header />
    <Outlet />

    
  
    <Footer />
   
  </div>
   );
};

const router=createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children:[
    {
      path:"/",
      element:<Homepage />,
      Loader:Products,
    },

    {
      path:"/cart",
      element:<Cart />
    },
    {
      path:"/Productt/:id",
      element:<Productt />
    },
  ],

},
]);
function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />

      
    

   
 
    </div>
  );
}
export default App;
