const mongoose = require('../mongose');
const bcrypt = require('bcrypt');


const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  name: { type: String, required: false },
  description: { type: String, required: false },
  price: { type: Number, required: false },
  amount: { type: Number, required: false },
  imageUrl: { type: String, required: false },
});

const userSchema = new mongoose.Schema({
  __v: { type: Number, select: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  country: { type: String },
  role: { type: String, required: true },
  lastLogin: { type: String, required: true },
  purchases : [purchaseSchema]
 // transactions: [{ type: Schema.Types.ObjectId, ref: 'transactions' }],
  //assets: [assetSchema],
});




// userSchema.pre('save', async function (next) {
//   this.
//   const hash = await bcrypt.hash(this.password, 10);
//   this.password = hash;
//   next();
// });

userSchema.methods.isValidPassword = async function (password) {
  const user = this;

  return await bcrypt.compare(password, user.password);
};

const User = mongoose.model('users', userSchema);

module.exports.User = User;
