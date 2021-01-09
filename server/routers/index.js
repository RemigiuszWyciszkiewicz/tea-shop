
const authorizationRouter = require('./authorization.route');
const userRouter = require('./user.router');
const productRouter = require('./product.router');

module.exports = {
  authorizationRouter: authorizationRouter,
  userRouter: userRouter,
  productRouter: productRouter,
};
