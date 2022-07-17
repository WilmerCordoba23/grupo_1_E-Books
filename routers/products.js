const express = require('express');
const router=express.Router();
const productscontroller=require('../controllers/productsController');
const fs=require('fs');

router.get('/',productscontroller.index);
router.get('/productDetail/:id',productscontroller.productDetail);
router.get('/productCart',productscontroller.productCart);
router.get('/productRegister',productscontroller.productRegister);
router.get('/productModify',productscontroller.productModify);


module.exports = router;