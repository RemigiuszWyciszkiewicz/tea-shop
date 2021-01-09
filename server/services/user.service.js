const User = require('../data-access/models').User;
const Product = require('../data-access/models').Product;

const getUser = async (userId) => {
  return await User.findOne({
    _id: userId,
  });
};


const appendPurchase = async (userId, productId,amount) => {
  const product =  await Product.findById(productId);
  await Product.updateOne({_id: product._id}, {amount:product.amount - amount });

 const user = await User.findById(userId);
 user.purchases.push({
  _id: product._id,
  name: product.name,
  description: product.description,
  price: product.price,
  imageUrl: product.imageUrl,
  amount: amount
 })

 user.save();

}

const getUserPurchases = async (userId) => {

  const user = await User.findById(userId);
  const purchases = user.purchases;

  return purchases;

}

const removePurchase = async (userId, productId) => {
  const user = await User.findById(userId);

  user.purchases.id(productId).remove();
  user.save();
}

module.exports = { getUser,appendPurchase,getUserPurchases,removePurchase};
