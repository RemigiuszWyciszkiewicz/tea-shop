const productService = require('../services').productService;

const createProduct = async (req, res, next) => {
  try {
    const product = await productService.saveProduct(req.body);

    res.send(product);
  } catch (error) {
    console.log(error);
    res.status(404).send('createProduct error');
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    //const ranking = await Ranking.find({}).sort('rank');
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(404).send('getAllProducts error');
  }
};

const deleteProduct = async (req, res, next) => {
  let id;
  let products;
  try {
    id = req.params.id;
    if (id) {
      products = await productService.deleteProduct(id);
    } else {
      res.status(404).send('deleteProduct error - no id');
    }

    res.send('usunięto');
  } catch (error) {
    console.log(error);
    res.status(404).send('deleteProduct error');
  }
};

const updateProduct = async (req, res, next) => {
  try {
    const entity = await productService.updateProduct(req.params.id, req.body);
    res.send(entity);
  } catch (error) {
    res.status(404).send('getAllProducts error');
  }
};

const getProduct = async (req, res, next) => {
  try {
    const entity = await productService.getProduct(req.params.id);
    res.send(entity);
  } catch (error) {
    res.status(404).send('getProduct error');
  }
}

module.exports = { createProduct, getAllProducts, deleteProduct, updateProduct,getProduct };
