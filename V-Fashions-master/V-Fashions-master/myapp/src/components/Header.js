import React, { useState } from "react";
import { cartImg, logoDark, v, v1 } from "../assets";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Cart from "../pages/Cart";
import { useNavigate } from "react-router-dom";
import { useCart } from "../api/CartContext";

const Header = () => {
  const navigate = useNavigate();
  const { setCartData } = useCart();
  const productData = useSelector((state) => state.vReducer.productData);
  const handleCartClick = () => {
    setCartData(productData);
    navigate("/cart");
  };

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <div className="pl--300">
          <img className="w-15 h-20 pl--3" src={v1} alt="logoDark"></img>
        </div>

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li
              className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 "
              href="Homepage.js"
            >
              Home
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              {" "}
              Pages
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>

          <Link to="/cart">
            <div className="relative">
              <label htmlFor="cartIcon" onClick={handleCartClick}>
                <img
                  src={cartImg}
                  className="w-6"
                  
                ></img>
                <span
                  id="cartIcon"
                  className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font font-titleFont"
                >
                  {productData.length}
                </span>
              </label>
            </div>
          </Link>

          <img
            className="w-8 h-8 rounded-full"
            src={
              "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="userLogo"
          />
          <div className="w-25 "></div>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoclose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Header;
