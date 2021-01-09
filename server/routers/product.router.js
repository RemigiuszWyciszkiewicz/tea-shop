const { Router } = require('express');
const productController = require('../controller').productController;
const router = Router();

router.post('/create', productController.createProduct);
router.get('/get/:id', productController.getProduct);
router.get('/getAll', productController.getAllProducts);
router.delete('/delete/:id', productController.deleteProduct);
router.put('/update/:id', productController.updateProduct);

module.exports = router;
