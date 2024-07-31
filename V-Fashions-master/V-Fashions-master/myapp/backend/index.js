const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const DBConnect=require("./mongodb")
const CartItem=require("./models/cartModel")

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Replace with your actual connection string


// Schema and Model

// Routes
app.post('/api/cart', async (req, res) => {
  const {  title, price, image, quantity, description } = req.body;

  try {
    const newCartItem = new CartItem({ title, price, image, quantity, description });
    await newCartItem.save();
    res.status(201).send('Item added to cart');
  } catch (error) {
    res.status(400).send('Error adding item to cart');
    console.log(error.message)
  }
});

app.get("/api/v1/cartItems",async (req,res)=>{
   
    try {
        const items=await CartItem.find();
        console.log(items)
        res.status(200).json({"success":true,items})
        
    } catch (error) {
        res.status(500).send("Server Error");
        console.error(error.message);
        
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  DBConnect()
});
