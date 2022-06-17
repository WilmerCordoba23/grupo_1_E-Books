const express = require('express');
const router=express.Router();

const productscontroller=require('../controllers/productsController');

router.get('/',productscontroller.index);
router.get('/productDetail',productscontroller.productDetail);
router.get('/productCart',productscontroller.productCart);
router.get('/productRegister',productscontroller.productRegister);
router.get('/productModify',productscontroller.productModify);


module.exports = router;