//modulos, multer, controladores
const express = require('express');
const router=express.Router();
const productscontroller=require('../controllers/productsController');
const Multer=require("../middlewares/MulterproductMiddlewares");
const validaciones=require('../middlewares/ProductMiddleware');


router.get('/',productscontroller.index);

router.get('/search', productscontroller.search);// cambie el search por results

router.get('/gender/:id', productscontroller.gender); 

router.get('/productDetail/:id',productscontroller.productDetail); 

router.get('/productCart',productscontroller.productCart);

router.get('/productRegister',productscontroller.productRegister);

router.post('/products',Multer,validaciones.validacion,productscontroller.Createproducts);

router.get('/productModify/:id',productscontroller.productModify);

router.post('/productEdit/:id',Multer,validaciones.validacion,productscontroller.modify); 

router.post('/delete/:id',productscontroller.destroy); 

router.get('/pago',productscontroller.pago); 


module.exports = router;