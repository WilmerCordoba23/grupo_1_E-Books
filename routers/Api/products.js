//modulos, multer, controladores
const express = require('express');
const router=express.Router();
const productsController=require('../../controllers/Api/productsController');

//rutas
router.get('/products',productsController.products);
router.get('/products/:id',productsController.productsdetail);




module.exports = router;