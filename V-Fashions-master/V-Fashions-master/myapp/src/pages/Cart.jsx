import React, { useEffect, useState } from "react";
import axios from "axios";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchCartData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/v1/cartItems");
        setCartData(response.data.items);
        console.log(response.data.items)
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    };

    fetchCartData();
  }, []);

  

  return (
    <div className="bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {cartData.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[11rem] object-contain"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-1">{item.description}</p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-900 font-bold">${item.price}</span>
                <span className="text-gray-600">Quantity: {item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
