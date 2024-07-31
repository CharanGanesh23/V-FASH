const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  title: String,
  price: Number,
  image: String,
  quantity: Number,
  description: String,
});

const CartItem = mongoose.model("CartItem", cartSchema);

module.exports = CartItem;
