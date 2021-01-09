const mongoose = require('../mongose');

const productSchema = new mongoose.Schema({
  __v: { type: Number, select: false },
  id: mongoose.Types.ObjectId,
  name: { type: String, required: true },
  description: { type: String, required: false },
  price: { type: Number, required: true },
  amount: { type: Number, required: true },
  kcal: { type: Number, required: true },
  imageUrl: { type: String, required: false },
  weight: { type: String, required: false },
  category: { type: String, required: true },
});

const Product = mongoose.model('product', productSchema);

module.exports = Product;
