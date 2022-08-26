const express = require('express');
const router=express.Router();
const multer=require('multer');
const path = require('path');
const productscontroller=require('../controllers/productsController');
//const adminMiddleware=require('../middlewares/adminMiddleware'); //para que solo los administradores puedan acceder a las rutas

const storage = multer.diskStorage({ 
	destination: function (req, file, cb) { 
	   cb(null, './public/images/products'); 
	}, 
	filename: function (req, file, cb) { 
        console.log(file)
	   cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`);  } 
  })

  const uploadFile = multer({ storage });


router.get('/',productscontroller.index);

router.get('/search', productscontroller.search);// cambie el search por results

router.get('/gender/:id', productscontroller.gender); 

router.get('/productDetail/:id',productscontroller.productDetail); 

//router.get('/productCart',productscontroller.productCart);

router.get('/productRegister',/*adminMiddleware,*/productscontroller.productRegister);

router.post('/products',uploadFile.single('image'),productscontroller.Createproducts);

router.get('/productModify/:id',/*adminMiddleware,*/productscontroller.productModify);

router.post('/productEdit/:id',/*adminMiddleware,*/ uploadFile.single('image'),productscontroller.modify); 

router.post('/delete/:id',/*adminMiddleware,*/ productscontroller.destroy); 


module.exports = router;