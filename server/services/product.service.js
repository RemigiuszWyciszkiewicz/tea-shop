const Product = require('../data-access/models').Product;

const saveProduct = async (product) => {
const newProduct = await Product.create(product);
return newProduct;
};

const getAllProducts = async () => {
const results = await Product.find({}).exec();
return results;
};

const deleteProduct = async (id) => {
const results = await Product.findByIdAndDelete(id);
return results;
};

const updateProduct = async(id,body) => {

 const document = await Product.findByIdAndUpdate(id,body).exec();
 return document;
}

const getProduct = async (id) => {
const product = await Product.findById(id);
return product;

}

module.exports = { saveProduct,getAllProducts,deleteProduct,updateProduct,getProduct };
