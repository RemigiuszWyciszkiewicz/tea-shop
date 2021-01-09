const { Router } = require('express');

const userController = require('../controller').userController;
const router = Router();

router.post('/purchase/:userId', userController.addPurchase);
router.get('/getAllPurchase/:userId', userController.getAllUserPurchases);
router.put('/purchase/:userId', userController.removePurchase);
router.post('/tokenValidation/:userId', userController.tokenValidation);

module.exports = router;
