import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { MdOutlineStar } from "react-icons/md";
import "./Productt.scss";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/vfashSlice';
import { toast } from 'react-toastify';
import axios from 'axios';

const Productt = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);

  const Location = useLocation();
  useEffect(() => {
    setDetails(Location.state.data);
  }, [Location]);

  const handleAddToCart = async () => {
    const cartItem = {
      
      title: details.title,
      price: details.price,
      image: details.img,
      quantity: baseQty,
      description: details.description,
    };

    try {
      await axios.post('http://localhost:5000/api/cart', cartItem);
      dispatch(addToCart(cartItem));
      toast.success(`${details.title} is added`);
    } catch (error) {
      toast.error('Error adding item to cart');
    }
  };

  return (
    <div className="maincontent">
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-full md:w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.img}
            alt="productImg"
          />
        </div>
        <div className="w-full md:w-3/5 flex flex-col justify-center gap-20">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3">
              <p className="line-through font-base text-gray-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-gray-900">
                ${details.price}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-base">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 Customer review)</p>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div className="adding">
            <div className="w-full md:w-52 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="quantity">Quantity</p>
              <div className="buttons">
                <button 
                  onClick={() => setBaseQty(baseQty > 1 ? baseQty - 1 : 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{baseQty}</span>
                <button 
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white py-3 px-6 active:bg-gray-800"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productt;
