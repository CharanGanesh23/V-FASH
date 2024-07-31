import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./api/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CartProvider>
);
