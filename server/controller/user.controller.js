const User = require('../data-access/models').User;
const UserService = require('../services/user.service');
const Ranking = require('../data-access/models').Ranking;
const Transaction = require('../data-access/models').Transaction;
const getFixedUser = require('../data-access/utils').getFixedUser;
var mongoose = require('mongoose');
const tokenValidation = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);
    const userRank = await Ranking.find({ _id: user._id }).select({ rank: 1 });
    res.send({ ...getFixedUser(user), userRank: userRank[0].rank });
    return next();
  } catch (error) {
    res.status(404).send(new ErrorResponse('tokenValidityError', error.message));
  }
};

const resetAccount = async (req, res, next) => {
  let userId;
  let user;
  try {
    userId = req.params.userId;
    user = await User.findByIdAndUpdate(userId, { usd: 50000, assets: [], transactions: [] }).exec();
  } catch (error) {
    console.log(error);
    res.send(error);
  }

  res.send(user);
  return next();
};

const addPurchase = async (req, res, next) => {
 const id = req.params.userId;
 const productId = req.body.productId;
 const productAmount = req.body.amount;
 try {
 UserService.appendPurchase(id,productId,productAmount)
 res.send('Product added to purchase list')
} catch (error) {
  console.log(error);
  res.send(error);
}
}


const getAllUserPurchases = async (req, res, next) => {
  const id = req.params.userId;
  try {
    const purchases = await UserService.getUserPurchases(id)
    res.send(purchases)
   } catch (error) {
     console.log(error);
     res.send(error);
   }
}


const removePurchase = async (req, res, next) => {

  const id = req.params.userId;
  const productId = req.body.productId;
  try {
 await UserService.removePurchase(id,productId)
    res.send('Purchase deleted')
   } catch (error) {
     console.log(error);
     res.send(error);
   }
}

module.exports = { resetAccount, tokenValidation,addPurchase,getAllUserPurchases, removePurchase };
